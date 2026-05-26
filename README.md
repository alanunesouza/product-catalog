# Product Catalog

A React + TypeScript study project created specifically to practice componentization.

## Overview

This project was built as part of a componentization module, and its only goal is to train component-based thinking.

It is intentionally focused on how to break a screen into reusable parts, organize responsibilities, and keep UI/state logic maintainable.

## Learning Objective

The main purpose of this project is componentization, including:

- Splitting UI into reusable pieces
- Defining clear component responsibilities
- Managing local and shared state in a predictable way
- Keeping visual and business concerns easier to evolve

This is not intended to be a production-ready e-commerce app.

The interface includes:

- Product search by name and description
- Category filtering
- Sorting by relevance and price
- Cart quantity controls
- Order summary with shipping rule and total calculation

## Tech Stack

- React 19
- TypeScript
- Vite
- ESLint

## Getting Started

### Prerequisites

- Node.js 18+ (recommended)
- npm 9+

### Install dependencies

```bash
npm install
```

### Run in development

```bash
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Available Scripts

- `npm run dev`: starts the development server with hot reload
- `npm run build`: type-checks and builds for production
- `npm run preview`: serves the production build locally
- `npm run lint`: runs ESLint checks

## Business Rules Implemented

- Shipping is free for orders equal to or above BRL 180.00.
- If the cart subtotal is zero, shipping is zero.
- Removing quantity to zero automatically removes the item from the cart.
- Currency formatting uses Brazilian locale (`pt-BR`) and BRL.

## Notes

- Product data is currently hardcoded in `src/App.tsx`.
- UI text is in Portuguese while this documentation is in English.
- This is a frontend-only exercise with no backend integration.
- The business flow exists only as a context to practice componentization.
