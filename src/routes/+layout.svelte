<script lang="ts">
	import '../app.postcss';
	import Navigation from '$lib/Navigation/Navigation.svelte';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	import { initializeStores, Drawer, Toast } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { Img } from 'svelte-email';
	let y: number;
	let innerWidth = 0;
	let innerHeight = 0;

	function goTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });

		// document.body.scrollIntoView();
	}

	initializeStores();
	let loading = true;
	onMount(() => (loading = false));
</script>

<div
	class="container relative flex flex-col md:gap-6 max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
	<div
		class={'fixed bottom-10 right-0  w-28  duration-200 flex p-2 z-[10] ' +
			(y > 0 ? ' opacity-full pointer-events-auto' : ' pointer-events-none opacity-0')}
	>
		<button
			on:click={goTop}
			class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
		>
			<i class="fa-solid fa-arrow-up" />
		</button>
	</div>

	<Header {y} />
	<!-- <div class="absolute top-0 right-0 z-50"><LightSwitch /></div> -->
	<Drawer>
		<Navigation />
	</Drawer>
	{#if loading}
		<img
			class=" animate-spin inset-0 top-20 w-16 h-16 mx-auto"
			src="/assets/images/loader-icon.png"
			alt="loader"
		/>
	{/if}
	<slot />
	<Toast />
	<Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
