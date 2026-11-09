# auto-game-live-tiktok

A Turborepo monorepo starter template for building a TikTok live game automation tool with shared UI components, TypeScript, and Tailwind CSS.

![Turborepo](https://img.shields.io/badge/Turbo-repo-333333?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-000000?style=for-the-badge)

---

## 📋 Overview

This repository is a **Turborepo monorepo** designed to help you build and maintain a TikTok live game automation tool. It includes:

- **Two Next.js applications**: `web` (main app) and `docs` (documentation)
- **Shared UI component library**: `ui` (compiled React components with Tailwind CSS)
- **Shared configurations**: Tailwind CSS, ESLint, and TypeScript configs
- **Monorepo tooling**: Turbo for task orchestration, pnpm for workspace management

The template follows a **component-first approach** where the `ui` package is built and consumed by both `web` and `docs` apps, ensuring consistent design and reduced duplication.

---

## 🚀 Prerequisites

| Tool | Version |
|------|---------|
| Node.js | `>=26.13.0` |
| pnpm | `12.16.1` |

> **Note**: Node version 26+ is required for Tailwind CSS v4 compatibility.

---

## 🛠️ Installation

```bash
# 1. Install dependencies
pnpm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env with your configuration (see .env.example for details)

# 3. Start development servers
pnpm dev
```

---

## 📦 Available Scripts

Run all scripts from the repository root:

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start all apps in development mode (Turbo with `persistent` caching) |
| `pnpm build` | Build all packages and apps |
| `pnpm lint` | Lint all packages and apps |
| `pnpm check-types` | Type-check all packages and apps |
| `pnpm format` | Format all TypeScript/Markdown files with Prettier |
| `pnpm generate` | Run code generation scripts |

---

## 🏗️ Project Structure

```
auto-game-live-tiktok/
├── apps/                  # Applications
│   ├── docs/              # Next.js documentation site
│   └── web/               # Next.js main web application
├── packages/              # Shared packages
│   ├── ui/                # React component library (Tailwind CSS v4)
│   ├── tailwind-config/   # Shared Tailwind CSS theme & PostCSS config
│   ├── eslint-config/     # Shared ESLint flat configurations
│   └── typescript-config/ # tsconfig.json templates
├── .turbo/                # Turbo internal cache
├── .github/               # CI/CD workflows
├── scripts/               # Helper scripts
├── tests/                 # E2E tests (Playwright)
├── docs/                  # Additional documentation
├── Makefile               # Common development tasks
├── AGENTS.md              # AI agent context
├── DESIGN.md              # Design system documentation
├── PRODUCT.md             # Product overview
└── package.json           # Root package.json with workspace config
```

### Apps

- **`web`**: The main application (Next.js app with Tailwind CSS) - typically the public-facing interface
- **`docs`**: Documentation site (Next.js app with Tailwind CSS) - hosted at `http://localhost:3000`

### Packages

- **`ui`**: Compiled React component library with Tailwind CSS shared by both apps
  - Source: `packages/ui/src/`
  - Built: `packages/ui/dist/`
  - Exports compiled CSS and type declarations
  
- **`tailwind-config`**: Shared Tailwind CSS theme and PostCSS configuration
  - Shared styles: `packages/tailwind-config/shared-styles.css`
  - Configuration: `packages/tailwind-config/postcss.config.js`
  
- **`eslint-config`**: Shared ESLint flat configurations
  - Base config: `packages/eslint-config/base.js`
  - Next.js integration: `packages/eslint-config/next.js`
  
- **`typescript-config`**: tsconfig.json templates used throughout the monorepo
  - Base: `packages/typescript-config/base.json`
  - Next.js: `packages/typescript-config/nextjs.json`
  - React library: `packages/typescript-config/react-library.json`

---

## 🎨 UI Component Library (`packages/ui`)

The `ui` package follows Tailwind CSS v4 conventions with `ui:` prefix for component classes.

### Building the UI package

```bash
# From root
pnpm build:components
pnpm build:styles
```

### Consuming UI components

```tsx
// In apps/web or apps/docs
import { Button } from '@repo/ui';

// Use prefixed Tailwind classes
<button className="ui:inline-flex ui:items-center ui:rounded-md">
  Click me
</button>
```

### Alternative: Source consumption (without building)

If you want to consume `packages/ui` directly from source:

1. Update package exports to point to source
2. Configure Next.js to transpile `@repo/ui`
3. Add `@source` directives to apps' CSS entry points
4. Keep a prefixed CSS entry point for `ui:` classes, or remove prefixes

---

## ⚙️ Configuration

### Tailwind CSS

The shared Tailwind config is in `packages/tailwind-config/`. Key features:

- Theme customization in `shared-styles.css`
- PostCSS processing
- `ui:` prefix for component classes via `@import "tailwindcss" prefix(ui);`

### ESLint

Shared flat config in `packages/eslint-config/` includes:

- `@next/eslint-plugin-next` for Next.js optimization
- `eslint-config-prettier` for Prettier compatibility
- TypeScript plugin configurations

### TypeScript

Shared `tsconfig.json` templates in `packages/typescript-config/` ensure consistency across the monorepo.

---

## 🛤️ Development Workflow

### 1. Start development

```bash
pnpm dev
```

This starts both `web` (port 3000) and `docs` (port 3001) in development mode.

### 2. Build for production

```bash
pnpm build
```

Turborepo builds in dependency order:
1. `build:components` and `build:styles` (UI package)
2. Shared packages (`tailwind-config`, `eslint-config`, `typescript-config`)
3. Apps (`web`, `docs`)

### 3. Run checks

```bash
pnpm lint      # Lint all code
pnpm check-types  # Type-check all code
```

---

## ⚙️ customization

### Adding new UI components

1. Create component in `packages/ui/src/`
2. Add Tailwind styles with `ui:` prefix
3. Export from `packages/ui/src/index.ts` (if exists)
4. Run `pnpm build:components` to compile
5. Use in `apps/web` or `apps/docs` via `@repo/ui`

### Changing the shared theme

1. Edit `packages/tailwind-config/shared-styles.css`
2. Run `pnpm build:styles` to regenerate
3. Changes propagate to both `web` and `docs` apps

### Adding new ESLint rules

1. Modify `packages/eslint-config/base.js`
2. Run `pnpm lint` to apply to all packages

### Adding new TypeScript config

1. Edit the relevant `packages/typescript-config/*.json` file
2. Run `pnpm check-types` to validate

---

## 📦 Deployment

### Building for production

```bash
pnpm build
```

### Starting production server

```bash
# Single app
pnpm --filter @repo/web start

# Or all apps
pnpm run start
```

### CI/CD

This template is configured for CI integration via GitHub Actions (see `.github/`). The default workflow runs:

- `pnpm install`
- `pnpm build`
- `pnpm lint`
- `pnpm check-types`
- Playwright E2E tests

---

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| `pnpm dev` won't start | Check `.env` file and environment variables |
| Tailwind CSS not working | Ensure `ui:` prefix is used correctly in component classes |
| Type errors across packages | Run `pnpm check-types` to identify config inconsistencies |
| ESLint errors in new packages | Ensure `@repo/eslint-config` is listed as a devDependency |
| UI changes not reflecting | Run `pnpm build:components` after modifying `packages/ui/src/` |

---

## 📚 Additional Documentation

- **`AGENTS.md`** - AI agent context and setup
- **`DESIGN.md`** - Design system tokens and visual language
- **`PRODUCT.md`** - Product overview and roadmap
- **`Makefile`** - Common development tasks and shortcuts
- **`scripts/`** - Helper scripts for common operations

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure:
- All code passes `pnpm lint` and `pnpm check-types`
- UI components are built with `pnpm build:components`
- Follow the existing coding conventions and Tailwind `ui:` prefix pattern

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Generated with ❤️ using Turborepo and Tailwind CSS v4*