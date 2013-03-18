/*global require, describe, it, before, after, jQuery, sinon, expect*/
require(
    ['apontador/tracker/event/mediator', 'jquery'],
    function (mediator) {
        'use strict';

        describe('Tracker Event Mediator', function () {
            var stubSubscriber;
            beforeEach(function () {
                jQuery('body').append('<div class="target" data-foo="bar" data-baz="loren ipsum"></div>');

                stubSubscriber = sinon.spy();
            });

            afterEach(function () {
                jQuery('.target').remove();
                mediator.clearSubscribers();
                stubSubscriber = null;
            });

            it('should track an element view when found at the page', function () {
                mediator.assignEvents([
                    {
                        name: 'event name',
                        selector: '.target',
                        on: ['view']
                    }
                ]);

                mediator.addSubscriber(stubSubscriber);

                mediator.startTracking();

                expect(stubSubscriber.calledOnce).to.be.ok();
            });

            it('should call subscribers with event type, name and attributes', function () {
                mediator.assignEvents([
                    {
                        name: 'event name',
                        selector: '.target',
                        on: ['view']
                    }
                ]);

                mediator.addSubscriber(stubSubscriber);

                mediator.startTracking();

                expect(
                    stubSubscriber.getCall(0).args
                ).to.be.eql([
                    'view',
                    'event name',
                    {
                        'foo': 'bar',
                        'baz': 'loren ipsum'
                    }
                ]);
            });

            it('should throw an exception triyng to start tracking without subscribers', function () {
                mediator.assignEvents([
                    {
                        name: 'event name',
                        selector: '.target',
                        on: ['view']
                    }
                ]);

                expect(function () {
                    mediator.startTracking();
                }).to.throwException(function (e) {
                    expect(e).to.be.a(TypeError);
                    expect(e.message).to.eql(
                        "No subscriber found when tracking started"
                    );
                });
            });

            it('should throw an exception trying to start tracking whithout events');
        });
    }
);
