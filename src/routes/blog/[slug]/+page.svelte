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

<article class="flex flex-col">
	<!-- Title -->
	<section class="flex flex-col p-2 justify-start gap-1 md:gap-2">
		<div class="flex flex-col justify-center items-center gap-4">
			{#if coverImage}
				<img
					loading="lazy"
					class=" w-full md:w-[60%] h-36 md:h-52 mx-auto"
					src={data.meta.coverImage}
					alt=" post img"
				/>
			{/if}
			<b>{data.meta.title}</b>
		</div>
		<hgroup class="flex justify-center mt-3 gap-12">
			<span class="">
				<Avatar width="w-10" background="bg-secondary-500"
					>{data.meta.author?.split('')[0] || 'KD'}</Avatar
				>

				<small>Published:{formatDate(data.meta.date)}</small>
				<!-- <small>{data.meta.author || 'Dhillon'}</small> -->
			</span>
			<!-- Tags -->
			<div class="tags w-full md:w-1/3 md:my-2">
				{#each data.meta.categories as category}
					<small class="badge m-1 variant-filled">&num;{category}</small>
					<!-- <span class="surface-4">&num;{category}</span> -->
				{/each}
			</div>
		</hgroup>
	</section>

	<!-- Post -->

	<!-- <enhanced:img width="500" height="500" src={ProfileImg} alt="some alt text" /> -->
	<div
		class="dark:text-secondary-200 text-gray-900 leading-7 tracking-wide w-[80%] mx-auto font-medium"
	>
		<svelte:component this={data.PostContent} />
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
