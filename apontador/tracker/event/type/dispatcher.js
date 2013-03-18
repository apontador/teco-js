/*global define, jQuery*/
define(
    ['jquery'],
    function () {
        'use strict';

        var $ = jQuery,
            handlers;

        handlers = {
            'view': function ($element, callback) {
                if ($element.length) {
                    callback();
                }
            },
            'click': function ($element, callback) {
                $element.on('click', callback);
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
