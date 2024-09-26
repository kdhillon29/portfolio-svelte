<!-- +layout.svelte -->
<script>
	import '$lib/styles/style.scss';
	import 'highlight.js/styles/github-dark.css';

	export const prerender = true;
</script>

<h1 class="text-center bg-tertiary-900 p-2 w-1/2 mx-auto">Welcome to Blog Page</h1>
<button
	on:click={() => history.back()}
	type="button"
	class="btn ml-12 px-2 w-14 p-2 bg-secondary-800 variant-outline">Back</button
>

<main>
	<slot />
</main>
