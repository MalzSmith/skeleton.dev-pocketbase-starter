<script>
	import { AppRail } from '@skeletonlabs/skeleton';
	import NavButton from './nav-button.svelte';
</script>

<AppRail>
	<NavButton iconName="solar:key-linear" label="Page 1" href="/page1" />
    <NavButton iconName="solar:chat-square-2-linear" label="Page 2" href="/page2" />

    <svelte:fragment slot="trail">
		<NavButton iconName="solar:logout-linear" label="Logout" href="/logout" />
	</svelte:fragment>
	
</AppRail>
