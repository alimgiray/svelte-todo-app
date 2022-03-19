<script>
	import { toggleDone, removeTodo } from '../stores/todoStore';
	export let id = '';
	export let text = '';
	export let completed = false;
</script>

<div class="flex justify-between my-2 p-2 border border-gray-200 hover:border-gray-400">
	<div>
		<input
			class="mx-1 form-checkbox"
			type="checkbox"
			checked={completed}
			on:change={() => toggleDone(id)}
		/>
		<span class={` ${completed ? 'line-through text-gray-400' : ''}`}> {text} </span>
	</div>
	<button class="px-2 border" on:click={() => removeTodo(id)}>X</button>
</div>
