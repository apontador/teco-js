define([
    'jquery'
], function ($) {
    'use strict';

    $.fn.countText = function (counterElement) {
        var $counter = $(counterElement),
            self = this;

        function printCounter() {
            $counter.html(self.val().length);
        }

        printCounter();

        this.on('keyup', printCounter);
    };
});
