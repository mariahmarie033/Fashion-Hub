# Base44 Dev Environment

## Overview

pnpm workspace monorepo. The user-facing app is `artifacts/clothing-brand` — a Vite + React + Tailwind storefront ("VEIL" clothing brand) with framer-motion animations. It is purely visual: no API calls, no database usage.

## Architecture

- **Frontend**: `artifacts/clothing-brand` (Vite dev server, React 19, Tailwind v4, wouter router, framer-motion)
- **API server**: `artifacts/api-server` (Express 5, only a `/api/healthz` endpoint, empty DB schema — not needed for the storefront)
- **Libs**: `lib/db` (Drizzle + PostgreSQL, empty schema), `lib/api-client-react` (Orval-generated React Query hooks), `lib/api-zod` (Zod schemas), `lib/api-spec` (OpenAPI spec + Orval codegen)
- **Mockup sandbox**: `artifacts/mockup-sandbox` (UI prototyping canvas, not the main app)

## Running

```
docker compose -f docker-compose.base44.yml up -d
```

The `web` service installs pnpm, runs `pnpm install --frozen-lockfile` at the workspace root, then starts `pnpm --filter @workspace/clothing-brand dev`. Vite listens on port 5173 inside the container, mapped to host port 3000.

## Required env vars

- `PORT` — Vite server port (set to 5173 in compose)
- `BASE_PATH` — Vite base path (set to `/` in compose)

No external secrets or credentials are needed — the storefront is fully self-contained.

## Key notes

- The Vite config requires `PORT` and `BASE_PATH` env vars or it throws at startup.
- `allowedHosts: true` is already set in the Vite config, so all external hostnames are accepted.
- Replit-specific Vite plugins only load when `REPL_ID` is set — they are inactive in this environment.
- The `pnpm-workspace.yaml` has `minimumReleaseAge: 1440` (1-day package age requirement) and platform-specific `overrides` for linux-x64 only.
- The root `package.json` has a `preinstall` script that enforces pnpm usage (rejects npm/yarn).
