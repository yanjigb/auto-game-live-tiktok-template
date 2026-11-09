---
name: auto-game-live-tiktok
description: Next.js-based web application for auto-game-live streaming integration with TikTok
colors:
  primary: "#ff2e63"    # Primary accent: used for highlights, button hover states, link text highlights, border accents
  secondary: "#a853fa"  # Secondary accent: used for conic gradients, decorative overlays, theme variations
  tertiary: "#ff6b35"   # Tertiary accent: used for gradient ends, decorative elements
  neutral-bg: "#0a0a0f" # Primary background / dark mode base
  surface: "#12121a"    # Secondary surface for cards and components
  text: "#f0f0f5"       # Primary text color
  muted: "#8888a0"      # Muted/secondary text, placeholder colors, disabled state styling
---

# DESIGN.md: auto-game-live-tiktok

## Design System Overview

This document captures the visual design system for the auto-game-live-tiktok monorepo project. It documents colors, typography, components, and design patterns used across the web application. Tokens in the frontmatter are normative; prose provides context for how to apply them.

## Colors

The project uses a dark theme with a red-purple-orange gradient palette evoking energy and creativity. The color system is extracted directly from the Tailwind configuration at `packages/tailwind-config/shared-styles.css` and the live design panel renders these tokens normatively.

### Primary
- **Game Red** (`#ff2e63`): Primary accent color, used for highlights and interactions — button hover states, link text highlights, border accents on hover, SVG fill colors for icons and logos

### Secondary
- **Game Purple** (`#a853fa`): Secondary accent color, used for gradients and depth — conic gradients for background depth, decorative overlays, theme variations

### Tertiary
- **Game Orange** (`#ff6b35`): Tertiary accent color, used for gradient ends — gradient end colors, decorative elements, theme variations

### Neutral
- **Game BG** (`#0a0a0f`): Primary background color, dark mode base — page background color, dark theme foundation
- **Game Surface** (`#12121a`): Secondary surface for cards and components — card backgrounds (with game-text overlay), component containers
- **Game Text** (`#f0f0f5`): Primary text color — primary body text, heading colors, link colors
- **Game Muted** (`#8888a0`): Muted/secondary text — secondary text/descriptions, placeholder colors, disabled state styling

### Tailwind Theme Configuration
```css
@theme {
  --color-game-red: #ff2e63;
  --color-game-purple: #a853fa;
  --color-game-orange: #ff6b35;
  --color-game-bg: #0a0a0f;
  --color-game-surface: #12121a;
  --color-game-text: #f0f0f5;
  --color-game-muted: #8888a0;
}
```

**Named Rules**

**The Single Accent Rule.** The primary accent (`game-red`) should be used sparingly — on hover states, focus indicators, and short highlights. Its rarity is the point; overuse diminishes its impact.

**The Dark-Base Rule.** All surfaces default to the dark palette (`game-bg` → `#0a0a0f`, `game-surface` → `#12121a`). Light surfaces must explicitly opt-in rather than assume a light mode.

## Typography

The project uses Geist Sans font (imported from `geist/font/sans`). Text sizes use Tailwind's `ui:` prefix consistent with the UI component library.

## Components

### Card Component (`@repo/ui/card`)

A clickable card component with hover interactions:

**Props:**
- `title` (string) - Card section title
- `children` (ReactNode) - Card content
- `href` (string) - Link destination

**Classes applied:**
- Base: `ui:group uirounded-xl ui:border ui:border-game-red ui:px-6 ui:py-5 ui:transition-colors`
- Hover: `ui:hover:border-game-red ui:hover:bg-game-surface`
- Title: `ui:mb-4 ui:text-2xl ui:font-bold ui:tracking-tight`
- Link indicator: `ui:inline-block ui:transition-transform ui:group-hover:translate-x-2 ui:motion-reduce:transform-none`
- Content: `ui:m-0 ui:max-w-[36ch] ui:text-base ui:text-game-muted leading-relaxed`

**Behavior:**
- Grouped styling for consistent spacing
- Hover border and background color change
- Subtle right arrow animation on hover
- Maximum content width with relaxed line height

### Gradient Component (`@repo/ui/gradient`)

A decorative gradient overlay component:

**Props:**
- `small` (boolean, optional) - Whether to use a smaller blur (32px vs 75px)
- `conic` (boolean, optional) - Whether to use conic gradient (colorful) or solid
- `className` (string, optional) - Additional CSS classes

**When `conic` is true:**
- `ui:bg-linear-to-r` - Rightward linear gradient
- `ui:from-game-red ui:from-10%` - Start color at 10% opacity
- `ui:via-game-purple ui:via-30%` - Middle color at 30% opacity
- `ui:to-game-orange ui:to-100%` - End color at 100% opacity

**Size variants:**
- `small`: `ui:blur-[32px]` - Subtle blur
- Default: `ui:blur-[75px]` - Stronger blur for depth

## Color Usage Patterns

### Primary Accent (`game-red`)
- Button hover states
- Link text highlights
- Border accents on hover
- SVG fill colors for icons and logos

### Secondary Accent (`game-purple`, `game-orange`)
- Conic gradients for background depth
- Decorative overlays
- Theme variations

### Background (`game-bg`)
- Page background color
- Card backgrounds (with `game-surface` overlay)
- Dark mode base

### Text (`game-text`)
- Primary body text
- Heading colors
- Link colors

### Muted (`game-muted`)
- Secondary text/descriptions
- Placeholder colors
- Disabled state styling

## Layout & Spacing

- **Page padding**: `p-8` on main container (reduced from default Turborepo `p-24`)
- **Grid layout**: 4-column mobile-first grid for link cards
- **Responsive**: `lg:grid-cols-4` for larger screens
- **Maximum width**: `max-w-xl` for content area

## Design Philosophy

- **Dark theme**: Primary color scheme is dark (`#0a0a0f` background) to match streaming/ Gaming aesthetics
- **Brand consistency**: Red-purple-orange gradient palette evokes energy and creativity
- **Motion**: Subtle hover transitions and transforms for interactivity
- **Readability**: Strong contrast between text (`#f0f0f5`) and dark backgrounds
- **Component reuse**: All UI elements from `@repo/ui` package follow consistent `ui:` prefix naming

## Extensions & Next Steps

- Add more components as the application grows (buttons, forms, modals, etc.)
- Extend color palette with additional shades and semantic tokens
- Document interaction states (focus, disabled, loading, error)
- Add responsive breakpoints beyond current `lg` configuration
- Create component variant documentation