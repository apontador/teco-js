define(
    function () {
        'use strict';
        function changeHash(value, title) {
            var title = title || document.title;
            if (history.pushState) {
                history.pushState(null, null, value);
            } else {
                location.hash = value;
            }
            document.title = title;
        }
        return changeHash;
    }
);
