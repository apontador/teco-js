/*global beforeEach, afterEach*/
require([
    'jquery',
    'apontador/jquery/limitText'
], function ($) {
    'use strict';

    describe('jQuery.limitText Plugin', function () {
        describe('when the text is shorther than the limit', function () {
            it('should not limit the text', function () {
                var $el = $('<p data-limit="21">a 20 characters text</p>');
                $el.limitText();
                expect($el.html()).to.eql('a 20 characters text');
            });
        });

        describe('when the text is larger than the limit', function () {
            it('should limit the text', function () {
                var $el = $('<p data-limit="19">a 20 characters text</p>');
                $el.limitText();
                expect($el.html()).to.match(/.*a 20 characters tex\.\.\..*/);
            });

            it('should wrap the text with an element', function () {
                var $el = $('<p data-limit="15">a 20 characters text</p>');
                $el.limitText();
                expect($el.html()).to.match(/^<span class="summary">.*<\/span>.*/);
            });

            it('should add a label to the text', function () {
                var $el = $('<p data-limit="15" data-label="more">a 20 characters text</p>');
                $el.limitText();
                expect($el.html()).to.match(
                    /<a href="#" title="more">more <small>▼<\/small><\/a>$/
                );
            });

            it('should expand the text when the label is clicked', function () {
                var $el = $('<p data-limit="15" data-label="more">a 20 characters text</p>');
                $el.limitText();
                $el.find('a').click();
                expect($el.html()).to.eql(
                    'a 20 characters text'
                );
            });
        });

        describe('when there\'s more than one element in the page', function () {
            var $el1,
                $el2;

            beforeEach(function () {
                $el1 = $('<p data-limit="15" data-label="more" class="limit">a 20 characters text</p>');
                $el2 = $('<p data-limit="21" data-label="more" class="limit">a 20 characters text</p>');
                $('body').append($el1).append($el2);
            });

            afterEach(function () {
                $el1.remove();
                $el2.remove();
            });

            it('should apply its rules to each element', function () {
                $('.limit').limitText();
                expect($el1.html()).to.match(/.*a 20 characters\.\.\..*/);
                expect($el2.html()).to.eql('a 20 characters text');
            });
        });
    });
});


