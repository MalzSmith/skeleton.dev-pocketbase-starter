<script lang="ts">
    import { page } from '$app/stores';  
	import Icon from '@iconify/svelte';
	import { AppRailAnchor } from '@skeletonlabs/skeleton';

	export let iconName: string;
	export let label: string;
	export let href: string;

</script>

<AppRailAnchor href="{href}" selected={$page.url.pathname === href}>
    <svelte:fragment slot="lead">
        <Icon icon={iconName} class="text-3xl" />
    </svelte:fragment>
    <span>{label}</span>
</AppRailAnchor>
