/*global define, jQuery*/
define(['jquery.cookie'], function () {
    'use strict';

    var COOKIE_ID = 'critGA',
        $ = jQuery;

    return {
        'getCriteria': function () {
            var criteria;
            try {
                criteria = JSON.parse($.cookie(COOKIE_ID));
            } catch (e) {
            }

            return criteria || {};
        }
    };
});
