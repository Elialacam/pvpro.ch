# Complete GA4 & GTM Setup for pvpro.ch

**Setup Date:** November 7, 2025
**Status:** ✅ GA4 & GTM Created | ⚠️ Manual GTM Event Tags Required | 🚀 Code Deployed

---

## 📊 Analytics Configuration

### Google Analytics 4
- **Property Name:** PVPro - Solar Platform Switzerland
- **Measurement ID:** `G-P4N661CGHM`
- **Property ID:** `properties/512243751`
- **Timezone:** Europe/Zurich
- **Currency:** CHF
- **Property URL:** https://analytics.google.com/analytics/web/#/p512243751/reports/intelligenthome

### Google Tag Manager
- **Container Name:** pvpro.ch - Conversion Tracking
- **Container ID:** `GTM-N8MRNGXQ`
- **Account ID:** `6319600105`
- **Container URL:** https://tagmanager.google.com/#/container/accounts/6319600105/containers/N8MRNGXQ/workspaces

---

## ✅ What's Been Completed

### 1. GA4 Property Created
- ✅ Property created with Swiss timezone (Europe/Zurich)
- ✅ Currency set to CHF
- ✅ Data stream configured for pvpro.ch
- ✅ Measurement ID generated: G-P4N661CGHM

### 2. GTM Container Created
- ✅ Container created: GTM-N8MRNGXQ
- ✅ GA4 Configuration tag added
- ✅ 14 custom triggers created for conversion events
- ✅ 5 data layer variables created (conversionLabel, value, currency, etc.)

### 3. Website Code Updated
- ✅ .env.local updated with GA4 and GTM IDs
- ✅ Analytics component already supports both GA4 and GTM
- ✅ Tracking lib enhanced with conversion events
- ✅ All event tracking code in place (form, scroll, phone, email, CTA, calculator)
- ✅ Code committed and pushed to GitHub
- ✅ Vercel will auto-deploy from GitHub

### 4. Event Tracking Configured

**14 Conversion Events Configured:**
1. `form_start` - User starts the lead form (value: CHF 0.1)
2. `form_step_1_complete` - Property type selected (value: CHF 0.5)
3. `form_step_2_complete` - Energy needs entered (value: CHF 2.0)
4. `form_step_3_complete` - Location provided (value: CHF 5.0)
5. `form_step_4_complete` - Contact info entered (value: CHF 10.0)
6. `generate_lead` - Form submitted (value: CHF 50.0) **← MAIN CONVERSION**
7. `calculator_used` - Solar calculator interaction (value: CHF 1.5)
8. `scroll_25` - User scrolled 25% (value: CHF 0.1)
9. `scroll_50` - User scrolled 50% (value: CHF 0.3)
10. `scroll_75` - User scrolled 75% (value: CHF 0.5)
11. `scroll_100` - User scrolled 100% (value: CHF 1.0)
12. `phone_click` - User clicked phone link (value: CHF 25.0)
13. `email_click` - User clicked email link (value: CHF 15.0)
14. `cta_click` - User clicked CTA button (value: CHF 5.0)

---

## ⚠️ Manual Steps Required (15-20 minutes)

### Step 1: Add Environment Variables to Vercel (5 min)

Go to Vercel Dashboard → pvpro.ch → Settings → Environment Variables:
https://vercel.com/team_FDUyZX1XQUpeK0mwccRxaeoW/pvpro/settings/environment-variables

Add these two variables for **Production**, **Preview**, and **Development**:

1. **NEXT_PUBLIC_GA_ID** = `G-P4N661CGHM`
2. **NEXT_PUBLIC_GTM_ID** = `GTM-N8MRNGXQ`

**Note:** If deployment already completed, these may not be needed as .env.local is in place locally.

### Step 2: Create GTM Event Tags (10 min)

**Why manual?** The GTM API has a limitation with the `measurementIdOverride` parameter for GA4 event tags. We created all triggers and variables, but the 14 event tags need to be added manually.

**Instructions:** See file `scripts/finalize-gtm-manually.md` for detailed step-by-step guide.

**Quick Summary:**
1. Go to GTM: https://tagmanager.google.com/#/container/accounts/6319600105/containers/N8MRNGXQ/workspaces
2. Create 14 GA4 Event tags (one for each conversion event)
3. Each tag:
   - Type: Google Analytics: GA4 Event
   - Configuration Tag: GA4 Config - Main
   - Event Name: (see list above)
   - Event Parameters: value={{dlv - value}}, currency=CHF
   - Trigger: (match to corresponding trigger)
