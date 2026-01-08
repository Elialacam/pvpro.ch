#!/usr/bin/env python3
"""
Check exact solarheim properties in GSC
"""

import json
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

SERVICE_ACCOUNT_FILE = '/Users/claudiocronin/Downloads/credentials.json'
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']

def authenticate():
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES
    )
    return build('searchconsole', 'v1', credentials=credentials)

def main():
    service = authenticate()

    # List all properties
    sites = service.sites().list().execute()
    all_properties = sites.get('siteEntry', [])

    print("=" * 80)
    print("SOLARHEIM PROPERTIES IN GOOGLE SEARCH CONSOLE")
    print("=" * 80)
    print()

    # Filter for solarheim properties
    solarheim_properties = [p for p in all_properties if 'solarheim' in p['siteUrl'].lower()]

    if not solarheim_properties:
        print("⚠ NO SOLARHEIM PROPERTIES FOUND")
        print("\nThis means:")
        print("  - Neither solarheim.ch nor solarheim.com is in this GSC account")
        print("  - The service account may need to be added as a user")
        print("  - The properties may be in a different GSC account")
    else:
        print(f"Found {len(solarheim_properties)} solarheim property/properties:\n")

        for prop in solarheim_properties:
            print(f"Property URL: {prop['siteUrl']}")
            print(f"Permission Level: {prop.get('permissionLevel', 'Unknown')}")
            print()

            # Try to get more details
            try:
                site_info = service.sites().get(siteUrl=prop['siteUrl']).execute()
                print(f"  Status: Verified and accessible")
            except HttpError as e:
                print(f"  Status: Error accessing - {e}")

            print("-" * 80)

    print()
    print("NEXT STEPS:")
    print()

    if any('.ch' in p['siteUrl'] for p in solarheim_properties):
        print("✓ solarheim.ch is available - ready for analysis")
    else:
        print("✗ solarheim.ch is NOT in Search Console")
        print("  ACTION REQUIRED:")
        print("  1. Add the service account as a user to solarheim.ch property")
        print("     Email: gsc-automation@websites-473902.iam.gserviceaccount.com")
        print("  2. Or verify that solarheim.ch is set up in Search Console")

    if any('.com' in p['siteUrl'] for p in solarheim_properties):
        print("\n⚠ solarheim.com still exists in Search Console")
        print("  RECOMMENDATION: After confirming .ch migration, consider removing .com")

if __name__ == "__main__":
    main()
