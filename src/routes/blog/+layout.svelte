<!-- +layout.svelte -->
<script>
	import '$lib/styles/style.scss';
	import 'highlight.js/styles/github-dark.css';

	export const prerender = true;
</script>

<h1 class="text-center p-4 bg-tertiary-700 w-2/3 mx-auto">Welcome to My Blog</h1>
<main>
	<slot />
</main>
