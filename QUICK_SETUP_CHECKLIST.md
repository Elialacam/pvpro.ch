# Quick Setup Checklist - PVPro.ch Tracking

## 5-Minute Setup Guide

### ✅ Step 1: Create GA4 Property (2 minutes)
1. Visit: https://analytics.google.com/
2. Admin → Create Property
3. Property name: `PVPro.ch`
4. Timezone: `Switzerland (Zurich)`
5. Currency: `Swiss Franc (CHF)`
6. **Copy the Measurement ID**: `G-XXXXXXXXXX`

---

### ✅ Step 2: Create GTM Container (2 minutes)
1. Visit: https://tagmanager.google.com/
2. Create Account: `PVPro`
3. Container: `pvpro.ch` (Web)
4. Admin → Import Container
5. Import: `/Users/claudiocronin/websites/sites/pvpro.ch/GTM_IMPORT_JSON.json`
6. Variables → Update `GA4 Measurement ID` with your G-XXXXXXXXXX
7. **Submit → Publish**
8. **Copy the Container ID**: `GTM-XXXXXXX`

---

### ✅ Step 3: Update Environment Variables (30 seconds)
```bash
cd /Users/claudiocronin/websites/sites/pvpro.ch

# Open .env.local
nano .env.local

# Replace:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  → NEXT_PUBLIC_GA_ID=G-YOUR_REAL_ID
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX  → NEXT_PUBLIC_GTM_ID=GTM-YOUR_REAL_ID

# Save and exit (Ctrl+O, Enter, Ctrl+X)
```

---

### ✅ Step 4: Deploy to Vercel (1 minute)
```bash
cd /Users/claudiocronin/websites/sites/pvpro.ch

# Add environment variables to production
echo "YOUR_GA4_ID" | vercel env add NEXT_PUBLIC_GA_ID production
echo "YOUR_GTM_ID" | vercel env add NEXT_PUBLIC_GTM_ID production

# Deploy
vercel --prod
```

---

### ✅ Step 5: Verify (30 seconds)
1. Open: https://pvpro.ch
2. Open Browser DevTools → Console
3. You should NOT see any tracking errors
4. Go to https://analytics.google.com/ → Realtime
5. You should see yourself as a visitor

---

## That's It! 🎉

Your tracking is now live and collecting data.

### What's Being Tracked:
- ✅ Page views
- ✅ Form interactions (all 4 steps)
- ✅ Form submissions
- ✅ Scroll depth (25%, 50%, 75%, 100%)
- ✅ CTA clicks
- ✅ Conversions (thank you page)
- ✅ 25+ unique events

### Next Steps:
1. Monitor GA4 Realtime for 24 hours
2. Fill out the form yourself to test
3. Check GTM Preview mode
4. Set up Google Ads campaigns
5. Import conversions from GA4 to Google Ads

---

## Testing Commands

```bash
# Run automated tests
cd /Users/claudiocronin/websites/sites/pvpro.ch
npx tsx scripts/test-tracking.ts

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## Troubleshooting

**Issue**: Analytics not loading
- Check if GA4_ID and GTM_ID are correct
- Verify env vars are in production (not just .env.local)
- Clear browser cache
- Disable ad blockers

**Issue**: Tags not firing
- Use GTM Preview mode
- Check browser console for errors
- Verify GTM container is published
- Check dataLayer in console: `window.dataLayer`

**Issue**: No data in GA4
- Wait 24-48 hours for historical reports
- Use Realtime and DebugView for immediate data
- Verify measurement ID is correct

---

## Support Files

- **Complete Guide**: `/TRACKING_SETUP_GUIDE.md`
- **Implementation Details**: `/CONVERSION_TRACKING_COMPLETE.md`
- **Test Script**: `/scripts/test-tracking.ts`
- **Setup Script**: `/setup-tracking.sh`

---

## Quick Reference

| What | Value | Where |
|------|-------|-------|
| GA4 Measurement ID | G-XXXXXXXXXX | Replace in .env.local |
| GTM Container ID | GTM-XXXXXXX | Replace in .env.local |
| GTM Template | GTM_IMPORT_JSON.json | Import to GTM |
| Production URL | https://pvpro.ch | Test here |
| GA4 Realtime | https://analytics.google.com/ | Verify data |
| GTM Dashboard | https://tagmanager.google.com/ | Preview/Debug |

---

**Total Time**: 5 minutes
**Difficulty**: Easy
**Status**: Ready to deploy

🚀 **Let's get tracking!**
