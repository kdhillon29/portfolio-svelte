<script>
	import { getDrawerStore } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	const drawerStore = getDrawerStore();
	export let y;

	export let tabs = [
		{ name: 'Projects ', link: '/projects' },
		{ name: 'About me', link: '#about' },
		{ name: 'Blog', link: '/blog' },
		{ name: 'Contact', link: '/contact' }
		// {name: '', link: ''},
	];
</script>

<!-- <AppBar> -->
<header
	class={'sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid ' +
		(y > 0
			? ' py-4 bg-secondary-900/70 border-violet-950'
			: ' py-6 bg-transparent border-transparent')}
>
	<h1 class="font-medium">
		<a href="/"> <b class="font-bold poppins">Kanwar</b> <span class="">Dhillon</span></a>
	</h1>
	<button class="md:hidden" on:click={() => drawerStore.open()}>
		<i class="fa-solid fa-bars md:hidden"></i>
	</button>
	<div class="md:flex items-center gap-4 hidden">
		{#each tabs as tab, index}
			<a
				href={tab.link}
				class="duration-200 hover:text-violet-400"
				target={index === 2 ? '_blank' : ''}
			>
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
