# GEM_03_Final_Outputs.md

This file defines the final documentation to be generated at the end of the UX design process.
The Hostopia UX Architect will parse this file and generate each document specified below.

<!---

### Final User Journey Map

* **Purpose**
    * To provide a clear, final record of the user's steps, feelings, and pain points when interacting with the feature. This document aligns the team on the user's experience.
* **Source Information**
    * Use the final, user-approved User Journey Map created in `Phase 2: Journey`.
* **Generation Instructions**
    * Start with the heading: `## 1. Final User Journey Map`.
    * Re-present the journey map in a clean, readable format. Use a markdown table with the following columns: `Phase`, `User Actions`, `User Thoughts/Feelings`, and `Opportunities`.
    * Ensure the content is identical to what the user approved earlier in the conversation.

---

### Final User Flows

* **Purpose**
    * To provide a step-by-step, logical sequence of actions the user takes to complete a specific task. This is critical for developers to understand the intended interaction logic.
* **Source Information**
    * Use the final, user-approved User Flow(s) created in `Phase 2: Journey`.
* **Generation Instructions**
    * Start with the heading: `## 2. Final User Flows`.
    * For each distinct flow, create a subheading (e.g., `### Flow A: Completing the Primary Task`).
    * Present the flow as a numbered list, clearly indicating each step the user takes.
    * Use Mermaid syntax in a code block for a simple visual diagram.
   

--->

### UI Style Guide (Text-Only)

* **Purpose**
    * To document the core visual components of the final design, ensuring developers can implement the UI with consistency and accuracy. This serves as a foundational reference for this feature.
* **Source Information**
    * Analyze the final, approved code from `Phase 4: Refinement` and `Phase 5: Robustness Testing`. Cross-reference with `GEM_01_UX_Principles.md` for naming conventions.
* **Generation Instructions**
    * Start with the heading: `## 3. UI Style Guide`.
    * Create the following subsections using markdown:
        * **`### Colors`**: List the primary, secondary, accent, and neutral colors used in the final design. Provide their hex codes and a brief description of their role (e.g., Primary Action Button, Body Text).
        * **`### Typography`**: Detail the font families, sizes, and weights used. Specify their application (e.g., H1 - Page Title, Body Copy, Button Text).
        * **`### Spacing & Layout`**: Describe the primary spacing units (e.g., 8px grid system) and common layout patterns (e.g., Main container max-width: 1200px).
        * **`### Interactive Elements`**: Describe the base styles for key components like buttons and links, including their different states (default, hover, active, disabled).

---

### Design Specifications

* **Purpose**
    * To provide developers with a detailed, annotated guide to the final design, removing ambiguity during the handoff process. This document references the separate code files.
* **Source Information**
    * Use the final, approved code from `Phase 4: Refinement` and `Phase 5: Robustness Testing`.
* **Generation Instructions**
    * Announce the process: "I will now generate the Design Specifications. This includes the main specification document and two separate code files: `design.html` and `styles.css`."
    * First, generate the main specification document, which contains the annotations.
    * Then, generate the two code "files" as separate, clearly labeled markdown blocks.

    * **--- Output 1: Main Specification Document ---**
        This document contains the annotations and specifications for the code provided in design.html and styles.css.

        ### Key Component Specifications
        (List the main components from the code, e.g., class="main-card", id="submit-button")

        **Component: `.main-card`**
        - **Dimensions**: `padding: 24px`.
        - **Colors**: `background-color: #FFFFFF`.
        - **Layout**: Acts as the primary container for the page content.

        **Component: `h1`**
        - **Typography**: `font-size: 32px`, `font-family: Inter, sans-serif`, `color: #212529`.
        - **Layout**: Positioned at the top of the `.main-card` with a `16px` margin below it.

    * **--- Output 2: Code File (design.html) ---**
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Design</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div class="main-card">
                <h1>Page Title</h1>
                <p>This is the content of the card.</p>
            </div>
        </body>
        </html>
        ```

    * **--- Output 3: Code File (styles.css) ---**
        ```css
        /* The final, approved CSS from the design session goes here. */
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #F8F9FA;
        }
        .main-card {
            padding: 24px;
            background-color: #FFFFFF;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        h1 {
            font-family: 'Inter', sans-serif;
            font-size: 32px;
            color: #212529;
            margin-bottom: 16px;
        }
        ```

---

### Design Rationale & Session Summary

* **Purpose**
    * To provide a human-readable historical record of the design process from initial request to final output. It documents key decisions and their underlying rationale, answering the question "Why did we do it this way?" for future reference.
* **Source Information**
    * The entire chat transcript. The gem will synthesize information from all phases.
    * **Phase 1 (Consultation)**: The user's answers to the initial questions.
    * **Phase 3 (Iterative Design) & Phase 6 (Refinement)**: Key turning points, user feedback, and pivotal decisions made during the design loop.
    * **The Final Design**: The state of the design at the end of the session.
* **Generation Instructions**
    * Start with the heading: `## 5. Design Rationale & Session Summary`.
    * Add a metadata block:
        * **Project Goal**: [Summarize the answer from question 'a' in Phase 1].
    * Create a subsection `### Initial Consultation Summary` and present the user's answers from Phase 1 in a clean, summarized list format.
    * Create a subsection `### Key Design Changes & Rationale`. List the 3-5 most significant modifications from the initial request (e.g., 'Removed Email container,' 'Changed list to app tiles').
    * For each change, provide the **Rationale** by quoting the user's feedback or the compliance rule that prompted it.
        * *Example*: "• **Change**: Replaced the 'Recently Used' list with the App Tile component. **Rationale**: User feedback ("'recently used items' should be app tile based, like the 'quick access' section")."
    * Create a subsection `### Final Design Summary` describing the features and functionality of the final approved design.

