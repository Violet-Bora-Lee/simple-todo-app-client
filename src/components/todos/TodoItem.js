import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import TodoContext from '../../context/todo/todoContext';

const TodoItem = ({ todo }) => {
	const todoContext = useContext(TodoContext);
	const { deleteTodo, setCurrent, clearCurrent } = todoContext;

	const { id, title, description, deadline, priority, done } = todo;

	const onDelete = () => {
		deleteTodo(id);
		clearCurrent();
	}

	const getPriorityBadgeClass = (priority) => {
		let badge = '';

		if (priority === '1') {
			badge = 'priority-high';
		} else if (priority === '2') {
			badge = 'priority-middle';
		} else if (priority === '3') {
			badge = 'priority-low';
		}
		return badge;
	}

	const getPriorityString = (priority) => {
		let string = '';
		if (priority === '1') {
			string = '우선순위: 상'
		} else if (priority === '2') {
			string = '우선순위: 중'
		} else if (priority === '3') {
			string = '우선순위: 하'
		}
		return string;
	}

	const isOverDeadline = () => {
		// 데드라인 지나면 true반환
		return false;
	}



	return (
		<div className='card bg-light'>
			<h3 className='text-primary text-left'>
				{title}{' '}
				<span
					style={{float: 'right'}}
				  className={'badge ' + `${getPriorityBadgeClass(priority)}`}>
					{getPriorityString(priority)}
				</span>
			</h3>
			<span className='description'>
				{description}
			</span>
			<p>
				<button className='btn btn-dark btn-sm' onClick={() => setCurrent(todo)}>수정</button>
				<button className='btn btn-danger btn-sm' onClick={onDelete}>삭제</button>
				<button
					style={{float: 'right'}}
					className={'deadline badge-white ' + (isOverDeadline() && 'deadline-over')}>
				마감기한: {deadline ? deadline : '없음'}</button>
			</p>


		</div>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};

export default TodoItem;
