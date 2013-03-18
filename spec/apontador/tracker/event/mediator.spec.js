/*global require, describe, it, before, after, jQuery, sinon, expect*/
require(
    ['apontador/tracker/event/mediator', 'jquery'],
    function (mediator) {
        'use strict';

        describe('Tracker Event Mediator', function () {
            var stubSubscriber;
            before(function () {
                jQuery('body').append('<div class="target" data-foo="bar" data-baz="loren ipsum"></div>');

                stubSubscriber = sinon.spy();

                mediator.assignEvents([
                    {
                        name: 'event name',
                        selector: '.target',
                        on: ['view']
                    }
                ]);

                mediator.addSubscriber(stubSubscriber);

                mediator.startTracking();
            });

            after(function () {
                jQuery('.target').remove();
            });

            it('should track an element view when found at the page', function () {
                expect(stubSubscriber.calledOnce).to.be.ok();
            });

            it('should call subscribers with event type, name and attributes', function () {
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

            it('should throw an exception triyng to start tracking without subscribers');
            it('shoult throw an exception trying to start tracking whithout events');
        });
    }
);
