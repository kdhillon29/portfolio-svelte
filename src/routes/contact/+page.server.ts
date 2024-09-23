import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import validator from 'validator';
import { message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
// const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);
// Define outside the load function so the adapter can be cached
const schema = z.object({
	name: z.string({ message: 'name is reuired.' }).min(2),
	email: z.string({ message: 'email is reuired.' }).email({ message: 'Invalid email.' }),
	phone: z.optional(z.string().min(8).max(10).refine(validator.isMobilePhone)),
	subject: z.string().min(2).default('Hi'),
	message: z.string({ message: 'Enter message details ' }).min(5)
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};
export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));
		console.log(form);

		if (!form.valid) {
			// Again, return { form } and things will just work.
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data

		// Display a success status message
		return message(form, 'Form posted successfully!');
	}
};
