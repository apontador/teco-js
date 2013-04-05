/*global jQuery, sinon, require, describe, expect, it, beforeEach, afterEach*/
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
                jQuery('.target').remove();
            });

            it('should call a callback when the element is viewed', function () {
                var callbackSpy = sinon.spy();

                typeHandler.dispatch('view', $target, callbackSpy);

                expect(callbackSpy.calledOnce).to.be.ok();
                expect(callbackSpy.getCall(0).args[0].get()).to.eql([
                    $target.get(0)
                ]);
            });

            it('should trigger the callback once for each element viewed', function () {
                var callbackSpy = sinon.spy();

                jQuery('body').append('<span class="target"></span>');

                $target = jQuery('.target');

                typeHandler.dispatch('view', $target, callbackSpy);

                expect(callbackSpy.callCount).to.eql(2);
                expect(callbackSpy.getCall(0).args[0].get()).to.eql([
                    $target.get(0)
                ]);
                expect(callbackSpy.getCall(1).args[0].get()).to.eql([
                    $target.get(1)
                ]);
            });

            it("should raise an exception when an unimplemented event type is given", function () {
                var callbackSpy = sinon.spy();

                expect(function () {
                    typeHandler.dispatch('feel', $target, callbackSpy);
                }).to.throwException(function (e) {
                    expect(e).to.be.a(TypeError);
                    expect(e.message).to.be.eql(
                        'Event type "feel" is not available'
                    );
                });
            });

            it('should assign a callback to the click event of a given element', function () {
                var callbackSpy = sinon.spy();

                typeHandler.dispatch('click', $target, callbackSpy);

                expect(callbackSpy.calledOnce).to.not.be.ok();

                $target.trigger('click');

                expect(callbackSpy.calledOnce).to.be.ok();
                expect(callbackSpy.getCall(0).args[0].get()).to.eql([
                    $target.get(0)
                ]);
            });

            it('should trigger the click callback just once', function () {
                var callbackSpy = sinon.spy();

                typeHandler.dispatch('click', $target, callbackSpy);

                expect(callbackSpy.calledOnce).to.not.be.ok();

                $target.trigger('click')
                    .trigger('click');

                expect(callbackSpy.callCount).to.eql(1);
            });
        });
    }
);
