/*global require, describe, it, before, after, jQuery, sinon, expect*/
require(
    ['apontador/tracker/event', 'jquery'],
    function (event) {
        'use strict';

        describe('Tracker Event', function () {
            var stubSubscriber;
            before(function () {
                jQuery('body').append('<div class="target" data-foo="bar" data-baz="loren ipsum"></div>');

                stubSubscriber = sinon.spy();

                event.create([
                    {
                        name: 'event name',
                        selector: '.target',
                        on: ['view']
                    }
                ]);

                event.addSubscriber(stubSubscriber);

                event.startTracking();
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
        });
    }
);
