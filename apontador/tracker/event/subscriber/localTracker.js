/*global localTracker, define, poiId*/
define(function () {
    'use strict';

    return function (type, name, attribues) {
        var event_dictionary = {
            'view': {
                'utility': 'SHOW_UTILITY'
            },
            'click': {
                'phone': 'SEE_PHONE',
                'site': 'GO_TO_SITE',
                'email': 'SHARE_EMAIL',
                'toggle_description': 'DESCRIPTION',
                'facebook_button': 'SHARE_FACEBOOK',
                'twitter_button': 'SHARE_TWITTER',
                'thumbs_up': 'THUMBS_UP',
                'thumbs_down': 'THUMBS_DOWN',
                'photo_upload': 'SEND_PHOTO',
                'helpful_review': 'HELPFUL_REVIEW',
                'utility': 'CLICK_UTILITY',
                'embed_map': 'MAPLINK_WIDGET'
            }
        };

        if (!event_dictionary.hasOwnProperty(type)
                || !event_dictionary[type].hasOwnProperty(name)) {
            return;
        }

        localTracker.trackEvent(event_dictionary[type][name], poiId);
    };
});
