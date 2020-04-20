import React from 'react';
import Todos from '../todos/Todos';

const Home = () => {
	return (
		<div className='grid-2'>
			<div>
				{/*Todo Edit Form*/}
			</div>
			<div>
				<Todos/>
			</div>
		</div>
	);
};

export default Home;
