<script>
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import Shinytext from './Shinytext.svelte';
	const drawerStore = getDrawerStore();
	export let y;

	export let tabs = [
		{ name: 'Projects ', link: '/projects' },
		{ name: 'About me', link: '#about' },
		{ name: 'Blog', link: '/blog' },
		{ name: 'Contact', link: '/contact' }
		// {name: '', link: ''},
	];
	import logo from '$lib/assets/logo2.png?enhanced';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<!-- <AppBar> -->
<header
	class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid ' +
		(y > 0
			? ' py-2 bg-violet-900/90 border-violet-950'
			: ' py-3 bg-transparent border-transparent')}
>
	<div class="">
		<!-- <enhanced:img class="w-10 h-10 absolute z-[-10] left-2 top-1 animate-pulse" src={logo} /> -->
		<a href="/"><Shinytext /></a>
	</div>
	<LightSwitch />
	<button class="md:hidden text-xl" on:click={() => drawerStore.open()}>
		<i class="fa-solid fa-bars size-8 md:hidden"></i>
	</button>
	<div class="md:flex items-center gap-4 hidden">
		{#each tabs as tab, index}
			<a href={tab.link} class="duration-200 hover:text-violet-400">
				<p>{tab.name}</p>
			</a>
		{/each}
		<!-- <input class="text-black bg-slate-50" type="text" name="search" placeholder="search" /> -->
		<!-- <button
	class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-violet-600 text-white"
	>
	<div
	class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
	/>
	<h4 class="relative z-9">Login</h4>
	</button> -->
	</div>
</header>
<!-- </AppBar> -->
<!-- Left Sidebar Slot -->
<!-- <slot name="sidebarLeft">
		<p>Sidebar Working!</p>
	</slot> -->
