import { useForm } from 'react-hook-form';

interface IForm {
	todo: string;
}

function Todo() {
	const { register, handleSubmit, setValue } = useForm<IForm>();
	const onValidate = (data: IForm) => {
		console.log(data.todo);
		setValue('todo', '');
		// submit을 하면 input의 값이 지워지게
	};
	return (
		<>
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
