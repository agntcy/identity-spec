#!/bin/bash

npm install --legacy-peer-deps && npx docusaurus generate-proto-docs && npm run build && mv build ../docs
