import http from 'http';

const server = http.createServer(async (req, res) => {
	return res.writeHead(200).end('Hello World');
});

server.listen(3333);
