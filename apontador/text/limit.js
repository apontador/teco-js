define(function () {
    'use strict';

    return function (text, limit, concat) {
        var textLimited = false;
        if (!limit) {
            limit = 10;
        }
        if (!concat) {
            concat = '...';
        }

        if (text) {
            textLimited = text;
        }

        if (textLimited) {
            if (textLimited.length > limit) {
                textLimited = text.substr(0, limit);
                textLimited += concat;
            }
        }
        return textLimited;
    };
});
