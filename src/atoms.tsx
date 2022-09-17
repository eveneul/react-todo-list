import { atom, selector } from 'recoil';
// selector: atom의 output을 변형시켜 줌

export interface IToDo {
	text: string;
	id: number;
	category: 'TO_DO' | 'DOING' | 'DONE';
}

export const categoryState = atom({
	key: 'category',
	default: 'TO_DO',
});

export const toDoState = atom<IToDo[]>({
	key: 'toDo',
	default: [],
});

export const toDoSelector = selector({
	key: 'toDoSelector',
	get: ({ get }) => {
		const toDos = get(toDoState);
		const category = get(categoryState);
		return toDos.filter((toDo) => toDo.category === category);
	},
});
