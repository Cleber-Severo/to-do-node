import { DataBase } from '../database.js';

const dataBase = new DataBase();

export const doesTaskExists = (id) => {
	const tasks = dataBase.select('tasks');
	const task = tasks.find((item) => item.id === id);

	return task;
};
