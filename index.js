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
	if (message.content.startsWith('lol help')) {
		message.reply('I\'m LOLbot. I will react to any message you send with 🤣. It\'s that simple! (Check out my GitHub: https://github.com/CamTheHelpDesk/LOLbot)');
	}

	const lol = filter.isUnclean(message.content);
	if (lol) {
		message.react('🤣');
		console.log(`[LOL] MESSAGE ${message.content} - AUTHOR ${message.author.username}`);
	}
});

keepAlive();
client.login(config.token);