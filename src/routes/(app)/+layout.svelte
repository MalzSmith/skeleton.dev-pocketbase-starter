<script lang="ts">
    import Navbar from '$lib/components/navbar.svelte';
import SiteHeader from '$lib/components/site-header.svelte';
import { AppShell } from '@skeletonlabs/skeleton';
</script>


<AppShell>
	<svelte:fragment slot="header"><SiteHeader></SiteHeader></svelte:fragment>
	<svelte:fragment slot="sidebarLeft"><Navbar></Navbar></svelte:fragment>
	<!-- (sidebarRight) -->
    <!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>