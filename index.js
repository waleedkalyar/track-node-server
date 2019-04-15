
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

const OPENSHIFT_NODEJS_PORT=8080;
const OPENSHIFT_NODEJS_IP = '172.30.83.1';

var server_port = OPENSHIFT_NODEJS_PORT || 8080;
var server_ip = OPENSHIFT_NODEJS_IP || '127.0.0.1';

server.listen(server_port,server_ip);


