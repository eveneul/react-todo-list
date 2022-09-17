import { useForm } from 'react-hook-form';
import {
	atom,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from 'recoil';

interface IForm {
	todo: string;
}

interface IToDo {
	text: string;
	category: 'TO_DO' | 'DOING' | 'DONE';
}

const toDoState = atom<IToDo[]>({
	key: 'toDo',
	default: [],
});

function Todo() {
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const onValidate = (data: IForm) => {
		console.log(data.todo);
		setValue('todo', '');
	};

	// const value = useRecoilValue(toDoState); // atom값을 불러올 때
	// const modFn = useSetRecoilState(toDoState); // atom값을 변경할 때
	// const [value, modFn] = useRecoilState(toDoState) // atom값을 불러오고, 변경할 때 사용 / useState랑 비슷
	const [toDo, setToDo] = useRecoilState(toDoState); // atom값을 불러오고, 변경할 때 사용 / useState랑 비슷

	return (
		<>
			<h1>To Do list</h1>
			<hr />
			<div className='input-wrapper'>
				<form onSubmit={handleSubmit(onValidate)}>
					<legend>Input List</legend>
					<input
						{...register('todo')}
						type='text'
						placeholder='할 일을 적으세요'
					/>
					<button>Add</button>
				</form>
			</div>
		</>
	);
}

export default Todo;
