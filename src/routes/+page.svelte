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
		<div class="info_rankings">
			<p><strong>Women's rank (global):</strong> {data.player[0].player_stats.current_womens_rank}</p>
			<!-- the singular of series is obviously... -->
			<p><strong>Women's rank (NY):</strong> {data.player[0].series.find(serie => {
					return (serie.series_code === 'WNACSW' && serie.region_code === 'NY' && serie.year === '2023')
				}).series_rank}</p>
		</div>
		<p class="info__debug" hidden>{ JSON.stringify(data.player[0].series) }</p>
	{:else if data.errorMessage}
		<p>Error: {data.errorMessage}</p>
	{:else if data.error}
		<p>Error: {data.error}</p>
	{/if}
</section>

<style>
</style>
