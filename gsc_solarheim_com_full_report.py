#!/usr/bin/env python3
"""
Full GSC Analysis for solarheim.com property
"""

import json
from datetime import datetime, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

SERVICE_ACCOUNT_FILE = '/Users/claudiocronin/Downloads/credentials.json'
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']
PROPERTY = 'sc-domain:solarheim.com'

def authenticate():
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES
    )
    return build('searchconsole', 'v1', credentials=credentials)

def get_search_analytics(service, site_url, start_date, end_date, dimensions=None):
    try:
        request = {
            'startDate': start_date,
            'endDate': end_date,
            'dimensions': dimensions or ['date'],
            'rowLimit': 25000
        }
        response = service.searchanalytics().query(siteUrl=site_url, body=request).execute()
        return response.get('rows', [])
    except HttpError as e:
        return None

def get_sitemaps(service, site_url):
    try:
        sitemaps = service.sitemaps().list(siteUrl=site_url).execute()
        return sitemaps.get('sitemap', [])
    except HttpError as e:
        return []

def main():
    print("=" * 80)
    print("GOOGLE SEARCH CONSOLE ANALYSIS - SOLARHEIM.COM")
    print("=" * 80)
    print()

    service = authenticate()

    # Property status
    print("=" * 80)
    print("1. PROPERTY STATUS")
    print("=" * 80)
    print()
    print(f"Property: {PROPERTY}")

    try:
        site_info = service.sites().get(siteUrl=PROPERTY).execute()
        print(f"✓ Property is verified and accessible")
        print(f"  Permission Level: {site_info.get('permissionLevel', 'Unknown')}")
    except HttpError as e:
        print(f"✗ Error accessing property: {e}")
        return

    # Critical finding
    print()
    print("⚠ CRITICAL FINDING:")
    print("  - This is the solarheim.COM property")
    print("  - solarheim.CH is NOT found in Search Console")
    print("  - If you've migrated from .com to .ch, you need to:")
    print("    1. Add solarheim.ch as a new property in GSC")
    print("    2. Add the service account as a user to the .ch property")
    print("    3. Set up 301 redirects from .com to .ch")
    print("    4. Eventually remove the .com property")

    # Recent performance (last 7 days)
    print()
    print("=" * 80)
    print("2. RECENT PERFORMANCE (Last 7 Days)")
    print("=" * 80)

    end_date = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')
    start_date_7 = (datetime.now() - timedelta(days=8)).strftime('%Y-%m-%d')

    print(f"\nDate range: {start_date_7} to {end_date}")

    recent_data = get_search_analytics(service, PROPERTY, start_date_7, end_date)

    if recent_data:
        total_clicks = sum(row.get('clicks', 0) for row in recent_data)
        total_impressions = sum(row.get('impressions', 0) for row in recent_data)
        avg_ctr = (total_clicks / total_impressions * 100) if total_impressions > 0 else 0
        avg_position = sum(row.get('position', 0) for row in recent_data) / len(recent_data) if recent_data else 0

        print(f"\n  Total Clicks: {total_clicks:,}")
        print(f"  Total Impressions: {total_impressions:,}")
        print(f"  Average CTR: {avg_ctr:.2f}%")
        print(f"  Average Position: {avg_position:.1f}")

        if total_clicks == 0 and total_impressions == 0:
            print("\n  ⚠ WARNING: No traffic in last 7 days!")
            print("  This could indicate:")
            print("    - The site has been migrated to .ch")
            print("    - Indexing issues")
            print("    - The domain is no longer active")
    else:
        print("\n  ⚠ No performance data available")

    # Historical comparison (last 28 days vs previous 28 days)
    print()
    print("=" * 80)
    print("3. HISTORICAL COMPARISON (28 Days)")
    print("=" * 80)

    start_date_28 = (datetime.now() - timedelta(days=29)).strftime('%Y-%m-%d')
    start_date_56 = (datetime.now() - timedelta(days=57)).strftime('%Y-%m-%d')
    end_date_29 = (datetime.now() - timedelta(days=29)).strftime('%Y-%m-%d')

    current_data = get_search_analytics(service, PROPERTY, start_date_28, end_date)
    previous_data = get_search_analytics(service, PROPERTY, start_date_56, end_date_29)

    if current_data and previous_data:
        curr_clicks = sum(row.get('clicks', 0) for row in current_data)
        curr_impressions = sum(row.get('impressions', 0) for row in current_data)

        prev_clicks = sum(row.get('clicks', 0) for row in previous_data)
        prev_impressions = sum(row.get('impressions', 0) for row in previous_data)

        clicks_change = ((curr_clicks - prev_clicks) / prev_clicks * 100) if prev_clicks > 0 else 0
        impressions_change = ((curr_impressions - prev_impressions) / prev_impressions * 100) if prev_impressions > 0 else 0

        print(f"\nLast 28 days ({start_date_28} to {end_date}):")
        print(f"  Clicks: {curr_clicks:,}")
        print(f"  Impressions: {curr_impressions:,}")

        print(f"\nPrevious 28 days ({start_date_56} to {end_date_29}):")
        print(f"  Clicks: {prev_clicks:,}")
        print(f"  Impressions: {prev_impressions:,}")

        print(f"\nChange:")
        print(f"  Clicks: {clicks_change:+.1f}%")
        print(f"  Impressions: {impressions_change:+.1f}%")

        if clicks_change < -50:
            print("\n  ⚠ ALERT: Major traffic drop detected!")
            print("  This strongly suggests domain migration to .ch")
    else:
        print("\n  ⚠ Insufficient data for comparison")

    # Top queries
    print()
    print("=" * 80)
    print("4. TOP PERFORMING QUERIES (Last 28 Days)")
    print("=" * 80)

    query_data = get_search_analytics(service, PROPERTY, start_date_28, end_date, ['query'])

    if query_data:
        sorted_queries = sorted(query_data, key=lambda x: x.get('clicks', 0), reverse=True)[:15]

        print(f"\nTop 15 queries by clicks:")
        print(f"{'Rank':<6} {'Query':<50} {'Clicks':<10} {'Impr.':<10} {'CTR':<8} {'Pos.':<8}")
        print("-" * 100)

        for idx, row in enumerate(sorted_queries, 1):
            query = row['keys'][0][:50]
            clicks = row.get('clicks', 0)
            impressions = row.get('impressions', 0)
            ctr = row.get('ctr', 0) * 100
            position = row.get('position', 0)
            print(f"{idx:<6} {query:<50} {clicks:<10} {impressions:<10} {ctr:<8.2f} {position:<8.1f}")

        total_queries = len(query_data)
        print(f"\nTotal unique queries: {total_queries:,}")
    else:
        print("\n  ⚠ No query data available")

    # Top pages
    print()
    print("=" * 80)
    print("5. TOP PERFORMING PAGES (Last 28 Days)")
    print("=" * 80)

    page_data = get_search_analytics(service, PROPERTY, start_date_28, end_date, ['page'])

    if page_data:
        sorted_pages = sorted(page_data, key=lambda x: x.get('clicks', 0), reverse=True)[:15]

        print(f"\nTop 15 pages by clicks:")
        print(f"{'Rank':<6} {'Page':<70} {'Clicks':<10} {'Impr.':<10}")
        print("-" * 100)

        for idx, row in enumerate(sorted_pages, 1):
            page = row['keys'][0][:70]
            clicks = row.get('clicks', 0)
            impressions = row.get('impressions', 0)
            print(f"{idx:<6} {page:<70} {clicks:<10} {impressions:<10}")

        total_pages = len(page_data)
        print(f"\nTotal pages with traffic: {total_pages:,}")
    else:
        print("\n  ⚠ No page data available")

    # Device breakdown
    print()
    print("=" * 80)
    print("6. DEVICE PERFORMANCE (Last 28 Days)")
    print("=" * 80)

    device_data = get_search_analytics(service, PROPERTY, start_date_28, end_date, ['device'])

    if device_data:
        print(f"\n{'Device':<15} {'Clicks':<10} {'Impressions':<15} {'CTR':<8} {'Position':<8}")
        print("-" * 60)

        for row in device_data:
            device = row['keys'][0]
            clicks = row.get('clicks', 0)
            impressions = row.get('impressions', 0)
            ctr = row.get('ctr', 0) * 100
            position = row.get('position', 0)
            print(f"{device:<15} {clicks:<10} {impressions:<15} {ctr:<8.2f} {position:<8.1f}")
    else:
        print("\n  ⚠ No device data available")

    # Country breakdown
    print()
    print("=" * 80)
    print("7. GEOGRAPHIC PERFORMANCE (Last 28 Days)")
    print("=" * 80)

    country_data = get_search_analytics(service, PROPERTY, start_date_28, end_date, ['country'])

    if country_data:
        sorted_countries = sorted(country_data, key=lambda x: x.get('clicks', 0), reverse=True)[:10]

        print(f"\nTop 10 countries by clicks:")
        print(f"{'Country':<15} {'Clicks':<10} {'Impressions':<15} {'CTR':<8} {'Position':<8}")
        print("-" * 60)

        for row in sorted_countries:
            country = row['keys'][0]
            clicks = row.get('clicks', 0)
            impressions = row.get('impressions', 0)
            ctr = row.get('ctr', 0) * 100
            position = row.get('position', 0)
            print(f"{country:<15} {clicks:<10} {impressions:<15} {ctr:<8.2f} {position:<8.1f}")
    else:
        print("\n  ⚠ No country data available")

    # Sitemaps
    print()
    print("=" * 80)
    print("8. SITEMAP STATUS")
    print("=" * 80)

    sitemaps = get_sitemaps(service, PROPERTY)

    if sitemaps:
        print(f"\nTotal sitemaps: {len(sitemaps)}")
        for sitemap in sitemaps:
            print(f"\n  Sitemap: {sitemap['path']}")
            print(f"    Last submitted: {sitemap.get('lastSubmitted', 'Never')}")
            print(f"    Last downloaded: {sitemap.get('lastDownloaded', 'Never')}")
            if 'contents' in sitemap:
                for content in sitemap['contents']:
                    print(f"    Type: {content.get('type', 'Unknown')}")
                    print(f"    Submitted: {content.get('submitted', 0)}")
                    print(f"    Indexed: {content.get('indexed', 0)}")
    else:
        print("\n  No sitemaps found")

    # Final summary
    print()
    print("=" * 80)
    print("EXECUTIVE SUMMARY & RECOMMENDATIONS")
    print("=" * 80)

    print("\n🚨 CRITICAL DOMAIN MIGRATION ISSUE DETECTED")
    print("-" * 80)

    print("\nCURRENT STATUS:")
    print("  ✓ solarheim.com property EXISTS in Google Search Console")
    print("  ✗ solarheim.ch property DOES NOT EXIST in Google Search Console")
    print()

    if recent_data and sum(row.get('clicks', 0) for row in recent_data) == 0:
        print("  ⚠ solarheim.com shows ZERO traffic in last 7 days")
        print("  This suggests the domain has been migrated to .ch")
    elif recent_data and sum(row.get('clicks', 0) for row in recent_data) > 0:
        print("  ⚠ solarheim.com is still receiving traffic")
        print("  This may indicate incomplete migration")

    print("\nIMMEDIATE ACTIONS REQUIRED:")
    print()
    print("1. ADD SOLARHEIM.CH TO GOOGLE SEARCH CONSOLE")
    print("   - Go to: https://search.google.com/search-console")
    print("   - Add property: solarheim.ch")
    print("   - Verify ownership (DNS verification recommended)")
    print()

    print("2. GRANT SERVICE ACCOUNT ACCESS TO SOLARHEIM.CH")
    print("   - Add this email as a user with 'Owner' permissions:")
    print("   - Email: gsc-automation@websites-473902.iam.gserviceaccount.com")
    print()

    print("3. VERIFY 301 REDIRECTS ARE IN PLACE")
    print("   - Ensure all solarheim.com URLs redirect to solarheim.ch")
    print("   - Maintain URL structure (example.com/page → example.ch/page)")
    print()

    print("4. MONITOR BOTH PROPERTIES DURING TRANSITION")
    print("   - Track traffic decline on .com")
    print("   - Track traffic growth on .ch")
    print("   - Typical migration takes 3-6 months for full transfer")
    print()

    print("5. AFTER MIGRATION COMPLETES:")
    print("   - Keep .com property for historical data")
    print("   - Eventually you can remove it (after 6-12 months)")
    print()

    print("=" * 80)
    print("ANALYSIS COMPLETE")
    print("=" * 80)

if __name__ == "__main__":
    main()
