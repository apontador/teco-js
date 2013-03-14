/*global require, describe, it, before, after, jQuery, sinon, expect*/
require(
    ['apontador/tracker/observableTracker', 'jquery'],
    function (tracker) {
        'use strict';

        describe('Observable Tracker', function () {
            var stubSubscriber;
            before(function () {
                jQuery('body').append('<div class="fooEl" data-foo="bar" data-baz="loren ipsum"></div>');

                stubSubscriber = {
                    'track': sinon.spy()
                };

                tracker.addSubscriber(stubSubscriber);

                tracker.on(
                    tracker.eventType.view,
                    {
                        'eventName': '.fooEl'
                    }
                );
            });

            after(function () {
                jQuery('.fooEl').remove();
            });

            it('should track an element view when found at the page', function () {
                expect(stubSubscriber.track.calledOnce).to.be.ok();
            });

            it('should call subscribers with event type, name and attributes', function () {
                expect(
                    stubSubscriber.track.getCall(0).args
                ).to.be.eql([
                    tracker.eventType.view,
                    'eventName',
                    {
                        'foo': 'bar',
                        'baz': 'loren ipsum'
                    }
                ]);
            });

            it('should throw an exception when an unknow event type is given');
        });
    }
);
