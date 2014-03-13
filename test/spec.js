describe('String format module', function () {
    it ('can format strings with single placeholders', function () {
        expect('{} world!'.format('Hello')).toEqual('Hello world!');
        expect('Hell{} w{}rld!'.format('o')).toEqual('Hello world!');
    });

    it ('can format strings with index placeholders', function () {
        expect('{0} {1}{2}'.format('Hello', 'world', '!')).toEqual('Hello world!');
        expect('{1} {2}{0}'.format('!', 'Hello', 'world')).toEqual('Hello world!');
        expect('He{0}{0}{1} w{1}r{0}d!'.format('l', 'o')).toEqual('Hello world!');
    });

    it ('can format strings with key placeholders', function () {
        expect('{first} {second}'.format({first: 'Hello', second: 'world!'})).toEqual('Hello world!');
    });
});