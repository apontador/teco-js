require(['apontador/polyfill/placeholder','apontador/browser/event'], function(placeholderPolyfill, eventEmitter) {
    'use strict';

    describe('Placeholder polyfill', function () {

        var input;

        before(function(){
            input = document.getElementById('inputTest');
            placeholderPolyfill();
        });

        it('should input have same value of placeholder attribute', function () {
            expect(input.value).to.not.be.empty();
            expect(input.value).to.eql(input.getAttribute('placeholder'));
        });

        it('should not put placeholder when the input is filled', function () {
            var expected = 'foobar';

            eventEmitter.emit('click',input);
            input.value = expected;
            eventEmitter.emit('blur',input);

            expect(input.value).not.to.equal(input.getAttribute('placeholder'));
            expect(input.value).to.eql(expected);
        });

        it('should insert placeholder when input value is empty', function () {

            eventEmitter.emit('click',input);
            input.value = '';
            eventEmitter.emit('blur',input);

            expect(input.value).to.not.be.empty();
            expect(input.value).to.eql(input.getAttribute('placeholder'));
        });

        it('should not remove css old classes', function () {

            eventEmitter.emit('click',input);
            input.className = "first";
            eventEmitter.emit('blur',input);

            expect(input.className).to.eql('first placeholder-on');
        });


    });

});