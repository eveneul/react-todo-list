import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from '../atoms';

function Todo({ text, category, id }: IToDo) {
	const setTodos = useSetRecoilState(toDoState);
	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		const {
			currentTarget: { name },
		} = event;
		setTodos((current) => {
			const targetIdx = current.findIndex((toDo) => toDo.id === id);
			const existingTodo = current[targetIdx];
			const newTodo = { text, id, category: name as any };
			return [
				...current.slice(0, targetIdx),
				newTodo,
				...current.slice(targetIdx + 1),
			];
		});
	};
	return (
		<li>
			<span>{text}</span>
			{category !== 'DOING' && (
				<button name='DOING' onClick={onClick}>
					Doing
				</button>
			)}
			{category !== 'TO_DO' && (
				<button name='TO_DO' onClick={onClick}>
					To do
				</button>
			)}
			{category !== 'DONE' && (
				<button name='DONE' onClick={onClick}>
					Done
				</button>
			)}
		</li>
	);
}

export default Todo;
