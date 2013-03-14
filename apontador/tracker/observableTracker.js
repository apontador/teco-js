/*global define, jQuery*/
define(
    ['jquery'],
    function () {
        'use strict';

        var $ = jQuery,
            subscribers = [];

        function notify(eventType, eventName) {
            subscribers.forEach(function (subscriber) {
                subscriber.track(eventType, eventName);
            });
        }

        return {
            'eventType': {
                'view': 1
            },
            'on': function (eventType, target) {
                var name;
                for (name in target) {
                    if (target.hasOwnProperty(name)) {
                        if ($(target[name]).length) {
                            console.log('found', target[name]);
                            notify(eventType, name);
                        }
                    }
                }
            },
            'addSubscriber': function (subscriber) {
                subscribers.push(subscriber);
            }
        };
    }
);
