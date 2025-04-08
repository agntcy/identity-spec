#!/bin/bash

yarn install && npx docusaurus generate-proto-docs && yarn run build && mv build ../docs
