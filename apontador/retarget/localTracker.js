/*global define, jQuery*/
define(['jquery.cookie'], function () {
    'use strict';

    var COOKIE_ID = 'critGA',
        $ = jQuery;

    return {
        'getCriteria': function () {
            try {
                return JSON.parse($.cookie(COOKIE_ID));
            } catch(e) {
                return {};
            }
        }
    };
});
