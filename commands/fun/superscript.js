const dictionary = require('../../assets/json/cursive.json');

module.exports = {

    config: {

	name: 'superscript',
	category: 'fun',
	description: 'Converts text into superscript text.',
	aliases: [],
	usage: 'superscript <message>',

    },
	run: async (client, message, args) => {
		const text = args.slice().join(' ');
		if(!text) {
			return message.channel.send(
				":x:  | Usage: ``;superscript <Text>``",
			);
		}

		if(text.length > 2000) {
			return message.channel.send('<:x:> The provided message exceeds 2000 characters.');
		}

		const cursified = text.toLowerCase().split('').map(letter => {
			return `${dictionary[letter]}`;
		}).join('');

		message.channel.send(cursified);
	},
};
