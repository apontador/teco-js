/*global describe:true, it:true, expect:true*/
require(['apontador/parser/url'], function (urlParser) {
    'use strict';
    describe("Url Parser",  function () {
        describe("with a poi url",  function () {
            var poi, pathname;
            pathname = "/local/pr/campo_largo/automoveis_e_veiculos/222Z836E/concessionaria_gm___spack__oa_.html";
            poi = urlParser.poi(pathname);

            it("should get poi state", function () {
                expect(poi.state).to.eql('pr');
            });
            it("should get poi city", function () {
                expect(poi.city).to.eql('campo largo');
            });
            it("should get poi name", function () {
                expect(poi.name).to.eql('concessionaria gm spack oa');
            });
        });
        describe("with an invalid url",  function () {
            var poi, pathname;
            pathname = "/local/search.html";
            poi = urlParser.poi(pathname);

            it("should get empty poi state", function () {
                expect(poi.state).to.eql('');
            });
            it("should get empty poi city", function () {
                expect(poi.city).to.eql('');
            });
            it("should get empty poi name", function () {
                expect(poi.name).to.eql('');
            });
        });
    });
});
