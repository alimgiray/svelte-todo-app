<script>
	import Form from '../components/form.svelte';
	import List from '../components/list.svelte';
</script>

<svelte:head>
	<title>My TODO App!</title>
</svelte:head>

<main class="p-6 mx-auto w-full md:w-2/5">
	<h1 class="text-2xl font-bold text-center">My TODOs</h1>
	<Form />
	<List />
</main>
