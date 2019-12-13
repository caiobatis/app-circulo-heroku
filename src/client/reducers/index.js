import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import todosReducer from "./todosReducer";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
	form: formReducer,
	todosReducer,
	chatModule: chatReducer
});

export default rootReducer;
