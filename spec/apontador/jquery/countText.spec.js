require([
    'apontador/jquery/countText'
], function () {
    'use strict';

    describe('jQuery.countText Plugin', function () {
        var $inputField,
            $textareaField,
            $inputCounter,
            $textareaCounter,
            twentyCharacthersText = 'aaaaaaaaaaaaaaaaaaaa';

        beforeEach(function () {
            $inputField = $('<input type="text" value="" />');
            $textareaField = $('<textarea></textarea>');

            $inputCounter = $('<div class="inputCounter"></div>');
            $textareaCounter = $('<div class="textareaCounter"></div>');
        });

        afterEach(function () {
            $inputField.remove();
            $textareaField.remove();
            $inputCounter.remove();
            $textareaCounter.remove();
        });

        it('should print the text length in the counter element', function () {
            $inputField.val(twentyCharacthersText);
            $inputField.countText($inputCounter);

            $textareaField.val(twentyCharacthersText);
            $textareaField.countText($textareaCounter);

            expect($inputCounter.html()).to.eql(20);
            expect($textareaCounter.html()).to.eql(20);
        });

        it('should update the counter when a key is up', function () {
            $inputField.val(twentyCharacthersText);
            $inputField.countText($inputCounter);

            $inputField.val($inputField.val() + 'b');
            $inputField.trigger('keyup');

            expect($inputCounter.html()).to.eql(21);
        });
    });
});
