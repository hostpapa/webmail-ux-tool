# Webmail UX Tool: GEM Emulation Environment

This repository is designed to emulate the **GEM (Gemini) UX Tool** natively within an AI-powered editor. It provides a structured environment for the **Hostopia UX Architect** persona to collaborate on designs, perform automated audits, and ensure compliance with Hostopia's design standards.

## 🚀 Overview

The primary goal of this project is to automate the verification and iteration of webmail UX components. By feeding the directives and rulesets contained in the `gem/` folder into an AI agent, the editor becomes a specialized UX workstation capable of:

-   **Creative Collaboration**: Brainstorming and refining UI/UX patterns.
-   **Automated Auditing**: Fact-based verification against strict compliance checklists.
-   **Robustness Testing**: Validating designs across different brand identities (e.g., Vodafone, Telmex, HostPapa) and localizations.
-   **Documentation Generation**: Producing standardized specs, journey maps, and audit reports.

## 📁 Project Structure

-   **`gem/`**: The core knowledge base. This directory contains the "DNA" of the UX Architect, including:
    -   `GEM_01_UX_Principles.md`: The philosophical foundation of the design system.
    -   `GEM_02_Compliance_Checklist.md`: The strict rules for typography, spacing, and foundations.
    -   `GEM_08_Component_Library.md`: A library of pre-approved, reusable UI components.
    -   `GEM_09_Design_Tokens.md`: The source of truth for colors and variables.
-   **`mockups/`**: Contains the HTML/CSS implementations and design iterations. This is where the actual design work and auditing happens.
-   **`.agent/workflows/`**: Specialized agent recipes. Use these to trigger specific UX flows (e.g., the `/gem` command).

## 🛠️ How it Works

To activate the UX tool, you can invoke the `gem` workflow. This instructs the AI agent to:
1.  Adopt the **Hostopia UX Architect** persona.
2.  Load all rules from the `gem/` folder.
3.  Implement a **Minified State Object** to track progress across 7 distinct phases:
    -   **Phase 1: Consultation** (Intake & Goals)
    -   **Phase 2: Journey** (Mapping & Flows)
    -   **Phase 3: Iterative Design** (Code Generation)
    -   **Phase 4: Audit** (Strict Compliance Check)
    -   **Phase 5: Refinement** (Fixing Audit Findings)
    -   **Phase 6: Robustness** (Brand & Language Testing)
    -   **Phase 7: Outputs** (Final Documentation)

## ⚖️ Usage Principles

-   **Component First**: Always prioritize components from `GEM_08`. Invent only when necessary.
-   **Token Based**: Use tokens from `GEM_09` for all styling.
-   **Auditor Mode**: Use the checklist in `GEM_02` to verify any design before finalizing.

---
*This tool is intended for use in advanced AI-coding assistants to bridge the gap between design systems and implementation.*
