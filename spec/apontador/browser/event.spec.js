require(['apontador/browser/event'], function (eventEmitter) {
    'use strict';
    describe("Event Emitter",  function () {

        var input = document.getElementById('inputTest'),
            evtType = 'change',
            callback = sinon.spy();

        before(function () {
            eventEmitter.add(evtType, input, callback);
            eventEmitter.emit(evtType, input);
        });

        it("should run an event with callback", function () {
            expect(callback.callCount).to.eql(1);
        });

        it("should have event.target for all browsers", function () {
            expect(callback.getCall(0).args[0]).to.have.property('target', input);
        });

    });
});
