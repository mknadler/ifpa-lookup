import { IFPA_KEY } from '$env/static/private'

// TODO: ~eventually~, make this a form action instead of a load event so people can look up their own stuff?
// probably that will be a different little project entirely so i can avoid scope creep on this
export async function load({fetch}) {
	// No Bearer b/c IFPA uses url param auth
	const headers = {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
	const url = `https://api.ifpapinball.com/v2/player?players=36799&api_key=${IFPA_KEY}`

	let response;

	try {
	 	response = await fetch(url, headers)
	} catch (error) {
		return { error: 'Failed to get any data from IFPA API, try again later' }
	}

	if (response?.ok) {
		const data = await response.json();
		if (data?.player && data.player.length === 0) {
			return { error: 'Player not found, check ID'}
		}
		return data
	} else {
		return { error: response?.status }
	}
}