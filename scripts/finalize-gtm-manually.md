# Manual GTM Setup Instructions for pvpro.ch

## Status
- ✅ GTM Container Created: **GTM-N8MRNGXQ**
- ✅ GA4 Property Created: **G-P4N661CGHM**
- ✅ GA4 Config Tag Created
- ✅ 14 Triggers Created
- ⚠️  Event Tags Need Manual Creation (API limitation)

## Complete Setup Manually (5-10 minutes)

### Step 1: Open GTM Container
Go to: https://tagmanager.google.com/#/container/accounts/6319600105/containers/N8MRNGXQ/workspaces

### Step 2: Create GA4 Event Tags (14 total)

For each event, create a new tag:
1. Click **"New Tag"**
2. Name: `GA4 Event - [event_name]`
3. Tag Type: **Google Analytics: GA4 Event**
4. Configuration Tag: **GA4 Config - Main**
5. Event Name: `[event_name from list below]`
6. Event Parameters:
   - Parameter Name: `value` → Value: `{{dlv - value}}`
   - Parameter Name: `currency` → Value: `CHF`
7. Triggering: Select matching trigger from list below

#### Events to Create:

1. **GA4 Event - form_start**
   - Event Name: `form_start`
   - Trigger: Conversion - Form Start

2. **GA4 Event - calculator_used**
   - Event Name: `calculator_used`
   - Trigger: Conversion - Calculator Used

3. **GA4 Event - form_step_1_complete**
   - Event Name: `form_step_1_complete`
   - Trigger: Conversion - Form Step 1

4. **GA4 Event - form_step_2_complete**
   - Event Name: `form_step_2_complete`
   - Trigger: Conversion - Form Step 2

5. **GA4 Event - form_step_3_complete**
   - Event Name: `form_step_3_complete`
   - Trigger: Conversion - Form Step 3

6. **GA4 Event - form_step_4_complete**
   - Event Name: `form_step_4_complete`
   - Trigger: Conversion - Form Step 4

7. **GA4 Event - generate_lead**
   - Event Name: `generate_lead`
   - Trigger: Conversion - Lead Complete

8. **GA4 Event - scroll_25**
   - Event Name: `scroll_25`
   - Trigger: Conversion - Scroll 25%

9. **GA4 Event - scroll_50**
   - Event Name: `scroll_50`
   - Trigger: Conversion - Scroll 50%

10. **GA4 Event - scroll_75**
    - Event Name: `scroll_75`
    - Trigger: Conversion - Scroll 75%

11. **GA4 Event - scroll_100**
    - Event Name: `scroll_100`
    - Trigger: Conversion - Scroll 100%

12. **GA4 Event - phone_click**
    - Event Name: `phone_click`
    - Trigger: Conversion - Phone Click

13. **GA4 Event - email_click**
    - Event Name: `email_click`
    - Trigger: Conversion - Email Click

14. **GA4 Event - cta_click**
    - Event Name: `cta_click`
    - Trigger: Conversion - CTA Click

### Step 3: Submit and Publish
1. Click **"Submit"** in top right
2. Version Name: `Complete Conversion Tracking Setup`
3. Description: `Added 14 GA4 event tags for conversion tracking`
4. Click **"Publish"**

### Step 4: Install GTM on Website
The GTM code will be automatically added when you update .env.local and deploy.

## Next Steps After Manual Setup
Run from the pvpro.ch directory:
```bash
# Update environment variables
# Deploy to Vercel
# Test all events
```
