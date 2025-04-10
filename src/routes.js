import { randomUUID } from 'crypto';
import { DataBase } from './database.js';
import { buildRoutePath } from './utils/build-route-path.js';

const dataBase = new DataBase();

export const routes = [
	{
		method: 'GET',
		path: buildRoutePath('/tasks'),
		handler: (req, res) => {
			const { search } = req.query;

			const tasks = dataBase.select('tasks', search ? { name: search, email: search } : null);

			return res.end(JSON.stringify(tasks));
		},
	},
	{
		method: 'POST',
		path: buildRoutePath('/task'),
		handler: (req, res) => {
			const { title, description } = req.body;

			const task = {
				id: randomUUID(),
				title,
				description,
				created_at: new Date(),
				completed_at: null,
				updated_at: null,
			};

			dataBase.insert('tasks', task);

			return res.writeHead(201).end('Tarefa adicionada com sucesso');
		},
	},
];
