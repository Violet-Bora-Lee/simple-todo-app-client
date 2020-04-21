import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import TodoContext from '../../context/todo/todoContext';
import TextareaAutosize from 'react-textarea-autosize';

const TodoForm = () => {
	const todoContext = useContext(TodoContext);
	const alertContext = useContext(AlertContext);

	const { addTodo, updateTodo, clearCurrent, current } = todoContext;
	const { setAlert } = alertContext;

	useEffect(() => {
		if(current !== null) {
			setTodo(current);
		} else {
			setTodo({
				title: '',
				description: '',
				deadline: '',
				priority: '1',
				done: false
			})
		}
	}, [todoContext, current])

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

		// todo date 예외처리
		if(title === '') {
			setAlert('제목은 필수값 입니다.', 'danger')
		} else if(title.length > 20) {
			setAlert("제목이 너무 깁니다. 자세한 내용은 '상세 내용' 항목에 입력해 주세요.", 'danger');
		} else {
			if(current === null) {
				addTodo(todo);
			} else {
				updateTodo(todo);
			}
			clearAll();
		}
	}

	const clearAll = () => {
		clearCurrent();
	}

	return (
		<div>
			<form onSubmit={onSubmit}>

				<h2 className="text-primary">{current ? '할 일 수정' : '할 일 추가'}</h2>

				<input type="text" placeholder="제목(20자 이내)" name="title" value={title} onChange={onChange}/>

				<TextareaAutosize
					className="description-form"
					useCacheForDOMMeasurements
					placeholder="상세 내용"
					name="description"
					value={description}
					onChange={onChange}
				/>

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
					<input type="submit" value={current ? '수정하기' : '추가하기'} className="btn btn-primary btn-block"/>
				</div>

				{current && <div>
					<button className="btn btn-light btn-block" onClick={clearAll}>초기화</button>
				</div>}
			</form>
		</div>
	);
};

export default TodoForm;
