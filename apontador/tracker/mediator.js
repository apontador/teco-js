/*global define, jQuery*/
define(
    ['apontador/tracker/event/type/dispatcher', 'jquery'],
    function (typeDispatcher) {
        'use strict';

        var subscribers = [],
            eventsData = [];

        function notify(type, name, attributes) {
            subscribers.forEach(function (subscriber) {
                subscriber(type, name, attributes);
            });
        }

        function notifyByType(data, $target) {
            data.on.forEach(function (eventType) {
                typeDispatcher.dispatch(eventType, $target, function ($el) {
                    var attributes = $el.data();

                    if (data.hasOwnProperty('attributes')) {
                        attributes = jQuery.extend(
                            data.attributes,
                            attributes
                        );
                    }

                    notify(eventType, data.name, attributes);
                });
            });
        }

        function checkSetup() {
            if (subscribers.length === 0) {
                throw new TypeError(
                    'No subscriber found when tracking started'
                );
            }

            if (eventsData.length === 0) {
                throw new TypeError(
                    'No event assigned to track'
                );
            }
        }

        return {
            'assign': function (data) {
                eventsData = data;
                return this;
            },
            'toSubscribers': function (subscribersList) {
                subscribers = subscribersList;
                return this;
            },
            'track': function () {
                checkSetup();

                eventsData.forEach(function (data) {
                    notifyByType(data, jQuery(data.selector));
                });

                return this;
            },
            'clear': function () {
                subscribers = [];
                eventsData = [];
            }
        };
    }
);
