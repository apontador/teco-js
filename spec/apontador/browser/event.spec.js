require(['apontador/browser/event'], function (eventEmitter) {
    'use strict';
    describe("Event Emitter",  function () {

        var input = document.getElementById('inputTest'),
            evtType = 'change',
            callback = sinon.spy();

        it("should run an event with callback", function () {
            eventEmitter.add(evtType, input, callback);
            eventEmitter.emit(evtType, input);

            expect(callback.callCount).to.eql(1);

        });

    });
});
