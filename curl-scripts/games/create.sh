#!/bin/bash

TITLE="TEST"
DESCRIPTION="TEST"
RATING="TEST"
TOKEN="b3faf8a0ee13c961aee48f18c4cb9656"

API="http://localhost:4741"
URL_PATH="/game"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "game": {
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "rating": "'"${RATING}"'"
    }
  }'

echo
