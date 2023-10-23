<script lang="ts">
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import type { LayoutData } from './$types';
	import LoginForm from '$lib/components/login-form.svelte';

	export let data: LayoutData;
</script>

{#if !data.user}
	<LoginForm />
{:else}
	<slot />
{/if}
