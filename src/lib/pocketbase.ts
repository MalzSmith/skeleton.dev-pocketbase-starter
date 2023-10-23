import { POCKETBASE_URL } from '$env/static/private';
import PocketBase from 'pocketbase';

export const pb = new PocketBase(POCKETBASE_URL);
