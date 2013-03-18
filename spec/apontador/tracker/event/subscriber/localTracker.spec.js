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
                    localTrackerSub('view', 'utility');

                    expect(window.localTracker.trackEvent.calledOnce).to.be.ok();
                    expect(window.localTracker.trackEvent.getCall(0).args).to.eql([
                        'SHOW_UTILITY',
                        'LBSID'
                    ]);
                });

                it("should handle unknown events", function () {
                    localTrackerSub('unknown', 'unexistent');

                    expect(window.localTracker.trackEvent.calledOnce)
                        .to.not.be.ok();
                });
            }
        );
    }
);
