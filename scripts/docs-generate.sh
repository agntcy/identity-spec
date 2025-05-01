#!/bin/sh

# Copyright AGNTCY Contributors (https://github.com/agntcy)
# SPDX-License-Identifier: Apache-2.0

_=`rm -rvf ../docs || true`

cd docker && \
  docker compose -f docs-compose.yaml build --no-cache && \
  docker compose -f docs-compose.yaml run --rm -w /identity/docs/docs-src docs run.sh
docker rmi docker-docs
