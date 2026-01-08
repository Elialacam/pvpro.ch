#!/bin/bash

###############################################################################
# Automated Tracking Setup for Solarheim.ch
###############################################################################
#
# This script automates the complete tracking setup:
# 1. Creates GA4 property
# 2. Creates GTM container
# 3. Configures GTM tags
# 4. Updates environment variables
# 5. Deploys to Vercel
#
# Prerequisites:
# - Google Cloud credentials configured
# - Vercel CLI installed and logged in
# - Node.js installed
#
# Usage: ./setup-tracking.sh
#
###############################################################################

set -e  # Exit on error

echo "🚀 Starting Automated Tracking Setup for Solarheim.ch"
echo "======================================================="
echo ""

DOMAIN="solarheim.ch"
BUSINESS_NAME="Solarheim"
SITE_DIR="/Users/claudiocronin/websites/sites/solarheim.ch"
TRACKING_SCRIPTS="/Users/claudiocronin/websites/.claude/agents/5b-tracking-setup-agent-files/tracking-setup-agent/scripts"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check prerequisites
echo "📋 Checking prerequisites..."
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}✗ Node.js not found${NC}"
    echo "  Install from: https://nodejs.org/"
    exit 1
fi
echo -e "${GREEN}✓ Node.js installed${NC}"

# Check Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}⚠ Vercel CLI not found${NC}"
    echo "  Installing Vercel CLI..."
    npm install -g vercel
fi
echo -e "${GREEN}✓ Vercel CLI available${NC}"

# Check Google Cloud credentials
if [ ! -f "/Users/claudiocronin/websites/credentials.json" ]; then
    echo -e "${YELLOW}⚠ Google Cloud credentials not found${NC}"
    echo "  Please set up credentials at: /Users/claudiocronin/websites/credentials.json"
    echo "  Skipping automated GA4/GTM creation..."
    SKIP_AUTOMATED=true
else
    echo -e "${GREEN}✓ Google Cloud credentials found${NC}"
    SKIP_AUTOMATED=false
fi

echo ""
echo "======================================================="
echo ""

# Step 1: Create GA4 Property
if [ "$SKIP_AUTOMATED" = false ]; then
    echo "📊 Step 1: Creating GA4 Property..."
    echo ""

    if [ -f "$TRACKING_SCRIPTS/create-ga4-property.js" ]; then
        GA4_OUTPUT=$(node "$TRACKING_SCRIPTS/create-ga4-property.js" \
            --domain="$DOMAIN" \
            --business="$BUSINESS_NAME" 2>&1)

        if echo "$GA4_OUTPUT" | grep -q "G-"; then
            GA4_ID=$(echo "$GA4_OUTPUT" | grep -oE "G-[A-Z0-9]+")
            echo -e "${GREEN}✓ GA4 Property Created: $GA4_ID${NC}"
        else
            echo -e "${YELLOW}⚠ Could not create GA4 property automatically${NC}"
            echo "  Please create manually: https://analytics.google.com/"
            read -p "Enter GA4 Measurement ID (G-XXXXXXXXXX): " GA4_ID
        fi
    else
        echo -e "${YELLOW}⚠ GA4 creation script not found${NC}"
        read -p "Enter GA4 Measurement ID (G-XXXXXXXXXX): " GA4_ID
    fi
else
    read -p "Enter GA4 Measurement ID (G-XXXXXXXXXX): " GA4_ID
fi

echo ""

# Step 2: Create GTM Container
if [ "$SKIP_AUTOMATED" = false ]; then
    echo "📦 Step 2: Creating GTM Container..."
    echo ""

    # Check if GTM setup script exists
    if [ -f "/Users/claudiocronin/websites/orchestrator-dashboard/scripts/setup-gtm-solarheim.js" ]; then
        GTM_OUTPUT=$(node "/Users/claudiocronin/websites/orchestrator-dashboard/scripts/setup-gtm-solarheim.js" 2>&1)

        if echo "$GTM_OUTPUT" | grep -q "GTM-"; then
            GTM_ID=$(echo "$GTM_OUTPUT" | grep -oE "GTM-[A-Z0-9]+")
            echo -e "${GREEN}✓ GTM Container Created: $GTM_ID${NC}"
        else
            echo -e "${YELLOW}⚠ Could not create GTM container automatically${NC}"
            echo "  Please create manually: https://tagmanager.google.com/"
            read -p "Enter GTM Container ID (GTM-XXXXXXX): " GTM_ID
        fi
    else
        echo -e "${YELLOW}⚠ GTM creation script not found${NC}"
        read -p "Enter GTM Container ID (GTM-XXXXXXX): " GTM_ID
    fi
