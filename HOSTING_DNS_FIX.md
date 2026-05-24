# Why Render Deploys Don't Show on prinstinegroup.org

## Root cause

**prinstinegroup.org is served by Vercel, not Render.**

- DNS for `prinstinegroup.org` → Vercel (`216.198.79.1`)
- DNS for `www` → `*.vercel-dns.com`
- Production HTML still loads old bundle: `index-CaBjGZzW.js`
- Latest build (Render + local) uses: `index-BHngDWJk.js`

Render can show "Your site is live" and build commit `0ea648b` correctly, but **traffic to your domain never hits Render** until DNS is changed.

## Fix option A — Keep Vercel (recommended if domain already on Vercel)

1. Open [Vercel Dashboard](https://vercel.com/dashboard) → your **prinstine-group** project.
2. Confirm **Root Directory** / settings match repo `vercel.json`:
   - Build: `cd prinstine-website && npm run build`
   - Output: `prinstine-website/dist`
3. **Deployments** → **Redeploy** latest commit on `main` (or push a new commit).
4. After deploy succeeds, **purge cache** (Project → Settings → Caches → Purge, if available).
5. Hard-refresh the site: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows).
6. Verify: View Page Source → script should reference `index-BHngDWJk.js` (hash may change on future builds).

Git pushes to `main` should auto-deploy on Vercel when the GitHub integration is connected.

## Fix option B — Use Render for the custom domain

1. In Render: Static Site → **Custom Domains** → add `prinstinegroup.org` and `www`.
2. In **Namecheap** (or your DNS host), **remove Vercel** A/CNAME records.
3. Add Render’s **A records** (apex) and **CNAME** (`www` → `*.onrender.com`) exactly as Render shows.
4. Wait for DNS propagation (15–60 minutes).
5. Enable **Force HTTPS** on Render after verification.

Until DNS points to Render, Render deploys will not update what visitors see at prinstinegroup.org.

## Quick verification

```bash
curl -sL https://prinstinegroup.org/ | grep 'index-.*\.js'
```

- Old site: `index-CaBjGZzW.js`
- New site: `index-BHngDWJk.js` (or newer hash after next build)

```bash
curl -sI https://prinstinegroup.org/ | grep -i server
```

- `server: Vercel` → domain still on Vercel
- Render will show its own headers when DNS is switched
