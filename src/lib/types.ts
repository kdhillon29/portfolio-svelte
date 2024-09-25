export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	coverImage?: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
