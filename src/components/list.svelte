<script>
	import Todo from './todo.svelte';
	import { todos } from '../stores/todoStore';
</script>

<div class="mt-4 mx-auto w-full">
	{#each $todos as todo}
		<Todo id={todo.id} text={todo.text} completed={todo.completed} />
	{/each}
</div>
