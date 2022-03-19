<script>
	import { createTodo } from '../stores/todoStore';
	let todoText = '';
	const addTodo = () => {
		if (todoText === '') return;
		createTodo(todoText);
		todoText = '';
	};
</script>

<form class="flex justify-center my-4" on:submit|preventDefault={addTodo}>
	<input
		type="text"
		name="todo"
		bind:value={todoText}
		placeholder="learn svelte..."
		class="p-2 w-full text-md border border-gray-300 outline-none focus:border-gray-900"
	/>
	<button class="border py-2 px-4 border-gray-300 outline-none focus:border-gray-900">+</button>
</form>
