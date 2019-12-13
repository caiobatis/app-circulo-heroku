import { times } from "lodash";
import { name, lorem, random } from "faker";

export const todoMock = {
	id: 1,
	title: name.title()
};

export const chatMock = {
	id: random.uuid(),
	ask: [
		{
			text: lorem.text(),
			id: 2
		}
	],
	answer: ""
};

export const todosMock = times(6, i => ({
	...todoMock,
	id: i,
	title: name.title()
}));
