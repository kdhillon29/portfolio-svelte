<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
	$: coverImage = data.meta.coverImage;
	console.log(data.meta.coverImage);
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<button on:click={() => history.back()} type="button" class="btn p-2 variant-outline">Back</button>

<article>
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<!-- Post -->
	<div class="prose">
		<!-- <enhanced:img width="500" height="500" src={ProfileImg} alt="some alt text" /> -->
		{#if coverImage}
			<img loading="lazy" class=" w-2/3 h-auto" src={data.meta.coverImage} alt=" post img" />
		{/if}
		<div class="dark:text-secondary-200 text-gray-600 font-medium">
			<svelte:component this={data.PostContent} />
		</div>
	</div>
</article>

<!-- <style>
	article {
		max-inline-size: var(--size-content-3);
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	h1 + p {
		margin-top: var(--size-2);
		color: var(--text-2);
	}

	.tags {
		display: flex;
		gap: var(--size-3);
		margin-top: var(--size-7);
	}

	.tags > * {
		padding: var(--size-2) var(--size-3);
		border-radius: var(--radius-round);
	}
</style> -->
