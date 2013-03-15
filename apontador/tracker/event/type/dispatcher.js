define(
    ['jquery'],
    function () {
        'use strict';

        var $ = jQuery,
            handlers;

        handlers = {
            'view': function (selector, callback) {
                var $target = $(selector);

                if ($target.length) {
                    callback();
                }
            }
        };

        return {
            'dispatch': function (type, selector, callback) {
                handlers[type](selector, callback);
            }
        };
    }
);
