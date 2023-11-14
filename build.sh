#!/usr/bin/env bash
# exit on error
set -o errexit

npm i
npm run build
mkdir dist/state
echo '[]' > dist/state/conversationState.json