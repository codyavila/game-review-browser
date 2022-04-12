#!/bin/bash
TOKEN="d03c204b8157f6c4960cc5c0c1f141b8"

API="http://localhost:4741"
URL_PATH="/sign-out"

curl "${API}${URL_PATH}/" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
