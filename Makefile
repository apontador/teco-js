BIN_DIR = node_modules/.bin/
GRUNT_CLI = $(BIN_DIR)grunt
SPEC_RUNNER = $(GRUNT_CLI) mocha:

default: help

help:
	@echo help
	@echo install
	@echo test
	@echo build

bower:
	$(BIN_DIR)bower install

npm:
	npm install

install: npm bower

lint:
	$(BIN_DIR)jshint \
		apontador/**/* \
		spec/**/*

spectest:
	$(SPEC_RUNNER)spec

dottest:
	$(SPEC_RUNNER)test

test: lint spectest

ci: install test

clean:
	rm -rf node_modules components

build:
	bin/r.js -o ../build.js
