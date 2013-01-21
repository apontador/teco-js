require(['apontador/polyfill/placeholder'], function(placeholderPolyfill) {
    'use strict';

    describe('Placeholder polyfill', function () {

        it('should support when input attribute placeholder exists', function () {
            var input = document.createElement('input');

            placeholderPolyfill();
            input.should.have.property('placeholder');
        });

    });

});