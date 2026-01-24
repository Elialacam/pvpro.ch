#!/bin/bash

# Cloudflare API credentials
API_EMAIL="24prontocom@gmail.com"
API_KEY="38757df236b84e6743acd98182a6912c66eed"
DESTINATION_EMAIL="localclark@gmail.com"
ACCOUNT_ID="94c5e70a8c6b36cd490547d864c20d37"

# Results file
RESULTS_FILE="/Users/claudiocronin/websites/sites/solarheim.com/email_routing_fixed_results.json"
echo '{"results": []}' > "$RESULTS_FILE"

# Function to fix email routing for a domain
fix_email_routing() {
    local domain=$1
    local zone_id=$2

    echo "=========================================="
    echo "Fixing: $domain"
    echo "Zone ID: $zone_id"
    echo "=========================================="

    # Step 1: Delete existing rules first
    echo ""
    echo "Step 1: Deleting existing rules..."
    existing_rules=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/${zone_id}/email/routing/rules" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json")

    echo "$existing_rules" | jq -r '.result[].id' | while read rule_id; do
        if [ ! -z "$rule_id" ]; then
            echo "Deleting rule: $rule_id"
            curl -s -X DELETE "https://api.cloudflare.com/client/v4/zones/${zone_id}/email/routing/rules/${rule_id}" \
                -H "X-Auth-Email: ${API_EMAIL}" \
                -H "X-Auth-Key: ${API_KEY}" \
                -H "Content-Type: application/json" | jq -c .
        fi
    done

    # Step 2: Create specific rule for info@ (higher priority)
    echo ""
    echo "Step 2: Creating specific rule (info@${domain})..."
    specific_response=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${zone_id}/email/routing/rules" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json" \
        -d "{
            \"actions\": [{
                \"type\": \"forward\",
                \"value\": [\"${DESTINATION_EMAIL}\"]
            }],
            \"matchers\": [{
                \"type\": \"literal\",
                \"field\": \"to\",
                \"value\": \"info@${domain}\"
            }],
            \"enabled\": true,
            \"name\": \"info@${domain}\",
            \"priority\": 0
        }")

    echo "$specific_response" | jq .

    # Step 3: Update catch-all rule
    echo ""
    echo "Step 3: Updating catch-all rule (*@${domain})..."
    catchall_response=$(curl -s -X PUT "https://api.cloudflare.com/client/v4/zones/${zone_id}/email/routing/rules/catch_all" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json" \
        -d "{
            \"actions\": [{
                \"type\": \"forward\",
                \"value\": [\"${DESTINATION_EMAIL}\"]
            }],
            \"matchers\": [{
                \"type\": \"all\"
            }],
            \"enabled\": true
        }")

    echo "$catchall_response" | jq .

    # Step 4: Verify rules
    echo ""
    echo "Step 4: Verifying created rules..."
    verify_response=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/${zone_id}/email/routing/rules" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json")

    echo "$verify_response" | jq .

    # Step 5: Get DNS records status
    echo ""
    echo "Step 5: Getting DNS records status..."
    dns_response=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/${zone_id}/email/routing/dns" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json")

    echo "$dns_response" | jq .

    # Compile results
    result_entry=$(jq -n \
        --arg domain "$domain" \
        --arg zone_id "$zone_id" \
        --argjson catchall "$catchall_response" \
        --argjson specific "$specific_response" \
        --argjson verify "$verify_response" \
        --argjson dns "$dns_response" \
        '{
            domain: $domain,
            zone_id: $zone_id,
            catchall_response: $catchall,
            specific_response: $specific,
            verify_response: $verify,
            dns_response: $dns
        }')

    # Append to results file
    jq ".results += [$result_entry]" "$RESULTS_FILE" > "${RESULTS_FILE}.tmp" && mv "${RESULTS_FILE}.tmp" "$RESULTS_FILE"

    echo ""
    echo "Completed: $domain"
    echo ""
    sleep 2
}

# Process each domain
fix_email_routing "surfcampuluwatu.com" "734367c731d2116ba547dbe8e79b1b67"
fix_email_routing "surflessonsbali.id" "cf73fce4bdf036e52027b6af87686b86"
fix_email_routing "surflessonscanggu.com" "93634b4517ec67720d33cb6c3c0d5955"
fix_email_routing "surflessonscangguvibes.com" "8d6a4a726015173706d765216df4b36f"
fix_email_routing "surflessonsuluwatu.com" "7860020be302e89b425c30fee8a5c1c7"
fix_email_routing "textclark.com" "2f8fb67f375601d8660aa4b87d8d8713"
fix_email_routing "textclark.xyz" "d25a082e1090676ed83e2106599f234a"
fix_email_routing "thereconquista.com" "82ec03840a8bb002ae7db24413b80c98"
fix_email_routing "saunakøbenhavn.dk" "54b7f502d0262da9c74aa65673048461"
fix_email_routing "schlüsseldienstzug.ch" "acefd117e18e57933a1fa90087365afd"
fix_email_routing "yourgptva.com" "6ce5f29ac70aa179f05fbc667727990d"

echo "=========================================="
echo "All domains fixed!"
echo "Results saved to: $RESULTS_FILE"
echo "=========================================="
