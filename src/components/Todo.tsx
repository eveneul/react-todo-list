import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms';

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
			{category !== Categories.DOING && (
				<button name={Categories.DOING + ''} onClick={onClick}>
					Doing
				</button>
			)}
			{category !== Categories.TO_DO && (
				<button name={Categories.TO_DO + ''} onClick={onClick}>
					To do
				</button>
			)}
			{category !== Categories.DONE && (
				<button name={Categories.DONE + ''} onClick={onClick}>
					Done
				</button>
			)}
		</li>
	);
}

export default Todo;
