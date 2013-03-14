/*global describe, it, expect, afterEach, document*/
require(
    ['apontador/retarget/localTracker'],

    function (localRetarget) {
        'use strict';

        describe("LocalTracker Retarget", function () {

            afterEach(function () {
                document.cookie = "";
            });

            it("should get a criteria object", function () {
                var set;

                document.cookie = "";
                set = localRetarget.getCriteria();
                expect(set).to.be.an(Object);
            });

            it("should parse the JSON object of the cookie", function () {
                var set;
                document.cookie = "critGA=" + JSON.stringify({'foo': 1});
                set = localRetarget.getCriteria();
                expect(set.foo).to.eql(1);
            });

            it("should not break trying to parse a malformatted JSON", function () {
                var set;
                document.cookie = "critGA=malformatted";
                set = localRetarget.getCriteria();
                expect(set).to.eql({});
            });
        });
    }
);
