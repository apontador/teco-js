BIN_DIR = node_modules/.bin/
GRUNT_CLI = $(BIN_DIR)grunt
SPEC_RUNNER = $(GRUNT_CLI) mocha:

default: help

help:
	@echo help
	@echo install
	@echo test
	@echo build

install:
	npm install
	$(BIN_DIR)bower install

lint:
	$(BIN_DIR)jshint \
		apontador/**/* \
		spec/**/*

spectest:
	$(SPEC_RUNNER)spec

dottest:
	$(SPEC_RUNNER)test

test: lint spectest

build:
	bin/r.js -o ../build.js
