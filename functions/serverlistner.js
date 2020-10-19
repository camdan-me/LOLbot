const express = require('express');
const server = express();

server.all('/', (req, res)=>{
	res.send('AIMod is now online. Pinging this URL will bring AIMod online if there are any issues.');
});

function keepAlive() {
	server.listen(3000, ()=>{
		console.log('[STARTUP] Server listner ready');
	});
}

module.exports = keepAlive;