import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

function Todo() {
	const { register, watch, handleSubmit } = useForm();
	//handleSubmit: form validation 담당
	//handleSubmit(데이터가 유효할때, 데이터가 유효하지 않을때)
	//handleSubmit의 onInvalid는 필수적이지 않지만 onValid는 필수적

	//hook-form에서 required를 적으면 누군가 개발자도구를 열어서 html을 수정할 수도 없고, 사용자가 입력을 안 했을 시 자동으로 입력을 안 한 곳으로 focus, 마우스가 이동해서 사용자의 편의성을 도와준다

	const onValid = (data: any) => {
		console.log(data);
	};

	return (
		<>
			<div className='input-todo'>
				<form onSubmit={handleSubmit(onValid)}>
					<legend>Todolist</legend>
					<input
						{...(register('toDo'), { required: true, minLength: 10 })}
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
