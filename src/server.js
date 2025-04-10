import http from 'http';
import { json } from './middlewares/json';

const server = http.createServer(async (req, res) => {
	await json(req, res);

	return res.writeHead(200).end('Hello World');
});

server.listen(3333);
