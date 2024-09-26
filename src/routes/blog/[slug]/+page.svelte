<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data;
	$: coverImage = data.meta.coverImage;
	console.log(data.meta.coverImage);
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:description" content={data.meta.description} />
</svelte:head>

<article>
	<!-- Title -->
	<section class="flex justify-between gap-6 mb-6">
		<div class="flex flex-col gap-4">
			{#if coverImage}
				<img loading="lazy" class=" w-64 h-auto" src={data.meta.coverImage} alt=" post img" />
			{/if}
			<h3>{data.meta.title}</h3>
			<p>Published at {formatDate(data.meta.date)}</p>
		</div>
		<hgroup class="flex gap-2 flex-col mt-6">
			<Avatar background="bg-secondary-500">{data.meta.author?.split('')[0] || 'D'}</Avatar>
			<small>{data.meta.author || 'Dhillon'}</small>
			<!-- Tags -->
			<div class="tags my-2">
				{#each data.meta.categories as category}
					<span class=" p-1 mr-2 badge variant-filled">&num;{category}</span>
					<!-- <span class="surface-4">&num;{category}</span> -->
				{/each}
			</div>
		</hgroup>
	</section>

	<!-- Post -->
	<div class="prose">
		<!-- <enhanced:img width="500" height="500" src={ProfileImg} alt="some alt text" /> -->
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
