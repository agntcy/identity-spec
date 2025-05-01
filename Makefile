# Copyright AGNTCY Contributors (https://github.com/agntcy)
# SPDX-License-Identifier: Apache-2.0
.PHONY: do_generate_docs

do_generate_docs:
	cd scripts && ./docs-generate.sh
	@echo "Generated docs"

generate: do_generate_docs
