import { useForm } from 'react-hook-form';

interface IErrors {
	email: string;
	msg: string;
}

function Todo() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IErrors>();
	const onValid = (data: any) => {};
	console.log(errors);

	return (
		<>
			<div className='input-todo'>
				<form onSubmit={handleSubmit(onValid)}>
					<legend>Todolist</legend>
					<input
						placeholder='user email'
						{...register('email', {
							required: '이메일입력해요',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@naver.com$/,
								message: '네이버 이메일만 허용됩니다',
							},
						})}
					/>
					<span>{errors?.email?.message}</span>
					<input
						type='text'
						placeholder='메시지 입력하세요'
						{...register('msg', {
							required: '메시지 입력해',
							minLength: {
								value: 5,
								message: '5글자 이상 입력해',
							},
						})}
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
