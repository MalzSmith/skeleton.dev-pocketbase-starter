import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';

export const actions: Actions = {
	default: async ({ locals, request }) => {
		console.log("Logging in...");
		const data = Object.fromEntries(await request.formData()) as {
			email: string;
			password: string;
		};

		try {
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (e) {
			if (e instanceof ClientResponseError) {
				console.log(e);
				console.log(`Failed login attempt for ${data.email}`)
				return fail(400, {incorrect: true });
			}

			console.log(JSON.stringify(e));
			console.error(e);

			throw e;
		}

		throw redirect(303, '/');
	}
};