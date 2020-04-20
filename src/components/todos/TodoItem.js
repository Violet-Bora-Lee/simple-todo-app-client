import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => {
	const { id, title, description, deadline, priority, done } = todo;

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
				<button className='btn btn-dark btn-sm'>수정</button>
				<button className='btn btn-danger btn-sm'>삭제</button>
				<button
					style={{float: 'right'}}
					className={'deadline badge-white ' + (isOverDeadline() && 'deadline-over')}>
				마감기한: {deadline}</button>
			</p>


		</div>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};

export default TodoItem;