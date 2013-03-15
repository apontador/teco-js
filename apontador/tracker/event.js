/*global define, jQuery*/
define(
    ['apontador/tracker/event/type', 'jquery'],
    function (types) {
        'use strict';

        var $ = jQuery,
            subscribers = [];

        function notify(type, name, attributes) {
            subscribers.forEach(function (subscriber) {
                subscriber(type, name, attributes);
            });
        }

        return {
            'create': function (eventType, target) {
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
