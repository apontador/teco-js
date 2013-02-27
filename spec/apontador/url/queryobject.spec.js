/*global describe, it, expect, beforeEach*/
require(['apontador/url/queryobject'], function (QueryObject) {
    'use strict';
    describe("Url QueryObject",  function () {
        var url = "http://site.com/level?_param1=similar&param1=value1&param2=value2#hash",
            queryObject = new QueryObject(url);

        it("should can get a parameter from URL", function () {
            expect(queryObject.get("param1")).to.eql('value1');
        });
        it("should can get another parameter from URL", function () {
            expect(queryObject.get("param2")).to.eql('value2');
        });
        it("should can change a parameter from URL", function () {
            expect(queryObject.get("param1")).to.eql('value1');
            queryObject.set("param1", "newValue1");
            expect(queryObject.get("param1")).to.eql('newValue1');
        });
        it("should not mismatch similar parameters", function () {
            expect(queryObject.get("param1")).to.not.be(queryObject.get("_param1"));
            queryObject.set("param1", "foobar");
            expect(queryObject.get("_param1")).to.not.be("foobar");
        });
        it("should get an entire hash", function () {
            expect(queryObject.getHash()).to.eql('hash');
        });
        it("should set an entire hash", function () {
            expect(queryObject.getHash()).to.eql('hash');
            queryObject.setHash('harlemshake');
            expect(queryObject.getHash()).to.eql('harlemshake');
        });
        it("should can get a new query string after change a parameter from URL", function () {
            queryObject.set("param1", "newValue1");
            queryObject.setHash('hash');
            expect(queryObject.toString()).to.eql(
                '?_param1=similar&param1=newValue1&param2=value2#hash'
            );
        });
        it("should run without hash", function () {
            queryObject = new QueryObject("?q=jumanji&t=related");

            queryObject.set('q', 'foobar');
            expect(queryObject.get('q')).to.eql('foobar');
            expect(queryObject.toString()).to.eql(
                '?q=foobar&t=related'
            );
        });
    });
});
