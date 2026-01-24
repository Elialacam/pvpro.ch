# Complete Tracking Setup Guide for PVPro.ch

## Overview
This guide will help you complete the conversion tracking setup for pvpro.ch using Google Tag Manager (GTM) and Google Analytics 4 (GA4).

## Current Status

### ✅ IMPLEMENTED
1. **Analytics Component** - GA4 and GTM scripts in `/components/Analytics.tsx`
2. **Comprehensive Tracking Library** - `/lib/analytics.ts` with all event tracking
3. **Multi-Step Form Tracking** - Tracks all 4 steps, start, completion, and abandonment
4. **Scroll Depth Tracking** - Tracks 25%, 50%, 75%, 100% scroll milestones
5. **Thank You Page Conversion Pixel** - Fires conversion events on `/danke`
6. **Enhanced Ecommerce** - Checkout funnel tracking for form steps
7. **Environment Variables** - Configured in `.env.local`

### ⚠️ REQUIRES MANUAL SETUP
1. **Create GA4 Property** - Get G-XXXXXXXXXX measurement ID
2. **Create GTM Container** - Get GTM-XXXXXXX container ID
3. **Configure GTM Tags** - Set up conversion tracking tags
4. **Add to Vercel** - Add env vars to production

---

## Step 1: Create Google Analytics 4 Property

### Option A: Automated (Recommended)
```bash
# If you have Google Cloud credentials set up
cd /Users/claudiocronin/websites
node .claude/agents/5b-tracking-setup-agent-files/tracking-setup-agent/scripts/create-ga4-property.js \
  --domain="pvpro.ch" \
  --business="PVPro"
```

### Option B: Manual
1. Go to https://analytics.google.com/
2. Click "Admin" (bottom left)
3. Click "Create Property"
4. Enter:
   - Property name: `PVPro.ch`
   - Time zone: `Switzerland (Zurich)`
   - Currency: `Swiss Franc (CHF)`
5. Click "Next" and complete setup
6. Copy the **Measurement ID** (starts with `G-`)

### Update Environment Variables
```bash
# Update .env.local
NEXT_PUBLIC_GA_ID=G-YOUR_MEASUREMENT_ID
```

---

## Step 2: Create Google Tag Manager Container

### Option A: Import Pre-Configured Container

We've created a GTM container template at `/GTM_IMPORT_JSON.json` with all tags pre-configured.

1. Go to https://tagmanager.google.com/
2. Click "Create Account" (if needed)
3. Enter:
   - Account Name: `PVPro`
   - Container Name: `pvpro.ch`
   - Target Platform: `Web`
4. Click "Create"
5. Go to "Admin" → "Import Container"
6. Select `/Users/claudiocronin/websites/sites/pvpro.ch/GTM_IMPORT_JSON.json`
7. Choose "Merge" and "Overwrite"
8. Click "Confirm"

### Update Container with Your GA4 ID
1. In GTM, go to "Variables"
2. Find "GA4 Measurement ID"
3. Update value to your actual `G-XXXXXXXXXX`

### Option B: Manual GTM Setup

If import doesn't work, create these manually:

#### Variables
1. **GA4 Measurement ID** (Constant)
   - Type: Constant
   - Value: `G-YOUR_MEASUREMENT_ID`

2. **dataLayer Variables** (for each):
   - `dlv - event` → Variable Type: Data Layer Variable, Name: `event`
   - `dlv - formName` → Name: `formName`
   - `dlv - formStep` → Name: `formStep`
   - `dlv - formStepName` → Name: `formStepName`
   - `dlv - scrollDepth` → Name: `scrollDepth`
   - `dlv - value` → Name: `value`
   - `dlv - conversionType` → Name: `conversionType`

#### Triggers
1. **Form Start**
   - Type: Custom Event
   - Event name: `form_interaction`
   - Fire when: `formAction` equals `started`

2. **Form Step Completed**
   - Type: Custom Event
   - Event name: `form_interaction`
   - Fire when: `formAction` equals `step_completed`

3. **Form Submission**
   - Type: Custom Event
   - Event name: `form_submission`

4. **Scroll Tracking**
   - Type: Custom Event
   - Event name: `scroll_tracking`

5. **Conversion Page View**
   - Type: Custom Event
   - Event name: `conversion_page_view`

6. **Begin Checkout**
   - Type: Custom Event
   - Event name: `begin_checkout`

7. **Checkout Progress**
   - Type: Custom Event
   - Event name: `checkout_progress`

