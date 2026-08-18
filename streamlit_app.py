"""
Streamlit entry point for Screen Clinic.

This project's real app is a React (Vite) frontend — Streamlit itself only
runs Python. This script's job is to get the built frontend in front of
Streamlit's static file server and send visitors straight to it, so the
site people see is the actual site (full CSS/JS/animations, no iframe
chrome), just served from inside a Streamlit app so it can live on
Streamlit Community Cloud.

How it decides what to serve, in order:
  1. If static/index.html already exists (e.g. committed to the repo, or
     built on a previous run), use it as-is.
  2. Else, if frontend/dist/index.html exists (built locally before
     deploying), copy it into static/.
  3. Else, try to build it here with npm (requires Node.js — see
     packages.txt). This is a best-effort fallback; committing a prebuilt
     frontend/dist (see STREAMLIT_DEPLOY.md) is the reliable path.

Note: there is no real backend wired up yet — the Appointment/Contact
forms in the React app currently just simulate a network call
(see frontend/src/services/api.js). Nothing here changes that; this
script only serves the static site.
"""

import shutil
import subprocess
from pathlib import Path

import streamlit as st

ROOT = Path(__file__).parent.resolve()
FRONTEND_DIR = ROOT / "frontend"
FRONTEND_DIST = FRONTEND_DIR / "dist"
STATIC_DIR = ROOT / "static"
ENTRY_FILE = "app/static/index.html"

st.set_page_config(page_title="Screen Clinic", page_icon="🦷", layout="wide")


def _copy_dist_to_static() -> None:
    if STATIC_DIR.exists():
        shutil.rmtree(STATIC_DIR)
    shutil.copytree(FRONTEND_DIST, STATIC_DIR)


def _build_frontend() -> bool:
    npm = shutil.which("npm")
    if not npm:
        return False
    try:
        with st.spinner("First run: installing & building the frontend (can take a minute)..."):
            subprocess.run([npm, "install"], cwd=FRONTEND_DIR, check=True)
            subprocess.run([npm, "run", "build"], cwd=FRONTEND_DIR, check=True)
    except subprocess.CalledProcessError as exc:
        st.error(f"`npm run build` failed:\n\n```\n{exc}\n```")
        return False
    return (FRONTEND_DIST / "index.html").exists()


def ensure_static_site() -> bool:
    if (STATIC_DIR / "index.html").exists():
        return True

    if (FRONTEND_DIST / "index.html").exists():
        _copy_dist_to_static()
        return True

    if _build_frontend():
        _copy_dist_to_static()
        return True

    return False


if ensure_static_site():
    st.markdown(
        f'<meta http-equiv="refresh" content="0; url={ENTRY_FILE}">',
        unsafe_allow_html=True,
    )
    st.title("🦷 Screen Clinic")
    st.write("Redirecting you to the site...")
    st.link_button("Open Screen Clinic", ENTRY_FILE, type="primary")
else:
    st.title("🦷 Screen Clinic")
    st.error(
        "Couldn't find a built frontend to serve.\n\n"
        "Run `npm run build` inside `frontend/` and commit `frontend/dist` "
        "(recommended — see STREAMLIT_DEPLOY.md), or make sure Node.js/npm "
        "are available in this environment (see packages.txt)."
    )
