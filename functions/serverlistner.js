const express = require('express');
const server = express();

server.all('/', (req, res)=>{
	res.send('LOLbot is now online. Pinging this URL will bring LOLbot online if there are any issues.');
});

function keepAlive() {
	server.listen(3000, ()=>{
		console.log('[STARTUP] Server listner ready');
	});
}

module.exports = keepAlive;