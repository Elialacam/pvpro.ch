#!/bin/bash
set -e

# Post-merge setup: keep dependencies in sync after task merges.
npm install --no-audit --no-fund
