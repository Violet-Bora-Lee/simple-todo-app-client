import {
	GET_TODOS,
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
				todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload: todo),
				loading: false
			}
		case DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
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
		default:
			return state;
	}
}
