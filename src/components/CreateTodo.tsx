import React from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
	todo: string;
}

function CreateTodo() {
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const category = useRecoilValue(categoryState);
	const setToDos = useSetRecoilState(toDoState);
	const handleValid = ({ todo }: IForm) => {
		setToDos((current) => [
			{ text: todo, category: category, id: Date.now() },
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
