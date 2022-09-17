import { useForm } from 'react-hook-form';

interface IForm {
	email: string;
	msg: string;
	password: string;
	rePassword: string;
}

function Todo() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError, //setError: 특정한 상황에서 오류를 발생시킴
	} = useForm<IForm>();
	const onValid = (data: IForm) => {
		if (data.password !== data.rePassword) {
			setError(
				'rePassword',
				{ message: '입력한 비번이 동일하지 않아요' },
				{ shouldFocus: true }
			);
		}
	};
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
							validate: {
								noDog: (value) =>
									value.includes('dog')
										? 'dog이 포함된 아이디는 사용할 수 없습니다'
										: true,
								noCat: (value) =>
									value.includes('cat')
										? 'cat이 포함된 아이디는 사용할 수 없습니다'
										: true,
							},
							// validate는 boolean을 return
							// dog이 포함된 글자는 허용 X
							// 예를 들어 이미 가입된 아이디를 걸러낼 때 사용
						})}
					/>
					<span>{errors?.msg?.message}</span>
					<input
						type='password'
						placeholder='비밀번호1'
						{...register('password', { required: '비번 입력하세요' })}
					/>
					<span>{errors?.password?.message}</span>
					<input
						type='password'
						placeholder='비밀번호 재입력하세요'
						{...register('rePassword', { required: '비번 입력하세요' })}
					/>
					<span>{errors.rePassword?.message}</span>
					<button>Add</button>
				</form>
			</div>
		</>
	);
}

export default Todo;
