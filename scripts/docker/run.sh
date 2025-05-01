#!/bin/bash

# Copyright AGNTCY Contributors (https://github.com/agntcy)
# SPDX-License-Identifier: Apache-2.0

yarn install && yarn generate-docs && yarn run build && mv build ../docs
