# **UX Audit Report**

Target File: connected-accounts.html  
Date: 2026-01-16  
Compliance Score: 45/100 (Estimated)

## **1. Executive Summary**

The mockup for **Connected Accounts** establishes a clear functional hub for users to link remote email accounts (e.g., Gmail, Outlook) to the Hostopia mail client. While the user flow—moving from a simplified "Choice Grid" to an active "Account List"—addresses the goal of **Efficiency**, the current technical implementation fails to project the Hostopia brand identity. Significant deviations from the standardized component library, use of banned vocabulary ("Preferences"), and violations of the **Strict Flat Design** mandate require a comprehensive refactor.

**Status:** FAIL

## **2. Critical Failures (Must Fix)**

*These items break the design system, architecture, or accessibility.*

*   **Rule 1.1: Component Architecture (Library Exclusivity)**: The Top Navigation and Sidebar use custom HTML/CSS structures instead of the mandated `GEM_08` components.
    *   *Fix:* Replace custom headers and sidebars with `top-nav-header-alt` (for search-heavy views) or `top-nav-header-default` and the standard `sidebar-nav` component.
*   **Rule 4.1: Foundations (Token Enforceability)**: Raw hex codes (e.g., `#DB4437`, `#0078D4`, `#6001D2`) are used for platform colors.
    *   *Fix:* Map all colors to `GEM_09` tokens or define them as local semantic variables using token-compliant values.
*   **Rule 4.2: Foundations (Strict Flat Design)**: Use of `box-shadow` on the main container, primary buttons, and modals.
    *   *Fix:* Remove all `box-shadow` properties. For depth/separation, use a 1px border (`var(--color-border-neutral)`) or active state borders (`var(--color-brand-primary)`).
*   **Rule 5.1: Typography (Font Assignment)**: Headings are inconsistent in their assignment.
    *   *Fix:* Ensure all H1, H2, and H3 elements use **Satoshi** and all UI/Body text uses **Inter**.

## **3. Detailed Protocol Analysis**

### **Protocol 1: Component Architecture & Functional Alignment**

*   **Goal Alignment:** The "Empty State" grid correctly applies **Industrial Design's Functionalism** by grouping platform choices clearly. However, the `platform-tile` class is a custom invention that should be refactored to use the `app-card` component from `GEM_08`.
*   **Progressive Disclosure:** PASS. The transition from an empty state (high clarity) to a list view (high management) follows the **Essential Simplicity** mandate.
*   **Library Usage:** FAIL. The mockup replicates the visual *look* of some components but does not use the actual CSS classes and HTML structures defined in `GEM_08`.  
*   **Mobile Parity:** FAIL. Custom layout lacks the standard responsive classes found in `GEM_08` components.

### **Protocol 2: Information Architecture (Sort Logic)**

*   **Navigation:** PASS. "Preferences" (Settings) is correctly placed at the end of the top nav, and high-frequency "Mail" items are prioritized.  
*   **Lists/Grids:** PASS. The platform grid is logically organized.

### **Protocol 3: Content & Labeling**

*   **Vocabulary:** FAIL. The term **"Preferences"** is used multiple times.  
    *   *Constraint:* "Preferences" is a banned term in GEM_02 Rule 3.1.
    *   *Correction:* Rename to **"Settings"**.
*   **Tone:** PASS. The subtitle accurately describes the value proposition (Efficiency) of the feature.

### **Protocol 4: Foundations & Visuals**

*   **Tokens:** FAIL. Custom CSS contains raw hex values.
*   **Flat Design:** FAIL. Shadows are used for depth, violating the strict flat design mandate. **Rule 4.2** requires separation via 1px borders only.

### **Protocol 5: Typography**

*   **Font System:** NEEDS REFINEMENT. While both fonts are imported, their application to specific heading levels needs auditing for Rule 5.1 compliance.

### **Protocol 6: Iconography**

*   **Library:** PASS. Phosphor Icons are used.  
*   **Variants:** FAIL. Inactive sidebar items are using `ph-fill` instead of the regular `ph` weight.

### **Protocol 7 & 8: Motion & Accessibility**

*   **Animation:** PASS. Loading spinner is correctly implemented for the save action, meeting **Rule 7.2**.
*   **A11y:** FAIL. Icon-only buttons (like the trash icon) lack sufficient ARIA labels or focus-visible rings consistent with GEM_08.

## **4. Refactored Code Snippets**

*Correction for Rule 1.1 (Library Header) and Rule 4.2 (Shadow Removal):*

```html
<!-- Corrected Header (GEM_08 Standard) -->
<header class="top-nav-header-alt">    
    <div class="top-nav-container">    
        <div class="top-nav-logo">    
            <a href="#"><span>Webmail</span></a>    
        </div>    
        <div class="top-nav-search">    
            <div class="search-input-wrapper">    
                <i class="ph ph-magnifying-glass"></i>    
                <input type="search" placeholder="Search mail...">    
            </div>    
        </div>    
        <div class="top-nav-actions">    
            <nav class="main-nav">    
                <ul>    
                    <li><a href="#" class="top-nav-link-alt"><i class="ph-fill ph-envelope"></i></a></li>    
                    <li><a href="#" class="top-nav-link-alt" aria-current="page"><i class="ph-fill ph-gear"></i></a></li>    
                </ul>    
            </nav>    
        </div>    
    </div>    
</header>
```

