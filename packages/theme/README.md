# @perd-ui/theme

Base theme styles providing CSS design tokens for consistent styling across all `@perd-ui` components.

## Installation

```bash
pnpm add @perd-ui/theme
```

## Usage

### Import All Theme Layers

```typescript
import '@perd-ui/theme'
```

This imports all theme modules: colors, sizes, spacings, transitions, and typography.

### Import Specific Modules

You can import only the modules you need:

```typescript
import '@perd-ui/theme/colors'      // Color tokens with light/dark mode
import '@perd-ui/theme/sizes'       // Size variables
import '@perd-ui/theme/spacings'    // Spacing scale
import '@perd-ui/theme/transitions' // Material Design 3 easing functions
import '@perd-ui/theme/typography'  // Font family and size tokens
```

## Available CSS Variables

### Colors

The theme provides semantic color tokens that automatically adapt to light and dark modes based on the user's `prefers-color-scheme` preference.

```css
--color-text              /* Primary text color */
--color-background        /* Background color */
--color-input-background  /* Input field background */
--color-input-border      /* Input border color */
--color-panel-background  /* Panel background */
--color-panel-border      /* Panel border color */
```

All colors use the OKLCH color space for perceptual uniformity.

### Spacings

```css
--spacing-xs    /* Extra small spacing */
--spacing-sm    /* Small spacing */
--spacing-md    /* Medium spacing */
--spacing-lg    /* Large spacing */
--spacing-xl    /* Extra large spacing */
```

### Sizes

```css
--border-radius-sm       /* Small border radius */
--border-radius-md       /* Medium border radius */
--input-height           /* Standard input height */
--shadow-focus-ring      /* Focus ring shadow */
```

### Transitions

Material Design 3 inspired easing functions:

```css
--easing-standard        /* Standard easing curve */
--easing-emphasized      /* Emphasized easing curve */
--easing-duration-short  /* Short animation duration */
--easing-duration-medium /* Medium animation duration */
--easing-duration-long   /* Long animation duration */
```

### Typography

```css
--font-family     /* Base font family */
--font-size-sm    /* Small text size */
--font-size-base  /* Base text size */
--font-size-lg    /* Large text size */
```

## Features

- **Automatic Dark Mode**: Theme automatically switches between light and dark modes based on system preferences
- **OKLCH Color Space**: Perceptually uniform colors for better visual consistency
- **Material Design 3**: Animation curves inspired by Material Design 3 guidelines
- **CSS Layers**: Proper cascade control using CSS layers
- **Tree-shakable**: Import only the modules you need

## Browser Support

Requires browsers with support for:

- CSS custom properties (CSS variables)
- `prefers-color-scheme` media query
- OKLCH color space
- CSS layers

## License

UNLICENSED
