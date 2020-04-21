import React, { Fragment, useContext, useEffect } from 'react';
import TodoItem from './TodoItem';
import TodoContext from '../../context/todo/todoContext';
import Spinner from '../layout/Spinner';

const Todos = () => {
	const todoContext = useContext(TodoContext);

	const { todos, getTodos, loading } = todoContext;

	useEffect(() => {
		getTodos();
	}, [])

	if (todos !== null && todos.length === 0 && !loading) {
		return <h4>해야할 일이 없습니다.</h4>
	}

	return (
		<Fragment>
			{todos !== null && !loading ? (
					<Fragment>
						{todos && todos.map(todo =>
							<TodoItem key={todo._id} todo={todo}/>
						)}
					</Fragment>
				)
				: (<Spinner/>)}
		</Fragment>
	)
}

export default Todos;
