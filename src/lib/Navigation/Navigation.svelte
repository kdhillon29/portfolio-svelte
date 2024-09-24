<script lang="ts">
	import { getDrawerStore } from '@skeletonlabs/skeleton';

	const drawerStore = getDrawerStore();
	function handleClick() {
		// drawerStore.subscribe()

		drawerStore.close();
	}
</script>

<button on:click={handleClick}>
	<nav class="list-nav w-full p-8 mx-8">
		<ul>
			<li><a href="/">Homepage</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/contact">Contact</a></li>
		</ul>
	</nav>
</button>

<style>
	nav {
		@apply mt-12;
	}
	ul > li {
		@apply p-4 w-full;
		@apply border-spacing-1 border-b border-secondary-100;
	}
</style>
