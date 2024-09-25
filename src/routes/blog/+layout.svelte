<!-- +layout.svelte -->
<script>
	import '$lib/styles/style.scss';
	import 'highlight.js/styles/github-dark.css';

	export const prerender = true;
</script>

<header>Hi, I'm a header</header>

<main>
	<slot />
</main>

<footer>Hello, I'm the footer.</footer>
