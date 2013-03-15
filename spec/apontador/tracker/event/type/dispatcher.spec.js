require(
    [
        'apontador/tracker/event/type/dispatcher',
        'jquery'
    ],
    function (typeHandler) {
        'use strict';

        describe('Tracker Event Type Dispatcher', function () {
            var $target;

            beforeEach(function () {
                jQuery('body').append('<div class="target"></div>');
                $target = jQuery('.target');
            });

            afterEach(function () {
                $target.remove();
            });

            it('should call a callback when the element is viewd', function () {
                var callbackSpy = sinon.spy();
                    
                typeHandler.dispatch('view', $target, callbackSpy);

                expect(callbackSpy.calledOnce).to.be.ok();
            });

            it("should raise an exception when an unimplemented event type is given");
        });
    }
);
