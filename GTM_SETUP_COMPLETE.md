# GTM Setup Complete - PVPro.ch

## Summary

All 14 GA4 Event tags have been successfully created in Google Tag Manager for pvpro.ch.

### Container Details
- **Container ID:** GTM-N8MRNGXQ
- **Container Name:** pvpro.ch - Conversion Tracking
- **Account ID:** 6319600105
- **GA4 Measurement ID:** G-P4N661CGHM
- **Workspace:** Initial Setup

## Created Tags (15 total)

### 1. GA4 Config Tag
- **Name:** GA4 Config - Main
- **Type:** Google Tag (googtag)
- **Trigger:** All Pages
- **Measurement ID:** G-P4N661CGHM

### 2-15. Event Tags (14 tags)

All event tags are configured with:
- **Type:** Google Tag (googtag)
- **Measurement ID:** G-P4N661CGHM
- **Parameters:** value (CHF), currency (CHF)
- **Firing:** Once per event

| Event Name | Tag Name | Value (CHF) | Description |
|------------|----------|-------------|-------------|
| form_start | GA4 Event - form_start | 0.1 | Form Start |
| form_step_1_complete | GA4 Event - form_step_1_complete | 0.5 | Form Step 1 Complete |
| form_step_2_complete | GA4 Event - form_step_2_complete | 2.0 | Form Step 2 Complete |
| form_step_3_complete | GA4 Event - form_step_3_complete | 5.0 | Form Step 3 Complete |
| form_step_4_complete | GA4 Event - form_step_4_complete | 10.0 | Form Step 4 Complete |
| **generate_lead** | **GA4 Event - generate_lead** | **50.0** | **Generate Lead - MAIN CONVERSION** |
| calculator_used | GA4 Event - calculator_used | 1.5 | Calculator Used |
| scroll_25 | GA4 Event - scroll_25 | 0.1 | Scroll 25% |
| scroll_50 | GA4 Event - scroll_50 | 0.3 | Scroll 50% |
| scroll_75 | GA4 Event - scroll_75 | 0.5 | Scroll 75% |
| scroll_100 | GA4 Event - scroll_100 | 1.0 | Scroll 100% |
| phone_click | GA4 Event - phone_click | 25.0 | Phone Click |
| email_click | GA4 Event - email_click | 15.0 | Email Click |
| cta_click | GA4 Event - cta_click | 5.0 | CTA Click |

## Triggers Created (14 total)

Each event has a corresponding Custom Event trigger:

- CE - form_start
- CE - form_step_1_complete
- CE - form_step_2_complete
- CE - form_step_3_complete
- CE - form_step_4_complete
- CE - generate_lead
- CE - calculator_used
- CE - scroll_25
- CE - scroll_50
- CE - scroll_75
- CE - scroll_100
- CE - phone_click
- CE - email_click
- CE - cta_click

## Next Steps - PUBLISHING REQUIRED

The tags are created but the container has NOT been published yet due to service account permissions.

### To Publish:

1. **Go to GTM:** https://tagmanager.google.com/
2. **Navigate to:** Workspace "Initial Setup" in container GTM-N8MRNGXQ
3. **Review Changes:** Click "Preview" to test in debug mode (optional but recommended)
4. **Submit Changes:** Click the "Submit" button in the top right
5. **Version Name:** "Complete Conversion Tracking Setup"
6. **Version Description:** "14 GA4 event tags created with conversion values"
7. **Publish:** Click "Publish"

### To Test Before Publishing:

1. Click "Preview" in GTM workspace
2. Enter your website URL: https://pvpro.ch
3. Test the following:
   - Form interactions (start, each step, completion)
   - Calculator usage
   - Scroll depth (25%, 50%, 75%, 100%)
   - Phone/email/CTA clicks
4. Verify events appear in the GTM Debug panel
5. Check that values are correctly set (0.1, 0.5, 2.0, etc.)

### To Verify in GA4:

1. Go to GA4: https://analytics.google.com/
2. Select property with ID: G-P4N661CGHM
3. Navigate to: Reports > Realtime
4. Trigger events on the website
5. Verify events appear in realtime with correct values

## Event Implementation Requirements

For these tags to fire, your website needs to push events to the dataLayer. Example code:

```javascript
// Form start
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'form_start'
});

// Form step completion
window.dataLayer.push({
  'event': 'form_step_1_complete'
});

// Lead generation (main conversion)
window.dataLayer.push({
  'event': 'generate_lead'
});

// Scroll tracking (automatic with GTM built-in variables)
window.dataLayer.push({
  'event': 'scroll_25'
});

// Phone click
window.dataLayer.push({
  'event': 'phone_click'
});

// Email click
window.dataLayer.push({
  'event': 'email_click'
});

// CTA click
window.dataLayer.push({
  'event': 'cta_click'
});

// Calculator used
window.dataLayer.push({
  'event': 'calculator_used'
});
```

## Conversion Values Summary

Total potential value per user journey:
- Initial engagement: 0.1 CHF (scroll_25)
- Form interaction: 17.6 CHF (form_start + all steps)
- Calculator usage: 1.5 CHF
- Lead generation: 50.0 CHF (MAIN)
- Additional engagement: 25.0 CHF (phone) or 15.0 CHF (email)

**Maximum value per conversion:** ~94 CHF (if user completes all steps)

## Files Created

- `/Users/claudiocronin/websites/orchestrator-dashboard/scripts/complete-gtm-pvpro.js` - Setup script
- `/Users/claudiocronin/websites/orchestrator-dashboard/scripts/publish-gtm-pvpro.js` - Publish script
- `/Users/claudiocronin/websites/orchestrator-dashboard/scripts/inspect-gtm-tags.js` - Inspection script
- `/Users/claudiocronin/websites/sites/pvpro.ch/GTM_SETUP_COMPLETE.md` - This document

## Status

- ✓ 15 tags created (1 config + 14 events)
- ✓ 14 custom event triggers created
- ✓ All values configured correctly
- ✗ Container NOT published (manual step required)

**Ready for publishing!**

Last updated: 2025-11-07
