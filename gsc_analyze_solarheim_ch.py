#!/usr/bin/env python3
"""
Comprehensive analysis for solarheim.ch (run AFTER adding to GSC)
This script will work once:
1. solarheim.ch is added to Google Search Console
2. Service account is granted owner access
"""

from datetime import datetime, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

SERVICE_ACCOUNT_FILE = '/Users/claudiocronin/Downloads/credentials.json'
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']
PROPERTY = 'sc-domain:solarheim.ch'

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
    print("GOOGLE SEARCH CONSOLE ANALYSIS - SOLARHEIM.CH")
    print("=" * 80)
    print()

    service = authenticate()

    # Check if property exists
    print("Checking property access...")
    try:
        site_info = service.sites().get(siteUrl=PROPERTY).execute()
        print(f"✓ Successfully connected to {PROPERTY}")
        print(f"  Permission: {site_info.get('permissionLevel', 'Unknown')}")
        print()
    except HttpError as e:
        print(f"✗ Cannot access {PROPERTY}")
        print(f"  Error: {e}")
        print()
        print("This means:")
        print("  1. The property hasn't been added to Google Search Console yet, OR")
        print("  2. The service account hasn't been granted access")
        print()
        print("ACTIONS REQUIRED:")
        print("  1. Add solarheim.ch to Google Search Console")
        print("  2. Grant owner access to: gsc-automation@websites-473902.iam.gserviceaccount.com")
        print()
        print("Once completed, run this script again to get full analysis.")
        return

    # Date ranges
    end_date = (datetime.now() - timedelta(days=3)).strftime('%Y-%m-%d')
    start_date_7 = (datetime.now() - timedelta(days=10)).strftime('%Y-%m-%d')
    start_date_28 = (datetime.now() - timedelta(days=31)).strftime('%Y-%m-%d')
    start_date_90 = (datetime.now() - timedelta(days=93)).strftime('%Y-%m-%d')

    # Recent performance
    print("=" * 80)
    print("1. RECENT PERFORMANCE (Last 7 Days)")
    print("=" * 80)
    print(f"\nPeriod: {start_date_7} to {end_date}")

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

        if total_clicks > 0:
            print("\n  ✓ Site is receiving organic search traffic!")
        else:
            print("\n  ⚠ No clicks yet - this is normal for a newly migrated site")
    else:
        print("\n  ⚠ No data available yet")
        print("  This is normal if the property was just added")
        print("  Data should appear within 2-3 days")

    # 28-day performance
    print("\n" + "=" * 80)
    print("2. 28-DAY PERFORMANCE OVERVIEW")
    print("=" * 80)
    print(f"\nPeriod: {start_date_28} to {end_date}")

    data_28 = get_search_analytics(service, PROPERTY, start_date_28, end_date)

    if data_28:
        total_clicks = sum(row.get('clicks', 0) for row in data_28)
        total_impressions = sum(row.get('impressions', 0) for row in data_28)
        avg_ctr = (total_clicks / total_impressions * 100) if total_impressions > 0 else 0
        avg_position = sum(row.get('position', 0) for row in data_28) / len(data_28) if data_28 else 0

        print(f"\n  Total Clicks: {total_clicks:,}")
        print(f"  Total Impressions: {total_impressions:,}")
        print(f"  Average CTR: {avg_ctr:.2f}%")
        print(f"  Average Position: {avg_position:.1f}")
    else:
        print("\n  ⚠ No 28-day data available yet")

    # Top queries
    print("\n" + "=" * 80)
    print("3. TOP PERFORMING QUERIES (Last 28 Days)")
    print("=" * 80)

    query_data = get_search_analytics(service, PROPERTY, start_date_28, end_date, ['query'])

    if query_data:
        sorted_queries = sorted(query_data, key=lambda x: x.get('clicks', 0), reverse=True)[:20]

        print(f"\nTop 20 queries:")
        print(f"{'#':<4} {'Query':<50} {'Clicks':<10} {'Impr.':<10} {'CTR':<8} {'Pos':<6}")
        print("-" * 95)

        for idx, row in enumerate(sorted_queries, 1):
            query = row['keys'][0][:50]
            clicks = row.get('clicks', 0)
            impressions = row.get('impressions', 0)
            ctr = row.get('ctr', 0) * 100
            position = row.get('position', 0)
            print(f"{idx:<4} {query:<50} {clicks:<10} {impressions:<10} {ctr:<8.2f} {position:<6.1f}")

        print(f"\nTotal unique queries: {len(query_data):,}")
    else:
        print("\n  No query data available yet")

    # Top pages
    print("\n" + "=" * 80)
    print("4. TOP PERFORMING PAGES (Last 28 Days)")
    print("=" * 80)

    page_data = get_search_analytics(service, PROPERTY, start_date_28, end_date, ['page'])

    if page_data:
        sorted_pages = sorted(page_data, key=lambda x: x.get('clicks', 0), reverse=True)[:20]

        print(f"\nTop 20 pages:")
        print(f"{'#':<4} {'Page':<70} {'Clicks':<10} {'Impr.':<10}")
        print("-" * 95)

        for idx, row in enumerate(sorted_pages, 1):
            page = row['keys'][0][:70]
            clicks = row.get('clicks', 0)
            impressions = row.get('impressions', 0)
            print(f"{idx:<4} {page:<70} {clicks:<10} {impressions:<10}")

        print(f"\nTotal pages with traffic: {len(page_data):,}")
    else:
        print("\n  No page data available yet")

    # Device breakdown
    print("\n" + "=" * 80)
    print("5. DEVICE PERFORMANCE")
    print("=" * 80)

    device_data = get_search_analytics(service, PROPERTY, start_date_28, end_date, ['device'])

    if device_data:
        print(f"\n{'Device':<15} {'Clicks':<12} {'Impressions':<15} {'CTR':<8} {'Position':<8}")
        print("-" * 65)

        for row in device_data:
            device = row['keys'][0]
            clicks = row.get('clicks', 0)
            impressions = row.get('impressions', 0)
            ctr = row.get('ctr', 0) * 100
            position = row.get('position', 0)
            print(f"{device:<15} {clicks:<12} {impressions:<15} {ctr:<8.2f} {position:<8.1f}")
    else:
        print("\n  No device data available yet")

    # Country breakdown
    print("\n" + "=" * 80)
    print("6. GEOGRAPHIC PERFORMANCE")
    print("=" * 80)

    country_data = get_search_analytics(service, PROPERTY, start_date_28, end_date, ['country'])

    if country_data:
        sorted_countries = sorted(country_data, key=lambda x: x.get('clicks', 0), reverse=True)[:15]

        print(f"\nTop 15 countries:")
        print(f"{'Country':<15} {'Clicks':<12} {'Impressions':<15} {'CTR':<8} {'Position':<8}")
        print("-" * 65)

        for row in sorted_countries:
            country = row['keys'][0]
            clicks = row.get('clicks', 0)
            impressions = row.get('impressions', 0)
            ctr = row.get('ctr', 0) * 100
            position = row.get('position', 0)
            print(f"{country:<15} {clicks:<12} {impressions:<15} {ctr:<8.2f} {position:<8.1f}")
    else:
        print("\n  No country data available yet")

    # Sitemaps
    print("\n" + "=" * 80)
    print("7. SITEMAP STATUS")
    print("=" * 80)

    sitemaps = get_sitemaps(service, PROPERTY)

    if sitemaps:
        print(f"\n✓ Found {len(sitemaps)} sitemap(s)")
        for sitemap in sitemaps:
            print(f"\n  Sitemap: {sitemap['path']}")
            print(f"    Last submitted: {sitemap.get('lastSubmitted', 'Never')}")
            print(f"    Last downloaded: {sitemap.get('lastDownloaded', 'Never')}")
            if 'contents' in sitemap:
                for content in sitemap['contents']:
                    content_type = content.get('type', 'Unknown')
                    submitted = content.get('submitted', 0)
                    indexed = content.get('indexed', 0)
                    print(f"    {content_type}: {indexed}/{submitted} indexed")
    else:
        print("\n  ⚠ No sitemaps submitted yet")
        print("\n  RECOMMENDATION: Submit sitemaps immediately")
        print("  Expected sitemap URLs:")
        print("    - https://solarheim.ch/sitemap_index.xml")
        print("    - https://solarheim.ch/page-sitemap.xml")
        print("    - https://solarheim.ch/product-sitemap.xml")

    # Summary
    print("\n" + "=" * 80)
    print("8. MIGRATION STATUS SUMMARY")
    print("=" * 80)
    print()

    if data_28:
        total_clicks_28 = sum(row.get('clicks', 0) for row in data_28)
        total_impressions_28 = sum(row.get('impressions', 0) for row in data_28)

        if total_clicks_28 > 0:
            print("✓ GOOD: Site is receiving organic search traffic")
            print(f"  {total_clicks_28:,} clicks in the last 28 days")
        elif total_impressions_28 > 0:
            print("⚠ PARTIAL: Site appearing in search but no clicks yet")
            print(f"  {total_impressions_28:,} impressions in the last 28 days")
            print("  Consider optimizing titles and descriptions to improve CTR")
        else:
            print("⚠ WARNING: No search visibility yet")
            print("  Possible causes:")
            print("    - Site is new or recently migrated (indexing takes time)")
            print("    - Indexing issues (check Index Coverage in GSC)")
            print("    - Technical SEO problems (robots.txt, noindex tags)")

    if sitemaps:
        print(f"\n✓ Sitemaps are submitted ({len(sitemaps)} total)")
    else:
        print("\n⚠ No sitemaps submitted - submit immediately!")

    print("\nNEXT STEPS:")
    print("  1. Monitor indexing progress daily")
    print("  2. Check for coverage errors in GSC")
    print("  3. Review mobile usability issues")
    print("  4. Check Core Web Vitals performance")
    print("  5. Request indexing for top 10 most important pages")
    print("  6. Run this script weekly to track progress")

    print("\n" + "=" * 80)
    print("ANALYSIS COMPLETE")
    print("=" * 80)

if __name__ == "__main__":
    main()
