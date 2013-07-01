require([
    'apontador/text/limit'
], function (limit) {
    'use strict';

    describe('Limit Text', function () {
        it('should not add an ellipsis to a text shorter than the limit', function () {
            var text = limit('aaa', 4);
            expect(text).to.eql('aaa');
        });

        it('should not add an ellipsis to a text equal to the limit', function () {
            var text = limit('aaaa', 4);
            expect(text).to.eql('aaaa');
        });

        it('should add an ellipsis to a text larger than the limit', function () {
            var text = limit('aaaaa', 4);
            expect(text).to.eql('aaaa...');
        });
        it('should accept a custom ellipsis', function () {
            var text = limit('aaaaa', 4, ' >> more');
            expect(text).to.eql('aaaa >> more');
        });

        it('should return the entire text when no limit is given', function () {
            var text = limit('aaaaaaaaaaa');
            expect(text).to.eql('aaaaaaaaaaa');
        });

        it('should throw an Error when text isn\'t given', function () {
            expect(function () {
                limit();
            }).to.throwError('The text argument of limit wasn\'t given or isn\'t a string');
        });
    });
});

