<script>
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar slotLead="h-12" shadow="shadow">
    <svelte:fragment slot="lead">
    <!--Lead--><p>Page title</p>
    </svelte:fragment>


    <svelte:fragment slot="trail">
        <div class="mx-4">
            <LightSwitch />
        </div>
    </svelte:fragment>


</AppBar>
