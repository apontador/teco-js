/*global describe, it, expect, before */
require(['apontador/parser/querystring'], function (QueryObject) {
    'use strict';

    describe("Url QueryString parser",  function () {

        describe('with previous params', function () {
            var url, queryObject;

            before(function () {
                url = "http://site.com/level?_param1=similar&param1=value1&param2=value2",
                queryObject = new QueryObject(url);
            });

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

            it("should get a full query string after change a parameter from URL", function () {
                queryObject.set("param1", "newValue1");
                expect(queryObject.toString()).to.eql(
                    '?_param1=similar&param1=newValue1&param2=value2'
                );
            });

        });

        describe('with previous params and some empty params', function () {
            var url, queryObject;

            before(function () {
                url = "http://site.com/level?_param1=&param1=value1&param2=value2",
                queryObject = new QueryObject(url);
            });

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

            it("should get a full query string after change a parameter from URL", function () {
                queryObject.set("param1", "newValue1");
                expect(queryObject.toString()).to.eql(
                    '?param1=newValue1&param2=value2'
                );
            });

        });

        describe('with hash', function () {
            var url, queryObject;

            before(function () {
                url = "http://site.com/level?_param1=similar&param1=value1#hash",
                queryObject = new QueryObject(url);
            });

            it("should get an entire hash", function () {
                expect(queryObject.getHash()).to.eql('hash');
            });

            it("should set an entire hash", function () {
                expect(queryObject.getHash()).to.eql('hash');
                queryObject.setHash('harlemshake');
                expect(queryObject.getHash()).to.eql('harlemshake');
            });

            it("should get a full query string after change a parameter from URL", function () {
                queryObject.set("param1", "newValue1");
                queryObject.setHash('hash');
                expect(queryObject.toString()).to.eql(
                    '?_param1=similar&param1=newValue1#hash'
                );
            });
        });

        describe('run with a single url without param', function () {
            var url = [], queryObject = [];

            before(function () {
                url[0] = "http://site.com",
                url[1] = "http://site.com/";

                for (var i = 0; i < url.length; i++) {
                    queryObject[i] = new QueryObject(url[i]);
                }
            });

            it("should set a param when a url without slash is empty", function () {
                queryObject[0].set('q', 'foobar');
                expect(queryObject[0].toString()).to.eql(
                    '?q=foobar'
                );
            });

            it("should set a param when a url with slash is empty", function () {
                queryObject[1].set('q', 'foobar');
                expect(queryObject[1].toString()).to.eql(
                    '?q=foobar'
                );
            });
        });


    });
});