8. **Purchase**
   - Type: Custom Event
   - Event name: `purchase`

#### Tags

**1. GA4 Configuration Tag**
- Type: Google Analytics: GA4 Configuration
- Measurement ID: `{{GA4 Measurement ID}}`
- Trigger: All Pages

**2. GA4 Event - Form Start**
- Type: Google Analytics: GA4 Event
- Configuration Tag: `{{GA4 Configuration}}`
- Event Name: `form_start`
- Event Parameters:
  - `form_name`: `{{dlv - formName}}`
  - `value`: `0.1`
- Trigger: Form Start

**3. GA4 Event - Form Step**
- Type: Google Analytics: GA4 Event
- Event Name: `form_step_completed`
- Event Parameters:
  - `form_name`: `{{dlv - formName}}`
  - `form_step`: `{{dlv - formStep}}`
  - `step_name`: `{{dlv - formStepName}}`
  - `value`: `{{dlv - value}}`
- Trigger: Form Step Completed

**4. GA4 Event - Form Submission**
- Type: Google Analytics: GA4 Event
- Event Name: `generate_lead`
- Event Parameters:
  - `form_name`: `{{dlv - formName}}`
  - `value`: `50.0`
  - `currency`: `CHF`
- Trigger: Form Submission

**5. GA4 Event - Scroll Depth**
- Type: Google Analytics: GA4 Event
- Event Name: `scroll_{{dlv - scrollDepth}}`
- Event Parameters:
  - `scroll_depth`: `{{dlv - scrollDepth}}`
  - `engagement_type`: `scroll`
- Trigger: Scroll Tracking

**6. GA4 Event - Begin Checkout**
- Type: Google Analytics: GA4 Event
- Event Name: `begin_checkout`
- Trigger: Begin Checkout

**7. GA4 Event - Checkout Progress**
- Type: Google Analytics: GA4 Event
- Event Name: `checkout_progress`
- Trigger: Checkout Progress

**8. GA4 Event - Purchase (Conversion)**
- Type: Google Analytics: GA4 Event
- Event Name: `purchase`
- Event Parameters:
  - `transaction_id`: `{{dlv - transaction_id}}`
  - `value`: `50.0`
  - `currency`: `CHF`
- Trigger: Purchase

### Publish Container
1. Click "Submit" (top right)
2. Add Version Name: "Initial Setup - Conversion Tracking"
3. Click "Publish"
4. Copy the **GTM Container ID** (GTM-XXXXXXX)

### Update Environment Variables
```bash
# Update .env.local
NEXT_PUBLIC_GTM_ID=GTM-YOUR_CONTAINER_ID
```

---

## Step 3: Add Environment Variables to Vercel

### Via Vercel CLI
```bash
cd /Users/claudiocronin/websites/sites/pvpro.ch

# Add GA4 ID
vercel env add NEXT_PUBLIC_GA_ID production
# When prompted, paste: G-YOUR_MEASUREMENT_ID

# Add GTM ID
vercel env add NEXT_PUBLIC_GTM_ID production
# When prompted, paste: GTM-YOUR_CONTAINER_ID

# Redeploy to apply changes
vercel --prod
```

### Via Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select `pvpro.ch` project
3. Go to "Settings" → "Environment Variables"
4. Add:
   - `NEXT_PUBLIC_GA_ID` = `G-YOUR_MEASUREMENT_ID`
   - `NEXT_PUBLIC_GTM_ID` = `GTM-YOUR_CONTAINER_ID`
5. Redeploy the project

---

## Step 4: Verify Tracking Setup

### Local Testing
```bash
cd /Users/claudiocronin/websites/sites/pvpro.ch
npm run dev
```

