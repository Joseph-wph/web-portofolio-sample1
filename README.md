# Edwin Portfolio

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · shadcn/ui (Radix) · Framer Motion · React Hook Form + Zod · Lucide / React Icons

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build
```

## Structure (SSOT)

| What                     | Where                                |
| ------------------------ | ------------------------------------ |
| Colors, fonts, utilities | `src/app/globals.css`                |
| Asset paths              | `src/constants/assets.ts`            |
| Site info, nav, socials  | `src/constants/site.ts`              |
| All page copy / data     | `src/constants/content.ts`           |
| Modal copy + styling     | `src/constants/modal.ts`             |
| Form validation          | `src/schemas/contact.ts` (client + API) |
| Contact API              | `src/app/api/contact/route.ts`       |

Edit text, links or skills in `constants/` — never inside components.

## Test the modals

- **Success**: fill the form with valid data and submit.
- **Failure**: in development, include `#fail` in the message text.

## Assets

Put your icons/images in `public/assets` — see `public/assets/README.md` for the exact filenames.

## Breakpoints

Mobile layout < 1024px (content 361px on a 393px screen), desktop layout ≥ 1024px
(design target 1440px, content max 1160px).
