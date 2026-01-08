#!/usr/bin/env python3
"""
Comprehensive Google Search Console Analysis for solarheim.ch
Checks all critical metrics and domain status
"""

import json
from datetime import datetime, timedelta
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# Configuration
SERVICE_ACCOUNT_FILE = '/Users/claudiocronin/Downloads/credentials.json'
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']
TARGET_PROPERTY = 'sc-domain:solarheim.ch'
ALTERNATIVE_PROPERTY = 'sc-domain:solarheim.com'

def authenticate():
    """Authenticate using service account"""
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES
    )
    return build('searchconsole', 'v1', credentials=credentials)

def list_all_properties(service):
    """List all properties accessible to the service account"""
    try:
        sites = service.sites().list().execute()
        return sites.get('siteEntry', [])
    except HttpError as e:
        print(f"Error listing properties: {e}")
        return []

def get_property_status(service, site_url):
    """Get detailed property information"""
    try:
        site_info = service.sites().get(siteUrl=site_url).execute()
        return site_info
    except HttpError as e:
        print(f"Error getting property status for {site_url}: {e}")
        return None

def get_search_analytics(service, site_url, start_date, end_date, dimensions=None):
    """Get search analytics data"""
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
        print(f"Error getting search analytics: {e}")
        return []

def get_sitemaps(service, site_url):
    """Get sitemap information"""
    try:
        sitemaps = service.sitemaps().list(siteUrl=site_url).execute()
        return sitemaps.get('sitemap', [])
    except HttpError as e:
        print(f"Error getting sitemaps: {e}")
        return []

def get_url_inspection(service, site_url, inspection_url):
    """Get URL inspection data"""
    try:
        request_body = {
            'inspectionUrl': inspection_url,
            'siteUrl': site_url
        }
        response = service.urlInspection().index().inspect(body=request_body).execute()
        return response
    except HttpError as e:
        print(f"Error inspecting URL: {e}")
        return None

