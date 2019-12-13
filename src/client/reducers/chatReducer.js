import { merge } from "lodash";
import { FETCH_CHAT, RECEIVE_CHAT } from "../constants/actionTypes";

export const INITIAL_STATE = {
	chat: {
		fetching: false,
		received: false,
		questions: []
	}
};

let newState;

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_CHAT:
			newState = merge({}, state, {
				chat: {
					fetching: !action.payload,
					received: action.payload
				}
			});

			return newState;

		case RECEIVE_CHAT:
			newState = merge({}, state);

			newState.chat.questions.push(action.payload);

			return newState;

		default:
			return state;
	}
};
