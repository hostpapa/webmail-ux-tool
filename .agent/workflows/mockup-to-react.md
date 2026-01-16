---
description: Analyze a mockup and implement it into the gem-react-library while maintaining GEM design system compliance.
---

# Workflow: Mockup to React Implementation

This workflow guides you through the process of converting a raw mockup (HTML or Image) into a fully compliant React component within the `gem-react-library`.

## Prerequisites
-   **Mockup File**: The user must provide a path to the mockup file (e.g., `mockups/new-page.html`).
-   **GEM Context**: You must have access to the `gem` folder (Design System) and `gem-react-library` (Current Codebase).

## Step 1: Context Acquisition
1.  **Read the Mockup**: Use `view_file` to read the content of the provided mockup file.
    -   *Goal*: Understand the structure, layout, and content requirements.
2.  **Read GEM Standards**:
    -   Read `gem/GEM_08_Component_Library.md` to identify standard components (Buttons, Inputs, etc.).
    -   Read `gem/GEM_09_Design_Tokens.md` to load the allowed colors, fonts, and spacing into your context.
3.  **Survey Existing Library**:
    -   Use `list_dir` on `gem-react-library/src/components` to see what is already built.
    -   Avoid rebuilding existing components (like `Sidebar`, `TopNavAlt`). Reuse them!

## Step 2: Gap Analysis & Planning
1.  **Identify Components**: Break the mockup down into UI organisms.
    -   *Existing*: What matches current components? (e.g., "This header is `TopNavAlt`").
    -   *New*: What needs to be built? (e.g., "A new `DataGrid` component is needed").
    -   *Variants*: Does an existing component need a new variant? (e.g., "Sidebar needs an 'Anchor' variant").
2.  **Check Compliance**:
    -   Ensure the mockup follows **Strict Flat Design** (No box-shadows).
    -   Identify any "magic values" (hex codes, px) in the mockup and map them to `GEM_09` tokens (e.g., `16px` -> `var(--space-4)`, `#2CADB2` -> `var(--color-brand-secondary)`).

## Step 3: Implementation
1.  **Create/Update Components**:
    -   If creating a **Page**, put it in `gem-react-library/src/pages/`.
    -   If creating a **Reusable Component**, put it in `gem-react-library/src/components/[Name]/`.
2.  **Coding Standards**:
    -   **Framework**: React + Vite.
    -   **Styling**: Use CSS Modules (`[Name].module.css`).
    -   **Icons**: Use `@phosphor-icons/react`.
    -   **Tokens**: **MANDATORY**. Use CSS variables from `src/styles/design-tokens.css` (which map to GEM_09).
    -   **Layout**: Use Flexbox/Grid. Avoid fixed heights where possible.
3.  **Refactoring**: If the mockup requires a feature that logically belongs in a shared component (e.g., a new button style), update the shared component, do not hardcode it in the page.

## Step 4: Integration
1.  **Register Page**:
    -   Add the new page export to `gem-react-library/src/pages/index.js`.
    -   Add a **Route** in `gem-react-library/src/App.jsx`.
    -   Add a link in the `MainLayout` or `Home` page if appropriate so the user can navigate to it.

## Step 5: Verification
1.  **Visual Audit**:
    -   Does the React page look like the mockup?
    -   **CRITICAL**: Are there any box-shadows? If yes, **REMOVE THEM**.
    -   Are borders 1px?
    -   Are hover states using `inset` or background/border changes instead of shadows?
2.  **Browser Test**:
    -   (Optional) If allowed, use `browser_subagent` to take a screenshot and confirm headers/layout match.

## Step 6: Documentation
1.  Briefly summarize what was built.
2.  List any new dependencies or tokens used.
