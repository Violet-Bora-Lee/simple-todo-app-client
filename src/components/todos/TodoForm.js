import React, { useState, useContext } from 'react';
import TodoContext from '../../context/todo/todoContext';

const TodoForm = () => {
	const todoContext = useContext(TodoContext);

	const [todo, setTodo] = useState({
		title: '',
		description: '',
		deadline: '',
		priority: '',
		done: false
	});

	const { title, description, deadline, priority, done } = todo;

	const onChange = e => setTodo({
		...todo,
		[e.target.name]: e.target.value
	})

	const onCheck = e => setTodo({
		...todo,
		done: !todo.done
	})

	const onSubmit = e => {
		e.preventDefault();
		todoContext.addTodo(todo);

		setTodo({
			title: '',
			description: '',
			deadline: '',
			priority: '',
			done: false
		})
	}

	return (
		<div>
			<form onSubmit={onSubmit}>

				<h2 className="text-primary">할 일 추가</h2>

				<input type="text" placeholder="제목" name="title" value={title} onChange={onChange}/>
				<input type="text" placeholder="상세 내용" name="description" value={description} onChange={onChange}/>

				<div>
					<span className="label">마감 기한</span>
					<input type="datetime-local" placeholder="마감기한" name="deadline" value={deadline} onChange={onChange}/>
				</div>

				<div>
					<span className="label">우선 순위</span>
					<input type="radio" name="priority" value="1" checked={priority === '1'} onChange={onChange}/> 상 {' '}
					<input type="radio" name="priority" value="2" checked={priority === '2'} onChange={onChange}/> 중 {' '}
					<input type="radio" name="priority" value="3" checked={priority === '3'} onChange={onChange}/> 하 {' '}
				</div>

				<div>
					<span className="label">완료 여부</span>
					<input type="checkbox" name="done" value={done} checked={done} onChange={onCheck}/>
				</div>

				<div>
					<input type="submit" value="추가하기" className="btn btn-primary btn-block"/>
				</div>
			</form>
		</div>
	);
};

export default TodoForm;
