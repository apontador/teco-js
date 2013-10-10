define(function () {
    'use strict';

    return function (type, name, attributes) {
        /*global _gaq*/
        /*jshint nomen:false, camelcase:false*/
        if (type !== 'click') {
            return;
        }

        switch (name) {
        case 'track_click':
            _gaq.push(['_trackEvent', attributes.name, attributes.value]);
            break;
        }
    };
});