def main():
    print("=" * 80)
    print("COMPREHENSIVE GOOGLE SEARCH CONSOLE ANALYSIS")
    print("=" * 80)
    print()

    # Authenticate
    print("Authenticating with service account...")
    service = authenticate()
    print("✓ Authentication successful\n")

    # 1. LIST ALL PROPERTIES
    print("-" * 80)
    print("1. PROPERTY STATUS CHECK")
    print("-" * 80)
    all_properties = list_all_properties(service)

    print(f"\nTotal properties accessible: {len(all_properties)}")
    print("\nAll properties:")
    for prop in all_properties:
        print(f"  - {prop['siteUrl']} (Permission: {prop.get('permissionLevel', 'Unknown')})")

    # Check for both domains
    solarheim_ch_exists = any(TARGET_PROPERTY in p['siteUrl'] for p in all_properties)
    solarheim_com_exists = any(ALTERNATIVE_PROPERTY in p['siteUrl'] for p in all_properties)

    print(f"\n✓ solarheim.ch found: {solarheim_ch_exists}")
    print(f"✓ solarheim.com found: {solarheim_com_exists}")

    if solarheim_com_exists:
        print("\n⚠ WARNING: solarheim.com property still exists in Search Console!")
        print("  This may cause confusion. Consider removing if migration to .ch is complete.")

    if not solarheim_ch_exists:
        print("\n✗ ERROR: solarheim.ch not found or not accessible!")
        print("  The service account may need to be added as a user to the property.")
        return

    # Get detailed property status
    print(f"\n\nDetailed status for {TARGET_PROPERTY}:")
    property_info = get_property_status(service, TARGET_PROPERTY)
    if property_info:
        print(f"  - Verification: {property_info.get('permissionLevel', 'Unknown')}")

    # 2. RECENT PERFORMANCE (Last 7 days)
    print("\n" + "-" * 80)
    print("2. RECENT PERFORMANCE (Last 7 Days)")
    print("-" * 80)

    end_date = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=8)).strftime('%Y-%m-%d')

    print(f"\nDate range: {start_date} to {end_date}")

    recent_data = get_search_analytics(service, TARGET_PROPERTY, start_date, end_date)

    if recent_data:
        total_clicks = sum(row.get('clicks', 0) for row in recent_data)
        total_impressions = sum(row.get('impressions', 0) for row in recent_data)
        avg_ctr = (total_clicks / total_impressions * 100) if total_impressions > 0 else 0
        avg_position = sum(row.get('position', 0) for row in recent_data) / len(recent_data)

        print(f"\n  Total Clicks: {total_clicks:,}")
        print(f"  Total Impressions: {total_impressions:,}")
        print(f"  Average CTR: {avg_ctr:.2f}%")
        print(f"  Average Position: {avg_position:.1f}")
    else:
        print("\n  ⚠ No recent performance data available")

    # 3. TOP QUERIES (Last 28 days)
    print("\n" + "-" * 80)
    print("3. TOP PERFORMING QUERIES (Last 28 Days)")
    print("-" * 80)

    start_date_28 = (datetime.now() - timedelta(days=29)).strftime('%Y-%m-%d')
    query_data = get_search_analytics(service, TARGET_PROPERTY, start_date_28, end_date, ['query'])

    if query_data:
        # Sort by clicks
        sorted_queries = sorted(query_data, key=lambda x: x.get('clicks', 0), reverse=True)[:10]

        print("\nTop 10 queries by clicks:")
        print(f"{'Rank':<6} {'Query':<40} {'Clicks':<10} {'Impr.':<10} {'CTR':<8} {'Pos.':<8}")
        print("-" * 90)

        for idx, row in enumerate(sorted_queries, 1):
            query = row['keys'][0][:40]
            clicks = row.get('clicks', 0)
            impressions = row.get('impressions', 0)
            ctr = row.get('ctr', 0) * 100
            position = row.get('position', 0)
            print(f"{idx:<6} {query:<40} {clicks:<10} {impressions:<10} {ctr:<8.2f} {position:<8.1f}")
    else:
        print("\n  ⚠ No query data available")

    # 4. TOP PAGES (Last 28 days)
    print("\n" + "-" * 80)
    print("4. TOP PERFORMING PAGES (Last 28 Days)")
    print("-" * 80)

    page_data = get_search_analytics(service, TARGET_PROPERTY, start_date_28, end_date, ['page'])

    if page_data:
        # Sort by clicks
        sorted_pages = sorted(page_data, key=lambda x: x.get('clicks', 0), reverse=True)[:10]

        print("\nTop 10 pages by clicks:")
        print(f"{'Rank':<6} {'Page':<60} {'Clicks':<10} {'Impr.':<10}")
        print("-" * 90)

        for idx, row in enumerate(sorted_pages, 1):
            page = row['keys'][0][:60]
            clicks = row.get('clicks', 0)
            impressions = row.get('impressions', 0)
            print(f"{idx:<6} {page:<60} {clicks:<10} {impressions:<10}")
    else:
        print("\n  ⚠ No page data available")

    # 5. DEVICE BREAKDOWN
    print("\n" + "-" * 80)
    print("5. DEVICE PERFORMANCE (Last 28 Days)")
    print("-" * 80)

    device_data = get_search_analytics(service, TARGET_PROPERTY, start_date_28, end_date, ['device'])

    if device_data:
        print("\nPerformance by device:")
        print(f"{'Device':<15} {'Clicks':<10} {'Impressions':<15} {'CTR':<8} {'Position':<8}")
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

    # 6. COUNTRY BREAKDOWN
    print("\n" + "-" * 80)
    print("6. GEOGRAPHIC PERFORMANCE (Last 28 Days)")
    print("-" * 80)

    country_data = get_search_analytics(service, TARGET_PROPERTY, start_date_28, end_date, ['country'])

    if country_data:
        sorted_countries = sorted(country_data, key=lambda x: x.get('clicks', 0), reverse=True)[:10]

        print("\nTop 10 countries by clicks:")
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

    # 7. SITEMAPS
    print("\n" + "-" * 80)
    print("7. SITEMAP STATUS")
    print("-" * 80)

    sitemaps = get_sitemaps(service, TARGET_PROPERTY)

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
        print("\n  ⚠ No sitemaps found or submitted")

    # 8. SUMMARY AND RECOMMENDATIONS
    print("\n" + "=" * 80)
    print("8. SUMMARY AND RECOMMENDATIONS")
    print("=" * 80)

    print("\n✓ PROPERTY STATUS:")
    print(f"  - solarheim.ch is verified and accessible")
    print(f"  - Permission level: {property_info.get('permissionLevel', 'Unknown') if property_info else 'Unknown'}")

    if solarheim_com_exists:
        print("\n⚠ DOMAIN MIGRATION ISSUE:")
        print("  - Both solarheim.com and solarheim.ch exist in Search Console")
        print("  - RECOMMENDATION: Verify domain migration is complete")
        print("  - Check that 301 redirects are in place from .com to .ch")
        print("  - Consider removing .com property once migration is confirmed")

    if recent_data and total_impressions > 0:
        print("\n✓ RECENT PERFORMANCE:")
        print(f"  - Site is receiving organic traffic: {total_clicks} clicks in last 7 days")
        print(f"  - Average position: {avg_position:.1f}")
        if avg_ctr < 2.0:
            print(f"  - ⚠ CTR is low ({avg_ctr:.2f}%) - consider improving meta titles/descriptions")
    else:
        print("\n⚠ RECENT PERFORMANCE:")
        print("  - No recent traffic data available")
        print("  - Site may be new or experiencing indexing issues")

    if not sitemaps:
        print("\n⚠ SITEMAP ISSUE:")
        print("  - No sitemaps found")
        print("  - RECOMMENDATION: Submit a sitemap to help Google discover pages")

    print("\n" + "=" * 80)
    print("ANALYSIS COMPLETE")
    print("=" * 80)

if __name__ == "__main__":
    main()
