require(['apontador/polyfill/placeholder', 'apontador/browser/event'], function (placeholderPolyfill, eventEmitter) {
    'use strict';

    describe('Placeholder polyfill', function () {

        var input;

        before(function () {
            input = document.getElementById('inputTest');
            placeholderPolyfill();
        });

        it('should input have same value of placeholder attribute', function () {
            expect(input.value).to.not.be.empty();
            expect(input.value).to.eql(input.attributes.placeholder.value);
        });

        it('should not put placeholder when the input is filled', function () {
            var expected = 'foobar';

            eventEmitter.emit('focus', input);
            input.value = expected;
            eventEmitter.emit('blur', input);

            expect(input.value).not.to.equal(input.attributes.placeholder.value);
            expect(input.value).to.eql(expected);
        });

        it('should insert placeholder when input value is empty', function () {

            eventEmitter.emit('focus', input);
            input.value = '';
            eventEmitter.emit('blur', input);

            expect(input.value).to.not.be.empty();
            expect(input.value).to.eql(input.attributes.placeholder.value);
        });


        it('should remove placeholder css class when a input is selected', function () {

            eventEmitter.emit('focus', input);

            expect(input.className).to.not.contain('placeholder-on');
        });

        it('should not remove css old classes', function () {

            eventEmitter.emit('blur', input);

            expect(input.className).to.contain('placeholder-on');
            expect(input.className).to.contain('default');
        });


    });

});