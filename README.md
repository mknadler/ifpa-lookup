# Pinball Lookup

Simple SvelteKit site that uses the [IFPA](https://www.ifpapinball.com/)'s [API v2](https://api.ifpapinball.com/d/#/) to get my competitive pinball stats and then renders them. v2 of the IFPA API is in beta and under active development so this little site may break at some point. I would use the more stable v1 but it lacks easy access to some of the data I need (e.g. women's rankings) and generally has more and more interesting endpoints.

Some ideas for how I could expand on this in the future and/or in other repos or versions:
- Convert the load fetch to a form action to allow other people to look up their own IFPA data
- For women who play in IFPA there are (at least) three categories of relevant information that appear in their own views on IFPA's site. I could make my own life easier by showing all of that info in one place. Those categories:
	- Open -- this is for events that anyone can attend
	- Women's (Restricted) -- this is women's events that only women can compete in (and nb/trans people, exact details depending on individual tournament directors -- it's generally honor system)
	- Women's (Open) -- this is how women rank in Open tournaments as compared to other women (this is used for certain invitationals, e.g. the Women's World Championships)
- Calculate and display [efficiency percentage](https://www.ifpapinball.com/menu/ranking-info-2/#efficiency) for women's restricted events (currently a vanity stat but will be important in the World Pinball Player Rankings v6.0). This is shown for open events on IFPA's site right now but not for women's restricted ones. 
	- I could verify that whatever algorithm I come up with to calculate it works by running it against the open event data + seeing if I generate the same eff%s as is in the query response for open events.
- Play around with different data viz approaches to showing all this data that improve on the IFPA site "whoops all tables" approach


## Developing

Install dependencies with `pnpm install`.
Add your [IFPA key](https://www.ifpapinball.com/api/request_api_key.php) to .env as `VITE_IFPA_APIKEY=abc123` for local development; versions 1 and 2 of the IFPA api use the same keys.
If hosting via Vercel, add the same key in the project's dashboard on Vercel as IFPA_KEY.

Run locally with:
```bash
npm run dev
```

## Building

To create a production version: `npm run build`.
Preview the production build with `npm run preview`.

This is not mandatory before deploying; Vercel handles the build process based on GH activity.
N.B.: Bugs with env secrets on the prod side will not necessarily be reproducible via this 'local production version' testing process.