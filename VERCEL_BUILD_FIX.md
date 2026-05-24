# Vercel Build Fix

## What went wrong

Two conflicting setups were mixed:

| Vercel Root Directory | Wrong command | Error |
|----------------------|---------------|--------|
| `prinstine-website` | `cd prinstine-website && npm install` | `No such file or directory` |
| *(empty / repo root)* | `npm install` only | `package.json` not found at repo root |

`package.json` lives in **`prinstine-website/`**, not the repository root.

## Correct setup (choose ONE)

### Option A — Recommended (repo root)

**Vercel Dashboard → Project → Settings → General → Root Directory:** leave **empty** (or `.`)

Uses the repo root **`vercel.json`**:

- Install: `cd prinstine-website && npm install`
- Build: `cd prinstine-website && npm run build`
- Output: `prinstine-website/dist`

### Option B — Subfolder root

**Root Directory:** `prinstine-website`

Uses **`prinstine-website/vercel.json`** (no `cd` in commands):

- Install: `npm install` (default)
- Build: `npm run build`
- Output: `dist`

Do **not** set Root Directory to `prinstine-website` while the root `vercel.json` still runs `cd prinstine-website`.

## After fixing

1. Save settings in Vercel.
2. **Deployments** → **Redeploy** latest `main`.
3. Confirm build log shows `vite build` and assets like `frances_wallace`, `index-*.js`.
4. Hard-refresh https://prinstinegroup.org/

## Verify live site

```bash
curl -sL https://prinstinegroup.org/ | grep 'index-.*\.js'
```

You should see a **new** hash (not `index-CaBjGZzW.js`).