4. Click Submit → Publish

**Shortcut:** Instead of creating 14 tags individually, you can:
1. Create one tag for `form_start`
2. Duplicate it 13 times
3. Update event name and trigger for each duplicate

### Step 3: Publish GTM Container (2 min)

After creating all event tags:
1. Click **"Submit"** in top right of GTM
2. Version Name: `Complete Conversion Tracking Setup`
3. Description: `Added 14 GA4 event tags for conversion tracking`
4. Click **"Publish"**

### Step 4: Mark Events as Conversions in GA4 (3 min)

**Critical for Google Ads integration!**

1. Go to GA4: https://analytics.google.com/analytics/web/#/p512243751/reports/intelligenthome
2. Navigate to: **Admin** (bottom left) → **Events**
3. Wait for events to appear (may take 24-48 hours after first traffic)
4. Toggle **"Mark as conversion"** for these key events:
   - ⭐ **generate_lead** (MOST IMPORTANT - main conversion)
   - ⭐ **phone_click** (high-value conversion)
   - **form_step_4_complete** (almost-conversion)
   - **email_click** (high-intent)
   - **form_step_3_complete** (qualified lead)
   - **calculator_used** (engagement)
   - **scroll_50** (engagement baseline)

**Pro tip:** Start with just `generate_lead` and `phone_click`. Add others after you have sufficient data (50+ conversions).

---

## 🧪 Testing (5-10 minutes)

### Local Testing

1. Run locally: `npm run dev`
2. Open: http://localhost:3000
3. Open browser DevTools → Console
4. Check: `window.dataLayer` exists and contains GTM data
5. Test each conversion:
   - Scroll the page → Check for scroll events in dataLayer
   - Click phone button → Check for phone_click event
   - Click email button → Check for email_click event
   - Use calculator → Check for calculator_used event
   - Start form → Check for form_start event
   - Complete form → Check for generate_lead event

### Production Testing (After Vercel Deployment)

1. Go to https://pvpro.ch
2. Open browser DevTools → Console
3. Type: `window.dataLayer`
4. Should see GTM initialization
5. Perform actions and check dataLayer updates

### GTM Preview Mode Testing

1. Go to GTM: https://tagmanager.google.com/#/container/accounts/6319600105/containers/N8MRNGXQ/workspaces
2. Click **"Preview"** in top right
3. Enter: https://pvpro.ch
4. GTM Debug window opens
5. Test each conversion event:
   - Trigger should fire
   - Tag should fire
   - Event should appear in "Summary"
6. Check for any errors in "Errors" tab

### GA4 Realtime Testing

1. Go to GA4: https://analytics.google.com/analytics/web/#/p512243751/reports/realtime
2. Open pvpro.ch in another tab
3. You should see:
   - Active user appears (1 user)
   - Page view event
   - Any conversion events you trigger
4. May take 1-2 minutes for events to appear

---

## 📈 Expected Results

### Immediate (0-24 hours)
- ✅ GTM loads on page
- ✅ GA4 tracks page views
- ✅ DataLayer receives conversion events
- ✅ GA4 Realtime shows active users
- ✅ GTM Preview mode shows all tags firing

### Short-term (24-48 hours)
- ✅ Events appear in GA4 Events report
- ✅ Can mark events as conversions
- ✅ Conversion data starts populating

### Medium-term (7-14 days)
- ✅ Sufficient data for conversion optimization
- ✅ Can create audiences based on events
- ✅ Can import conversions to Google Ads

---

## 🔗 Google Ads Integration

### After Collecting Data (50+ conversions)

1. **Link GA4 to Google Ads:**
   - GA4 Admin → Product Links → Google Ads Links
   - Link your Google Ads account

2. **Import Conversions:**
   - Google Ads → Tools → Conversions
   - Click "+" → Import → Google Analytics 4
   - Select conversion events to import
   - Start with: `generate_lead` and `phone_click`

3. **Set Conversion Values:**
   - Already configured in tracking code
   - generate_lead: CHF 50
   - phone_click: CHF 25
   - email_click: CHF 15
   - form_step_4: CHF 10
   - etc.

