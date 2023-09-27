#!/usr/bin/env bash

# default values override for dev
if [ -e openapi/server.conf ]; then
  source openapi/server.conf
fi

OUT_DIR="./src/openapi"
HOST="${HOST:-"localhost"}"
PORT="${PORT:-"8080"}"
CONTEXT_PATH="${CONTEXT_PATH:-"carrot"}"

curl "http://$HOST:$PORT/$CONTEXT_PATH/v2/api-docs" | jq > ./openapi/openapi.spec.json &&\
	java -jar /bin/openapi-generator.jar generate \
	-g typescript-angular \
	-c ./openapi/openapi.config.yaml \
	-i ./openapi/openapi.spec.json \
	-o "$OUT_DIR"

rm "$OUT_DIR/git_push.sh"
rm "$OUT_DIR/README.md"
rm "$OUT_DIR/.gitignore"
