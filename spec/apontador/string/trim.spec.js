require(['apontador/string/trim'], function () {
    'use strict';

    describe("Trim crossbrowser",  function () {

        var expected = 'foo bar';

        it('should wipe spaces at end', function () {
            expect('foo bar '.trim()).to.eql(expected);
        });

        it('should wipe spaces at beginning', function () {
            expect(' foo bar'.trim()).to.eql(expected);
        });

        it('should wipe spaces at both end and beginning', function () {
            expect('   foo bar    '.trim()).to.eql(expected);
        });

    });

});