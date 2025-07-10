
# Raining Roses - Where stories bloom and words rain beauty.

Raining Roses is a web application designed as a creative hub for readers. It provides a platform where a single author can publish and manage blogs and creative stories, while users can discover, read, and enjoy these works through an elegant, responsive interface.

The app includes a simple content management system (CMS) for creating, editing, and deleting stories, making it easy for the author to manage content without technical complexity.

✨ Features
📖 Curated Storytelling – Readers can browse a growing collection of blogs and short stories.

🖋️ Content Management System – The author can manage posts through an intuitive dashboard.

📱 Responsive Design – A clean and modern UI optimized for all screen sizes.

⚡ Dynamic Content Loading – Smooth navigation and fast performance for an enjoyable reading experience.

🛠️ Tech Stack
Nuxt 3 – For building a fast, modern single-page application.

TypeScript – To ensure type safety and maintainability.

Tailwind CSS – For rapid UI development with a consistent design system.

🎯 Purpose
This project demonstrates how a modern frontend application can integrate a lightweight CMS to enable seamless content creation and delivery. It’s structured for scalability and maintainability, with a focus on clean code and an excellent user experience.

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

## Nuxt Minimal Starter

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
