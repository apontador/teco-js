/*global define, jQuery*/
define(
    [
        'apontador/tracker/event/type/dispatcher',
        'jquery'
    ],
    function (typeDispatcher) {
        'use strict';

        var $ = jQuery,
            subscribers = [],
            events_data = [];

        function notify(type, name, attributes) {
            subscribers.forEach(function (subscriber) {
                subscriber(type, name, attributes);
            });
        }

        function notifyByType(event_types, name, $target) {
            event_types.forEach(function (event_type) {
                typeDispatcher.dispatch(event_type, $target, function () {
                    notify(event_type, name, $target.data());
                });
            });
        }

        return {
            'assignEvents': function (data) {
                events_data = data;
            },
            'addSubscriber': function (subscriber) {
                subscribers.push(subscriber);
            },
            'startTracking': function () {
                events_data.forEach(function (data) {
                    var $target = jQuery(data.selector);

                    notifyByType(data.on, data.name, $target);
                });
            }
        };
    }
);
