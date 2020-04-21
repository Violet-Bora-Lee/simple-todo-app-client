import React, { Fragment, useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../../context/todo/todoContext';

const Todos = () => {
	const todoContext = useContext(TodoContext);

	const { todos, getTodos } = todoContext;

	useEffect(() => {
		getTodos();
	}, [])

	if (todos !== null && todos.length === 0) {
		return <h4>해야할 일이 없습니다.</h4>
	}

	return (
		<Fragment>
			{todos && todos.map(todo =>
			  <TodoItem key={todo._id} todo={todo}/>
			)}
		</Fragment>
	)
}

export default Todos;
