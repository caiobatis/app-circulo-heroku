import { uniqueId } from "lodash";

export const botChatSerialize = data => {
	return {
		id: data.sessionId || uniqueId(),
		ask: data.responses.map(response => ({
			text: response,
			id: uniqueId()
		}))
	};
};
