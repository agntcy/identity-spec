#!/bin/bash

npm install && npx docusaurus generate-proto-docs && npm run build && mv build ../docs
