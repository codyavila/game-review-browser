#!/bin/bash

API="http://localhost:4741"
URL_PATH="/game"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
