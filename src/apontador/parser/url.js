'use strict';
function poi(location) {
    return location.pathname.match(
            /* http://rubular.com/r/krk2gW1pcK */
            /\/local\/(\w{2})\/(\w+)\/.*?\/.*?\/(\w+)\.html/
    );
}
