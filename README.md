# 💍 Wedding Invitation Website

A mobile-first, static Next.js wedding invitation website for **Sanjana Yadav & Anurodh Yadav** (#AnurodhWedsSanjana).

## 📁 Content Customization
All text, dates, venues, parents' names, schedule details, dress codes, and music files are managed in a single file:
👉 [`data/invite.ts`](file:///Users/anurodhyadav/marriage-invitation/data/invite.ts)

## 🚀 Run Locally

```bash
# Using bun (recommended)
bun dev

# Or using npm
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build Static Export

```bash
# Using bun
bun run build

# Or using npm
npm run build
```

This exports the production static site into the `out/` folder.

## 🌐 Deploy to Netlify

### Option 1: Netlify CLI
```bash
npx netlify-cli deploy --prod --dir=out
```

### Option 2: Drag & Drop (Netlify Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `out` folder directly into the browser window.
3. Your site is instantly live with a custom URL and free SSL!

### Option 3: GitHub & Netlify Integration
1. Push this repository to GitHub.
2. Log into Netlify and click **"Add new site"** → **"Import an existing project"**.
3. Select your repository.
4. Netlify will auto-detect the configuration from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click **Deploy Site**.

