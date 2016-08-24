import path from 'path';
import test from 'ava';
import fn from '../';

test('converts srt to obj', async t => {
	const data = await fn(path.resolve('./fixtures/subtitles.srt'));

	const firstEntry = data[0];
	t.is(firstEntry.index, '1');
	t.is(firstEntry.start, '00:00:55,880');
	t.is(firstEntry.end, '00:00:57,670');
	t.is(firstEntry.text, 'Line one');
});

test('grabs multiline subs', async t => {
	const data = await fn(path.resolve('./fixtures/subtitles.srt'));

	const secondEntry = data[1];
	t.is(secondEntry.text, 'Line two\nLine three\nLine four\nLine five');
});

test('converts all entries', async t => {
	const data = await fn(path.resolve('./fixtures/subtitles.srt'));
	t.is(data.length, 3);
});
