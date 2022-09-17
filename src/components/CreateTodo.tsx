import React from 'react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';

interface IForm {
	todo: string;
}

function CreateTodo() {
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const setToDos = useSetRecoilState(toDoState);
	const handleValid = ({ todo }: IForm) => {
		setToDos((current) => [
			{ text: todo, category: 'TO_DO', id: Date.now() },
			...current,
		]);
		setValue('todo', '');
	};
	return (
		<form onSubmit={handleSubmit(handleValid)}>
			<legend>Input List</legend>
			<input {...register('todo')} type='text' placeholder='할 일을 적으세요' />
			<button>Add</button>
		</form>
	);
}

export default CreateTodo;
