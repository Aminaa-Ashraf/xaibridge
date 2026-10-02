# Xaibridge

Marketing website for Xaibridge — a fintech software house covering prop firms, broker desks, payments, and launch-ready products.

Next.js App Router · dark UI · product roadmaps · shipped project showcase.

---

## What it does

- Presents the company story, leadership, and global offices
- Lists 11 products with 30-day launch and post-go-live roadmaps
- Showcases shipped client work (FTM, Global4ex, FundedRoll, XM)
- Routes visitors to email, WhatsApp, Discord, and meeting contact
- Mirrors the live brand system: green accent, Inter type, sticky header, footer with QR

## Stack

| Layer | Choice |
|-------|--------|
| App | Next.js 14 (App Router) |
| UI | React 18, Tailwind CSS, Lucide icons |
| Content | TypeScript data modules (`lib/products`, `lib/projects`, `lib/site`) |
| Fonts | Inter (`next/font`) |
| Hosting | Vercel-ready (`npm run build`) |

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home — hero, clients, process, CTA |
| `/about` | Company, leadership, offices |
| `/projects` | Shipped client work |
| `/project/[id]` | Project detail |
| `/product/[slug]` | Product roadmap + included services |
| `/support`, `/contact` | Contact channels |
| `/privacy`, `/refund` | Policy pages |
| `/services` | Product index |

## Scripts

```bash
npm run dev      # local development
npm run build    # production build
npm start        # serve production build
npm run lint     # ESLint
```

## License

[MIT](LICENSE) · [@Aminaa-Ashraf](https://github.com/Aminaa-Ashraf)
