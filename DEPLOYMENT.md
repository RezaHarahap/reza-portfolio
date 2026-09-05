# Deployment Checklist — Vercel + Supabase + Cloudinary

## A. Local preparation
1. Install Node.js 22+.
2. From repository root run `npm install`.
3. Copy `.env.example` values into root `.env` for backend and `client/.env.local` for frontend.
4. Run API with `npm run dev:api` and React with `npm run dev:client`.
5. Before upload run `npm run build`.

## B. Supabase Free
1. Create a Supabase project.
2. Open SQL Editor and execute `supabase/schema.sql`.
3. Open Authentication > Users > Add user and create the single admin account.
4. Disable public user sign-up because this portfolio does not provide registration.
5. Save Project URL, anon/public key, and service role key.
6. The admin user's email must exactly match `ADMIN_EMAIL`.

## C. Cloudinary Free
1. Create a Cloudinary account.
2. Copy Cloud Name, API Key, and API Secret.
3. Folders `portfolio/projects` and `portfolio/certifications` are created automatically on first upload.

## D. Vercel
1. Import the GitHub repository.
2. Keep the project root at repository root.
3. Build Command: `npm run build`.
4. Output Directory: `client/dist`.
5. Add backend variables: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_EMAIL`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`, `CLIENT_ORIGIN`.
6. Add frontend build variables: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_API_BASE_URL=/api`.
7. Deploy. Express is supported on Vercel and `vercel.json` includes API + SPA rewrites.
8. Set `CLIENT_ORIGIN` to the final production URL and redeploy if necessary.
9. Update `client/public/sitemap.xml` with absolute production URLs after the final domain is known.

## E. Production verification
- `/` loads the homepage.
- `/api/health` returns `{ "ok": true }`.
- Directly opening project/certification routes does not return 404.
- Featured projects load from Supabase.
- `/admin/login` accepts only the configured admin account.
- Refreshing `/admin/projects/:id/edit` and `/admin/certifications/:id/edit` keeps edit mode and loads the record.
- Add/Edit/Delete project works.
- Add/Edit/Delete certification works.
- Upload generates a Cloudinary URL.
- Dark mode and ID/EN survive refresh.
- Test at 375px, 768px, 1024px, and desktop widths.
