# GTM Container Cleanup - pvpro.ch

**Date:** 2025-11-07
**Action:** Deleted old duplicate GTM container

---

## Deleted Container

- **Container ID:** GTM-556VX7T8
- **Container Name:** "PVPro Conversion Tracking"
- **Account ID:** 6319600105
- **Reason:** Duplicate container that was never used

---

## Active Container

- **Container ID:** GTM-N8MRNGXQ
- **Container Name:** "pvpro.ch - Conversion Tracking"
- **Account ID:** 6319600105
- **Status:** Configured and published
- **Environment Variable:** NEXT_PUBLIC_GTM_ID=GTM-N8MRNGXQ

---

## Verification

Verified that only 1 container remains for pvpro.ch:
- GTM-N8MRNGXQ (active and configured)
- GTM-556VX7T8 (deleted successfully)

Total containers in account 6319600105: 22

---

## Files Modified

1. `/Users/claudiocronin/websites/sites/pvpro.ch/scripts/delete-gtm-container.js`
   - Updated container ID to GTM-556VX7T8
   - Fixed API call to use containers.list instead of containers.get
   - Added proper scopes for deletion

2. `/Users/claudiocronin/websites/sites/pvpro.ch/scripts/list-gtm-containers.js`
   - Created new script to list all containers for verification

---

## Result

Old duplicate container GTM-556VX7T8 has been successfully deleted from Google Tag Manager account 6319600105. The site continues to use the active container GTM-N8MRNGXQ without any disruption.
