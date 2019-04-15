
const net = require('net');

var textChunk = '';

const server = net.createServer((socket)=>{
	socket.write('Echo server\r\n');
	socket.on('data',(data)=>{
		console.log('Data from client: '+data);

		textChunk = data.toString('utf8');
		console.log('formatted data :' + textChunk );	
	});
	socket.pipe(socket);
});

server.listen(3000,'127.0.0.1');


