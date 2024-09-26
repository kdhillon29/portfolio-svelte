<!-- +layout.svelte -->
<script>
	import '$lib/styles/style.scss';
	import 'highlight.js/styles/github-dark.css';

	export const prerender = true;
</script>

<hr />
<!-- <h1 class="text-center bg-tertiary-900 p-2 w-1/2 mx-auto">Welcome to Blog Page</h1> -->

<main>
	<button on:click={() => history.back()} class=" anchor m-2 w-14">&larr;back</button>
	<slot />
</main>
