import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

function Todo() {
	const { register, watch } = useForm();

	// register: onBlur, onChange, onClick, ref... 를 return 해 주는 함수
	// watch: 유저가 input에 입력한 내용을 바로바로 return 해 줌
	console.log(watch());

	return (
		<>
			<div className='input-todo'>
				<form action=''>
					<legend>Todolist</legend>
					<input
						{...register('toDo')}
						type='text'
						placeholder='오늘의 할일을 적어주세요'
					/>
					<button>Add</button>
				</form>
			</div>
		</>
	);
}

// function Todo() {
// 	const [toDo, setToDo] = useState('');
// 	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
// 		const {
// 			currentTarget: { value },
// 		} = e;
// 		setToDo(value);
// 	};

// 	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// 		e.preventDefault();
// 		console.log(toDo);
// 	};

// 	return (
// 		<div className='todo-wrap'>
// 			<form onSubmit={onSubmit}>
// 				<legend>Todo list</legend>
// 				<input
// 					onChange={onChange}
// 					value={toDo}
// 					type='text'
// 					placeholder='오늘의 할 일을 적어 주세요'
// 				/>
// 				<button>Add</button>
// 			</form>
// 		</div>
// 	);
// }

export default Todo;
