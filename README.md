# Pinball Lookup

Simple SvelteKit site that uses the [IFPA](https://www.ifpapinball.com/) API to get my competitive pinball stats and then renders them.

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