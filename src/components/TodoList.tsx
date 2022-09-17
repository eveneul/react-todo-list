import { useRecoilState, useRecoilValue } from 'recoil';
import { toDoSelector, toDoState } from '../atoms';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

function TodoList() {
	const [todo, doing, done] = useRecoilValue(toDoSelector);
	return (
		<>
			<h1>To Do list</h1>
			<hr />

			<div className='input-wrapper'>
				<CreateTodo />
				<section>
					<h2>To-Do</h2>
					<ul>
						{todo.map((data) => (
							<Todo key={data.id} {...data} />
						))}
					</ul>
				</section>
				<section>
					<h2>Doing</h2>
					<ul>
						{doing.map((data) => (
							<Todo key={data.id} {...data} />
						))}
					</ul>
				</section>
				<section>
					<h2>Done</h2>
					<ul>
						{done.map((data) => (
							<Todo key={data.id} {...data} />
						))}
					</ul>
				</section>
			</div>
		</>
	);
}

export default TodoList;
