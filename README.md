# Muhammad Reza Pahlevi Harahap — Portfolio V1

Monorepo portfolio dengan:
- React + Vite frontend
- Express API
- Supabase PostgreSQL + Auth
- Cloudinary image upload
- Admin dashboard untuk Projects, Certifications, dan Settings
- Bilingual ID/EN
- Light/Dark mode
- Responsive, SEO dasar, accessibility dasar
- Siap deploy ke Vercel

## 1. Install

```bash
npm install
npm --prefix client install
```

## 2. Environment

Salin `.env.example` menjadi `.env` untuk backend dan buat `client/.env.local` untuk variabel `VITE_*`.

## 3. Database

Jalankan isi `supabase/schema.sql` pada Supabase SQL Editor.

Lalu buat akun admin melalui Supabase Authentication > Users. Email akun harus sama dengan `ADMIN_EMAIL`.

## 4. Run locally

Terminal 1:
```bash
npm run dev:api
```

Terminal 2:
```bash
npm run dev:client
```

Frontend: `http://localhost:5173`
API: `http://localhost:3000/api`

## 5. Deploy

Push repo ke GitHub, import ke Vercel, tambahkan seluruh environment variables backend dan frontend. Supabase dan Vercel bisa dihubungkan manual.

## Important security notes

- Jangan commit `.env`.
- Jangan expose `SUPABASE_SERVICE_ROLE_KEY` atau `CLOUDINARY_API_SECRET` ke frontend.
- Public API hanya mengembalikan data `published`.
- Mutasi admin memerlukan Supabase access token dan email harus sama dengan `ADMIN_EMAIL`.

## Local quick start

Frontend: `npm run dev`

Backend (second terminal): `npm run dev:api`
