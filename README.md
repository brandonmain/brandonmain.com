# brandonmain.com

My personal website. Live at [brandonmain.com](https://brandonmain.com).

## Built with

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/) and TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [next-themes](https://github.com/pacocoursey/next-themes) for light and dark mode
- [Font Awesome](https://fontawesome.com/) for icons
- Hosted on [Vercel](https://vercel.com/)

## Running locally

Requires Node 22.

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:3000.

## Scripts

- `npm run dev` starts the dev server
- `npm run build` creates a production build
- `npm run start` serves the production build
- `npm run lint` runs ESLint

## Project layout

The app lives under `src/app/` using the App Router. `page.tsx` is the home page, `layout.tsx` holds the metadata and fonts, and shared pieces like the theme toggle sit in `src/app/components/`. Static files such as the photo and resume are in `public/`.
