import { useRecoilState, useRecoilValue } from 'recoil';
import { toDoState } from '../atoms';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

function TodoList() {
	const toDo = useRecoilValue(toDoState);

	return (
		<>
			<h1>To Do list</h1>
			<hr />

			<div className='input-wrapper'>
				<CreateTodo />
				<ul>
					{toDo.map((data) => (
						<Todo key={data.id} {...data} />
					))}
				</ul>
			</div>
		</>
	);
}

export default TodoList;