4. **Optimize Campaigns:**
   - Use "Maximize Conversions" bidding strategy
   - Target: `generate_lead` as primary conversion
   - Use `phone_click` as secondary conversion
   - Set up conversion value rules if needed

---

## 📂 Files Created

### Configuration Files
- `ga4-config.json` - GA4 property configuration
- `gtm-config.json` - GTM container configuration
- `.env.local` - Environment variables (updated)

### Scripts
- `scripts/create-ga4-pvpro.js` - Automated GA4 property creation
- `scripts/create-gtm-pvpro.js` - Automated GTM container creation (partial)
- `scripts/complete-gtm-setup.js` - GTM setup completion script
- `scripts/finalize-gtm-manually.md` - Step-by-step manual GTM setup guide
- `scripts/test-tracking.ts` - Tracking testing script

### Documentation
- `GA4_GTM_SETUP_COMPLETE.md` - This file
- `UPDATE_VERCEL_ENV.md` - Vercel environment variable instructions

### Code Changes
- `lib/analytics.ts` - Enhanced with conversion tracking for phone, email, CTA
- `.env.local` - Added GA4 and GTM IDs

---

## 🎯 Success Criteria

### Setup is Complete When:
- ✅ GA4 property created
- ✅ GTM container created
- ✅ GTM event tags added (manual step)
- ✅ GTM container published
- ✅ Code deployed to Vercel
- ✅ GTM loads on pvpro.ch
- ✅ Events fire in GTM Preview mode
- ✅ Events appear in GA4 Realtime
- ✅ Key events marked as conversions in GA4

### Tracking is Working When:
- ✅ Page views tracked in GA4
- ✅ All 14 conversion events firing
- ✅ Event values passing correctly
- ✅ No errors in browser console
- ✅ No errors in GTM Preview
- ✅ Realtime report shows data

---

## 🚨 Troubleshooting

### GTM Not Loading
- Check browser console for errors
- Verify GTM ID in .env.local: `GTM-N8MRNGXQ`
- Check Vercel environment variables
- Disable ad blockers (they block GTM!)

### Events Not Firing
- Open GTM Preview mode
- Check if trigger conditions are met
- Verify dataLayer.push() calls in code
- Check browser console for JavaScript errors

### GA4 Not Receiving Events
- Verify GA4 Config tag fires on All Pages
- Check Measurement ID is correct: `G-P4N661CGHM`
- Wait 1-2 minutes for events to appear in Realtime
- Check if GA4 event tags are firing in GTM Preview

### Events Not Marked as Conversions
- Wait 24-48 hours for events to appear in GA4 Events report
- Need at least 1 event occurrence before you can mark as conversion
- Check Admin → Events (not Reports → Events)

---

## 📞 Support

### Resources
- GA4 Property: https://analytics.google.com/analytics/web/#/p512243751
- GTM Container: https://tagmanager.google.com/#/container/accounts/6319600105/containers/N8MRNGXQ
- Vercel Project: https://vercel.com/team_FDUyZX1XQUpeK0mwccRxaeoW/pvpro
- GitHub Repo: https://github.com/Cronin/pvpro.ch

### Documentation
- GTM Manual Setup: `scripts/finalize-gtm-manually.md`
- Vercel Environment Variables: `UPDATE_VERCEL_ENV.md`
- Tracking Code: `lib/analytics.ts`

---

## ✅ Next Steps

1. **NOW:** Complete manual GTM setup (Step 2 above) - 10 minutes
2. **NOW:** Publish GTM container (Step 3 above) - 2 minutes
3. **24-48 HOURS:** Mark events as conversions in GA4 (Step 4 above) - 3 minutes
4. **7-14 DAYS:** Link GA4 to Google Ads and import conversions
5. **ONGOING:** Monitor GA4 Realtime and optimize campaigns

---

**Setup Status: 90% Complete**
- ✅ GA4 property created and configured
- ✅ GTM container created with triggers and variables
- ⚠️ Manual step required: Add 14 GTM event tags (10 min)
- ⚠️ Manual step required: Publish GTM container (2 min)
- ⏳ Waiting period: Mark events as conversions after data flows (24-48 hrs)

**Time Investment:**
- Automated: ~25 minutes (DONE)
- Manual: ~15 minutes (REQUIRED)
- Testing: ~10 minutes (RECOMMENDED)
- **Total: ~50 minutes for complete production-ready setup**
