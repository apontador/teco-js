define(function () {
    'use strict';

    return function (text, limit, concat) {
        var text_limited = false;
        if (!limit) {
            limit = 10;
        }
        if (!concat) {
            concat = "...";
        }

        if (text) {
            text_limited = text;
        }

        if (text_limited) {
            if (text_limited.length > limit) {
                text_limited = text.substr(0, limit);
                text_limited += concat;
            }
        }
        return text_limited;
    };
});
