import React, { useReducer } from "react";
import TodoContext from './todoContext';
import todoReducer from './todoReducer';
import {
	ADD_TODO,
	DELETE_TODO,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_TODO,
	FILTER_TODOS,
	CLEAR_FILTER
} from "../types";

const TodoState = props => {
	const initialState = {
		todos: [
			{
				id: 1,
				title: '주방 청소 1 주방 청소 1 주방 청소 1 주방 청소 1 주방 청소 1 주방 청소 1 주방 청소 1 주방 청소 1 주방 청소 1 주방 청소 1 주방 청소 1 ',
				description: '설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 설거지 ',
				deadline: '2020-05-01',
				priority: '1',
				done: false
			},
			{
				id: 2,
				title: '주방 청소 2',
				description: '냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 냉장고 청소 ',
				deadline: '2020-05-01',
				priority: '3',
				done: false
			},
			{
				id: 3,
				title: '거실 청소 1',
				description: '가구 위 먼지 닦기',
				deadline: '2020-05-02',
				priority: '2',
				done: false
			},
			{
				id: 4,
				title: '거실 청소 2',
				description: '바닥 청소기, 물걸레 질',
				deadline: '2020-05-02',
				priority: '1',
				done: false
			},
		]
	}

	const [state, dispatch] = useReducer(todoReducer, initialState);

	// 할 일 추가
	const addTodo = todo => {
		// Todo: id 재설정
		todo.id = Math.floor(Math.random());
		dispatch({
			type: ADD_TODO,
			payload: todo,
		})
	}

	// 할 일 삭제

	// 할 일 선택

	// 선택 된 할 일 삭제

	// 할 일 수정

	// 할 일 재정렬 (필터 적용)

	// 필터 해제

	return (
		<TodoContext.Provider
		  value={{
		  	todos: state.todos,
				addTodo,
			}}
		>
			{ props.children }
		</TodoContext.Provider>
	)
};

export default TodoState;
