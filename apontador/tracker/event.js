/*global define, jQuery*/
define(
    ['apontador/tracker/event/type', 'jquery'],
    function (eventType) {
        'use strict';

        var $ = jQuery,
            subscribers = [],
            events_data = [];

        function notify(type, name, attributes) {
            subscribers.forEach(function (subscriber) {
                subscriber(type, name, attributes);
            });
        }

        return {
            'create': function (data) {
                events_data = data;
            },
            'addSubscriber': function (subscriber) {
                subscribers.push(subscriber);
            },
            'startTracking': function () {
                events_data.forEach(function (data) {
                    var $target = $(data.selector);

                    if ($target.length) {
                        notify(eventType.view, data.name, $target.data());
                    }
                });
            }
        };
    }
);
