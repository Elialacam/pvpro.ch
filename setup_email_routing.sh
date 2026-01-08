#!/bin/bash

# Cloudflare API credentials
API_EMAIL="24prontocom@gmail.com"
API_KEY="38757df236b84e6743acd98182a6912c66eed"
DESTINATION_EMAIL="localclark@gmail.com"
ACCOUNT_ID="94c5e70a8c6b36cd490547d864c20d37"

# Results file
RESULTS_FILE="/Users/claudiocronin/websites/sites/solarheim.com/email_routing_results.json"
echo '{"results": []}' > "$RESULTS_FILE"

# Function to setup email routing for a domain
setup_email_routing() {
    local domain=$1
    local zone_id=$2

    echo "=========================================="
    echo "Processing: $domain"
    echo "Zone ID: $zone_id"
    echo "=========================================="

    # Step 1: Enable Email Routing
    echo ""
    echo "Step 1: Enabling Email Routing..."
    enable_response=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${zone_id}/email/routing/enable" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json")

    echo "$enable_response" | jq -c .

    # Step 2: Get or create destination address
    echo ""
    echo "Step 2: Adding destination address..."
    dest_response=$(curl -s -X POST "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/email/routing/addresses" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json" \
        -d "{\"email\":\"${DESTINATION_EMAIL}\"}")

    echo "$dest_response" | jq -c .

    # Step 3: List destination addresses to get the ID
    echo ""
    echo "Step 3: Getting destination address ID..."
    dest_list=$(curl -s -X GET "https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/email/routing/addresses" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json")

    destination_id=$(echo "$dest_list" | jq -r ".result[] | select(.email==\"${DESTINATION_EMAIL}\") | .id")
    echo "Destination ID: $destination_id"

    if [ -z "$destination_id" ]; then
        echo "ERROR: Could not get destination ID"
        return 1
    fi

    # Step 4: Create catch-all rule
    echo ""
    echo "Step 4: Creating catch-all rule (*@${domain})..."
    catchall_response=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${zone_id}/email/routing/rules/catch_all" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json" \
        -d "{\"actions\":[{\"type\":\"forward\",\"value\":[\"${destination_id}\"]}],\"matchers\":[{\"type\":\"all\"}],\"enabled\":true}")

    echo "$catchall_response" | jq -c .

    # Step 5: Create specific rule for info@
    echo ""
    echo "Step 5: Creating specific rule (info@${domain})..."
    specific_response=$(curl -s -X POST "https://api.cloudflare.com/client/v4/zones/${zone_id}/email/routing/rules" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json" \
        -d "{\"actions\":[{\"type\":\"forward\",\"value\":[\"${destination_id}\"]}],\"matchers\":[{\"type\":\"literal\",\"field\":\"to\",\"value\":\"info@${domain}\"}],\"enabled\":true,\"name\":\"info@${domain}\",\"priority\":0}")

    echo "$specific_response" | jq -c .

    # Step 6: Get DNS records needed
    echo ""
    echo "Step 6: Getting DNS records status..."
    dns_response=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/${zone_id}/email/routing/dns" \
        -H "X-Auth-Email: ${API_EMAIL}" \
        -H "X-Auth-Key: ${API_KEY}" \
        -H "Content-Type: application/json")

    echo "$dns_response" | jq -c .

    # Compile results
    result_entry=$(jq -n \
        --arg domain "$domain" \
        --arg zone_id "$zone_id" \
        --argjson enable "$enable_response" \
        --argjson catchall "$catchall_response" \
        --argjson specific "$specific_response" \
        --argjson dns "$dns_response" \
        '{
            domain: $domain,
            zone_id: $zone_id,
            enable_response: $enable,
            catchall_response: $catchall,
            specific_response: $specific,
            dns_response: $dns
        }')

    # Append to results file
    jq ".results += [$result_entry]" "$RESULTS_FILE" > "${RESULTS_FILE}.tmp" && mv "${RESULTS_FILE}.tmp" "$RESULTS_FILE"

    echo ""
    echo "Completed: $domain"
    echo ""
    sleep 1
}

# Process each domain
setup_email_routing "surfcampuluwatu.com" "734367c731d2116ba547dbe8e79b1b67"
setup_email_routing "surflessonsbali.id" "cf73fce4bdf036e52027b6af87686b86"
setup_email_routing "surflessonscanggu.com" "93634b4517ec67720d33cb6c3c0d5955"
setup_email_routing "surflessonscangguvibes.com" "8d6a4a726015173706d765216df4b36f"
setup_email_routing "surflessonsuluwatu.com" "7860020be302e89b425c30fee8a5c1c7"
setup_email_routing "textclark.com" "2f8fb67f375601d8660aa4b87d8d8713"
setup_email_routing "textclark.xyz" "d25a082e1090676ed83e2106599f234a"
setup_email_routing "thereconquista.com" "82ec03840a8bb002ae7db24413b80c98"
setup_email_routing "saunakøbenhavn.dk" "54b7f502d0262da9c74aa65673048461"
setup_email_routing "schlüsseldienstzug.ch" "acefd117e18e57933a1fa90087365afd"
setup_email_routing "yourgptva.com" "6ce5f29ac70aa179f05fbc667727990d"

echo "=========================================="
echo "All domains processed!"
echo "Results saved to: $RESULTS_FILE"
echo "=========================================="
