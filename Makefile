default: help

help:
	@echo help
	@echo install
	@echo test

install:
	@npm install
	@./bin/jam install

test:
	@./node_modules/.bin/jasmine-dom --runner spec/SpecRunner.html
