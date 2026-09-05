# QA Checklist — Portfolio V1

## Static QA completed
- [x] JS/JSX syntax parsed successfully
- [x] Node API files pass `node --check`
- [x] JSON configuration files valid
- [x] Relative imports verified; no missing local modules
- [x] 404 fallback route added
- [x] Public project/certification pages include Navbar + Footer
- [x] Loading, empty, and error states separated
- [x] Admin edit pages can be opened/refreshed directly by ID
- [x] Admin session is verified against protected `/api/admin/me`
- [x] Unauthorized Supabase users are rejected from admin dashboard
- [x] Project upload has type + 5 MB validation
- [x] Certification upload has type + 5 MB validation
- [x] One featured project/category enforced
- [x] Maximum three featured certifications/category enforced in API
- [x] Dark/light preference persisted
- [x] ID/EN preference persisted
- [x] Settings defaults can initialize theme/language
- [x] Settings drive contact/social/CV links
- [x] Mobile/tablet/desktop CSS breakpoints present
- [x] Navigation collapses to hamburger on <= 1100px
- [x] Grids stack for mobile
- [x] Admin tables horizontally scroll on narrow screens
- [x] `prefers-reduced-motion` supported
- [x] Focus-visible styles included
- [x] Images include alt text and lazy loading where relevant
- [x] Responsive overflow hardening included

## Runtime integration checks after credentials are connected
- [ ] `npm install` completes on the deployment machine
- [ ] `npm run build` completes with registry access
- [ ] `/api/health` returns `{ ok: true }`
- [ ] Supabase schema runs successfully
- [ ] Admin Supabase account created and public sign-up disabled
- [ ] Cloudinary credentials accepted
- [ ] Project CRUD tested against live Supabase
- [ ] Certification CRUD tested against live Supabase
- [ ] Image upload tested against live Cloudinary
- [ ] Direct-load SPA routes tested on Vercel
- [ ] Production URL inserted into sitemap after final domain is known
- [ ] Lighthouse/mobile browser pass on deployed site
