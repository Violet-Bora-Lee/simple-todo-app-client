import {
	GET_TODOS,
	ADD_TODO,
	DELETE_TODO,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_TODO,
	TODO_ERROR,
	CLEAR_ERRORS
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_TODOS:
			return {
				...state,
				todos: action.payload,
				loading: false
			}
		case ADD_TODO:
			return {
				...state,
				todos: [action.payload, ...state.todos],
				loading: false
			}
		case UPDATE_TODO:
			return {
				...state,
				todos: state.todos.map(todo => todo._id === action.payload._id ? action.payload: todo),
				loading: false
			}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo._id !== action.payload),
				loading: false
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
		case TODO_ERROR:
			return {
				...state,
				error: action.payload
			}
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			}
		default:
			return state;
	}
}
