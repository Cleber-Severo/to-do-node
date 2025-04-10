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
];
