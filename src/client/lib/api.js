import axios from "axios";
import config from "../config";
import { todosMock, chatMock } from "../mocks/todosMock";

const api = axios.create({
	baseURL: config.api.baseURL,
	timeout: 10000,
	headers: { "Content-Type": "application/json" }
});

const generateShowResource = (resource, mock) => {
	if (process.env.ENV === "test") {
		return () => ({
			then: callback => {
				callback({
					data: mock
				});

				return { catch: () => null };
			}
		});
	}
	return resource();
};

export const createTodosResource = data =>
	generateCreateResource(() => api.post("todos", data), todosMock, data)(data);

export const getTodosResource = generateShowResource(
	() => () => api.get("todos"),
	todosMock
);

export const setChatResource = data => {
	return new Promise((resolve, reject) => {
		api
			.post("/Chat", data)
			.then(res => resolve(res))
			.catch(err => reject(err));
	});
};

export default api;
