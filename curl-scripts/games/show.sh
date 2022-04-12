#!/bin/sh
ID="6255c5e14a01a057eaa33e63"
API="http://localhost:4741"
URL_PATH="/game"
TOKEN="b3faf8a0ee13c961aee48f18c4cb9656"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo
