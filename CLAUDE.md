# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a "Launch Era Diagnostics" quiz application built with Vite + React + TypeScript. It's a personality quiz that helps users discover their launch style (Headliner Era, Chill Drop Queen Era, Hustlecore Hero Era, or Soft-Launch Siren Era). The project uses shadcn/ui components and has a custom brand design system inspired by riot girl aesthetics.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (runs on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Build in development mode (useful for debugging)
npm run build:dev

# Lint the codebase
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Application Structure

The app uses React Router with a simple two-page flow:
- **Landing page** (`/`) - Shows the quiz introduction and "Discover Your Era" button
- **Quiz flow** - Managed by state within the `Quiz` component, which transitions between questions and results
- **404 page** - Catch-all route for unknown paths

### Core Data Flow

1. User clicks "Discover Your Era" on Index page → `started` state set to true → Quiz component renders
2. Quiz component manages:
   - `currentQuestion` - tracks which question (0-4) is displayed
   - `answers` - array of user answers (type `Answer = "A" | "B" | "C" | "D"`)
   - `showResults` - toggles between quiz and results view
3. After 5 questions, Results component calculates the most frequent answer and displays corresponding era

### Component Architecture

- **App.tsx** - Root component with providers (React Query, React Router, Tooltip, Toast)
- **pages/Index.tsx** - Landing page with brand introduction
- **components/Quiz.tsx** - Contains quiz questions data and state management
- **components/Question.tsx** - Renders individual question with answer options
- **components/ProgressBar.tsx** - Visual progress indicator (1/5, 2/5, etc.)
- **components/Results.tsx** - Calculates and displays user's era result with confetti animation
- **components/ui/** - shadcn/ui components (auto-generated, avoid manual edits)

### Design System

The project uses a custom HSL-based color system defined in `src/index.css`:

**Brand Colors:**
- `--punk-coral` (4 79% 54%) - Primary brand color
- `--riot-pink` (345 84% 61%) - Accent/highlight color
- `--lilac-grit` (259 30% 58%) - Secondary color
- `--ink-black` (40 10% 12%) - Text color (light mode)
- `--soft-blush` (1 66% 82%) - Muted accent
- `--pale-lavender` (311 35% 92%) - Background (light mode)

**Typography:**
- Display/headings: `font-typewriter` (Special Elite monospace)
- Body text: `font-sans` (DM Sans)

**Custom Animations:**
- `animate-fade-in` - Entry animation for landing page
- `animate-slide-up` - Entry animation for results
- `animate-glitch` - Hover effect for interactive elements
- `animate-flicker` - Sparkle/icon animations
- `animate-confetti-fall` - Results celebration

### State Management

- React Query (`@tanstack/react-query`) is configured but not actively used
- Component-level state with `useState` for quiz flow
- No global state management (Redux/Zustand/etc.)

### TypeScript Configuration

The project has relaxed TypeScript settings:
- `noImplicitAny: false`
- `strictNullChecks: false`
- `noUnusedLocals: false`
- `noUnusedParameters: false`

Path alias configured: `@/*` → `./src/*`

## Important Notes

- This is a Lovable project - changes made in the Lovable editor are auto-committed to this repo
- The dev server runs on port 8080 (not the default 5173)
- All custom routes must be added ABOVE the catch-all `*` route in App.tsx
- UI components in `src/components/ui/` are from shadcn/ui - prefer using `npx shadcn@latest add <component>` to modify rather than editing directly
- ESLint is configured but `@typescript-eslint/no-unused-vars` is disabled

## Testing

No test framework is currently configured.
