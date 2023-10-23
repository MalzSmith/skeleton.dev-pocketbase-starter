import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
	locals.pb.authStore.clear();
	locals.user = null;

	throw redirect(303, '/');
};