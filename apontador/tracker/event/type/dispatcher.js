/*global define, jQuery*/
define(
    ['jquery'],
    function () {
        'use strict';

        var handlers = {
            'view': function ($element, callback) {
                $element.each(function () {
                    callback(jQuery(this));
                });
            },
            'click': function ($element, callback) {
                $element.one('click', function (event) {
                    callback(jQuery(event.currentTarget));
                });
            }
        };

        return {
            'dispatch': function (type, $element, callback) {
                if (!handlers.hasOwnProperty(type)) {
                    throw new TypeError(
                        'Event type "' + type + '" is not available'
                    );
                }
                handlers[type]($element, callback);
            }
        };
    }
);
