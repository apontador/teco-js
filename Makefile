COMPONENTS_DIR = components/
MODULES_DIR = node_modules/
BIN_DIR = $(MODULES_DIR).bin/
GRUNT_CLI = $(BIN_DIR)grunt

default: help

help:
	@echo help
	@echo install
	@echo jscomponents
	@echo test
	@echo clean

npm:
	npm install

jscomponents:
	$(GRUNT_CLI) install

install: npm jscomponents

test:
	$(GRUNT_CLI) test

clean:
	rm -rf $(COMPONENTS_DIR) $(MODULES_DIR)
