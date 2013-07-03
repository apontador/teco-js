COMPONENTS_DIR = components/
MODULES_DIR = node_modules/
BIN_DIR = $(MODULES_DIR).bin/

default: help

help:
	@echo help
	@echo install
	@echo jscomponents
	@echo test
	@echo clean

npm:
	@npm install
bower:
	@bower install
jscomponents:
	@grunt install

install: npm jscomponents

test:
	@grunt test

clean:
	rm -rf $(COMPONENTS_DIR) $(MODULES_DIR)
env:
	@npm install -g grunt-cli bower
