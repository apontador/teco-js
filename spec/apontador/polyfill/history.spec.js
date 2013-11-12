require(['apontador/polyfill/history'], function (changeHash) {
    'use strict';

    describe('History crossbrowser',  function () {
        var hash = window.location.hash,
            title = document.title;

        it('Should change the page url', function () {
            changeHash('#foo');
            expect(hash).not.to.equal(window.location.hash);
        });

        it('Should not change the title if not pass a new title', function () {
            changeHash('#foo');
            expect(title).to.equal(document.title);
        });

        it('Should change the title if over a title', function () {
            changeHash('#foo', 'Foo Bar');
            expect(title).not.to.equal(document.title);
        });
    });

});
