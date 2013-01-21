require(['apontador/polyfill/placeholder'], function(placeholderPolyfill) {
    'use strict';

    describe('Placeholder polyfill', function () {

        it('should support when input attribute placeholder exists', function () {

            placeholderPolyfill();

            var input = document.getElementById('inputTest'),
                inoutPlaceholder = input.getAttribute('placeholder'),
                inputValue = input.value;

            expect(inoutPlaceholder).to.eql(inputValue);
        });

    });

});