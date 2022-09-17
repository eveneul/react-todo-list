import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Categories, categoryState, toDoSelector, toDoState } from '../atoms';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

function TodoList() {
	const toDos = useRecoilValue(toDoSelector);
	const [category, setCategory] = useRecoilState(categoryState);
	const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setCategory(value as any);
		// 선택한 option에 있는 데이터만 호출되게
	};
	return (
		<>
			<h1>To Do list</h1>
			<hr />

			<div className='input-wrapper'>
				<select value={category} onInput={onInput}>
					<option value={Categories.TO_DO}>To Do</option>
					<option value={Categories.DOING}>Doing</option>
					<option value={Categories.DONE}>Done</option>
				</select>
				<CreateTodo />
				{toDos?.map((data) => (
					<Todo key={data.id} {...data} />
				))}
			</div>
		</>
	);
}

export default TodoList;
