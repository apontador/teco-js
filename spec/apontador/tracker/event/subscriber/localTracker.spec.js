/*global require, describe, it, expect, beforeEach, afterEach, sinon, window*/
require(
    ['apontador/tracker/event/subscriber/localTracker'],
    function (localTrackerSub) {
        'use strict';

        describe(
            "Tracker Event Subscriber: LocalTracker",
            function () {

                beforeEach(function () {
                    window.localTracker = {
                        trackEvent: sinon.spy()
                    };
                    window.poiId = 'LBSID';
                });

                afterEach(function () {
                    delete window.localTracker;
                    delete window.poiId;
                });

                it("should call the localTracker with the correct event", function () {
                    localTrackerSub('click', 'thumbs', {'type': 'up'});

                    expect(window.localTracker.trackEvent.callCount).to.be.ok();
                    expect(window.localTracker.trackEvent.getCall(0).args).to.eql([
                        'thumbs',
                        'up'
                    ]);
                });

                it("should handle unknown events", function () {
                    localTrackerSub('unknown', 'unexistent');

                    expect(window.localTracker.trackEvent.calledOnce)
                        .to.not.be.ok();
                });

                it("should call two events on localTracker for utilities", function () {
                    localTrackerSub(
                        'click',
                        'utility',
                        {
                            partner: 'bdd',
                            type: 'pass test'
                        }
                    );


                    expect(window.localTracker.trackEvent.callCount)
                        .to.equal(2);
                    expect(window.localTracker.trackEvent.calledWith(
                        'click_utility_type',
                        'pass test'
                    )).to.be.ok();
                    expect(window.localTracker.trackEvent.calledWith(
                        'click_utility_partner',
                        'bdd'
                    )).to.be.ok();

                });
            }
        );
    }
);
