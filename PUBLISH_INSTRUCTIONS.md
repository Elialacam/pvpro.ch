# GTM Publishing Instructions - PVPro.ch

## Status: Ready to Publish

All 14 GA4 event tags have been successfully created in the GTM workspace "Initial Setup" for container GTM-N8MRNGXQ.

## How to Publish the Container

### Step 1: Access GTM
1. Go to: https://tagmanager.google.com/
2. Login with your Google account
3. Select account: Your GTM Account (ID: 6319600105)
4. Select container: GTM-N8MRNGXQ (pvpro.ch - Conversion Tracking)

### Step 2: Review Workspace
1. You should see the workspace "Initial Setup" with pending changes
2. Click on "Initial Setup" to open the workspace
3. You'll see 28 changes ready to publish:
   - 14 custom event triggers
   - 14 GA4 event tags
   - 1 GA4 config tag (already existed)

### Step 3: Preview (Optional but Recommended)
1. Click the "Preview" button in the top right
2. Enter your website URL: https://pvpro.ch
3. A new window will open with GTM Debug mode
4. Test the following on your website:
   - Scroll down the page (should fire scroll_25, scroll_50, scroll_75, scroll_100)
   - Click phone number (should fire phone_click)
   - Click email address (should fire email_click)
   - Click CTA buttons (should fire cta_click)
   - Use calculator (should fire calculator_used)
   - Start form (should fire form_start)
   - Complete form steps (should fire form_step_1_complete, etc.)
5. Verify events appear in the GTM Debug panel with correct values

### Step 4: Submit for Publishing
1. Exit Preview mode
2. Click the "Submit" button in the top right
3. Fill in the version details:
   - **Version Name:** Complete Conversion Tracking Setup
   - **Version Description:**
     ```
     Added 14 GA4 event tags with conversion values:
     - Form events (start + 4 steps)
     - Lead generation (main conversion at 50 CHF)
     - Engagement events (scroll, calculator)
     - Contact events (phone, email, CTA)
     All events configured with CHF currency values
     ```
4. Click "Publish"

### Step 5: Verify Publication
1. After publishing, you'll see a success message
2. The version number will increment (should be Version 3 or similar)
3. Go to "Versions" tab to see your published version

## What Happens After Publishing?

Once published, the GTM container code on your website will automatically load the new tags. Within a few minutes:

1. **GTM Preview Mode** - You can test events in real-time
2. **GA4 Realtime** - Events will appear in GA4 Realtime reports (3-5 minutes delay)
3. **GA4 Reports** - Full event data in reports (24-48 hours)

## Verification Steps After Publishing

### 1. Test in GTM Preview
- Click "Preview" in GTM
- Visit your website
- Trigger each event type
- Verify they fire in the GTM Debug Console

### 2. Check GA4 Realtime
- Go to: https://analytics.google.com/
- Select property: G-P4N661CGHM
- Navigate to: Reports → Realtime
- Trigger events on your website
- Watch for events appearing with correct values

### 3. Verify Event Parameters
Each event should have:
- **event_name:** The specific event (form_start, generate_lead, etc.)
- **value:** The CHF value (0.1, 0.5, 2.0, 5.0, 10.0, 50.0, etc.)
- **currency:** CHF

## Event Summary

| Event | Value (CHF) | When It Fires |
|-------|-------------|---------------|
| form_start | 0.1 | User starts the lead form |
| form_step_1_complete | 0.5 | User completes step 1 |
| form_step_2_complete | 2.0 | User completes step 2 |
| form_step_3_complete | 5.0 | User completes step 3 |
| form_step_4_complete | 10.0 | User completes step 4 |
| **generate_lead** | **50.0** | **User submits complete form (MAIN CONVERSION)** |
| calculator_used | 1.5 | User interacts with calculator |
| scroll_25 | 0.1 | User scrolls 25% down page |
| scroll_50 | 0.3 | User scrolls 50% down page |
| scroll_75 | 0.5 | User scrolls 75% down page |
| scroll_100 | 1.0 | User scrolls to bottom |
| phone_click | 25.0 | User clicks phone number |
| email_click | 15.0 | User clicks email address |
| cta_click | 5.0 | User clicks CTA button |

## Troubleshooting

### Events Not Firing?
1. Check that GTM container code is installed on the website
2. Verify the container ID matches: GTM-N8MRNGXQ
3. Check browser console for errors
4. Use GTM Preview mode to debug

### Events Firing But Not in GA4?
1. Wait 3-5 minutes for Realtime to update
2. Check GA4 Measurement ID is correct: G-P4N661CGHM
3. Verify GA4 Config tag is firing on all pages
4. Check in GA4 DebugView (if GA4 debug mode enabled)

### Need to Make Changes?
1. Create a new workspace in GTM
2. Make your changes
3. Test in Preview mode
4. Submit and publish

## Support

If you encounter issues:
1. Check GTM Debug Console for error messages
2. Verify dataLayer events are being pushed from your website
3. Review GA4 Realtime reports
4. Contact support with specific error messages

---

**Remember:** The container must be published for changes to go live!

Last updated: 2025-11-07
