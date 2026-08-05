# Uptown Real Estate Website 🏢

Modern Real Estate Web Application for Uptown Property Deals built with **Next.js 15**, **Supabase PostgreSQL**, and **Cloudflare R2 Storage**.

---

## 📌 Project Overview & Architecture

This project displays real estate projects (plots, villas, builder floors, industrial parks) and master layout plans. 

- **Frontend Framework**: Next.js 15 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS v4
- **Database**: Supabase PostgreSQL (`projects` & `layouts` tables)
- **Media & Document Hosting**: Cloudflare R2 Storage (Public Bucket CDN)

---

## ☁️ Cloudflare R2 Storage Details (Resource Files)

All heavy resource files (brochures, site layout PDFs, master plans, high-res images) are hosted on **Cloudflare R2**.

* **Public CDN Base URL**: `https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev`
* **Public Hash**: `pub-9e00030e294c40efa96642db5ba7f437`

### Directory Structure in Cloudflare R2:
- `layouts/` → Layout plans, master plans, PDFs (e.g. `https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/layouts/m3m-layout.pdf`)
- `projects-files/` → Project documents & history files (e.g. `https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/projects-files/sigma-project-history.pdf`)
- `images/` / `brochures/` → Property photos, brochures

---

## 📂 Where & How to Upload / Update Resource Files

1. **Upload to Cloudflare R2**:
   - Log into Cloudflare Dashboard -> **R2 Object Storage**.
   - Select the bucket corresponding to public domain `pub-9e00030e294c40efa96642db5ba7f437`.
   - Upload your image or PDF into the appropriate folder (e.g. `layouts/` or `projects-files/`).
2. **Copy the Public URL**:
   - Format: `https://pub-9e00030e294c40efa96642db5ba7f437.r2.dev/<folder>/<filename>`
3. **Link in Database**:
   - Save this URL into Supabase under `brochure_url`, `layout_url`, `image_url`, or `images` json field.

---

## 📝 Where & How to Add or Update Project Information

Project data and layout data live in **Supabase PostgreSQL Database**.

### Option A: Via Supabase Dashboard (Recommended for quick edits)
1. Go to [Supabase Dashboard](https://supabase.com/dashboard).
2. Select your project (`lcfhvhhexidtbzcxwryx`).
3. Open **Table Editor**:
   - Table `projects`: Update project title, price, location, features, RERA, map URL, brochure URL, layout URL, etc.
   - Table `layouts`: Update city/area layout plans, tags, preview images, etc.

### Option B: Via Seed Scripts (Recommended for adding new items)
1. Add new items to the `projects` array in `seed-db.mjs` or `layouts` array in `seed-layouts.mjs`.
2. Run the seed script:
   ```bash
   node seed-db.mjs
   node seed-layouts.mjs
   ```
3. **Important**: Once the data is successfully seeded into Supabase DB, **clear out the added items from the array** in `seed-db.mjs` / `seed-layouts.mjs` so the seed files stay clean and ready for future additions.

---

## 🔑 Environment Variables (`.env.local`)

```env
NEXT_PUBLIC_SUPABASE_URL=https://lcfhvhhexidtbzcxwryx.supabase.co
SUPABASE_SECRET_KEY=your_supabase_secret_key_here
```

---

## 🚀 Getting Started

To run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
