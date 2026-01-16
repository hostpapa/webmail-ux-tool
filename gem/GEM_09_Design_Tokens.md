# **GEM\_09: Core Design Tokens**

This document is the single source of truth for all design tokens used across the Hostopia UX framework. It provides a system of named variables for colors, typography, spacing, and other foundational styles to ensure consistency and scalability. All components should reference these semantic tokens instead of hardcoded values.

## **1\. Color Tokens**

Our color system is structured in two layers: a core palette of raw color values and a semantic layer that assigns those colors to specific roles in the UI.

### **Core Palette**

These are the foundational, named colors available in the system.

```
:root {
  /* Neutrals */
  --color-core-white: #FFFFFF;
  --color-core-charcoal: #25282A;
  --color-core-neutral-50: #F9FAFB;
  --color-core-neutral-100: #F3F4F6;
  --color-core-neutral-200: #E5E7EB;
  --color-core-neutral-300: #D1D5DB;
  --color-core-neutral-500: #6B7280;

  /* Accents */
  --color-core-accent-blue: #2CADB2;
  --color-core-accent-blue-light: #E0F5F6; /* Tint for backgrounds */
  --color-core-accent-amber: #F59E0B;     /* For folder icons */

  /* Status */
  --color-core-status-danger: #EF4444;
  --color-core-status-warning: #FF8400;
  --color-core-status-success: #66BC29;
}
```

### **Semantic Tokens (Roles)**

This is the primary way components should consume color. These tokens map the core palette to specific UI functions, allowing for consistent and themeable designs.

```
:root {
  /* -- Brand Identity -- */
  --color-brand-primary: var(--color-core-charcoal);
  --color-brand-secondary: var(--color-core-accent-blue);

  /* -- Text -- */
  --color-text-primary: var(--color-core-charcoal);
  --color-text-secondary: var(--color-core-neutral-500);
  --color-text-on-primary: var(--color-core-white); /* For text on dark buttons/navs */
  --color-text-interactive: var(--color-core-accent-blue);

  /* -- Backgrounds -- */
  --color-background-page: var(--color-core-neutral-50);
  --color-background-container: var(--color-core-white);
  --color-background-interactive-primary: var(--color-brand-primary);
  --color-background-interactive-hover: rgba(255, 255, 255, 0.1); /* For dark nav hover */
  --color-background-selected: var(--color-core-accent-blue-light);

  /* -- Borders -- */
  --color-border-neutral: var(--color-core-neutral-200);
  --color-border-interactive: var(--color-core-neutral-300);

  /* -- Status -- */
  --color-status-danger: var(--color-core-status-danger);
  --color-status-warning: var(--color-core-status-warning);
  --color-status-success: var(--color-core-status-success);
}
```

## **2\. Typography Tokens**

```
:root {
  /* -- Font Families -- */
  --font-family-heading: 'Satoshi', sans-serif;
  --font-family-body: 'Inter', sans-serif;

  /* -- Font Weights -- */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* -- Font Sizes -- */
  --font-size-xs: 12px;  /* Extra Small (e.g., list headers) */
  --font-size-sm: 13px;  /* Small (e.g., usage meter text) */
  --font-size-base: 14px; /* Body */
  --font-size-lg: 18px;  /* Large (e.g., nav logo) */
  --font-size-xl: 20px;  /* Extra Large (e.g., sidebar H1) */
}
```

## **3\. Spacing Tokens**

Based on an 8pt grid system. Use these for all `padding`, `margin`, and `gap` properties.

```
:root {
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
}
```

## **4\. Sizing & Radius Tokens**

```
:root {
  /* -- Corner Radius -- */
  --radius-sm: 4px;
  --radius-md: 6px;  /* Standard for buttons, inputs */
  --radius-lg: 8px;  /* Standard for containers/cards */
  --radius-full: 9999px;

  /* -- Component Heights -- */
  --size-height-top-nav: 48px;
  --size-height-list-item: 52px;
}
```