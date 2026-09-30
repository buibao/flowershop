# Modern Flower Landing Page

A responsive flower shop landing page built with React, TypeScript and Vite. Its local PNG and SVG assets come from the supplied design export.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Run `npm run build` to check types and build production files.

## Structure

- `src/screens/Home/Home.tsx`: page layout, navigation and shopping bag state
- `src/screens/Home/sections/`: independent page sections
- `src/components/ProductCard.tsx`: shared product card
- `src/data/catalog.ts`: product details and image references
- `src/assets/design/`: local assets from the supplied ZIP
- `reference/original/`: original source files before the refactor

The cart is local to the browser session. Its copy button puts an order summary on the clipboard. This project does not include checkout, payment processing, or a backend.