1. Open http://localhost:3000
2. Open Browser DevTools → Console
3. You should see: `📊 Analytics: Not loaded (development mode)`
4. Check Network tab for GTM/GA requests (won't fire in dev)

### Production Testing

#### A. Test GA4
1. Go to https://analytics.google.com/
2. Select your property
3. Go to "Reports" → "Realtime"
4. Open https://pvpro.ch in another tab
5. Verify you appear in Realtime report

#### B. Test GTM with Preview Mode
1. Go to https://tagmanager.google.com/
2. Select your container
3. Click "Preview" (top right)
4. Enter: `https://pvpro.ch`
5. Click "Connect"
6. Test form interactions and verify tags fire

#### C. Test Conversion Tracking
1. Fill out the form: https://pvpro.ch/#formular
2. Complete all 4 steps
3. Submit the form
4. You should land on `/danke`
5. Check DevTools Console for: `✅ Conversion tracking fired on thank you page`
6. In GTM Preview, verify:
   - `form_interaction` events (x4 for each step)
   - `form_submission` event
   - `conversion_page_view` event
   - `purchase` event

---

## Step 5: Set Up Google Ads Conversion Tracking (Optional)

If you're running Google Ads campaigns:

1. Go to Google Ads → "Tools & Settings" → "Conversions"
2. Click "New Conversion Action"
3. Choose "Website"
4. Set up conversion for:
   - **Primary Goal**: Form Submission (`generate_lead` event)
   - Value: 50 CHF
   - Category: Lead
5. Choose "Use Google Tag Manager"
6. Import the conversion to GTM
7. Update `/app/danke/page.tsx` line 21 with conversion ID/label

---

## Tracking Events Summary

### Events Being Tracked

| Event | When Fired | Value | Notes |
|-------|-----------|-------|-------|
| `begin_checkout` | Form visible on screen | 0.1 CHF | Initial engagement |
| `form_start` | User starts form | 0.1 CHF | First interaction |
| `checkout_progress` (Step 1) | Property type completed | 0.5 CHF | Basic qualification |
| `checkout_progress` (Step 2) | Energy needs completed | 2 CHF | More qualified |
| `checkout_progress` (Step 3) | Location completed | 5 CHF | Very qualified |
| `checkout_progress` (Step 4) | Contact info entered | 10 CHF | Ready to submit |
| `generate_lead` | Form submitted | 50 CHF | Full lead |
| `purchase` | Thank you page viewed | 50 CHF | Confirmed conversion |
| `scroll_25/50/75/100` | Scroll milestones | 0.1-1 CHF | Engagement tracking |
| `form_abandoned` | User exits mid-form | 0 | Abandonment tracking |

### DataLayer Events

All events push to `window.dataLayer` for GTM processing:
- `form_interaction` - Form step tracking
- `form_submission` - Final submission
- `conversion_page_view` - Thank you page
- `scroll_tracking` - Scroll depth
- Enhanced ecommerce events with item details

---

## Testing Checklist

- [ ] GA4 property created and ID added to env vars
- [ ] GTM container created and ID added to env vars
- [ ] Environment variables added to Vercel production
- [ ] Site redeployed after env var changes
- [ ] GA4 Realtime shows visitors
- [ ] GTM Preview mode working
- [ ] Form start event fires
- [ ] All 4 step events fire
- [ ] Form submission event fires
- [ ] Thank you page conversion fires
- [ ] Scroll tracking works
- [ ] All events visible in GA4 Realtime

---

## Troubleshooting

### Analytics Not Loading
- Check browser console for errors
- Verify env vars are set correctly
- Ensure site is in production mode
- Check if ad blockers are interfering

### Tags Not Firing in GTM
- Use GTM Preview mode to debug
- Check trigger conditions
- Verify dataLayer variables exist
- Check console for dataLayer pushes

### Events Not in GA4
- Wait 24-48 hours for non-realtime data
- Check GA4 DebugView for real-time debugging
- Verify GA4 ID is correct in GTM
- Check if events are being sent (Network tab)

### Form Tracking Not Working
- Open console and check for tracking logs
- Verify form component is mounting correctly
- Check if `window.dataLayer` exists
- Test in GTM Preview mode

---

## Next Steps

After completing setup:

1. **Set up Google Ads** - Create campaigns targeting solar keywords
2. **Import Conversions** - Link GA4 conversions to Google Ads
3. **Set up Facebook Pixel** - Add Meta tracking if needed
4. **Configure Conversion Goals** - Set up key events in GA4
5. **Create Audiences** - Build remarketing audiences
6. **Set up Dashboards** - Create reporting dashboards
7. **Monitor Performance** - Review conversion data weekly

---

## Files Modified

1. `/app/danke/page.tsx` - Added conversion tracking on thank you page
2. `/lib/analytics.ts` - Enhanced with ecommerce tracking
3. `/.env.local` - Added GA4 and GTM environment variables
4. `/components/Analytics.tsx` - Already configured (no changes needed)
5. `/components/MultiStepForm/FormContainer.tsx` - Already tracking (no changes needed)

---

## Support

If you need help:
- GTM Help: https://support.google.com/tagmanager/
- GA4 Help: https://support.google.com/analytics/
- Vercel Docs: https://vercel.com/docs

---

**Last Updated**: 2025-01-07
**Status**: Ready for GA4/GTM setup
**Estimated Setup Time**: 30-45 minutes
