# Portfolio V1 — Code Audit Report

## Issues found and corrected in QA pass
1. Admin edit routes previously depended on React Router `location.state`; refreshing an edit URL could lose the record and behave like a create form. Added protected GET-by-ID endpoints and direct data loading.
2. Admin UI previously accepted any valid Supabase session visually before API calls rejected it. Added `/api/admin/me` verification and automatic sign-out for non-admin accounts.
3. Several public sections were only partially bilingual. Expanded ID/EN content for About, Experience, Organization, Education, Projects, Certifications, Contact, subpages, and certificate actions.
4. Projects/Certifications loading state could be confused with an empty result. Added explicit loading, empty, and error states.
5. Public category pages lacked the global Navbar/Footer and therefore lost theme/language navigation. Added both.
6. Missing catch-all React route could leave unknown URLs blank. Added a responsive 404 page.
7. React Helmet Async was removed to avoid a React 19 peer-dependency compatibility risk; lightweight SEO title/meta handling is now internal.
8. Root project converted to an npm workspace so Vercel/local installation can install frontend + backend dependencies consistently.
9. Admin lists/dashboard/settings now handle loading and API failures instead of producing unhandled promise rejections.
10. Dashboard now shows total/published/draft counts for both Projects and Certifications.
11. Upload validation was hardened for one file, JPG/PNG/WebP only, max 5 MB.
12. Responsive CSS was hardened for long text, small screens, touch targets, focus styles, reduced motion, 420px layouts, admin forms/tables, and mobile navbar behavior.
13. Settings now control public email, social links, CV URL, default language, and default theme fallback.
14. Project cards now show normalized category names and optional highlights.

## Static checks passed
- JS/JSX parser/transpile syntax check: PASS
- Node API syntax check: PASS
- JSON syntax check: PASS
- Relative-import existence check: PASS

## Integration boundary
A complete production guarantee requires live credentials and deployment because Supabase Auth/PostgreSQL, Cloudinary upload, npm registry installation, and Vercel routing cannot be end-to-end exercised without those external services. The source is prepared for those integration tests and the deployment checklist identifies each final verification step.
