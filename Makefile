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

test:
	npm test

spectest:
	$(SPEC_RUNNER)spec

dottest:
	$(SPEC_RUNNER)test

build:
	bin/r.js -o ../build.js

clean:
	rm -rf components node_modules