---

### UX Context Package (for Machine Ingestion)

* **Purpose**
    * To provide a structured summary of the completed design session. This file is designed to be uploaded into a new gem session for an adjacent project, allowing the new session to inherit all relevant context, decisions, and design standards without requiring the user to repeat information.
* **Source Information**
    * The entire chat transcript, synthesized into a structured data format. It uses the final, approved state of all design elements, technical constraints, and project goals.
* **Generation Instructions**
    * Generate a file with a human-readable header containing the project name.
    * Under a subheading, place all structured data into a single YAML code block. This data should be parsed by the next gem instance.
    * Under a final subheading, place the final HTML and CSS code from the parent component for contextual reference.
    * The final output should follow the structure in the example below.
* **Example Output (`UX_Context_Package.md`):**

    # UX Context Package

    **Parent Project**: Control Panel Dashboard

    This document contains a machine-readable summary of the completed design session. Upload this file to a new Hostopia UX Architect session for a related project to automatically load the context, styles, and constraints.

    ### Data for Ingestion (YAML Format)
    ```yaml
    project_context:
      parent_project_name: 'Control Panel Dashboard'
      primary_goal: 'To create a modern, compliant dashboard for users to see an overview of their services.'
    technical_constraints:
      framework: 'React'
      limitations: 'Component styling can be changed, but functionality is fixed.'
    style_guide:
      colors:
        primary: '#0055A4'
        secondary: '#6C757D'
        background: '#FFFFFF'
        text_primary: '#212529'
      typography:
        heading_font: 'Inter, sans-serif'
        body_font: 'Roboto, sans-serif'
        h1_size: '32px'
        body_size: '16px'
      spacing:
        base_unit: '8px'
        container_padding: '24px'
    key_decisions:
      - 'Layout uses CSS Grid for main panels.'
      - 'All detail views will open in modals to preserve page context.'
    ```

    ### Parent Component Final Code
    This is the final approved code for the parent component, provided for contextual reference.

    #### HTML
    ```html
    <div class="dashboard-container">
      <h1>Welcome Back</h1>
    </div>
    ```

    #### CSS
    ```css
    /* The final, approved CSS from the parent design session goes here. */
    .dashboard-container {
      padding: 24px;
      background-color: #FFFFFF;
    }
    ```

<!---

### Session Friction Log

* **Purpose**
    * To provide a factual record of misalignments or errors that occurred during the session, allowing for future process review. This replaces the meta-cognitive 'Debug Log'.
* **Source Information**
    * The entire chat transcript.
* **Generation Instructions**
    * Start with the heading: `## 7. Session Friction Log`.
    * Scan the full transcript for any exchange where the User had to correct a factual error, a compliance error, or a misunderstanding made by the Hostopia UX Architect.
    * Present these as direct quotes, clearly delineating the exchange.
    * **Example:**
        ```
        ### Friction Point: Initial Component Compliance
        **User:** "double check that you are using the components from the components md file"
        **Hostopia UX Architect:** "Partial Match: GEM_08 does specify a <header class="top-nav-header">... Deviation: The HTML structure... is for a different... navigation..."
        ```

---

### Source Analysis

* **Purpose**
    * To provide a factual analysis of which source documents and discovery questions were used to build the final design.
* **Source Information**
    * The gem will analyze its own internal processes, the Phase 1 transcript, and the source documents it accessed.
* **Generation Instructions**
    * Start with the heading: `## 8. Source Analysis`.
    * Create the following subsections:
    * **`### Key Discovery Inputs`**
        * List the 3 most critical answers from the Phase 1 interview that were directly referenced in the Design Mandate.
        * **Example**: "*Input: User disliked the cluttered sidebar. -> Mandate: 'Consolidate all navigation into a single, compliant Top Navigation Bar.'*"
    * **`### Source Document Usage`**
        * List each of the baseline `.md` documents that were referenced during the session (e.g., `GEM_01_UX_Principles.md`, `GEM_02_Compliance_Checklist.md`, etc.).
        * For each document, explain *how* it was used and provide a specific example.
        * **Example**: "*`GEM_02_Compliance_Checklist.md` was used during the Audit Phase to identify that the button radius was non-compliant.*"

--->

### Component Analysis for Library Contribution

* **Purpose**
    * Analyze the final design and identify new or updated components that should be contributed back to the central `GEM_08_Component_Library.md`. This creates a continuous improvement loop for the design system.
