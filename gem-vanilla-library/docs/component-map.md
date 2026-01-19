# Component Mapping: Mockup to Vanilla Library

This document serves as a guide for AI assistants and developers to map elements found in the GEM design system mockups to the existing Custom Element components in the `gem-vanilla-library`.

## Core Components

| Mockup Pattern | Vanilla Component | Usage Context |
| :--- | :--- | :--- |
| Top Navbar (Alternate) | `<gem-topnav>` | Main application header with search and profile. |
| Sidebar Navigation | `<gem-sidebar>` | Navigation for folders or settings modules. |
| Sidebar Navigation Item | `<gem-sidebar-item>` | Individual link/action in the sidebar. |
| Sidebar Usage Bar | `<gem-sidebar-usage>` | Storage or quota indicator at bottom of sidebar. |
| Primary/Secondary Buttons | `<gem-button>` | Primary and secondary action buttons. |

## New Preferences & Layout Components

| Mockup Pattern | Vanilla Component | Usage Context |
| :--- | :--- | :--- |
| Settings Container / Card | `<gem-card>` | The white container box with optional header, subtitle, and footer. |
| Application Tile / Service Tile | `<gem-app-card>` | Clickable brand/app cards (Google, Outlook, etc.). |
| Application Card Grid | `<gem-app-card-grid>` | A responsive grid layout for `gem-app-card`. |
| Settings Row (Label + Control) | `<gem-settings-row>` | Standard row for forms/settings (e.g., Toggle switches, Text inputs). |

## Usage Examples

### Settings Page Wrapper
```html
<gem-card title="Connected Accounts" subtitle="Manage your external email accounts.">
    <!-- Body Content -->
    <gem-settings-row label="Enable Dark Mode" description="Use a dark theme.">
        <input type="checkbox">
    </gem-settings-row>

    <div slot="footer">
        <gem-button variant="primary">Save Changes</gem-button>
    </div>
</gem-card>
```

### Platform Selection
```html
<gem-app-card-grid>
    <gem-app-card icon="google-logo" label="Google / Gmail" brand="google"></gem-app-card>
    <gem-app-card icon="microsoft-outlook-logo" label="Outlook" brand="outlook"></gem-app-card>
</gem-app-card-grid>
```

## Styling Notes
- Use `design-tokens.css` for all colors and spacing.
- Prefer Custom Elements over raw HTML + CSS classes for repeating patterns.
- Page-level layout should be handled in a section-specific CSS file (e.g., `preferences.css`).
