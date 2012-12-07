require(['apontador/string/string'], function (String) {
    describe('String Manipulation', function () {
        describe('Latinize', function () {
            it('should replace latin characters', function () {
                var latinWords = 'São André Óbviu Avô';
                expect(String.Latinize(latinWords)).toBe('Sao Andre Obviu Avo');
                expect(String.Latinise(latinWords)).toBe('Sao Andre Obviu Avo');
            });
            it('should validate latinize string', function () {
                expect(String.isLatin('São Paulo')).toBe(false);
                expect(String.isLatin('Sao Paulo')).toBe(true);
            });
        });
    });
});