* **Source Information**
    * The final approved HTML/CSS design.
    * The existing `GEM_08_Component_Library.md`.
* **Generation Instructions**
    * Generate the heading: `## 9. Component Analysis for Library Contribution`.
    * Scan the final approved HTML/CSS design and identify all distinct UI components (buttons, cards, forms, modals, navigation elements, etc.).
    * For each identified component, determine if it is:
        * A new component not present in `GEM_08_Component_Library.md`
        * An update to an existing component in `GEM_08_Component_Library.md`
    * For each component, generate a subsection using the following structure:
        * **Component Name:** Generate heading `### New Component: [Component Name]` or `### Updated Component: [Component Name]`
        * **Genericization Analysis:**
            * Extract the component code from the final design.
            * Identify all use-case-specific elements: hardcoded text, project-specific data, context-dependent styling, page-specific dependencies.
            * Refactor the component code to be generic while preserving visual appearance and behavior:
                * Replace hardcoded text with semantic placeholder text that represents the component's purpose (e.g., "Button Label" instead of "Submit Order").
                * Remove project-specific data structures, but maintain the same visual structure.
                * Ensure all styles are self-contained within the component (no dependencies on parent container classes or page-specific CSS).
                * Verify the component can function in multiple contexts (forms, cards, modals, navigation, etc.) without modification.
            * Generate a bulleted list documenting: "Original specific elements: [list]. Genericized to: [list]. Visual appearance: unchanged."
        * **Friendly Description:** Generate 2-3 sentences in plain language. Use simple terms. Explain what the component is, what it does visually/functionally, and when a designer would choose to use it. Avoid technical jargon.
        * **AI-Tuned Description:** Generate a structured technical description with these exact subsections:
            * **Component Type:** [Single category: Interactive Element, Layout Container, Feedback Indicator, Navigation Element, Data Display, Input Control, or Other]
            * **Use Cases:** [List 3-5 specific scenarios where this component should be used, separated by commas]
            * **Integration Notes:** [Describe how it integrates with other components, list any dependencies, specify container requirements]
            * **Configuration Options:** [List all customizable properties: colors, sizes, states, content types, etc.]
            * **When to Use:** [Provide decision criteria: when to use this component vs. alternatives, performance considerations, accessibility requirements]
        * **Component Relationships:**
            * **Often Used With:** [List 3-5 component names that are commonly paired with this component, separated by commas. If none, state "Standalone component."]
            * **Alternative To:** [List 2-3 alternative components that serve similar purposes, followed by brief guidance in parentheses on when to choose this component instead. Format: "Component A (use when X), Component B (use when Y)". If no alternatives, state "No direct alternatives."]
        * **Rationale:** Generate 1-2 sentences explaining why this component adds value to the library or why the update improves the existing component.
        * **Proposed Update:**
            * Generate a complete, ready-to-paste component definition formatted exactly as it should appear in `GEM_08_Component_Library.md`.
            * For new components: Generate the full component entry including all sections (heading, descriptions, code blocks, examples).
            * For updated components: Generate the complete replacement section for the existing component. Include all sections of the component definition (even unchanged parts) so the output is the entire component as it should exist after the update. Do not generate diffs, partial edits, or "change this to that" instructions.
            * Format the output as a complete markdown code block containing:
                * Component heading
                * All description sections
                * Complete HTML code block with full component structure
                * Complete CSS code block with all styles (use CSS custom properties for configurable values)
                * JavaScript code block if the component requires interactivity
                * Usage examples code block showing 2-3 different configurations
                * Ensure the code is syntactically correct, self-contained, and can be directly copied and pasted into the library document without any manual editing.

---

### Component Visualization & Review

* **Purpose**
    * Generate a single consolidated visual catalog of all components proposed for library contribution, enabling designers and stakeholders to review and approve component additions/updates before integration into the central library.
* **Source Information**
    * All components identified and documented in Section 9 (Component Analysis for Library Contribution).
    * The final approved HTML/CSS design.
* **Generation Instructions**
    * **Output Format:**
        * Generate the output as a **Single, Continuous HTML Code Block** (Visual Artifact).
        * **Do NOT use the file generation tool.**
        * **Do NOT generate a markdown file.**
    * **File Structure:**
        * Use `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.
        * In the `<head>`, include a `<style>` block containing ALL CSS necessary to render the components.
    * **Content Generation:**
        * Generate an `<h1>` heading: "Component Library Updates - Visual Review".
        * Generate a `<p>` intro: "This section provides visual previews of all components recommended for library contribution."
        * For each component documented in Section 9, generate a `<section>`:
            * **Heading:** `<h2>` with the Component Name.
            * **Visual Preview:** Render the actual HTML component code.
            * **Context:** Populate the component with realistic, representative content (e.g., dropdowns with items, tables with rows) so it looks functional.
            * **Variations:** If applicable, show variations (e.g., primary vs secondary buttons) side-by-side or stacked.
            * **Before/After (for updates):** If the component is an update, render the "Before" version (from GEM_08) and the "After" version side-by-side for comparison.