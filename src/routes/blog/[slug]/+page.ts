import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		console.log(params.slug);
		const post = await import(`../../../lib/posts/${params.slug}.md`);
		// const post = await import('../../../lib/posts/' + params.slug + '.md');

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.slug }
		};
	} catch (err) {
		error(404, `some error ${err}`);
	}
};
