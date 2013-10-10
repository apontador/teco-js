/*global require, describe, it, beforeEach, afterEach, expect, window*/
require(
    ['apontador/tracker/event/subscriber/googleAnalytics'],
    function (googleAnalyticsSub) {
        'use strict';

        describe('Tracker Event subscriber: Google Analytics', function () {
            /*jshint nomen:false*/

            beforeEach(function () {
                window._gaq = [];
            });
            afterEach(function () {
                delete window._gaq;
            });

            it('should track a click', function () {
                var name = 'call-to-review',
                    value = '1234';

                googleAnalyticsSub(
                    'click',
                    'track_click',
                    {
                        'name': name,
                        'value': value
                    }
                );

                expect(window._gaq[0]).to.eql(['_trackEvent', name, value]);
            });

            it('should not track an unknown event', function () {
                googleAnalyticsSub(
                    'click',
                    'unknown',
                    {
                        'place_id': 'LBSID'
                    }
                );

                expect(window._gaq.length).to.eql(0);
            });

            it('should not track unsupported event types', function () {
                googleAnalyticsSub(
                    'view',
                    'place_phone',
                    {
                        'place_id': 'LBSID'
                    }
                );

                expect(window._gaq.length).to.eql(0);
            });
        });
    }
);
