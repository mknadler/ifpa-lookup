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

	try {
		const response = await fetch(url, headers)
		const data = await response.json();

		return data
	} catch (error) {
		// TODO: Add better error handling
		console.log("Error is", error);
	}
}