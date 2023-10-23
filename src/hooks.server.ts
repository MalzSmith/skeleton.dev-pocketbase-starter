import { pb } from '$lib/pocketbase';
import type { Handle } from '@sveltejs/kit';
import { COOKIE_NAME } from '$lib/constants';

export const handle: Handle = async ({ event, resolve }) => {
	const cookie = event.request.headers.get('cookie');

	event.locals.pb = pb;

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(cookie || '', COOKIE_NAME);

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = structuredClone(event.locals.pb.authStore.model) ?? null;
	} else {
		event.locals.user = null;
	}

	const response = await resolve(event);

	// send back cookie to the client with the latest store state
	response.headers.append(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ sameSite: 'lax' }, COOKIE_NAME)
	);

	return response;
};

import type { HandleServerError } from '@sveltejs/kit';

export const handleError = (({ error }) => {
	console.log('Unexpected error!');
	console.log(error);
	return {
		message: 'Internal error.',
		code: '500'
	};
}) satisfies HandleServerError;


// Random stuff for better docker compatibility
process.on('SIGINT', function () { process.exit(); });
process.on('SIGTERM', function () { process.exit(); });
