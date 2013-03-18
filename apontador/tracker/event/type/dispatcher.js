/*global define*/
define(function () {
    'use strict';

    var handlers = {
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
});
