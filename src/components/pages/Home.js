import React from 'react';
import Todos from '../todos/Todos';
import TodoForm from '../todos/TodoForm';

const Home = () => {
	return (
		<div className='grid-2'>
			<div>
				<TodoForm/>
			</div>
			<div>
				<Todos/>
			</div>
		</div>
	);
};

export default Home;
