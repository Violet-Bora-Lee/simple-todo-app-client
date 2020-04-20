import {
	ADD_TODO,
	DELETE_TODO,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_TODO,
	FILTER_TODOS,
	CLEAR_FILTER
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [action.payload, ...state.todos]
			}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			}
		default:
			return state;
	}
}
