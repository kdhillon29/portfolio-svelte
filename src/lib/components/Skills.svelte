<script lang="ts">
	import { onMount, type ComponentType } from 'svelte';
	import type { Icon } from 'lucide-svelte';
	import express from '$lib/assets/express-logo.png';
	import nodejs from '$lib/assets/nodejs-icon.svg';
	import nextjs from '$lib/assets/nextjs-icon.svg';
	import tailwind from '$lib/assets/tailwindCss.png';

	const skills = [
		{
			category: 'Frontend',
			technologies: [
				{ name: 'HTML', icon: 'fa-brands fa-html5' },

				{ name: 'CSS', icon: 'fa-brands fa-css3 text-blue-600' },

				{ name: 'React', icon: ' fa-brands fa-react text-blue-500' },
				{ name: 'Scss', icon: ' fa-brands fa-sass text-pink-600' },
				{ name: 'Bootstrap', icon: ' fa-brands fa-bootstrap text-purple-600' },
				{ name: 'JavaScript', icon: 'fa-brands fa-js text-yellow-500' }
			]
		},
		{
			category: 'Fullstack',
			technologies: [
				// { name: 'Node Js', icon: `${(<i class="fa-brands fa-nodejs text-green-500"></i>)}` },
				{ name: 'ExpressJs', img: nodejs, icon: 'fa-brands  text-green-500' },
				{ name: 'mongoDb', img: '/assets/images/mongodb.svg', icon: 'fa-brands text-green-600' },
				{ name: 'SvelteKit', img: express, icon: 'fa-brands w-12 h-12 text-yellow-600' },
				{ name: 'Nextjs', img: nextjs, icon: 'fa-brands  text-black-200' },
				{ name: 'TailwindCss', img: tailwind, icon: 'fa-brands  text-blue-100' },
				{ name: 'Github', icon: 'fa-brands fa-github text-purple-600' }
				// { name: 'GitHub', icon: <DiGithubBadge className="text-gray-600" /> }
			]
		}
	];
	let inView = false;
	onMount(() =>
		setInterval(() => {
			inView = true;
		}, 2000)
	);
</script>

<div
	class="max-w-[650px] mx-auto flex flex-col justify-center p-4 text-gray-200 pb-8 md:py-12"
	id="skills"
>
	{#if inView}
		<h2 class="text-xl md:text-3xl font-bold mb-2 text-center">Skills</h2>
		<p class="text-center mb-8">
			I worked on various frontend and fullstack projects. Check them <a href="/" class="underline"
				>there</a
			>
		</p>
		<div
			class="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        "
		>
			{#each skills as skill}
				<div
					class="border border-purple-900 p-6 rounded-lg odd:bg-purple-500/20 bg-purple-900/20 shadow-lg
                                w-full md:w-1/2"
				>
					<h3 class="text-xl font-bold mb-4 text-center">{skill.category}</h3>
					<div class="grid grid-cols-2 gap-4 md:gap-8">
						{#each skill.technologies as tech}
							<div class="flex items-center space-x-2">
								{#if tech.img}
									<img width="20" height="20" src={tech.img} alt="" />
								{:else}
									<span class="text-2xl"><i data-src={tech?.img} class={tech.icon}></i></span>
								{/if}
								<span>{tech.name}</span>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
