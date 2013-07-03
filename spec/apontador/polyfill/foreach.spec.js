require(['apontador/polyfill/foreach'], function () {
    'use strict';

    describe('forEach crossbrowser',  function () {

        var fixture;

        before(function () {
            fixture = ['a', 'b', 'c'];
        });

        it('should have method foreach as instance of Array object', function () {
            expect(Array.prototype.forEach).to.be.a('function');
        });

        it('should have a new array with the method foreach', function () {
            expect(fixture.forEach).to.be.a('function');
        });

        it('should throw error if callback is not a function', function () {
            expect(function () {
                fixture.forEach('a');
            }).to.throwError();
        });

        it('should callback for each array element', function () {
            var callback = sinon.spy();

            fixture.forEach(callback);

            expect(callback.callCount).to.be(fixture.length);
        });

    });

});
