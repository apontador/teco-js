/*global require, describe, it, before, after, jQuery, sinon, expect*/
require(
    ['apontador/tracker/observableTracker', 'jquery'],
    function (tracker) {
        'use strict';

        describe('Observable Tracker', function () {
            var stubSubscriber;
            before(function () {
                stubSubscriber = {
                    'track': sinon.spy()
                };

                tracker.addSubscriber(stubSubscriber);

                jQuery('body').append('<div class="fooEl"></div>');
            });

            after(function () {
                jQuery('.fooEl').remove();
            });

            it('should track an element view when found at the page', function () {
                tracker.on(
                    tracker.eventType.view,
                    {
                        'alias': '.fooEl'
                    }
                );

                expect(stubSubscriber.track.calledOnce).to.be.ok();
                expect(
                    stubSubscriber.track.calledWith(
                        tracker.eventType.view,
                        'alias'
                    )
                ).to.be.ok();
            });

        });
    }
);
