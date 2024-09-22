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
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';
	let y: number;
	let innerWidth = 0;
	let innerHeight = 0;

	function goTop() {
		document.body.scrollIntoView();
	}

	initializeStores();
</script>

<div
	class="container relative flex flex-col md:gap-6 max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
	<!-- <div
        class={"fixed bottom-0 w-full  duration-200 flex p-10 z-[10] " +
            (y > 0
                ? " opacity-full pointer-events-auto"
                : " pointer-events-none opacity-0")}
    >
        <button
            on:click={goTop}
            class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center"
        >
            <i class="fa-solid fa-arrow-up" />
        </button>
    </div> -->

	<Header {y} />
	<Drawer>
		<Navigation />
	</Drawer>
	<div class="flex-1"><slot /></div>
	<Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
