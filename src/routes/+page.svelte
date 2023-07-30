<script>
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="MIR Pinball Stats" />
</svelte:head>

<section class="me">
	<h1>IFPA Lookup</h1>
	<p>one-stop-shop for womens pinball info (instead of needing to click around all over on the ifpa site)<p>
</section>

<hr />

<section class="info">
	{#if data?.player}
		<div class="info__general">
			<span class="info__general__name">
				<strong>Name:</strong> {data.player[0].first_name} {data.player[0].last_name}
			</span>
			<span class="info__general__initials">
				<strong>Initials:</strong> {data.player[0].initials}
			</span>
			<span class="info__general__initials">
				<strong>Player ID:</strong> {data.player[0].player_id} 
			</span>
		</div>
		<p class="info__debug">{ JSON.stringify(data.player[0].player_stats) }</p>
	{/if}
</section>

<style>
</style>
