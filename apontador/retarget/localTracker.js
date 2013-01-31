/*global define, jQuery*/
define(['jquery.cookie'], function () {
    'use strict';

    var COOKIE_ID = 'critGA',
        $ = jQuery;

    return {
        'getCriteria': function () {
            return JSON.parse($.cookie(COOKIE_ID));
        }
    };
});
