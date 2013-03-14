/*global define, jQuery*/
define(
    ['jquery'],
    function () {
        'use strict';

        var $ = jQuery,
            subscribers = [];

        function notify(eventType, eventName, attributes) {
            subscribers.forEach(function (subscriber) {
                subscriber.track(eventType, eventName, attributes);
            });
        }

        return {
            'eventType': {
                'view': 'view'
            },
            'on': function (eventType, target) {
                var name,
                    $target;

                for (name in target) {
                    if (target.hasOwnProperty(name)) {
                        $target = $(target[name]);

                        if ($target.length) {
                            notify(eventType, name, $target.data());
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
