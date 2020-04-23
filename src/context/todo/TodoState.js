import React, { useReducer } from "react";
import axios from 'axios';
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
	GET_TODOS,
	ADD_TODO,
	DELETE_TODO,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_TODO,
	CLEAR_TODOS,
	TODO_ERROR,
	CLEAR_ERRORS
} from "../types";
import getNow from "../../utils/getNow";

const TodoState = props => {
	const initialState = {
		todos: null,
		current: null,
		error: null
	}

	const [state, dispatch] = useReducer(todoReducer, initialState);

	// 할 일 목록 얻기
	const getTodos = async () => {
		try {
		  const res = await axios.get('/api/todos');

		  dispatch({
				type: GET_TODOS,
				payload: res.data,
			});
		} catch (err) {
		  dispatch({
				type: TODO_ERROR,
				payload: err.response.msg,
			})
		}
	}

	// 할 일 추가
	const addTodo = async todo => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			const res = await axios.post('/api/todos', todo, config);

			dispatch({
				type: ADD_TODO,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: TODO_ERROR,
				payload: err.response.msg,
			})
		}
	}

	// 할 일 삭제
	const deleteTodo = async _id => {

		try {
		  await axios.delete(`/api/todos/${_id}`);

			dispatch({
				type: DELETE_TODO,
				payload: _id
			});
		} catch (err) {
			dispatch({
				type: TODO_ERROR,
				payload: err.response.msg
			})
		}

	}

	const clearTodos = () => {
		dispatch({
			type: CLEAR_TODOS
		})
	}

	// 할 일 선택
	const setCurrent = todo => {
		dispatch({
			type: SET_CURRENT,
			payload: todo,
		})

		if( todo.deadline !== '' && todo.deadline < getNow() ){
			dispatch({
				type: TODO_ERROR,
				payload: "마감기한이 지났습니다."
			})
		}
	}

	// 선택 된 할 일 삭제
	const clearCurrent = () => {
		dispatch({
			type: CLEAR_CURRENT
		})
	}

	// 할 일 수정
	const updateTodo = async todo => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		}

		try {
			const res = await axios.put(
				`/api/todos/${todo._id}`,
				todo,
				config
			);

			dispatch({
				type: UPDATE_TODO,
				payload: res.data
			})

		} catch (err) {
			dispatch({
				type: TODO_ERROR,
				payload: err.response.msg,
			})
		}
	}

	// 할 일 재정렬 (필터 적용)

	// 필터 해제

	const clearErrors = () => {
		dispatch({ type: CLEAR_ERRORS })
	}

	return (
		<TodoContext.Provider
		  value={{
		  	todos: state.todos,
				current: state.current,
				error: state.error,
				getTodos,
				addTodo,
				deleteTodo,
				clearTodos,
				setCurrent,
				clearCurrent,
				updateTodo,
				clearErrors
			}}
		>
			{ props.children }
		</TodoContext.Provider>
	)
};

export default TodoState;
