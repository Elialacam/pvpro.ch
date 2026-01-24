#!/usr/bin/env python3
"""
Historical traffic analysis for solarheim.com to identify when migration occurred
"""

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

def get_daily_data(service, site_url, start_date, end_date):
    try:
        request = {
            'startDate': start_date,
            'endDate': end_date,
            'dimensions': ['date'],
            'rowLimit': 25000
        }
        response = service.searchanalytics().query(siteUrl=site_url, body=request).execute()
        return response.get('rows', [])
    except HttpError as e:
        return None

def main():
    print("=" * 80)
    print("HISTORICAL TRAFFIC ANALYSIS - SOLARHEIM.COM")
    print("=" * 80)
    print()

    service = authenticate()

    # Analyze last 16 months of data
    end_date = (datetime.now() - timedelta(days=3)).strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=480)).strftime('%Y-%m-%d')

    print(f"Analyzing period: {start_date} to {end_date}")
    print(f"(This covers approximately 16 months of data)")
    print()

    data = get_daily_data(service, PROPERTY, start_date, end_date)

    if not data:
        print("⚠ No historical data available")
        return

    # Process daily data
    daily_stats = {}
    for row in data:
        date = row['keys'][0]
        daily_stats[date] = {
            'clicks': row.get('clicks', 0),
            'impressions': row.get('impressions', 0),
            'ctr': row.get('ctr', 0) * 100,
            'position': row.get('position', 0)
        }

    # Find last date with significant traffic
    dates_sorted = sorted(daily_stats.keys())
    last_traffic_date = None
    last_significant_traffic = None

    for date in reversed(dates_sorted):
        if daily_stats[date]['clicks'] > 0:
            if last_traffic_date is None:
                last_traffic_date = date
            if daily_stats[date]['clicks'] >= 5:
                last_significant_traffic = date
                break

    # Monthly aggregation
    print("=" * 80)
    print("MONTHLY TRAFFIC SUMMARY")
    print("=" * 80)
    print()

    monthly_data = {}
    for date, stats in daily_stats.items():
        year_month = date[:7]  # YYYY-MM
        if year_month not in monthly_data:
            monthly_data[year_month] = {'clicks': 0, 'impressions': 0, 'days': 0}
        monthly_data[year_month]['clicks'] += stats['clicks']
        monthly_data[year_month]['impressions'] += stats['impressions']
        monthly_data[year_month]['days'] += 1

    print(f"{'Month':<12} {'Clicks':<12} {'Impressions':<15} {'Avg Clicks/Day':<15}")
    print("-" * 60)

    for month in sorted(monthly_data.keys()):
        clicks = monthly_data[month]['clicks']
        impressions = monthly_data[month]['impressions']
        days = monthly_data[month]['days']
        avg_clicks = clicks / days if days > 0 else 0

        print(f"{month:<12} {clicks:<12,} {impressions:<15,} {avg_clicks:<15.1f}")

    # Find when traffic dropped to near zero
    print()
    print("=" * 80)
    print("TRAFFIC DROP ANALYSIS")
    print("=" * 80)
    print()

    if last_traffic_date:
        print(f"Last date with any clicks: {last_traffic_date}")
        print(f"  Clicks: {daily_stats[last_traffic_date]['clicks']}")
        print(f"  Impressions: {daily_stats[last_traffic_date]['impressions']}")

    if last_significant_traffic:
        print(f"\nLast date with significant traffic (5+ clicks): {last_significant_traffic}")
        print(f"  Clicks: {daily_stats[last_significant_traffic]['clicks']}")
        print(f"  Impressions: {daily_stats[last_significant_traffic]['impressions']}")

        # Calculate days since
        try:
            last_date_obj = datetime.strptime(last_significant_traffic, '%Y-%m-%d')
            days_ago = (datetime.now() - last_date_obj).days
            print(f"\n  This was {days_ago} days ago")
        except:
            pass

    # Recent 7-day periods to show the decline
    print()
    print("=" * 80)
    print("WEEKLY TRAFFIC (Last 12 Weeks)")
    print("=" * 80)
    print()

    print(f"{'Week Ending':<15} {'Clicks':<10} {'Impressions':<15}")
    print("-" * 45)

    for i in range(12):
        week_end = (datetime.now() - timedelta(days=(i * 7) + 3)).strftime('%Y-%m-%d')
        week_start = (datetime.now() - timedelta(days=(i * 7) + 10)).strftime('%Y-%m-%d')

        week_clicks = 0
        week_impressions = 0

        for date in dates_sorted:
            if week_start <= date <= week_end:
                week_clicks += daily_stats[date]['clicks']
                week_impressions += daily_stats[date]['impressions']

        print(f"{week_end:<15} {week_clicks:<10,} {week_impressions:<15,}")

    # Peak performance
    print()
    print("=" * 80)
    print("PEAK PERFORMANCE PERIOD")
    print("=" * 80)
    print()

    # Find best month
    best_month = max(monthly_data.items(), key=lambda x: x[1]['clicks'])
    print(f"Best performing month: {best_month[0]}")
    print(f"  Total clicks: {best_month[1]['clicks']:,}")
    print(f"  Total impressions: {best_month[1]['impressions']:,}")
    print(f"  Average clicks per day: {best_month[1]['clicks'] / best_month[1]['days']:.1f}")

    # Summary
    print()
    print("=" * 80)
    print("CONCLUSION")
    print("=" * 80)
    print()

    total_clicks_all_time = sum(stats['clicks'] for stats in daily_stats.values())
    total_impressions_all_time = sum(stats['impressions'] for stats in daily_stats.values())

    print(f"Total clicks (entire period): {total_clicks_all_time:,}")
    print(f"Total impressions (entire period): {total_impressions_all_time:,}")

    # Check last 30 days
    recent_30_days_clicks = sum(
        stats['clicks'] for date, stats in daily_stats.items()
        if date >= (datetime.now() - timedelta(days=30)).strftime('%Y-%m-%d')
    )

    if recent_30_days_clicks == 0:
        print("\n⚠ ZERO clicks in the last 30 days")
        print("  This confirms the domain migration to .ch has occurred")
        print("  All traffic has moved to the new domain")
    elif recent_30_days_clicks < 10:
        print(f"\n⚠ Minimal traffic: only {recent_30_days_clicks} clicks in last 30 days")
        print("  Migration appears to be mostly complete")
    else:
        print(f"\n  Recent traffic: {recent_30_days_clicks} clicks in last 30 days")
        print("  Some traffic still coming to .com domain")

    print()
    print("RECOMMENDATION:")
    print("  1. Verify all .com URLs properly redirect to .ch")
    print("  2. Add solarheim.ch to Google Search Console immediately")
    print("  3. Monitor both properties during the transition period")
    print("  4. Keep .com property for historical reference")

if __name__ == "__main__":
    main()
