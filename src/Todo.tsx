import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

function Todo() {
	const [toDo, setToDo] = useState('');
	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = e;
		setToDo(value);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(toDo);
	};

	return (
		<div className='todo-wrap'>
			<form onSubmit={onSubmit}>
				<legend>Todo list</legend>
				<input
					onChange={onChange}
					value={toDo}
					type='text'
					placeholder='오늘의 할 일을 적어 주세요'
				/>
				<button>Add</button>
			</form>
		</div>
	);
}

export default Todo;
