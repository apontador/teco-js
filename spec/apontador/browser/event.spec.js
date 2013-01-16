require(['apontador/browser/event'], function (eventEmitter) {
    'use strict';
    describe("Event Emitter",  function () {

        var input = document.createElement('input'),
            evtType = 'change',
            callback = jasmine.createSpy();

        it("should run an event with callback", function () {

            eventEmitter.add(evtType, input, callback);
            eventEmitter.emit(evtType, input);

            expect(callback).toHaveBeenCalled();

        });

    });
});
