const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: 513 } });

const keepAlive = require('./functions/serverlistner');

const config = require('./config.json');

const Filter = require('badwords-filter');
const filterConfig = {
	list: ['lol', 'lmao', 'lmfao'],
	cleanWith: '$',
	useRegex: true,
};
const filter = new Filter(filterConfig);

client.on('ready', () => {
	console.log('[STARTUP] Ready.');
});

client.on('message', message => {
	const lol = filter.isUnclean(message.content);
	if (lol) {
		message.react('🤣');
		console.log(`[LOL] MESSAGE ${message.content} - AUTHOR ${message.author.username}`);
	}
});

keepAlive();
client.login(config.token);