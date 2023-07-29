# Pinball Lookup

Simple SvelteKit site that uses the [IFPA](https://www.ifpapinball.com/)'s [API v2](https://api.ifpapinball.com/d/#/) to get my competitive pinball stats and then renders them. v2 of the IFPA API is in beta and under active development so this little site may break at some point. I would use the more stable v1 but it lacks easy access to some of the data I need (e.g. women's rankings) and generally has more and more interesting endpoints.

## Developing

Install dependencies with `pnpm install`.
Add your [IFPA key](https://www.ifpapinball.com/api/request_api_key.php) to .env as `VITE_IFPA_APIKEY=abc123` for local development.
If hosting via Vercel, add the same key in the project's dashboard on Vercel as IFPA_KEY.

Run locally with:
```bash
npm run dev
```

## Building

To create a production version: `npm run build`.
Preview the production build with `npm run preview`.

This is not mandatory before deploying; Vercel handles the build process based on GH activity.