/*global describe:true, it:true, expect:true*/
require(['apontador/string/mask'], function (phoneMask) {
    'use strict';
    describe("Define phone mask",  function () {
        describe.skip("of a eight digit number",  function () {
            var eightDigitNumber = '1112345678';
            it("should define correct mask for a eight digit number", function () {
                expect(phoneMask.getDefinedMask(eightDigitNumber)).to.eql('(99) 9999-9999');
            });
        });
        describe.skip("of a nine digit number",  function () {
            var nineDigitNumber = '11123456789';
            it("should define correct mask for a nine digit number", function () {
                expect(phoneMask.getDefinedMask(nineDigitNumber)).to.eql('(99) 99999-9999');
            });
        });
        describe("of a 0900 number",  function () {
            var zeroNineNumber = '09001234567';
            it("should define correct mask for a 0900 number", function () {
                expect(phoneMask.getDefinedMask(zeroNineNumber)).to.eql('9999 99999999');
            });
        });
        describe("of a 0800 number",  function () {
            var zeroEightNumber = '08001234567';
            it("should define correct mask for a 0800 number", function () {
                expect(phoneMask.getDefinedMask(zeroEightNumber)).to.eql('9999 99999999');
            });
        });
        describe("of a 0500 number",  function () {
            var zeroFiveNumber = '05001234567';
            it("should define correct mask for a 0500 number", function () {
                expect(phoneMask.getDefinedMask(zeroFiveNumber)).to.eql('9999 99999999');
            });
        });
        describe("of a 0300 number",  function () {
            var zeroThreeNumber = '03001234567';
            it("should define correct mask for a 0300 number", function () {
                expect(phoneMask.getDefinedMask(zeroThreeNumber)).to.eql('9999 99999999');
            });
        });
    });
});