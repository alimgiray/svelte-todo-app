import { writable } from 'svelte/store';

export const todos = writable([]);

export const createTodo = (text) => {
	todos.update((todos) => {
		const updatedTodos = [
			...todos,
			{
				text,
				completed: false,
				id: Date.now()
			}
		];
		return updatedTodos;
	});
};

export const removeTodo = (id) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleDone = (id) => {
	todos.update((todos) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		return updatedTodos;
	});
};
