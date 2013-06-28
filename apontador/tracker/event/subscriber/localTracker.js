/*global localTracker, define*/
define(function () {
    'use strict';
    var eventDictionary = {
            'view': {
                'place_utility': {
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
                'search_result_sponsored_item': {
                    'event': 'show_sponsored_ad',
                    'use': ['place_id']
                }
            },
            'click': {
                'place_phone': {
                    'event': 'see_phone',
                    'use': ['place_id']
                },
                'place_website_link': {
                    'event': 'go_to_site',
                    'use': ['place_id']
                },
                'place_toggle_description': {
                    'event': 'description',
                    'use': ['place_id']
                },
                'place_share': {
                    'event': 'share',
                    'use': ['type'] //email, twitter, facebook, embed
                },
                'place_thumbs': {
                    'event': 'thumbs',
                    'use': ['type'] // up, down
                },
                'place_photo_upload': {
                    'event': 'send_photo',
                    'use': ['place_id']
                },
                'place_helpful_review': {
                    'event': 'helpful_review',
                    'use': ['place_id']
                },
                'place_utility': {
                    'event': 'click_utility',
                    'use': ['type', 'partner']
                },
                'place_review': {
                    'event': 'review',
                    'use': ['place_id']
                },
                'place_directions': {
                    'event': 'directions',
                    'use': ['place_id']
                },
                'place_ad': {
                    'event': 'ad_click',
                    'use': ['place_id']
                },
                'place_utility_navigator': {
                    'event': 'view_utility',
                    'use': ['type', 'partner']
                },
                'place_review_anchor': {
                    'event': 'review_anchor',
                    'use': ['position']
                }
            }
        };

    function trackMultiple(event, useAttributes, attributes) {
        useAttributes.forEach(function (key) {
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

    function track(event, useAttributes, attributes) {
        if (useAttributes.length > 1) {
            trackMultiple(event, useAttributes, attributes);
        } else {
            trackSingle(event, attributes[useAttributes[0]]);
        }
    }

    return function (type, name, attributes) {
        var data;

        if (!eventDictionary.hasOwnProperty(type) ||
                !eventDictionary[type].hasOwnProperty(name)) {
            return;
        }

        data = eventDictionary[type][name];

        track(data.event, data.use, attributes);
    };
});
