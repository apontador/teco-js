default: help

help:
	@echo help
	@echo install
	@echo compile
	@echo clean

install:
	@npm install
	@./node_modules/.bin/jam install

compile:
	@./node_modules/.bin/jam compile \
		-i src/apontador/parser/url.js \
		-i src/apontador/tracker/gm.js \
		-o compiled/gmTracker.js

clean:
	@rm -v compiled/*.js
