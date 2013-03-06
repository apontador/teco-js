/*global describe:true, it:true, expect:true */
require(['apontador/phone/mask'], function (phoneMask) {
    'use strict';
    describe("Define phone mask",  function () {
        describe("of a eight digit number",  function () {
            var eightDigitNumber = '1112345678';
            it("should define correct mask for a eight digit number", function () {
                expect(phoneMask.getDefinedMask(eightDigitNumber)).toBe('(99) 9999-9999');
            });
        });
        describe("of a nine digit number",  function () {
            var nineDigitNumber = '11123456789';
            it("should define correct mask for a nine digit number", function () {
                expect(phoneMask.getDefinedMask(nineDigitNumber)).toBe('(99) 99999-9999');
            });
        });
        describe("of a 0900 number",  function () {
            var zeroNineNumber = '09001234567';
            it("should define correct mask for a 0900 number", function () {
                expect(phoneMask.getDefinedMask(zeroNineNumber)).toBe('(9999) 999-9999');
            });
        });
        describe("of a 0800 number",  function () {
            var zeroEightNumber = '08001234567';
            it("should define correct mask for a 0800 number", function () {
                expect(phoneMask.getDefinedMask(zeroEightNumber)).toBe('(9999) 999-9999');
            });
        });
        describe("of a 0500 number",  function () {
            var zeroFiveNumber = '05001234567';
            it("should define correct mask for a 0500 number", function () {
                expect(phoneMask.getDefinedMask(zeroFiveNumber)).toBe('(9999) 999-9999');
            });
        });
        describe("of a 0300 number",  function () {
            var zeroThreeNumber = '03001234567';
            it("should define correct mask for a 0300 number", function () {
                expect(phoneMask.getDefinedMask(zeroThreeNumber)).toBe('(9999) 999-9999');
            });
        });
    });
});