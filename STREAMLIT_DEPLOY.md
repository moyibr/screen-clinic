# Deploying to Streamlit Community Cloud

## Important context first

Streamlit only runs Python apps. This project's real app is a **React
(Vite) frontend** with a separate **Node/Express backend** — neither is
something Streamlit can run natively.

What's set up here is a thin Python wrapper (`streamlit_app.py`) that:

1. Serves the **built** React site as static files through Streamlit's
   static file server.
2. Immediately redirects visitors to it, so they see the real site
   (full CSS/animations/routing), not an embedded/boxed version.

**The backend is not part of this.** Right now the backend
(`backend/`) is just a skeleton with a `/health` route — the
Appointment and Contact forms in the frontend
([api.js](frontend/src/services/api.js)) only *simulate* a network call,
they don't call any API. So there's nothing missing by leaving the
backend out of the Streamlit deploy. If/when you wire the forms up to a
real API, that API will need to be hosted separately (Render, Railway,
Fly.io, etc.) — Streamlit Community Cloud can't run a persistent
Express server or Postgres alongside it.

If what you actually want is the normal, low-effort deploy for this
stack (frontend → Vercel/Netlify, backend → Render/Railway), say so and
I'll set that up instead — it's a better fit for this project.

## Files added for this deploy

| File | Purpose |
|---|---|
| [streamlit_app.py](streamlit_app.py) | Entry point Streamlit runs. Finds/builds the frontend and redirects to it. |
| [.streamlit/config.toml](.streamlit/config.toml) | Turns on `enableStaticServing` so Streamlit can serve the built site. |
| [requirements.txt](requirements.txt) | Python deps (just `streamlit`). |
| [packages.txt](packages.txt) | apt packages (`nodejs`, `npm`) — fallback only, used if `static/` isn't already built. |
| [static/](static/) | The **built** frontend (copy of `frontend/dist`), committed so Cloud doesn't need to build it. |
| `frontend/vite.config.js` | Added `base: './'` so asset URLs work when served from a subpath. |

## One-time local step: build the frontend

The `static/` folder in this repo is already built from the current
frontend. Whenever you change the frontend, rebuild and refresh it
before deploying:

```bash
cd frontend
npm install
npm run build
cd ..
rm -rf static
cp -r frontend/dist static
```

Committing `static/` is what makes the deploy fast and reliable —
Streamlit Cloud then never needs to run Node at all. (`packages.txt`
installs Node as a fallback so `streamlit_app.py` *can* build it on the
server if `static/` is ever missing, but apt's Node version isn't
guaranteed to satisfy Vite 8's requirements — don't rely on it.)

## Deploy steps

1. Commit and push everything, including `static/`:
   ```bash
   git add streamlit_app.py .streamlit requirements.txt packages.txt static frontend/vite.config.js STREAMLIT_DEPLOY.md
   git commit -m "Add Streamlit deployment"
   git push
   ```
2. Go to [share.streamlit.io](https://share.streamlit.io) and sign in.
3. **New app** → pick this GitHub repo and the branch (e.g. `main`).
4. **Main file path**: `streamlit_app.py`.
5. Deploy. First load should redirect straight to the site.

## Known limitations of this wrapper

- **Deep links / refresh on a sub-route** (e.g. reloading while on
  `/about`) will 404, because Streamlit's static file serving has no
  SPA fallback — it only reliably serves `index.html` at the root.
  Client-side navigation within the site (clicking links) works fine
  once the page has loaded.
- **No backend** — see above. `/health` and any future API routes are
  not reachable from this deployment.
- Streamlit Community Cloud apps sleep after inactivity and take a few
  seconds to wake up on the next visit.
