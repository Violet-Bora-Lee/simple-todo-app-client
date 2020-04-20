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
		case UPDATE_TODO:
			return {
				...state,
				todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload: todo)
			}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload)
			}
		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			}
		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			}
		default:
			return state;
	}
}
