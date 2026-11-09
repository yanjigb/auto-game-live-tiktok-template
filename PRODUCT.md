# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
[Greenfield only: the user's answer to the stack question, e.g. "static HTML/CSS", "Astro", or "delegated: <what you chose and why>". Omit the section when an existing codebase already answers it.]

## Users
- **Primary**: Content creators and streamers who want to auto-live stream games on TikTok
- **Secondary**: Gaming communities looking to integrate with TikTok live features; Developers building TikTok-integrated gaming applications

## Product Purpose
auto-game-live-tiktok is a Next.js-based web application within a Turborepo monorepo, designed for auto-game-live streaming integration with TikTok. It combines auto-game functionality with live TikTok streaming capabilities, enabling content creators to stream games to TikTok live with real-time viewer engagement tools and stream management.

## Positioning
A platform that bridges auto-game functionality with TikTok live streaming, enabling creators to focus on gameplay while the system handles live integration, analytics, and viewer engagement — differentiating from manual streaming setups and standalone game streaming tools.

## Operating Context
- Turborepo monorepo management with apps/web as the main application
- Next.js 14 App Router framework with TypeScript full type safety
- Tailwind CSS for styling with custom design tokens in @repo/ui and @repo/tailwind-config
- Custom UI component library (@repo/ui) providing card, gradient, and other components
- Development workflow using pnpm, Turbo, and Playwright for testing
- Deployment targeting static/edge-friendly Node.js hosting
- Integration with TikTok's live streaming API and authentication flow

## Capabilities and Constraints
- Auto game detection and live streaming setup
- TikTok live integration with real-time viewer engagement tools
- Stream management dashboard
- Analytics and performance monitoring (Core Web Vitals, TikTok integration reliability)
- Component reusability across the monorepo packages
- Constrained by TikTok API rate limits and authentication requirements
- Type-safe full-stack development with TypeScript

## Brand Commitments
- Dark theme aesthetic (#0a0a0f background) matching streaming/gaming culture
- Brand palette: red-purple-orange gradient evoking energy and creativity
- UI component library following consistent `ui:` prefix naming convention
- Motion: subtle hover transitions and transforms for interactivity
- Readability: strong contrast between text (#f0f0f5) and dark backgrounds

## Evidence on Hand
- Turborepo starter template with branding
- Basic UI components: card, gradient, Turborepo-logo
- Next.js 14 App Router project structure
- Tailwind CSS configuration with custom color tokens
- DESIGN.md capturing the visual design system (colors, typography, components)
- Codebase repository with package structure and scripts

## Product Principles
1. **Simplicity**: The system should require minimal configuration to enable auto-live streaming
2. **Reliability**: TikTok integration must be stable; transient failures should be handled gracefully
3. **Creator-first**: The experience should put the creator's workflow and time-value first
4. **Consistency**: Design and behavior should be consistent across the monorepo and TikTok platform
5. **Performance**: Core Web Vitals should be maintained; page load performance is a non-negotiable success metric

## Accessibility & Inclusion
[No product-specific requirement was established during this session. Future work may identify accessibility needs related to screen reader support, color contrast, or keyboard navigation for the stream management dashboard.]

---
*This product record follows schema version 1 of the impeccable product record template. Sections marked as deprecated by future template updates should be removed when the user agrees, rather than carried forward.*