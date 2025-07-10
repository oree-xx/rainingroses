
# Raining Roses – Project Documentation

Raining Roses is a Nuxt-based web application. It is a web app where individuals can read different blog post and creative stories. It uses modern frontend technologies including Nuxt 3, TypeScript, and Tailwind CSS. The project is structured for scalability and maintainability, with a focus on clean UI and smooth user experience.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Setup](#setup)
- [Development](#development)
- [Production Build](#production-build)
- [Key Directories & Files](#key-directories--files)
- [Customization](#customization)
- [Resources](#resources)

---

## Project Structure

```
.
├── app.vue
├── nuxt.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── assets/
│   ├── css/
│   ├── images/
│   └── Madame-Grettha-Font/
├── components/
├── composables/
├── data/
├── layouts/
├── middleware/
├── pages/
├── plugins/
├── public/
├── server/
```

- **assets/**: Static assets like CSS, images, and fonts.
- **components/**: Vue components used throughout the app.
- **composables/**: Reusable logic (e.g., hooks for dark mode, animations).
- **data/**: Static data files (e.g., `posts.json`).
- **layouts/**: Application layouts.
- **middleware/**: Custom navigation and transition logic.
- **pages/**: Route-based Vue files.
- **plugins/**: Nuxt plugins for client-side and server-side logic.
- **public/**: Publicly accessible files (images, favicon, etc.).
- **server/**: Server-side code and configuration.

---

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
