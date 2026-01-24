# Update Vercel Environment Variables

## Project Info
- Project ID: `prj_059qMHj4iH5iNQRhwZOULO2P8j2y`
- Team ID: `team_FDUyZX1XQUpeK0mwccRxaeoW`
- Project Name: `pvpro.ch`

## Environment Variables to Add

Go to Vercel Dashboard → pvpro.ch → Settings → Environment Variables:
https://vercel.com/team_FDUyZX1XQUpeK0mwccRxaeoW/pvpro/settings/environment-variables

Add these two variables for **Production**, **Preview**, and **Development**:

1. **NEXT_PUBLIC_GA_ID**
   - Value: `G-P4N661CGHM`
   - Environment: Production, Preview, Development

2. **NEXT_PUBLIC_GTM_ID**
   - Value: `GTM-N8MRNGXQ`
   - Environment: Production, Preview, Development

## After Adding Variables

The variables are already in .env.local for local development, so the site will work immediately after the next deployment.

The push to GitHub will automatically trigger a Vercel deployment.

## Verify Deployment

1. Wait for Vercel deployment to complete (check https://vercel.com/team_FDUyZX1XQUpeK0mwccRxaeoW/pvpro/deployments)
2. Visit https://pvpro.ch
3. Open browser console and check for:
   - `dataLayer` array exists
   - GTM script loaded
   - GA4 script loaded

## Test Tracking

Open https://pvpro.ch and:
1. Open browser DevTools → Console
2. Type: `window.dataLayer`
3. You should see an array with GTM initialization
4. Scroll the page → Check for scroll events
5. Click a phone/email button → Check for contact events
6. Use the solar calculator → Check for calculator events
7. Start the form → Check for form events
