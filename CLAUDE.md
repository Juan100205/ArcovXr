# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite HMR)
npm run build        # Type-check + production build (tsc -b && vite build)
npm run lint         # ESLint
npm run preview      # Preview production build locally
npm run deploy       # Build + publish to GitHub Pages via gh-pages
```

No test suite is configured.

## Stack

- **React 19 + TypeScript** via Vite 7
- **Tailwind CSS v4** (configured as a Vite plugin, no `tailwind.config.*` file — theme extended in `src/index.css` via `@theme {}`)
- **Framer Motion** for animations
- **React Router v7** with `HashRouter` (required for GitHub Pages — never switch to `BrowserRouter`)
- **@splinetool/react-spline** for embedded 3D scenes
- Deployed to `https://ArcovXr.github.io/ArcovXr`

## Architecture

### Entry point
`src/main.tsx` wraps everything in `HashRouter`. `src/App/App.tsx` renders only `<AppRouter />`.

### Routing (`src/Router/AppRouter.tsx`)
All page-level components are **lazy-loaded** via `React.lazy` + `Suspense`. Each route maps to a file in `src/App/`:

| Route | File |
|---|---|
| `/Home_Main` | `src/App/Home.tsx` |
| `/Home3D` | `src/App/Home_3D.tsx` |
| `/HomeVr` | `src/App/Home_VR.tsx` |
| `/HomeChat` | `src/App/Home_Chat.tsx` |
| `/HomeIA` | `src/App/Home_IA.tsx` |
| `/HomeSpace` | `src/App/Home_Space.tsx` |

Default route `/*` redirects to `/Home_Main`.

### Page composition
Each `src/App/Home_*.tsx` page assembles section components from `src/Components/<section>/`. Pages always include `<Header />` and `<Footer />` from `src/Components/Global/`.

### Component organization
```
src/Components/
  Global/        # Header, Footer — shared across all pages
  Home/          # Sections for the main landing page
  3DHome/        # Sections for the 3D services page
  VRHome/        # Sections for the VR page
  IAHome/        # Sections for the AI/IA page
  ChatHome/      # Sections for the Chat/WhatsApp page
  SpaceHome/     # Sections for the Space/3D rendering page
  Icons/         # All SVG icon components (including ArcovXrIcon, Logo_*)
```

### Brand colors
- **Background:** `#000000` (black) — applied globally on `body`
- **Primary text:** `#ffffff` white
- **Accent cyan (XR logo color):** `#10e0fe`
- **Scrollbar accent:** `#00e5ff`
- **Dark navy:** `#0E1126`

The main logo SVG is `src/Components/Icons/ArcovXrIcon.tsx` — "Arcov" paths use `fill="#fff"`, "XR" paths use `fill="#10e0fe"`.

### Build chunking (`vite.config.ts`)
Manual chunks are configured: `vendor-react`, `vendor-router`, `vendor-framer`, `vendor-icons`. Framer Motion is noted as the heaviest dependency (~150kb gzip).

### CSS animation system (`src/index.css`)
- `.anim_block` / `.anim_block_projects` — CSS scroll-driven animations using `animation-timeline: view()`
- `.scroll-fade-up` + `.active` — JS-triggered scroll animations
- `.fade-in`, `.fade-out`, `.fade-in-up`, `.button-popup` — entry/exit keyframe utilities
- `.bg_opacity_img::before` — background image overlay via CSS pseudo-element (references GitHub raw URL)
