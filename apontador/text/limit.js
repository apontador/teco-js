define(function () {
    'use strict';

    return function (text, limit, ellipsis) {
        if (typeof text !== 'string') {
            throw new TypeError(
                'The text argument of limit wasn\'t given or isn\'t a string'
            );
        }

        if (!limit) {
            return text;
        }

        if (!ellipsis) {
            ellipsis = '...';
        }

        if (text.length > limit) {
            text = text.substr(0, limit);
            text += ellipsis;
        }
        return text;
    };
});
