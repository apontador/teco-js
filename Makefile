default: help

help:
	@echo help
	@echo install
	@echo test
	@echo build

install:
	npm install

test:
	open spec/SpecRunner.html

build:
	bin/r.js -o ../build.js
