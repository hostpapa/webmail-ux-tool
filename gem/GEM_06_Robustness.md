# Design Robustness Test Plan

This document provides instructions for the brand and localization robustness tests. The goal is to create a generic, reusable plan to ensure any UI design is flexible and does not break when partner branding or different languages are applied.

---

## Output Format: Visual Preview

* **Generation Mode:** Do NOT use the file generation tool to save a file to disk. You must generate the output as a **Single, Continuous HTML Code Block**.
* **Preview Requirement:** You must embed all CSS styles inside a `<style>` block within the `<head>` of the HTML. Do not use external stylesheets.
* **Identification:** Instead of a filename, place a clear HTML comment at the very top of the code block identifying the test case (e.g., ``).
* **Completeness:** The HTML must be a fully functional, standalone document (including `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`) so that the AI interface renders it immediately as a visual preview.

---

### 1. Vodafone (German)

#### Brand Test
* **Primary Color:** Apply the Vodafone red (`#E60000`) to all primary interactive elements (buttons, links, active states).
* **Secondary Colors:** Black (`#000000`) for text.
* **Logo:** Replace the existing logo with the Vodafone logo.
* **Check for:**
    * **Contrast & Legibility:** Ensure all text on the red background is clearly legible and passes accessibility contrast checks.
    * **Logo Integrity:** Confirm the Vodafone logo is not stretched, distorted, or crowded by other UI elements.
    * **Brand Cohesion:** Verify that the red, and black colors are used consistently for actions, backgrounds, and text, respectively.

#### Localization Test
* **Language:** German.
* **Instructions:** Translate all text to German. German words are often longer than their English counterparts.
    * **Example Principle:** A word like "Settings" (8 characters) can become "Einstellungen" (13 characters).
* **Check for:**
    * **Text Wrapping & Truncation:** Ensure that longer words in navigation items, buttons, and labels are handled gracefully without breaking the layout.
    * **Tooltip Text Flow:** Verify that translated text fits within the tooltip component without breaking the layout or becoming unreadable.
    * **Character Rendering:** Verify that special characters (`Ä, ö, ü, ß`) are rendered correctly.

---

### 2. Telmex (Spanish)

#### Brand Test
* **Primary Color:** Apply the Telmex blue (`#0055A4`) to all primary interactive elements.
* **Secondary Colors:** Orange (`#de2f1b`) for accents.
* **Logo:** Replace the existing logo with the Telmex logo.
* **Check for:**
    * **Contrast & Legibility:** Confirm that all text and icons are clear against the blue background.
    * **Logo Integrity:** Ensure the Telmex logo is clear and well-positioned.
    * **Accent Usage:** Confirm that the secondary orange is used sparingly for highlights or secondary actions, not as a primary interactive color.

#### Localization Test
* **Language:** Spanish.
* **Instructions:** Translate all text to Spanish.  Spanish phrases can be longer than their English equivalents.
    * **Example Principle:** A button like "Save" (4 characters) can become "Guardar" (7 characters).
* **Check for:**
    * **Text Flow:** Ensure that translated phrases fit comfortably within the designated UI components without awkward line breaks.
    * **Tooltip Text Flow:** Verify that translated text fits within the tooltip component without breaking the layout or becoming unreadable.
    * **Character Rendering:** Verify that special characters (`ñ, á, é, í, ó, ú`) are rendered correctly.

---

### 3. HostPapa (Canadian English)

#### Brand Test
* **Primary Color:** Apply the HostPapa green (`#98b50b`) to all primary interactive elements.
* **Secondary Colors:** Dark Gray (`#333333`) for body text.
* **Logo:** Replace the existing logo with the HostPapa logo.
* **Check for:**
    * **Contrast & Legibility:** Pay close attention to text on the green background, as this color can sometimes present contrast challenges.
    * **Logo Integrity:** Confirm the HostPapa logo and its character mark are displayed clearly.
    * **Text Color:** Ensure body text uses the specified dark gray (`#333333`) instead of pure black to maintain brand consistency.

#### Localization Test
* **Language:** English (Canadian).
* **Instructions:** Translate all text to Canadian English. Canadian English uses alternate spellings for some words.
    * **Example Principle:** A label like "Color" may become "Colour." "Center" may become "Centre."
* **Check for:**
    * **Spelling Consistency:** Ensure that all UI text uses Canadian English spelling conventions consistently.
    * **Tooltip Spelling:** Ensure any text within tooltips also uses Canadian English spelling.

---

### 4. Bell Canada (French Canadian)

#### Brand Test
* **Primary Color:** Apply the Bell blue (`#0047BB`) to all primary interactive elements.
* **Secondary Colors:** Light Gray (`#F0F0F0`) for backgrounds.
* **Logo:** Replace the existing logo with the Bell Canada logo.
* **Check for:**
    * **Contrast & Legibility:** Confirm legibility and contrast for all text and icons on the blue background.
    * **Logo Integrity:** Ensure the Bell Canada logo is not distorted and is positioned correctly.
    * **Background Application:** Check that light gray is used for container backgrounds or subtle layout distinctions.

#### Localization Test
* **Language:** French (Canadian).
* **Instructions:** Translate all text to French Canadian. French phrases are often longer than their English counterparts and use a variety of accented characters.
    * **Example Principle:** "My Services" (10 characters) becomes "Mes services" (12 characters).
* **Check for:**
    * **Text Flow:** Check that translated phrases fit within components without causing alignment issues.
    * **Tooltip Text Flow:** Verify that translated text fits within the tooltip component without breaking the layout or becoming unreadable.
    * **Character Rendering:** Verify that all accented characters (`à, ç, é, è, û`, etc.) are rendered correctly.