#!/bin/bash

SITEMAP="{https://xcllusivebusinessbrokers.com/business-for-sale/}"

xmllint --xpath "//loc/text()" "$SITEMAP" 2>/dev/null | grep -oE 'https?://[^/"]+' | sort -u | while read subdomain; do
    ./website_performance.sh "$subdomain"
done
