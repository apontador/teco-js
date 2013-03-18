/*global require, describe, it, beforeEach, afterEach, jQuery, sinon, expect*/
require(
    ['apontador/tracker/mediator', 'jquery'],
    function (mediator) {
        'use strict';

        describe('Tracker Mediator', function () {
            var stubSubscriber;

            beforeEach(function () {
                jQuery('body').append('<div class="target" data-foo="bar" data-baz="loren ipsum"></div>');
                stubSubscriber = sinon.spy();
            });

            afterEach(function () {
                jQuery('.target').remove();
                stubSubscriber = null;
                mediator.clear();
            });

            it('should track an element view when found at the page', function () {
                mediator.assign([
                    {
                        name: 'event name',
                        selector: '.target',
                        on: ['view']
                    }
                ]).toSubscribers([
                    stubSubscriber
                ]).track();

                expect(stubSubscriber.calledOnce).to.be.ok();
            });

            it('should call subscribers with event type, name and attributes', function () {
                mediator.assign([
                    {
                        name: 'event name',
                        selector: '.target',
                        on: ['view', 'click']
                    }
                ]).toSubscribers([
                    stubSubscriber
                ]).track();

                jQuery('.target').trigger('click');

                expect(stubSubscriber.callCount).to.eql(2);
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
                mediator.assign([
                    {
                        name: 'event name',
                        selector: '.target',
                        on: ['view']
                    }
                ]);

                expect(function () {
                    mediator.track();
                }).to.throwException(function (e) {
                    expect(e).to.be.a(TypeError);
                    expect(e.message).to.eql(
                        "No subscriber found when tracking started"
                    );
                });
            });

            it('should throw an exception trying to start tracking whithout events', function () {
                mediator.toSubscribers([stubSubscriber]);

                expect(function () {
                    mediator.track();
                }).to.throwException(function (e) {
                    expect(e).to.be.a(TypeError);
                    expect(e.message).to.be.eql(
                        "No event assigned to track"
                    );
                });
            });
        });
    }
);
