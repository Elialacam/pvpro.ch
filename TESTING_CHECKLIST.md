# Testing Checklist for GA4 & GTM Setup

## ✅ Pre-Deployment Checklist

- [x] GA4 property created (G-P4N661CGHM)
- [x] GTM container created (GTM-N8MRNGXQ)
- [x] .env.local updated with tracking IDs
- [x] Code committed to GitHub
- [x] Code pushed to GitHub
- [ ] Vercel environment variables added
- [ ] GTM event tags created manually (14 tags)
- [ ] GTM container published

## 🧪 Testing Checklist (After Deployment)

### 1. Basic Load Test
- [ ] Visit https://pvpro.ch
- [ ] No errors in browser console
- [ ] Page loads normally

### 2. GTM Load Test
- [ ] Open browser DevTools → Console
- [ ] Type: `window.dataLayer`
- [ ] Verify: Array exists with GTM data
- [ ] Look for: `gtm.start` event
- [ ] Verify: GTM container ID is GTM-N8MRNGXQ

### 3. GA4 Load Test
- [ ] Check for gtag.js script in Network tab
- [ ] Verify: window.gtag function exists
- [ ] Look for: Google Analytics requests to www.google-analytics.com

### 4. Form Tracking Test
- [ ] Click "Jetzt kostenlos vergleichen" button
- [ ] Verify: CTA click event in dataLayer
- [ ] Fill in property type (Step 1)
- [ ] Verify: form_start event fires
- [ ] Verify: form_step_1_complete event fires
- [ ] Complete Step 2
- [ ] Verify: form_step_2_complete event fires
- [ ] Complete Step 3
- [ ] Verify: form_step_3_complete event fires
- [ ] Complete Step 4 and submit
- [ ] Verify: form_step_4_complete event fires
- [ ] Verify: generate_lead event fires (main conversion)

### 5. Engagement Tracking Test
- [ ] Scroll to 25% of page
- [ ] Verify: scroll_25 event fires
- [ ] Scroll to 50% of page
- [ ] Verify: scroll_50 event fires
- [ ] Scroll to 75% of page
- [ ] Verify: scroll_75 event fires
- [ ] Scroll to 100% of page
- [ ] Verify: scroll_100 event fires

### 6. Contact Tracking Test
- [ ] Find phone number link
- [ ] Click phone link
- [ ] Verify: phone_click event fires
- [ ] Verify: conversion event with label PHONE_CLICK
- [ ] Find email link (if visible)
- [ ] Click email link
- [ ] Verify: email_click event fires
- [ ] Verify: conversion event with label EMAIL_CLICK

### 7. Calculator Tracking Test (if visible)
- [ ] Interact with solar calculator
- [ ] Enter roof size
- [ ] Enter consumption
- [ ] Verify: calculator_used event fires
- [ ] Verify: conversion event with label CALCULATOR_USED

### 8. GTM Preview Mode Test
- [ ] Go to GTM: https://tagmanager.google.com/#/container/accounts/6319600105/containers/N8MRNGXQ
- [ ] Click "Preview" button
- [ ] Enter: https://pvpro.ch
- [ ] GTM Debug window opens
- [ ] Verify: "Container Loaded" shows GTM-N8MRNGXQ
- [ ] Verify: "Tags Fired" shows GA4 Config tag
- [ ] Test each conversion event:
  - [ ] form_start trigger fires
  - [ ] form_start tag fires
  - [ ] All 14 triggers work
  - [ ] All 14 tags work
- [ ] Check "Errors" tab
- [ ] Verify: No errors

### 9. GA4 Realtime Test
- [ ] Go to GA4: https://analytics.google.com/analytics/web/#/p512243751/reports/realtime
- [ ] Open pvpro.ch in another browser tab
- [ ] Verify: 1 active user appears
- [ ] Verify: Page view event appears
- [ ] Trigger a conversion (e.g., start form)
- [ ] Verify: Conversion event appears in Realtime
- [ ] Wait 1-2 minutes if needed
- [ ] Check "Event count by Event name"
- [ ] Verify: Your test events appear

### 10. GA4 Events Report Test (After 24 hours)
- [ ] Go to GA4: Reports → Engagement → Events
- [ ] Verify: All conversion events appear in list
- [ ] Check event counts
- [ ] Verify: Event parameters are passing correctly
- [ ] Check: value parameter has correct amounts

### 11. Mark Conversions Test (After 24-48 hours)
- [ ] Go to GA4: Admin → Events
- [ ] Verify: All 14 events appear in list
- [ ] Toggle "Mark as conversion" for key events:
  - [ ] generate_lead (MAIN CONVERSION)
  - [ ] phone_click
  - [ ] form_step_4_complete
  - [ ] email_click
  - [ ] form_step_3_complete
  - [ ] calculator_used
  - [ ] scroll_50
- [ ] Verify: Conversion toggle is saved

## 🚨 Common Issues & Solutions

### Issue: GTM Not Loading
**Symptoms:** window.dataLayer is undefined
**Solutions:**
1. Check browser console for errors
2. Verify .env.local has correct GTM ID
3. Verify Vercel environment variables are set
4. Disable ad blockers
5. Clear cache and hard reload (Cmd+Shift+R)

### Issue: Events Not Firing
**Symptoms:** dataLayer doesn't update on actions
**Solutions:**
1. Open GTM Preview mode to debug
2. Check trigger conditions are met
3. Verify tracking code is calling dataLayer.push()
4. Check browser console for JavaScript errors
5. Verify GTM container is published

### Issue: GA4 Not Receiving Events
**Symptoms:** Events in dataLayer but not in GA4 Realtime
**Solutions:**
1. Verify GA4 Config tag fires on All Pages in GTM Preview
2. Check Measurement ID is correct (G-P4N661CGHM)
3. Wait 1-2 minutes for events to process
4. Check Network tab for analytics requests
5. Verify GA4 event tags are created and firing

### Issue: Conversions Can't Be Marked
**Symptoms:** No toggle option for events in GA4 Admin
**Solutions:**
1. Wait 24-48 hours for events to appear
2. Need at least 1 event occurrence
3. Go to Admin → Events (not Reports → Events)
4. Refresh page after waiting period

## 📊 Success Metrics

After 7 days, you should see:
- Page views: 100-1000+ (depending on traffic)
- form_start: 5-10% of page views
- generate_lead: 20-40% of form_starts
- phone_click: 1-5% of page views
- scroll_50: 50-70% of page views
- calculator_used: 5-15% of page views

## 🎯 Testing Complete When:

- [x] All basic tests pass
- [ ] GTM Preview shows all tags firing
- [ ] GA4 Realtime shows events
- [ ] No errors in console or GTM
- [ ] All conversion values passing correctly

**Estimated Testing Time: 15-20 minutes**

## 🚀 Ready for Production When:

- [ ] All tests pass
- [ ] GTM container published
- [ ] GA4 receiving data
- [ ] Events marked as conversions (after 24-48 hrs)
- [ ] Linked to Google Ads (when ready)

---

**Next Step:** Complete manual GTM setup → Publish → Test → Mark conversions → Import to Google Ads
