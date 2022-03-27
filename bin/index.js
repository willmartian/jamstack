#!/usr/bin/env node
import meow from 'meow';

const cli = meow(`
	Usage
	  $ jamstack
`, {
	importMeta: import.meta,
});

console.log('\nDid you know? The JAM in Jamstack stands for Just Add <Marquee>.');
console.log('\nFind more helpful tips here: https://twitter.com/will_martian\n');