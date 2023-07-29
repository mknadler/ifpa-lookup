<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="MIR Pinball Stats" />
</svelte:head>

<section>
	{#if data}
		{ JSON.stringify(data) }
	{/if}
</section>

<style>
</style>
