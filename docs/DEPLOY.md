# Deploying on Vercel

1. On vercel.com choose **Add New → Project** and import `SamTeck01/demo`.
2. Vercel reads `vercel.json` and detects **Vite**. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy. Each client is then live at `https://<your-project>.vercel.app/<route>`, for example `/landmark`.

`vercel.json` sends every path to `index.html`, so links like `/landmark` work when opened directly or refreshed.

## A custom domain

Add it under **Project → Settings → Domains**. The routes stay the same: `yourdomain.com/landmark`.

## Giving a client their own domain later

When a client signs, the simplest path is to keep this project and point their domain at it with a redirect to their route, or copy their JSON into a fresh copy of this app with `/` showing their site. Ask Claude to do either.
