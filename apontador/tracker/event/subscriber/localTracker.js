/*global localTracker, define*/
define(function () {
    'use strict';
    var event_dictionary = {
            'view': {
                'utility': {
                    'event': 'view_utility',
                    'use': ['type', 'partner']
                },
                'search_result_item': {
                    'event': 'show_organic_ad',
                    'use': ['place_id']
                },
                'search_result_first_item': {
                    'event': 'show_first_position_ad',
                    'use': ['place_id']
                },
                'sponsored_result_item': {
                    'event': 'show_sponsored_ad',
                    'use': ['place_id']
                }
            },
            'click': {
                'phone': {
                    'event': 'see_phone',
                    'use': ['place_id']
                },
                'site': {
                    'event': 'go_to_site',
                    'use': ['place_id']
                },
                'toggle_description': {
                    'event': 'description',
                    'use': ['place_id']
                },
                'share': {
                    'event': 'share',
                    'use': ['type'] //email, twitter, facebook
                },
                'thumbs': {
                    'event': 'thumbs',
                    'use': ['type'] // up, down
                },
                'photo_upload': {
                    'event': 'send_photo',
                    'use': ['place_id']
                },
                'helpful_review': {
                    'event': 'helpful_review',
                    'use': ['place_id']
                },
                'embed_map': {
                    'event': 'maplink_widget',
                    'use': ['place_id']
                },
                'utility': {
                    'event': 'click_utility',
                    'use': ['type', 'partner']
                },
                'review': {
                    'event': 'review',
                    'use': ['place_id']
                },
                'search_result_item': {
                    'event': 'ad_click',
                    'use': ['place_id']
                }
            }
        };

    function trackMultiple(event, use_attributes, attributes) {
        use_attributes.forEach(function (key) {
            if (attributes.hasOwnProperty(key)) {
                localTracker.trackEvent(
                    event + '_' + key,
                    attributes[key]
                );
            }
        });
    }

    function trackSingle(event, attribute) {
        localTracker.trackEvent(event, attribute);
    }

    function track(event, use_attributes, attributes) {
        if (use_attributes.length > 1) {
            trackMultiple(event, use_attributes, attributes);
        } else {
            trackSingle(event, attributes[use_attributes[0]]);
        }
    }

    return function (type, name, attributes) {
        var data;

        if (!event_dictionary.hasOwnProperty(type)
                || !event_dictionary[type].hasOwnProperty(name)) {
            return;
        }

        data = event_dictionary[type][name];

        track(data.event, data.use, attributes);
    };
});
