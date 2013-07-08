define([
    'jquery'
], function ($) {
    'use strict';

    $.fn.countText = function (counterElement) {
        var $counter = $(counterElement);

        function printCounter($element, $counter) {
            $counter.html($element.val().length);
        }

        printCounter(this, $counter);

        this.on('keyup', function () {
            printCounter($(this), $counter);
        });
    };
});
