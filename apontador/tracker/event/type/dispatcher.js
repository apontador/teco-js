/*global define, jQuery*/
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
                if (!handlers.hasOwnProperty(type)) {
                    throw new TypeError(
                        'Event type "' + type + '" is not available'
                    );
                }
                handlers[type](selector, callback);
            }
        };
    }
);
