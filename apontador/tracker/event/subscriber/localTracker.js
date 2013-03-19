/*global localTracker, define, poiId*/
define(function () {
    'use strict';

    function trackUtility(type, attributes) {
        localTracker.trackEvent(
            type + '_utility_type',
            attributes.type
        );
        localTracker.trackEvent(
            type + '_utility_partner',
            attributes.partner
        );
    }

    function track(type, name, attributes) {
        var event_dictionary = {
                'click': {
                    'phone': {
                        'event': 'see_phone',
                        'attribute': 'placeId'
                    },
                    'site': {
                        'event': 'go_to_site',
                        'attribute': 'placeId'
                    },
                    'toggle_description': {
                        'event': 'description',
                        'attribute': 'placeId'
                    },
                    'share': {
                        'event': 'share',
                        'attribute': 'type' //email, twitter, facebook
                    },
                    'thumbs': {
                        'event': 'thumbs',
                        'attribute': 'type' // up, down
                    },
                    'photo_upload': {
                        'event': 'send_photo',
                        'attribute': 'type'
                    },
                    'helpful_review': {
                        'event': 'helpful_review',
                        'attribute': 'placeId'
                    },
                    'embed_map': {
                        'event': 'maplink_widget',
                        'attribute': 'placeId'
                    },
                }
            },
            data;

        if (!event_dictionary.hasOwnProperty(type)
                || !event_dictionary[type].hasOwnProperty(name)) {
            return;
        }

        data = event_dictionary[type][name];
        localTracker.trackEvent(data.event, attributes[data.attribute]);
    }

    return function (type, name, attributes) {
        if (name === 'utility') {
            trackUtility(type, attributes);
        } else {
            track(type, name, attributes);
        }
    };
});