else
    read -p "Enter GTM Container ID (GTM-XXXXXXX): " GTM_ID
fi

echo ""

# Step 3: Update .env.local
echo "📝 Step 3: Updating environment variables..."
echo ""

cd "$SITE_DIR"

# Backup existing .env.local
if [ -f ".env.local" ]; then
    cp .env.local .env.local.backup
    echo -e "${GREEN}✓ Backed up .env.local${NC}"
fi

# Update or add GA4 and GTM IDs
if grep -q "NEXT_PUBLIC_GA_ID" .env.local; then
    sed -i.tmp "s/NEXT_PUBLIC_GA_ID=.*/NEXT_PUBLIC_GA_ID=$GA4_ID/" .env.local
else
    echo "NEXT_PUBLIC_GA_ID=$GA4_ID" >> .env.local
fi

if grep -q "NEXT_PUBLIC_GTM_ID" .env.local; then
    sed -i.tmp "s/NEXT_PUBLIC_GTM_ID=.*/NEXT_PUBLIC_GTM_ID=$GTM_ID/" .env.local
else
    echo "NEXT_PUBLIC_GTM_ID=$GTM_ID" >> .env.local
fi

rm -f .env.local.tmp

echo -e "${GREEN}✓ Updated .env.local${NC}"
echo "  GA4_ID: $GA4_ID"
echo "  GTM_ID: $GTM_ID"

echo ""

# Step 4: Deploy to Vercel
echo "🚀 Step 4: Deploying to Vercel..."
echo ""

read -p "Deploy to Vercel now? (y/n): " DEPLOY_NOW

if [ "$DEPLOY_NOW" = "y" ] || [ "$DEPLOY_NOW" = "Y" ]; then
    echo "Deploying to production..."

    # Add environment variables to Vercel
    echo "$GA4_ID" | vercel env add NEXT_PUBLIC_GA_ID production
    echo "$GTM_ID" | vercel env add NEXT_PUBLIC_GTM_ID production

    # Deploy
    vercel --prod

    echo -e "${GREEN}✓ Deployed to production${NC}"
else
    echo -e "${YELLOW}⚠ Skipped deployment${NC}"
    echo "  To deploy manually:"
    echo "  1. cd $SITE_DIR"
    echo "  2. vercel env add NEXT_PUBLIC_GA_ID production"
    echo "  3. vercel env add NEXT_PUBLIC_GTM_ID production"
    echo "  4. vercel --prod"
fi

echo ""

# Step 5: Test Setup
echo "✅ Step 5: Testing Setup..."
echo ""

read -p "Run tracking tests? (y/n): " RUN_TESTS

if [ "$RUN_TESTS" = "y" ] || [ "$RUN_TESTS" = "Y" ]; then
    echo "Running tests..."
    npx tsx test-tracking.ts
else
    echo -e "${YELLOW}⚠ Skipped tests${NC}"
    echo "  To test manually: npx tsx test-tracking.ts"
fi

echo ""
echo "======================================================="
echo "🎉 Setup Complete!"
echo "======================================================="
echo ""
echo "Next Steps:"
echo "1. Go to https://tagmanager.google.com/"
echo "2. Find container: $GTM_ID"
echo "3. Click 'Submit' to publish"
echo "4. Test on: https://solarheim.ch"
echo "5. Verify in GA4 Realtime: https://analytics.google.com/"
echo ""
echo "Documentation: $SITE_DIR/TRACKING_SETUP_GUIDE.md"
echo ""
