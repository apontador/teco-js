/*global define, jQuery*/
define(
    ['apontador/tracker/event/type/dispatcher', 'jquery'],
    function (typeDispatcher) {
        'use strict';

        var subscribers = [],
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

        function checkSetup() {
            if (subscribers.length === 0) {
                throw new TypeError(
                    "No subscriber found when tracking started"
                );
            }

            if (events_data.length === 0) {
                throw new TypeError(
                    "No event assigned to track"
                );
            }
        }

        return {
            'assign': function (data) {
                events_data = data;
                return this;
            },
            'toSubscribers': function (subscribers_array) {
                subscribers = subscribers_array;
                return this;
            },
            'track': function () {
                checkSetup();

                events_data.forEach(function (data) {
                    var $target = jQuery(data.selector);

                    notifyByType(data.on, data.name, $target);
                });

                return this;
            },
            'clear': function () {
                subscribers = [];
                events_data = [];
            }
        };
    }
);
