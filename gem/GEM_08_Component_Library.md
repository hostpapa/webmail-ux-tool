**# **GEM_08: Hostopia Component Library****

**This document contains the primary, reusable components for the Hostopia UX framework. This version has been updated to use the semantic design tokens defined in GEM_09_Design_Tokens.md and reflects all approved design changes.**

**### **1. Standard Top Navigation****

* **Friendly Description: The primary header bar that sits at the top of the screen. It displays the company logo, main navigation links (like Dashboard or Websites), and your account profile menu. It anchors the user's experience and ensures they can always find their way home.**  
* **AI-Tuned Description:**  
  * **Component Type: Navigation Element**  
  * **Use Cases: Main Control Panel Interface, Dashboard Overview, Product Landing Pages**  
  * **Integration Notes: Must be the very first element in the `<body>`. It is designed to sit above a standard content container or sidebar layout. Requires `GEM_09` tokens for brand colors.**  
  * **Configuration Options: Logo (image/text), Nav Links (text/icon pairs), Account Action (user profile dropdown trigger).**  
  * **When to Use: Use this for the "Parent" interface where the user is managing their account or navigating between different high-level products.**  
* **Component Relationships:**  
  * **Often Used With: Sidebar Navigation, Application Card Section, Selection Dropdown (Domain/Language)**  
  * **Alternative To: Alternate Top Navigation (use when Search is the primary focus, e.g., Webmail).**

**#### **HTML****

**<header class="top-nav-header-default">**    
    **<nav class="top-nav-container">**    
        **<div class="top-nav-logo">**    
            **<a href="#"><span>PartnerBrand</span></a>**    
        **</div>**    
        **<div class="top-nav-links">**    
            **<a class="nav-link-default active" href="#">**    
                **<i class="ph-fill ph-gauge"></i><span>Dashboard</span>**    
            **</a>**    
            **<a class="nav-link-default" href="#">**    
                **<i class="ph-fill ph-globe"></i><span>Websites</span>**    
            **</a>**    
        **</div>**    
        **<div class="top-nav-actions">**    
            **<!-- Dropdown Menu (Component 11) is placed here -->**    
            **<div class="relative group">**    
                **<button class="nav-link-default">**    
                    **<i class="ph-fill ph-user-circle"></i>**    
                    **<span class="nav-text-mobile-hide">Account</span>**    
                    **<i class="ph ph-caret-down nav-text-mobile-hide"></i>**    
                **</button>**    
            
                **<div class="dropdown-container">**    
                    **<div class="dropdown-menu-vertical-accent">**    
                        **<a href="#">Profile</a>**    
                        **<a href="#">Billing</a>**    
                        **<a href="#">Settings</a>**    
                        **<div class="divider"></div>**    
                        **<a href="#">Logout</a>**    
                    **</div>**    
                **</div>**    
            **</div>**    
        **</div>**    
    **</nav>**    
**</header>**

**#### **CSS****

**/* Note: Relies on tokens from GEM_09_Design_Tokens.md */**    
**.top-nav-header-default {**    
    **background-color: var(--color-brand-primary);**    
    **color: var(--color-text-on-primary);**    
    **height: var(--size-height-top-nav);**    
    **width: 100%;**    
    **display: flex;**    
    **align-items: center;**    
**}**    
**.top-nav-header-default .top-nav-container {**    
    **display: flex;**    
    **align-items: center;**    
    **justify-content: space-between;**    
    **height: 100%;**    
    **width: 100%;**    
    **padding: 0 var(--space-3);**    
    **gap: var(--space-3);**    
**}**    
**.top-nav-header-default .top-nav-logo { flex-shrink: 0; }**    
**.top-nav-header-default .top-nav-logo span {**    
    **font-family: var(--font-family-heading);**    
    **font-size: var(--font-size-lg);**    
    **font-weight: var(--font-weight-bold);**    
    **color: var(--color-text-on-primary);**    
**}**    
**.top-nav-links {**    
    **display: flex;**    
    **align-items: center;**    
    **height: 100%;**    
    **margin-left: var(--space-3);**    
    **flex-grow: 1;**    
**}**    
**.nav-link-default {**    
    **display: flex;**    
    **align-items: center;**    
    **gap: var(--space-1);**    
    **padding: 0 var(--space-2);**    
    **height: var(--size-height-top-nav);**    
    **font-size: var(--font-size-base);**    
    **font-weight: var(--font-weight-medium);**    
    **color: rgba(255, 255, 255, 0.8);**    
    **text-decoration: none;**    
    **transition: background-color 150ms ease-out, color 150ms ease-out;**    
    **border: 2px solid transparent;**    
    **background-color: transparent;**    
    **cursor: pointer;**    
**}**    
**.nav-link-default:hover {**    
    **background-color: var(--color-background-interactive-hover);**    
    **color: white;**    
**}**    
**.nav-link-default.active {**    
    **position: relative;**    
    **color: white;**    
**}**    
**.nav-link-default.active::after {**    
    **content: '';**    
    **position: absolute;**    
    **bottom: 0;**    
    **left: var(--space-2);**    
    **right: var(--space-2);**    
    **height: 2px;**    
    **background-color: white;**    
**}**    
**.nav-link-default:focus-visible {**    
    **outline: none;**    
    **border-color: var(--color-brand-secondary);**    
**}**    
**.top-nav-header-default .top-nav-actions {**    
    **display: flex;**    
    **align-items: center;**    
    **height: 100%;**    
**}**    
**@media (max-width: 640px) {**    
    **.nav-text-mobile-hide {**    
        **display: none;**    
    **}**    
**}**

**### **2. Alternate Top Navigation (with Search)****

* **Friendly Description: A specialized version of the top menu designed for data-heavy applications like Email, Webmail, or File Managers. It swaps the text links for a large, central search bar, allowing users to quickly find specific items. Navigation links are condensed into icons to save space.**  
* **AI-Tuned Description:**  
  * **Component Type: Navigation Element**  
  * **Use Cases: Webmail Client, File Manager, Contact List, Large Data Repositories**  
  * **Integration Notes: Replaces the Standard Top Navigation. The search input should be hooked into a live search filter or search results page.**  
  * **Configuration Options: Search Placeholder Text, Icon Links (Mail, Storage, Settings), Logo.**  
  * **When to Use: Use exclusively for "Application Views" where the primary user intent is to find a specific file, email, or record (Search-First Architecture).**  
* **Component Relationships:**  
  * **Often Used With: Sidebar Navigation, Interactive Data Table**  
  * **Alternative To: Standard Top Navigation (use when browsing/discovery is preferred over search).**

**#### **HTML****

**<header class="top-nav-header-alt">**    
    **<div class="top-nav-container">**    
        **<div class="top-nav-logo">**    
            **<a href="#"><span>PartnerBrand (Alt)</span></a>**    
        **</div>**    
        **<div class="top-nav-search">**    
            **<div class="search-input-wrapper">**    
                **<i class="ph ph-magnifying-glass"></i>**    
                **<input type="search" placeholder="Search...">**    
            **</div>**    
        **</div>**    
        **<div class="top-nav-actions">**    
            **<nav class="main-nav">**    
                **<ul>**    
                    **<li><a href="#" title="Mail" class="top-nav-link-alt"><i class="ph-fill ph-envelope"></i></a></li>**    
                    **<li><a href="#" title="Storage" class="top-nav-link-alt" aria-current="page"><i class="ph-fill ph-briefcase"></i></a></li>**    
                    **<li><a href="#" title="Settings" class="top-nav-link-alt"><i class="ph-fill ph-gear"></i></a></li>**    
                **</ul>**    
            **</nav>**    
        **</div>**    
    **</div>**    
**</header>**

**#### **CSS****

**/* Note: Relies on tokens from GEM_09_Design_Tokens.md */**    
**.top-nav-header-alt {**    
    **background-color: var(--color-brand-primary);**    
    **color: var(--color-text-on-primary);**    
    **height: var(--size-height-top-nav);**    
    **width: 100%;**    
    **display: flex;**    
    **align-items: center;**    
**}**    
**.top-nav-header-alt .top-nav-container {**    
    **display: flex;**    
    **align-items: center;**    
    **justify-content: space-between;**    
    **height: 100%;**    
    **width: 100%;**    
    **padding: 0 var(--space-3);**    
    **gap: var(--space-3);**    
**}**    
**.top-nav-header-alt .top-nav-logo { flex-shrink: 0; }**    
**.top-nav-header-alt .top-nav-logo span {**    
    **font-family: var(--font-family-heading);**    
    **font-size: var(--font-size-lg);**    
    **font-weight: var(--font-weight-bold);**    
    **color: var(--color-text-on-primary);**    
**}**    
**.top-nav-header-alt .top-nav-search {**    
    **flex-grow: 1;**    
    **display: flex;**    
    **justify-content: center;**    
**}**    
**.top-nav-header-alt .search-input-wrapper {**    
    **position: relative;**    
    **width: 100%;**    
    **max-width: 400px;**    
**}**    
**.top-nav-header-alt .search-input-wrapper i {**    
    **position: absolute;**    
    **left: var(--space-2);**    
    **top: 50%;**    
    **transform: translateY(-50%);**    
    **opacity: 0.7;**    
    **pointer-events: none;**    
    **color: var(--color-text-on-primary);**    
**}**    
**.top-nav-header-alt .search-input-wrapper input {**    
    **width: 100%;**    
    **padding: var(--space-1) var(--space-2) var(--space-1) 36px;**    
    **background-color: var(--color-background-interactive-hover);**    
    **color: var(--color-text-on-primary);**    
    **border: 1px solid var(--color-border-interactive);**    
    **border-radius: var(--radius-md);**    
**}**    
**.top-nav-header-alt .search-input-wrapper input::placeholder {**    
    **color: var(--color-text-on-primary);**    
    **opacity: 0.7;**    
**}**    
**.top-nav-header-alt .top-nav-actions {**    
    **display: flex;**    
    **align-items: center;**    
    **height: 100%;**    
**}**    
**.top-nav-header-alt .main-nav ul {**    
    **display: flex;**    
    **height: 100%;**    
    **list-style: none;**    
**}**    
**.top-nav-link-alt {**    
    **color: var(--color-text-on-primary);**    
    **opacity: 0.8;**    
    **display: flex;**    
    **align-items: center;**    
    **justify-content: center;**    
    **height: var(--size-height-top-nav);**    
    **width: var(--size-height-top-nav);**    
    **text-decoration: none;**    
**}**    
**.top-nav-link-alt:hover {**    
    **background-color: var(--color-background-interactive-hover);**    
    **opacity: 1;**    
**}**    
**.top-nav-link-alt[aria-current="page"] { /* Strict Flat: Replaced inset shadow with border-bottom */ border-bottom: 2px solid var(--color-core-white); opacity: 1; }**

**### **3. Sidebar Navigation****

* **Friendly Description: The vertical menu on the left side of the screen. It helps you navigate sections (like folders in email) and features a dedicated slot at the very top for a "Primary Action" button (like "Compose" or "Upload"). It often ends with a usage bar showing storage limits.**  
* **AI-Tuned Description:**  
  * **Component Type: Navigation Element**  
  * **Use Cases: File Directory, Email Folder List, Project Categories, Multi-page Form Navigation**  
  * **Integration Notes: Placed in a flex/grid container alongside the main content area. Width is typically fixed (e.g., 280px). *Critical:* Reserve the top area (`sidebar-header`) for the Sidebar Primary Action component.**  
  * **Configuration Options: Header Title, Primary Action Slot, List Items (Active/Inactive/Unread states), Usage Bar (Footer), Icons.**  
  * **When to Use: Use when a section has deep hierarchy or distinct sub-views that require persistent navigation.**  
* **Component Relationships:**  
  * **Often Used With: Sidebar Primary Action (Essential Pair), Standard Top Navigation, Indicators & Patterns (Usage Bar)**  
  * **Alternative To: Anchor Sidebar Navigation (use Anchor Sidebar for flat, long lists of preferences without hierarchy).**

**#### **HTML****

**<aside class="sidebar-nav">**    
    **<div class="sidebar-header">**    
        **<h1>Application Nav</h1>**    
    **</div>**    
    **<nav class="sidebar-nav-list">**    
        **<a href="#" class="folder-item" aria-selected="true">**    
            **<i class="ph-fill ph-files"></i>**    
            **<span>All Files</span>**    
        **</a>**    
        **<a href="#" class="folder-item is-unread">**    
            **<i class="ph-fill ph-folder"></i>**    
            **<span>Projects</span>**    
        **</a>**    
        **<a href="#" class="folder-item">**    
            **<i class="ph-fill ph-folder"></i>**    
            **<span>Photos</span>**    
        **</a>**    
        **<a href="#" class="folder-item">**    
            **<i class="ph-fill ph-trash"></i>**    
            **<span>Trash</span>**    
        **</a>**    
    **</nav>**    
    **<div class="sidebar-footer">**    
        **<div class="usage-label">Usage 9 GB / 10 GB (92%)</div>**    
        **<div class="usage-bar">**    
            **<div class="usage-bar-fill usage-bar-fill-danger" style="width: 92%;"></div>**    
        **</div>**    
    **</div>**    
**</aside>**

**#### **CSS****

**/* Note: Relies on tokens from GEM_09_Design_Tokens.md */**    
**.sidebar-nav {**    
    **background-color: var(--color-background-container);**    
    **border-right: 1px solid var(--color-border-neutral);**    
    **width: 280px;**    
    **padding: var(--space-3);**    
    **border-radius: var(--radius-lg);**    
**}**    
**.sidebar-header h1 {**    
    **color: var(--color-text-primary);**    
    **font-family: var(--font-family-heading);**    
    **font-size: var(--font-size-xl);**    
    **margin-bottom: var(--space-3);**    
**}**    
**.sidebar-nav-list {**    
    **display: flex;**    
    **flex-direction: column;**    
    **gap: 4px;**    
    **margin-bottom: var(--space-3);**    
**}**    
**.folder-item {**    
    **display: flex;**    
    **align-items: center;**    
    **gap: var(--space-1);**    
    **padding: 10px var(--space-1);**    
    **border-radius: var(--radius-md);**    
    **text-decoration: none;**    
    **color: var(--color-text-secondary);**    
    **font-weight: var(--font-weight-medium);**    
    **transition: background-color 150ms ease-out, color 150ms ease-out;**    
**}**    
**.folder-item i {**    
    **font-size: 20px;**    
    **color: currentColor; /* Icons match text color */**    
**}**    
**.folder-item:hover {**    
    **background-color: var(--color-background-page);**    
    **color: var(--color-text-primary);**    
**}**    
**.folder-item.is-unread span {**    
    **font-weight: var(--font-weight-bold);**    
**}**    
**.folder-item[aria-selected="true"] {**     
    **background-color: var(--color-background-selected);**     
    **color: var(--color-text-primary);**    
    **font-weight: var(--font-weight-bold);**     
**}**    
**.sidebar-footer {**    
    **border-top: 1px solid var(--color-border-neutral);**    
    **padding-top: var(--space-2);**    
**}**    
**.usage-label {**    
    **color: var(--color-text-secondary);**    
    **font-size: var(--font-size-sm);**    
    **margin-bottom: var(--space-1);**    
**}**

**### **4. Application Card Section (Full Grid System)****

**### **Friendly Description****

* **Friendly Description: A clean grid of clickable cards used to display a catalog of tools or apps. Each card has an icon and a label, making it easy to scan and launch different services. Sections can be stacked with dividers to create a categorized dashboard.**  
* **AI-Tuned Description:**  
  * **Component Type: Navigation / Layout Container**  
  * **Use Cases: Dashboard Home, App Launcher, Marketplace Listing, Feature Catalog**  
  * **Integration Notes: Container uses CSS Grid (`repeat(3, 1fr)`). Responsive behavior collapses columns on mobile. Cards use a pseudo-element border overlay on hover for flat design compliance. Supports `section-divider` for stacking multiple categories.**  
  * **Configuration Options: Section Title, Link Text, Card Icon (Phosphor), Card Label.**  
  * **When to Use: Use for "Hub" pages where the goal is to route the user to other independent tools or sections.**  
* **Component Relationships:**  
  * **Often Used With: Hero Banner, Standard Top Navigation**  
  * **Alternative To: Interactive Data Table (use Table when items need management/actions, use Cards when items are just for launching).**

**### **Full Component Code (CSS & HTML)****

**### **CSS****

**```**  
**/* --- SECTION HEADER --- */**  
**.section-header {**  
    **display: flex;**  
    **align-items: baseline;**  
    **justify-content: space-between;**  
    **margin-bottom: 16px; /* var(--space-2) */**  
    **margin-top: 32px;    /* var(--space-4) */**  
**}**  
**.section-title {**  
    **font-family: var(--font-family-heading, sans-serif);**  
    **font-weight: 700;**  
    **font-size: 20px; /* var(--font-size-xl) */**  
    **color: var(--color-core-neutral-800);**  
**}**  
**.section-link {**  
    **font-size: 13px; /* var(--font-size-sm) */**  
    **color: var(--color-brand-primary);**  
    **font-weight: 600;**  
    **text-decoration: none;**  
**}**  
**.section-link:hover {**  
    **text-decoration: underline;**  
**}**

**/* --- GRID CONTAINER --- */**  
**.app-card-grid {**  
    **display: grid;**  
    **grid-template-columns: repeat(3, 1fr); /* Standard 3-column layout */**  
    **gap: 24px;**  
**}**  
**@media (max-width: 768px) {**  
    **.app-card-grid { grid-template-columns: 1fr; }**  
**}**

**/* --- APP TILE (CARD) --- */**  
**.app-card {**  
    **background: var(--color-background-container);**  
    **border: 1px solid var(--color-border-neutral);**  
    **border-radius: 4px; /* Strict 4px radius */**  
    **padding: 24px;**  
    **text-align: center;**  
    **position: relative;**  
    **display: block;**  
    **text-decoration: none;**  
    **transition: all 0.1s ease-in-out;**  
    **cursor: pointer;**  
**}**

**/* Hover Interaction: Border Overlay */**  
**/* NOTE: Replaces old shadow/lift effects */**  
**.app-card:hover::before {**  
    **content: '';**  
    **position: absolute;**  
    **inset: -1px; /* Draws 2px border outside content box but inside layout */**  
    **border: 2px solid var(--color-brand-primary);**  
    **border-radius: 4px;**  
    **pointer-events: none;**  
**}**

**/* Content Layout */**  
**.app-card .content {**  
    **display: flex;**  
    **flex-direction: column;**  
    **align-items: center;**  
**}**

**/* Iconography */**  
**.app-card i {**  
    **font-size: 32px;**  
    **color: var(--color-brand-primary);**  
    **margin-bottom: 12px;**  
    **display: block;**  
**}**  
**.app-card svg {**  
    **width: 32px;**  
    **height: 32px;**  
    **color: var(--color-brand-primary);**  
    **margin-bottom: 12px;**  
    **display: block;**  
    **fill: currentColor;**  
**}**

**/* Label */**  
**.app-card span {**  
    **font-size: 14px;**  
    **font-weight: 600;**  
    **color: var(--color-text-primary);**  
**}**  
**```**

**### **HTML Structure****

**```**  
**<div class="application-section">**  
    **<!-- Header -->**  
    **<div class="section-header">**  
        **<h2 class="section-title">Quick Access</h2>**  
        **<a href="#" class="section-link">View All Apps</a>**  
    **</div>**

    **<!-- Grid -->**  
    **<div class="app-card-grid">**  
        **<!-- Item 1 -->**  
        **<a href="#" class="app-card">**  
            **<div class="content">**  
                **<i class="ph-fill ph-squares-four"></i>**  
                **<span>Web Apps</span>**  
            **</div>**  
        **</a>**  
        **<!-- Item 2 -->**  
        **<a href="#" class="app-card">**  
            **<div class="content">**  
                **<i class="ph-fill ph-globe-simple"></i>**  
                **<span>Domain Manager</span>**  
            **</div>**  
        **</a>**  
        **<!-- Item 3 -->**  
        **<a href="#" class="app-card">**  
            **<div class="content">**  
                **<i class="ph-fill ph-envelope"></i>**  
                **<span>Email Manager</span>**  
            **</div>**  
        **</a>**  
    **</div>**  
**</div>**  
**```**

**###** 

**### **5. Forms & Fields****

* **Friendly Description: The standard set of inputs for entering data. Beyond simple text boxes, this includes "Segmented Controls" (toggle buttons), "Toggle Switches" (on/off sliders), and password fields with visibility toggles. They ensure data entry is clear and error-free.**  
* **AI-Tuned Description:**  
  * **Component Type: Input Control**  
  * **Use Cases: Login Screens, Profile Editing, Settings Panels, Search Inputs**  
  * **Integration Notes: Must be wrapped in `.form-group` for proper spacing. Includes specialized classes: `.segmented-control` for multi-choice pills, `.toggle-switch` for boolean options, and `.password-wrapper` for masked inputs.**  
  * **Configuration Options: Input Type (Text, Email, Password, Segmented, Toggle), Placeholder, Label, Error State.**  
  * **When to Use: Use for any user input. *Prefer Segmented Controls over Dropdowns* for options with < 4 choices. *Prefer Toggles over Checkboxes* for settings that take immediate effect.**  
* **Component Relationships:**  
  * **Often Used With: Settings Row (Wrapper), Buttons (Submit)**  
  * **Alternative To: Universal Input Dialog (use Dialog for single-field inputs triggered by an action).**

**#### **HTML****

**<div class="form-group">**    
    **<label for="email-prev">Email Address</label>**    
    **<input type="email" id="email-prev" placeholder="you@example.com">**    
**</div>**

**<div class="form-group">**    
    **<label for="password-prev">Password</label>**    
    **<div class="password-wrapper">**    
        **<input type="password" id="password-prev" value="password123">**    
        **<button class="password-toggle-icon" aria-label="Show password" onclick="togglePassword(this)">**    
            **<i class="ph ph-eye"></i>**    
        **</button>**    
    **</div>**    
**</div>**

**#### **CSS****

**/* Note: Relies on tokens from GEM_09_Design_Tokens.md */**    
**.form-group {**    
    **display: flex;**    
    **flex-direction: column;**    
    **gap: var(--space-1);**    
    **margin-bottom: var(--space-2);**    
    **width: 300px;**    
**}**    
**.form-group label {**    
    **color: var(--color-text-primary);**    
    **font-weight: var(--font-weight-medium);**    
    **font-size: var(--font-size-sm);**    
**}**    
**.form-group input[type="email"],**    
**.form-group input[type="password"],**    
**.form-group input[type="text"],**    
**.form-group input[type="date"] {**    
    **background-color: var(--color-background-container);**    
    **border: 1px solid var(--color-border-interactive);**    
    **border-radius: var(--radius-md);**    
    **color: var(--color-text-primary);**    
    **padding: var(--space-1) var(--space-2);**    
    **font-size: var(--font-size-base);**    
    **font-family: var(--font-family-body);**    
    **/* Strict Flat: Removed box-shadow transition */** 

**transition: border-color 150ms ease-out; width: 100%;** 

**box-shadow: none; /* Strict Flat: Force removal */**    
       
**}**    
**.form-group input:focus-visible {**    
    **border-color: var(--color-brand-secondary);**    
    **box-shadow: none; /* Flat design compliance */**    
    **outline: 2px solid var(--color-brand-secondary);**    
    **outline-offset: 1px;**    
**}**    
**.password-wrapper {**    
    **position: relative;**    
    **display: flex;**    
**}**    
**.password-wrapper input {**    
    **flex-grow: 1;**    
    **padding-right: 36px;**    
**}**    
**.password-toggle-icon {**    
    **position: absolute;**    
    **right: 0;**    
    **top: 0;**    
    **bottom: 0;**    
    **padding: var(--space-1);**    
    **color: var(--color-text-secondary);**    
    **background: transparent;**    
    **border: none;**    
    **cursor: pointer;**    
    **font-size: 20px;**    
    **display: flex;**    
    **align-items: center;**    
**}**    
**.password-toggle-icon:hover {**    
    **color: var(--color-text-primary);**    
**}**

****6. Buttons****  

* **Friendly Description: The complete set of interactive buttons. This includes the main "Primary" button (brand color), "Secondary" buttons (outline), and "Icon-Only" buttons for tools. It also supports a special "Primary-Secondary" hybrid for less visual weight in toolbars.**  
* **AI-Tuned Description:**  
  * **Component Type: Interactive Element**  
  * **Use Cases: Form Submission, Dialog Actions, Toolbar Tools, Navigation Triggers**  
  * **Integration Notes: Primary buttons use the Brand Color. Secondary buttons use a transparent background with a border. All buttons support a `:disabled` and `loading` state.**  
  * **Configuration Options: Style Variant (Primary, Secondary, Primary-Secondary, Tertiary, Icon), Size (Default), Icon (Left/Right/Only), State (Active, Disabled, Loading).**  
  * **When to Use: Use `.btn-primary` for the single most important action. Use `.btn-secondary` for alternatives. Use `.btn-primary-secondary` in toolbars where the primary brand color might be too heavy.**  
* **Component Relationships:**  
  * **Often Used With: Forms & Fields, Modals, Toolbars**  
  * **Alternative To: Text Links (use Links for navigation, Buttons for actions).**

****HTML****

**```**

**<!-- Primary -->**  
**<button class="btn btn-primary">Primary</button>**

**<!-- Primary with Icon -->**  
**<button class="btn btn-primary">**  
    **<i class="ph-fill ph-plus-circle"></i>**  
    **<span>Primary</span>**  
**</button>**

**<!-- Secondary (Updated Style) -->**  
**<button class="btn btn-secondary">Secondary</button>**

**<!-- Tertiary -->**  
**<button class="btn btn-tertiary">Tertiary</button>**

**<!-- Icon-Only -->**  
**<button class="btn btn-icon" aria-label="Delete">**  
    **<i class="ph-fill ph-trash"></i>**  
**</button>**

**<!-- Disabled -->**  
**<button class="btn btn-primary" disabled>**  
    **<i class="ph-fill ph-plus-circle"></i>**  
    **<span>Disabled</span>**  
**</button>**

**<!-- Loading -->**  
**<button class="btn btn-primary" disabled>**  
    **<div class="loading-spinner"></div>**  
    **<span>Loading</span>**  
**</button>**  
**```**

****CSS****

**```**

**/* Note: Relies on tokens from GEM_09_Design_Tokens.md */**  
**.btn {**  
    **display: inline-flex;**  
    **align-items: center;**  
    **justify-content: center;**  
    **gap: var(--space-1);**  
    **font-family: var(--font-family-body);**  
    **font-weight: var(--font-weight-medium);**  
    **font-size: var(--font-size-base);**  
    **padding: 10px var(--space-2);**  
    **border-radius: var(--radius-md);**  
    **border: 2px solid transparent;**  
    **cursor: pointer;**  
    **transition: background-color 150ms ease-out, border-color 150ms ease-out,**  
                **color 150ms ease-out, opacity 150ms ease-out, transform 100ms ease-out;**  
    **text-decoration: none;**  
**}**  
**.btn:focus-visible {**  
    **outline: 2px solid var(--color-brand-secondary);**  
    **outline-offset: 2px;**  
**}**  
**.btn:active {**  
    **transform: scale(0.98);**  
**}**  
**.btn:disabled {**  
    **opacity: 0.5;**  
    **cursor: not-allowed;**  
    **transform: scale(1);**  
**}**  
**.btn-primary {**  
    **background-color: var(--color-brand-primary);**  
    **color: var(--color-text-on-primary);**  
    **border-color: var(--color-brand-primary);**  
**}**  
**.btn-primary:hover:not(:disabled) {**  
    **background-color: var(--color-core-charcoal);**  
    **border-color: var(--color-core-charcoal);**  
**}**

**/* UPDATED STYLES FOR .btn-secondary */**  
**.btn-secondary {**  
    **background-color: transparent;**  
    **color: var(--color-brand-primary);**  
    **border-color: var(--color-brand-primary);**  
**}**  
**.btn-secondary:hover:not(:disabled) {**  
    **background-color: var(--color-core-neutral-100);**  
**}**

**.btn-tertiary {**  
    **background-color: transparent;**  
    **color: var(--color-text-secondary);**  
    **border-color: transparent;**  
**}**  
**.btn-tertiary:hover:not(:disabled) {**  
    **background-color: var(--color-background-page);**  
    **color: var(--color-text-primary);**  
**}**  
**.btn-icon {**  
    **background-color: transparent;**  
    **color: var(--color-text-secondary);**  
    **border-color: transparent;**  
    **padding: var(--space-1);**  
    **font-size: 20px;**  
**}**  
**.btn-icon:hover:not(:disabled) {**  
    **background-color: var(--color-background-page);**  
    **color: var(--color-text-primary);**  
    **border-color: transparent;**  
**}**

**/* Loading Spinner */**  
**.loading-spinner {**  
    **width: 1.25rem;**  
    **height: 1.25rem;**  
    **border: 2px solid rgba(255, 255, 255, 0.3);**  
    **border-radius: var(--radius-full);**  
    **border-top-color: var(--color-core-white);**  
    **animation: spin 1s ease-in-out infinite;**  
**}**

**/* UPDATED SPINNER FOR .btn-secondary */**  
**.btn-secondary .loading-spinner {**  
    **border: 2px solid var(--color-core-neutral-200);**  
    **border-top-color: var(--color-brand-primary);**  
**}**  
**@keyframes spin {**  
  **to { transform: rotate(360deg); }**  
**}**  
**```**

**### **7. Overlays & Notifications****

* **Friendly Description: Temporary popup messages (Toasts) that appear at the bottom left to confirm actions like "File Saved." They are non-intrusive and disappear automatically.**  
* **AI-Tuned Description:**  
  * **Component Type: Feedback Indicator**  
  * **Use Cases: Success Confirmation, System Errors, Status Updates, undo actions**  
  * **Integration Notes: Fixed position (`bottom-left`). Requires JavaScript to handle the auto-dismiss timer (typically 3000ms) and animation classes (`fade-in-up`).**  
  * **Configuration Options: Message Text, Icon (Info, Check, Warning), Type (Success, Error), Duration.**  
  * **When to Use: Use for non-critical feedback that does not require user intervention. Do not use for critical errors that require a decision (use a Modal).**  
* **Component Relationships:**  
  * **Often Used With: Forms (post-submit feedback), Interactive Data Table (action confirmation)**  
  * **Alternative To: Browser Alert (Never use), Inline Validation (use for specific form field errors).**

**#### **HTML****

**<!-- Toast -->**    
**<div class="toast-container">**    
    **<div id="toast-demo" class="toast-content-wrapper">**    
        **<i class="ph-fill ph-info"></i>**    
        **<span>This is a toast notification.</span>**    
    **</div>**    
**</div>**

**#### **CSS****

**/* Note: Relies on tokens from GEM_09_Design_Tokens.md */**

**/* Toast */**    
**.toast-container {**    
    **position: fixed;**    
    **bottom: var(--space-3);**    
    **left: var(--space-3);**    
    **z-index: 50;**    
**}**    
**.toast-content-wrapper {**    
    **background-color: var(--color-background-container);**    
    **border: 2px solid var(--color-brand-secondary);**    
    **border-radius: var(--radius-md);**    
    **padding: var(--space-2);**    
    **display: flex;**    
    **align-items: center;**    
    **gap: var(--space-2);**    
    **box-shadow: none; /* Flat design compliance */**

**/* Added strong border for separation */** 

**border: 2px solid var(--color-brand-secondary);**     
**}**    
**.toast-content-wrapper i {**    
    **color: var(--color-brand-secondary);**    
    **font-size: 24px;**    
**}**    
**.toast-content-wrapper span {**    
    **color: var(--color-text-primary);**    
    **font-weight: var(--font-weight-medium);**    
**}**    
**.hidden { display: none !important; }**

**### **8. Indicators & Patterns****

* **Friendly Description: Visual helpers like Tooltips (for icon buttons) and Usage Bars (showing storage quotas). Usage Bars are critical in storage apps, using color (Green/Orange/Red) to indicate capacity health.**  
* **AI-Tuned Description:**  
  * **Component Type: Feedback Indicator / Data Display**  
  * **Use Cases: Explaining icon-only buttons (Tooltip), Showing quota consumption (Usage Bar), Displaying notification lists (List Items)**  
  * **Integration Notes: Tooltips require CSS positioning (`absolute` relative to parent wrapper). Usage bars require inline styles or JS to set the `width %`.**  
  * **Configuration Options: Tooltip Position, Usage Bar Color (Success, Warning, Danger), List Item State (Read/Unread/Selected).**  
  * **When to Use: Use Tooltips for any UI element that lacks a text label. Use Usage Bars for finite resources (e.g., Mailbox size).**  
* **Component Relationships:**  
  * **Often Used With: Sidebar Navigation (Usage Bar), Icon Buttons (Tooltips)**  
  * **Alternative To: N/A (Standalone utility patterns).**

**#### **HTML****

**<!-- Tooltip -->**

**<div class="tooltip-wrapper">**

**<button class="btn btn-icon" aria-label="Info">**

**<i class="ph-fill ph-question"></i>**

**</button>**

**<div class="tooltip-content">**

**This is a helpful tooltip.**

**</div>**

**</div>**

**<!-- Usage Bar -->**

**<div style="width: 300px;">**

**<div class="usage-label">9.2 GB / 10 GB (92%)</div>**

**<div class="usage-bar">**

**<div class="usage-bar-fill usage-bar-fill-danger" style="width: 92%;"></div>**

**</div>**

**</div>**

**<!-- List Item States -->**

**<div class="list">**

**<div class="list-item is-unread" aria-selected="true">Selected & Unread</div>**

**<div class="list-item" aria-selected="true">Selected (Read)</div>**

**<div class="list-item is-unread">Unread</div>**

**<div class="list-item">Standard (Read)</div>**

**</div>**

**#### **CSS****

**/* Note: Relies on tokens from GEM_09_Design_Tokens.md */**

**/* Tooltip /**

**.tooltip-wrapper {**

**position: relative;**

**display: inline-block;**

**}**

**.tooltip-content {**

**position: absolute;**

**bottom: calc(100% + var(--space-1));**

**left: 50%;**

**transform: translateX(-50%);**

**/ MODIFIED: Changed to light background per UX review /**

**background-color: var(--color-core-neutral-200);**

**/ MODIFIED: Changed to dark text per UX review /**

**color: var(--color-text-primary);**

**padding: var(--space-1) var(--space-2);**

**border-radius: var(--radius-md);**

**font-size: var(--font-size-sm);**

**font-weight: var(--font-weight-medium);**

**width: 200px;**

**text-align: center;**

**opacity: 0;**

**pointer-events: none;**

**transition: opacity 150ms ease-out;**

**transition-delay: 0ms;**

**z-index: 30;**

**}**

**.tooltip-wrapper:hover .tooltip-content,**

**.tooltip-wrapper:focus-within .tooltip-content {**

**opacity: 1;**

**transition-delay: 300ms;**

**}**

**.tooltip-content::after {**

**content: '';**

**position: absolute;**

**top: 100%;**

**left: 50%;**

**transform: translateX(-50%);**

**border-width: 6px;**

**border-style: solid;**

**/ MODIFIED: Changed arrow color to match background */**

**border-color: var(--color-core-neutral-200) transparent transparent transparent;**

**}**

**/* Usage Bar */**

**.usage-bar {**

**width: 100%;**

**height: 8px;**

**background-color: var(--color-core-neutral-200);**

**border-radius: var(--radius-full);**

**overflow: hidden;**

**}**

**.usage-bar-fill {**

**height: 100%;**

**border-radius: var(--radius-full);**

**transition: width 500ms ease-out;**

**}**

**.usage-bar-fill-danger {**

**background-color: var(--color-status-danger);**

**}**

**.usage-bar-fill-warning {**

**background-color: var(--color-status-warning);**

**}**

**.usage-bar-fill-secondary {**

**background-color: var(--color-brand-secondary);**

**}**

**/* List Item States */**

**.list {**

**display: flex;**

**flex-direction: column;**

**gap: 4px;**

**width: 300px;**

**}**

**.list-item {**

**padding: var(--space-2);**

**border-radius: var(--radius-md);**

**border: 1px solid var(--color-border-neutral);**

**background-color: var(--color-core-neutral-100);**

**color: var(--color-text-secondary);**

**transition: background-color 150ms ease-out, font-weight 150ms ease-out, color 150ms ease-out, border-color 150ms ease-out;**

**font-weight: var(--font-weight-regular);**

**}**

**.list-item:hover {**

**background-color: var(--color-core-neutral-200);**

**}**

**.is-unread {**

**background-color: var(--color-background-container);**

**color: var(--color-text-primary);**

**font-weight: var(--font-weight-bold);**

**}**

**[aria-selected="true"] {**

**background-color: var(--color-background-selected) !important;**

**border-color: var(--color-brand-secondary) !important;**

**color: var(--color-text-primary) !important;**

**font-weight: var(--font-weight-bold) !important;**

**}**

**### **9. Skeleton Loaders****

* **Friendly Description: Gray, pulsing shapes that mimic content while it loads. They prevent the layout from "jumping" when data appears, providing a smoother experience.**  
* **AI-Tuned Description:**  
  * **Component Type: Feedback Indicator**  
  * **Use Cases: Initial Page Load, Async Data Fetching, Card Loading, Table Loading**  
  * **Integration Notes: Use a CSS animation (`pulse`). The HTML structure should roughly match the content it replaces (e.g., `.skeleton-line` for text, `.skeleton-line-checkbox` for tables).**  
  * **Configuration Options: Size, Shape (Line, Circle, Block, Checkbox).**  
  * **When to Use: Always use during data fetching states (`isLoading`). Prefer over a generic spinning wheel for content areas.**  
* **Component Relationships:**  
  * **Often Used With: Application Card Section, Interactive Data Table**  
  * **Alternative To: Loading Spinner (use Spinner for button actions, Skeleton for content areas).**

**#### **HTML****

**<div class="skeleton-wrapper">**    
    **<div class="skeleton-line skeleton-loader"></div>**    
    **<div class="skeleton-line skeleton-line-short skeleton-loader"></div>**    
**</div>**

**#### **CSS****

**/* Note: Relies on tokens from GEM_09_Design_Tokens.md */**    
**@keyframes pulse {**    
  **50% { opacity: 0.5; }**    
**}**    
**.skeleton-loader {**    
    **background-color: var(--color-core-neutral-200);**    
    **border-radius: var(--radius-sm);**    
    **animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;**    
**}**    
**.skeleton-line {**    
    **height: 16px;**    
    **margin-bottom: var(--space-1);**    
    **width: 100%;**    
**}**    
**.skeleton-line-short {**    
    **width: 60%;**    
**}**    
**.skeleton-wrapper {**    
    **width: 300px;**    
**}**

**### **10. Hero Banner (Cinema Card Variant)****

**### **Friendly Description****

* **Friendly Description: A visually striking header for landing pages. It features a full-width background image with a "floating" white card for the title and message. It ensures text is readable regardless of the image behind it.**  
* **AI-Tuned Description:**  
  * **Component Type: Layout Container / Marketing Element**  
  * **Use Cases: Home Page, Product Landing Page, Campaign Header**  
  * **Integration Notes: Uses a background image container with an absolutely positioned content card. Ensures WCAG contrast compliance by avoiding text directly on images.**  
  * **Configuration Options: Background Image, Title, Description, Navigation Arrows (if carousel).**  
  * **When to Use: Use only for high-impact "Welcome" or "Feature" areas. Do not use on utility pages or functional dashboards.**  
* **Component Relationships:**  
  * **Often Used With: Application Card Section**  
  * **Alternative To: Simple Page Title (use Simple Title for functional pages).**

**### **Full Component Code (CSS & HTML)****

**### **CSS****

**```**  
**/* Hero Container */**  
**.hero-banner {**  
    **width: 100%;**   
    **height: 320px;**   
    **position: relative;**   
    **overflow: hidden;**   
    **border-radius: var(--radius-lg);**   
    **margin-bottom: 32px; /* var(--space-4) */**  
    **background-color: #111;**  
    **background-position: center;**  
    **background-size: cover;**  
    **background-repeat: no-repeat;**  
**}**

**/* Floating Solid Card */**  
**.hero-banner-content {**   
    **position: absolute;**   
    **bottom: 32px;**   
    **left: 32px;**   
    **z-index: 2;**   
    **width: auto;**   
    **max-width: 480px;**   
    **background-color: var(--color-core-white);**  
    **padding: 32px;**  
    **border-radius: var(--radius-lg);**  
**box-shadow: none; /* Strict Flat: Removed 0 4px 20px */ /* Added Border for separation */**   
**border: 1px solid var(--color-border-neutral);**   
**}**

**.hero-banner-content h1 {**   
    **font-family: var(--font-family-heading);**   
    **font-size: 32px;**   
    **font-weight: 700;**   
    **color: var(--color-core-black);**  
    **margin-bottom: 8px; /* var(--space-1) */**  
    **letter-spacing: -0.5px;**   
    **line-height: 1.2;**  
**}**  
**.hero-banner-content p {**   
    **color: var(--color-text-secondary);**  
    **font-size: 15px;**   
    **margin: 0;**   
**}**

**/* Internal Controls (Hidden until hover) */**  
**.hero-arrow {**  
    **position: absolute;**   
    **top: 50%;**   
    **transform: translateY(-50%);**  
    **width: 40px;**   
    **height: 40px;**   
    **display: flex;**   
    **align-items: center;**   
    **justify-content: center;**  
    **background: rgba(0,0,0,0.3);**   
    **color: white;**   
    **border-radius: 50%;**  
    **cursor: pointer;**   
    **z-index: 3;**   
    **transition: 0.2s;**   
    **opacity: 0;**   
    **font-size: 20px;**  
**}**  
**.hero-banner:hover .hero-arrow { opacity: 1; }**  
**.hero-arrow:hover { background: rgba(0,0,0,0.6); }**

**.hero-arrow.prev { left: 24px; }**  
**.hero-arrow.next { right: 24px; }**

**/* Indicators */**  
**.hero-indicators {**   
    **position: absolute;**   
    **bottom: 32px;**   
    **right: 32px;**   
    **display: flex;**   
    **gap: 8px;**   
    **z-index: 3;**   
**}**  
**.hero-dot {**   
    **width: 8px;**   
    **height: 8px;**   
    **border-radius: 50%;**   
    **background: rgba(255,255,255,0.4);**   
    **cursor: pointer;**   
    **transition: 0.2s;**   
**}**  
**.hero-dot.active {**   
    **background: white;**   
    **transform: scale(1.2);**   
**}**  
**```**

**### **HTML Structure****

**```**  
**<div class="hero-banner" style="background-image: url('path/to/image.jpg');">**  
    **<!-- Navigation -->**  
    **<div class="hero-arrow prev"><i class="ph ph-caret-left"></i></div>**  
    **<div class="hero-arrow next"><i class="ph ph-caret-right"></i></div>**  
      
    **<!-- Floating Card -->**  
    **<div class="hero-banner-content">**  
        **<h1>Manage Your Digital Presence</h1>**  
        **<p>Access all your tools in one place.</p>**  
    **</div>**  
      
    **<!-- Dots -->**  
    **<div class="hero-indicators">**  
        **<div class="hero-dot active"></div>**  
        **<div class="hero-dot"></div>**  
        **<div class="hero-dot"></div>**  
    **</div>**  
**</div>**  
**```**

**###** 

**### **11.  Accented Dropdown Menu****

**### **Friendly Description****

* **Friendly Description: A sophisticated dropdown for User Settings or Account actions. It features a colored vertical bar on the left side to highlight it, and supports headers and dividers to organize complex options.**  
* **AI-Tuned Description:**  
  * **Component Type: Navigation Element**  
  * **Use Cases: User Profile Menu, Complex Filter Actions, Bulk Actions Menu**  
  * **Integration Notes: Triggered by a click event (JS). Must close on outside click. Uses a pseudo-element for the colored accent bar.**  
  * **Configuration Options: Menu Items, Headers, Dividers, Icon/Text pairs.**  
  * **When to Use: Use for menus that contain mixed actions (navigation + functional) or hierarchical groups.**  
* **Component Relationships:**  
  * **Often Used With: Standard Top Navigation (Account Trigger)**  
  * **Alternative To: Selection Dropdown (use Selection Dropdown for picking a single value like Language/Domain).**

  **###** 

**### **Full Component Code (CSS & HTML)****

**### **CSS****

**```**  
**/* Container/Trigger Context */**  
**.relative {**  
    **position: relative;**  
    **display: inline-block;**  
**}**

**/* Dropdown Menu - Base State (Hidden) */**  
**.dropdown-menu-accent {**  
    **background-color: var(--color-core-white);**  
    **color: var(--color-text-primary);**  
    **position: absolute; /* Changed from relative to absolute for overlay */**  
    **top: 100%;**  
    **right: 0;**  
    **z-index: 50;**  
    **padding: 8px 0;**  
    **border-radius: var(--radius-md);**  
    **border: 1px solid var(--color-border-neutral);**  
    **box-shadow: none; /* Strict Flat: Removed Shadow */ /* Added Border for separation */**   
**border: 1px solid var(--color-border-neutral);**  
    **min-width: 240px;**  
    **display: none; /* Hidden by default for click interaction */**  
    **margin-top: 8px;**  
**}**

**/* Active State (Toggled by JS) */**  
**.dropdown-menu-accent.show {**  
    **display: block;**  
    **animation: fadeIn 0.1s ease-out;**  
**}**

**@keyframes fadeIn {**  
    **from { opacity: 0; transform: translateY(-4px); }**  
    **to { opacity: 1; transform: translateY(0); }**  
**}**

**/* Accent Bar (The signature feature) */**  
**.dropdown-menu-accent::before {**  
    **content: '';**  
    **position: absolute;**  
    **left: 0;**   
    **top: 12px;**   
    **bottom: 12px;**  
    **width: 4px;**  
    **background-color: var(--color-brand-primary);**  
    **border-radius: 0 2px 2px 0;**  
**}**

**/* Menu Items */**  
**.dropdown-item {**  
    **display: flex;**  
    **align-items: center;**  
    **gap: 16px; /* var(--space-2) */**  
    **padding: 8px 24px; /* var(--space-3) */**  
    **transition: background-color 0.1s;**  
    **text-decoration: none;**  
    **color: var(--color-text-primary);**  
    **font-size: 14px;**  
**}**  
**.dropdown-item:hover {**  
    **background-color: var(--color-core-neutral-100);**  
**}**  
**.dropdown-item i {**  
    **font-size: 18px;**  
    **color: var(--color-text-secondary);**  
    **width: 20px;**  
    **text-align: center;**  
**}**

**/* Dividers (New Standard) */**  
**.dropdown-divider {**  
    **height: 1px;**  
    **background-color: var(--color-border-neutral);**  
    **margin: 6px 0;**  
**}**

**/* Headers (New Standard) */**  
**.dropdown-header {**  
    **padding: 8px 24px 4px 24px;**  
    **font-size: 11px;**  
    **text-transform: uppercase;**  
    **letter-spacing: 0.5px;**  
    **color: var(--color-text-secondary);**  
    **font-weight: 600;**  
**}**  
**```**

**### **HTML Structure****

**```**  
**<div class="relative">**  
    **<!-- Trigger Button -->**  
    **<button class="nav-link-default" id="account-trigger">**  
        **<i class="ph ph-user"></i><span>Account</span>**  
    **</button>**

    **<!-- Dropdown Menu -->**  
    **<div class="dropdown-menu-accent" id="account-menu">**  
        **<!-- Group 1 -->**  
        **<div class="dropdown-header">User Settings</div>**  
        **<a href="#" class="dropdown-item">**  
            **<i class="ph ph-user"></i><span>Profile</span>**  
        **</a>**  
        **<a href="#" class="dropdown-item">**  
            **<i class="ph ph-credit-card"></i><span>Billing</span>**  
        **</a>**  
          
        **<!-- Divider -->**  
        **<div class="dropdown-divider"></div>**  
          
        **<!-- Group 2 -->**  
        **<a href="#" class="dropdown-item">**  
            **<i class="ph ph-sign-out"></i><span>Logout</span>**  
        **</a>**  
    **</div>**  
**</div>**

**<!-- Required JS Logic -->**  
**<script>**  
    **document.addEventListener('DOMContentLoaded', () => {**  
        **const trigger = document.getElementById('account-trigger');**  
        **const menu = document.getElementById('account-menu');**  
          
        **// Toggle Logic**  
        **trigger.addEventListener('click', (e) => {**  
            **e.stopPropagation();**  
            **menu.classList.toggle('show');**  
        **});**

        **// Close on Outside Click**  
        **document.addEventListener('click', (e) => {**  
            **if (!menu.contains(e.target)) {**  
                **menu.classList.remove('show');**  
            **}**  
        **});**  
    **});**  
**</script>**  
**```**

**###** 

****12. Application Tabs****  

* **Friendly Description: A row of text links used to switch views within a page, like "Mail Accounts" vs "Aliases". The active tab is highlighted with bold text and a colored underline.**  
* **AI-Tuned Description:**  
  * **Component Type: Navigation Element**  
  * **Use Cases: Settings Pages, Object Detail Views, Multi-step Wizards**  
  * **Integration Notes: Uses a flex container with border-bottom. The active class applies a specific border color to the active item to overlap the bottom border.**  
  * **Configuration Options: Tab Labels, Active State.**  
  * **When to Use: Use for switching context within a single page/object without navigating to a new URL.**  
* **Component Relationships:**  
  * **Often Used With: Settings Row, Object Inspector Modal, Interactive Data Table**  
  * **Alternative To: Sidebar Navigation (use Sidebar for high-level navigation, Tabs for local/page-level switching).**

****HTML****

**```**

**<div class="app-tabs">**  
    **<a href="#" class="active">Active Tab</a>**  
    **<a href="#">Inactive Tab</a>**  
    **<a href="#">Inactive Tab</a>**  
**</div>**  
**```**

*****     
  ****CSS****

**```**

**/* Note: Relies on tokens from GEM_09_Design_Tokens.md */**  
**.app-tabs {**  
    **display: flex;**  
    **gap: var(--space-3);**  
    **border-bottom: 2px solid var(--color-border-neutral);**  
    **margin-bottom: var(--space-3);**  
**}**  
**.app-tabs a {**  
    **padding: var(--space-1) 0;**  
    **margin-bottom: -2px; /* Pulls border up to overlap */**  
    **font-weight: var(--font-weight-medium);**  
    **color: var(--color-text-secondary);**  
    **border-bottom: 2px solid transparent;**  
    **transition: border-color 150ms ease-out, color 150ms ease-out;**  
**}**  
**.app-tabs a:hover {**  
    **color: var(--color-text-primary);**  
**}**  
**.app-tabs a.active {**  
    **color: var(--color-text-primary);**  
    **font-weight: var(--font-weight-semibold);**  
    **border-bottom-color: var(--color-brand-secondary);**  
**}**  
**```**

****13. Interactive Data Table (Hybrid)****

* **Friendly Description: A smart list for managing items like files or users. It is almost always paired with a Toolbar (Search + Bulk Actions). On desktop, action icons are visible; on mobile, they collapse into a menu.**  
* **AI-Tuned Description:**  
  * **Component Type: Data Display / Interactive Element**  
  * **Use Cases: File Manager, User List, Order History, Inventory Management**  
  * **Integration Notes: Requires a Toolbar above it containing Search and Bulk Action triggers. Table header logic swaps "Title" with "Bulk Actions" when checkboxes are selected. Responsive classes (`d-md-block`) toggle icon visibility.**  
  * **Configuration Options: Columns, Row Actions, Bulk Actions, Sortable Headers, Skeleton State.**  
  * **When to Use: Use for any homogenous list of objects that requires management (Edit/Delete/Move).**  
* **Component Relationships:**  
  * **Often Used With: Alternate Top Navigation (Search), Pagination, Universal Input Dialog**  
  * **Alternative To: Application Card Section (use Cards for visual browsing, Table for data management).**

****HTML & CSS:****

**```**  
**<div class="app-table-wrapper">**  
    **<table class="app-table">**  
        **<thead>**  
            **<tr>**  
                **<!-- Checkbox Column -->**  
                **<th style="width: 40px;">**  
                    **<input type="checkbox" id="selectAll" onclick="toggleBulkActions(this.checked)">**  
                **</th>**  
                  
                **<!-- Dynamic Header Cell -->**  
                **<th class="header-content-cell">**  
                    **<!-- State A: Default Title -->**  
                    **<div class="default-header-content" id="default-header">**  
                        **Item Name**  
                    **</div>**  
                    **<!-- State B: Bulk Actions (Hidden by default) -->**  
                    **<div class="actions-btns-wrap" id="bulk-header">**  
                        **<span class="text-secondary small me-2">Selected</span>**  
                        **<i class="ph ph-trash action-icon-persistent action-danger" title="Delete Selected"></i>**  
                        **<i class="ph ph-folder-simple-plus action-icon-persistent" title="Move"></i>**  
                    **</div>**  
                **</th>**  
                  
                **<th>Status</th>**  
                **<th style="text-align: right;">Actions</th>**  
            **</tr>**  
        **</thead>**  
        **<tbody>**  
            **<tr>**  
                **<td><input type="checkbox" class="row-checkbox"></td>**  
                **<td><i class="ph-fill ph-file"></i> File_Name.pdf</td>**  
                **<td>Active</td>**  
                **<td style="text-align: right;">**  
                    **<!-- Desktop Icons -->**  
                    **<div class="d-none d-md-block">**  
                        **<i class="ph ph-pencil-simple action-icon-persistent" title="Edit"></i>**  
                        **<i class="ph ph-trash action-icon-persistent action-danger" title="Delete"></i>**  
                    **</div>**  
                    **<!-- Mobile Kebab -->**  
                    **<div class="d-md-none">**  
                        **<i class="ph-fill ph-dots-three-vertical action-icon-persistent"></i>**  
                    **</div>**  
                **</td>**  
            **</tr>**  
        **</tbody>**  
    **</table>**  
**</div>**

**<style>**  
    **/* Table Styles */**  
    **.app-table-wrapper {**  
        **border: 1px solid var(--color-border-neutral);**  
        **border-radius: var(--radius-lg);**  
        **background: var(--color-background-container);**  
        **overflow: hidden;**  
    **}**  
    **.app-table { width: 100%; border-collapse: collapse; }**  
      
    **.app-table th {**   
        **background: var(--color-core-neutral-100);**   
        **text-transform: uppercase;**   
        **font-size: 12px;**   
        **color: var(--color-text-secondary);**   
        **padding: 12px 16px;**  
        **text-align: left;**  
    **}**  
      
    **.app-table td {**  
        **padding: 12px 16px;**  
        **border-bottom: 1px solid var(--color-border-neutral);**  
        **vertical-align: middle;**  
    **}**  
      
    **/* Action Icons */**  
    **.action-icon-persistent {**  
        **color: var(--color-text-secondary);**  
        **font-size: 20px;**  
        **padding: 6px;**  
        **border-radius: var(--radius-md);**  
        **cursor: pointer;**  
        **transition: all 0.2s;**  
        **margin-left: 4px;**  
    **}**  
    **.action-icon-persistent:hover {**  
        **background-color: var(--color-core-neutral-200);**  
        **color: var(--color-text-primary);**  
    **}**  
    **.action-icon-persistent.action-danger:hover {**  
        **background-color: #FEE2E2;**  
        **color: var(--color-core-status-danger);**  
    **}**  
      
    **/* Header Toggle Logic */**  
    **.actions-btns-wrap {**  
        **display: none;**   
        **align-items: center;**  
        **gap: 10px;**  
    **}**  
    **.actions-btns-wrap.visible { display: flex; }**  
    **.default-header-content.hidden { display: none; }**  
**</style>**  
**```**

****14. Sidebar Primary Action****

* **Friendly Description: A prominent, full-width button placed at the top of the Sidebar. It is the "Start Button" for the section, used for key actions like "Compose Email" or "Upload File."**  
* **AI-Tuned Description:**  
  * **Component Type: Interactive Element**  
  * **Use Cases: "Compose" in Webmail, "Upload" in Files, "New User" in Admin**  
  * **Integration Notes: Must be inserted into the `sidebar-nav` container, immediately following the header. Can be an `<a>` tag or `<button>`.**  
  * **Configuration Options: Label, Icon (Leading), Action Type (Modal Trigger vs Link).**  
  * **When to Use: Use only when there is a single, dominant action users perform in that specific section.**  
* **Component Relationships:**  
  * **Often Used With: Sidebar Navigation (Parent Container)**  
  * **Alternative To: Floating Action Button (FAB) - Note: Hostopia prefers this Sidebar Action over FABs.**

****HTML & CSS:****

**```**  
**<!-- Container Structure -->**  
**<div class="sidebar-header">**  
    **<!-- OPTION A: Button (e.g., Storage Upload) -->**  
    **<button class="btn btn-primary w-100">**  
        **<i class="ph-fill ph-cloud-arrow-up"></i> <span>Upload File</span>**  
    **</button>**

    **<!-- OPTION B: Anchor Link (e.g., Webmail Compose) -->**  
    **<!--**   
    **<a href="#compose" class="btn btn-primary w-100">**  
        **<i class="ph-fill ph-pencil-simple"></i> <span>Compose</span>**  
    **</a>**   
    **-->**  
**</div>**

**<style>**  
    **/* Required Sidebar CSS Context */**  
    **.sidebar-header {**  
        **margin-bottom: var(--space-2);**  
    **}**  
    **.btn-primary {**  
        **background-color: var(--color-brand-primary);**  
        **border-color: var(--color-brand-primary);**  
        **color: var(--color-text-on-primary);**  
        **width: 100%; /* Full Width */**  
        **display: inline-flex;**   
        **align-items: center;**   
        **justify-content: center;**   
        **gap: 8px;**  
        **padding: 8px 16px;**  
        **border-radius: var(--radius-md);**  
        **text-decoration: none;**  
        **font-weight: 500;**  
        **transition: background-color 150ms ease;**  
    **}**  
    **.btn-primary:hover {**  
        **background-color: var(--color-core-charcoal); /* or darker shade */**  
        **border-color: var(--color-core-charcoal);**  
        **color: var(--color-text-on-primary);**  
    **}**  
**</style>**  
**```**

****15. Universal Input Dialog****

* **Friendly Description: A simple pop-up window used to ask for a single piece of info, like naming a folder. It keeps focus on the task and avoids page reloads.**  
* **AI-Tuned Description:**  
  * **Component Type: Interactive Element (Modal)**  
  * **Use Cases: Rename Item, Create Folder, Add Label, Confirm Action with Note**  
  * **Integration Notes: Standard Bootstrap-like modal structure. Focus should be auto-placed in the input field on open.**  
  * **Configuration Options: Title, Description, Input Label, Confirm Button Label.**  
  * **When to Use: Use for quick, transactional inputs that don't warrant a full page.**  
* **Component Relationships:**  
  * **Often Used With: Interactive Data Table (Rename action)**  
  * **Alternative To: Inline Input (use Modal for cleaner mobile handling).**

****HTML & CSS:****

**```**  
**<!-- Modal Structure -->**  
**<div class="modal fade" id="inputDialog" tabindex="-1" aria-hidden="true">**  
    **<div class="modal-dialog modal-dialog-centered">**  
        **<div class="modal-content">**  
            **<div class="modal-header border-0 pb-0">**  
                **<h5 class="modal-title font-heading fw-bold" id="inputDialogTitle">Title</h5>**  
                **<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>**  
            **</div>**  
            **<div class="modal-body">**  
                **<p class="text-secondary small mb-3" id="inputDialogDesc">Description text goes here.</p>**  
                **<label class="form-label small fw-bold text-secondary" id="inputDialogLabel">Label</label>**  
                **<input type="text" class="form-control" id="inputDialogField">**  
            **</div>**  
            **<div class="modal-footer border-0 pt-0">**  
                **<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>**  
                **<button type="button" class="btn btn-primary" id="inputDialogAction">Action</button>**  
            **</div>**  
        **</div>**  
    **</div>**  
**</div>**

**<style>**  
    **/* Modal Styles */**  
    **.modal-content {**  
        **border-radius: var(--radius-lg);**  
        **border: 1px solid var(--color-border-neutral);**  
**box-shadow: none; /* Strict Flat */**  
    **}**  
    **.font-heading {**  
        **font-family: var(--font-family-heading);**  
    **}**  
    **.text-secondary {**  
        **color: var(--color-text-secondary) !important;**  
    **}**  
**</style>**  
**```**

****16. Breadcrumb Title**** 

* **Friendly Description: A navigation trail that doubles as the page title (e.g., "Files > Work > Projects"). It helps users navigate deep folder structures easily.**  
* **AI-Tuned Description:**  
  * **Component Type: Navigation Element**  
  * **Use Cases: Deep File Hierarchies, Help Center Categories, Multi-level Settings**  
  * **Integration Notes: Replaces the standard `H1`. The last item is the current page (Active) and uses the Heading Font (`Satoshi`). Previous items are links.**  
  * **Configuration Options: Path segments.**  
  * **When to Use: Mandatory for any view that is more than 2 levels deep in the hierarchy.**  
* **Component Relationships:**  
  * **Often Used With: Interactive Data Table**  
  * **Alternative To: Standard Page Title (use Breadcrumb when hierarchy exists, Standard Title when flat).**

****HTML & CSS:****

**```**  
**<nav aria-label="breadcrumb">**  
    **<ol class="breadcrumb-hostopia">**  
        **<li class="breadcrumb-item"><a href="#">Parent Level</a></li>**  
        **<li class="breadcrumb-item active" aria-current="page">Current Page Title</li>**  
    **</ol>**  
**</nav>**

**<style>**  
    **.breadcrumb-hostopia {**  
        **display: flex;**  
        **align-items: center;**  
        **font-size: var(--font-size-xl); /* 20px */**  
        **font-weight: 700;**  
        **font-family: var(--font-family-heading);**  
        **color: var(--color-text-primary);**  
        **list-style: none;**  
        **padding: 0; margin: 0;**  
    **}**  
    **.breadcrumb-hostopia li { display: flex; align-items: center; }**  
      
    **/* Separator */**  
    **.breadcrumb-hostopia li + li::before {**  
        **content: "/";**  
        **margin: 0 8px;**  
        **color: var(--color-text-secondary);**  
        **font-weight: 700;**  
    **}**  
      
    **/* Link Styles */**  
    **.breadcrumb-hostopia a {**  
        **color: var(--color-text-primary);**  
        **text-decoration: none;**  
        **opacity: 0.7;**  
        **transition: opacity 0.2s;**  
    **}**  
    **.breadcrumb-hostopia a:hover { opacity: 1; color: var(--color-brand-secondary); }**  
    **.breadcrumb-hostopia .active { opacity: 1; cursor: default; }**  
**</style>**  
**```**

****17. Object Inspector Modal**** 

* **Friendly Description: A "Split View" pop-up for seeing item details. The left side shows a preview (thumbnail), and the right side shows facts (metadata) and actions.**  
* **AI-Tuned Description:**  
  * **Component Type: Data Display / Interactive Element**  
  * **Use Cases: File Details, Ticket Preview, User Quick-View, Invoice Details**  
  * **Integration Notes: Large Modal size. Flexbox layout splits content 50/50 or 60/40. Responsive stacking on mobile.**  
  * **Configuration Options: Preview Content (Image/Icon), Metadata List, Primary Actions.**  
  * **When to Use: Use when users need to gather information to make a decision without losing context of the list.**  
* **Component Relationships:**  
  * **Often Used With: Interactive Data Table, Application Card Section**  
  * **Alternative To: Full Details Page (use Modal for speed/context).**

****HTML & CSS:****

**```**  
**<!-- Modal Structure -->**  
**<div class="modal fade" id="inspectorModal" tabindex="-1">**  
    **<div class="modal-dialog modal-lg modal-dialog-centered">**  
        **<div class="modal-content">**  
            **<div class="modal-header">**  
                **<h5 class="modal-title font-heading fw-bold">Item Name</h5>**  
                **<button type="button" class="btn-close" data-bs-dismiss="modal"></button>**  
            **</div>**  
            **<div class="modal-body d-flex flex-column flex-md-row gap-3">**  
                  
                **<!-- Left: Preview Pane -->**  
                **<div class="file-preview-pane p-4 text-center" style="flex: 1;">**  
                    **<div class="d-flex flex-column align-items-center">**  
                        **<i class="ph ph-image" style="font-size: 64px; color: var(--color-text-secondary);"></i>**  
                        **<span class="mt-2 text-secondary">Preview Content</span>**  
                    **</div>**  
                **</div>**  
                  
                **<!-- Right: Metadata & Actions -->**  
                **<div class="file-metadata-pane" style="min-width: 250px;">**  
                    **<h6 class="fw-bold mb-3">Details</h6>**  
                    **<div class="d-grid gap-2" style="grid-template-columns: 80px 1fr; font-size: 14px;">**  
                        **<div class="text-secondary">Property</div>**  
                        **<div class="fw-medium">Value</div>**  
                        **<div class="text-secondary">Owner</div>**  
                        **<div class="fw-medium">Me</div>**  
                    **</div>**  
                    **<hr class="my-3 text-secondary opacity-25">**  
                    **<button class="btn btn-primary w-100">Primary Action</button>**  
                **</div>**  
            **</div>**  
        **</div>**  
    **</div>**  
**</div>**

**<style>**  
    **.file-preview-pane {**  
        **background-color: var(--color-core-neutral-50);**  
        **border: 1px solid var(--color-border-neutral);**  
        **border-radius: var(--radius-lg);**  
        **display: flex; align-items: center; justify-content: center;**  
        **min-height: 200px;**  
    **}**  
**</style>**  
**```**

****18.  Share Dialog****

* **Friendly Description: A dedicated pop-up for sharing content. It uses tabs to separate "Public Link" (copy URL) from "Email Invite" (private access), preventing accidental over-sharing.**  
* **AI-Tuned Description:**  
  * **Component Type: Interactive Element (Modal)**  
  * **Use Cases: Sharing Files, Publishing Pages, Inviting Users**  
  * **Integration Notes: Tabbed interface inside the modal body. JS logic required to toggle between "Link" and "Email" views.**  
  * **Configuration Options: Permissions (View/Edit), Link Generation, Email Input.**  
  * **When to Use: Exclusive component for any "Share" or "Invite" action.**  
* **Component Relationships:**  
  * **Often Used With: Object Inspector Modal, Interactive Data Table**  
  * **Alternative To: N/A (Specialized component).**

****HTML & CSS:****

**```**  
**<div class="modal fade" id="shareModal" tabindex="-1">**  
    **<div class="modal-dialog modal-dialog-centered">**  
        **<div class="modal-content">**  
            **<div class="modal-header">**  
                **<h5 class="modal-title font-heading fw-bold">Share Item</h5>**  
                **<button type="button" class="btn-close" data-bs-dismiss="modal"></button>**  
            **</div>**  
            **<div class="modal-body">**  
                **<p class="text-secondary mb-3">Share a secure link or invite users.</p>**  
                  
                **<!-- Toggle Controls (JS needed to switch classes) -->**  
                **<div class="d-flex gap-2 mb-4 p-1 bg-light rounded">**  
                    **<button class="btn btn-primary flex-grow-1" id="tab-link">**  
                        **<i class="ph ph-link"></i> Copy Link**  
                    **</button>**  
                    **<button class="btn btn-secondary flex-grow-1 border-0 bg-transparent" id="tab-email">**  
                        **<i class="ph ph-envelope"></i> Email**  
                    **</button>**  
                **</div>**  
                  
                **<!-- Content Area -->**  
                **<div id="share-content-link">**  
                    **<label class="form-label small fw-bold text-secondary">PUBLIC LINK</label>**  
                    **<div class="input-group mb-3">**  
                        **<input type="text" class="form-control" value="[https://hostopia.com/s/](https://hostopia.com/s/)..." readonly>**  
                        **<button class="btn btn-secondary">Copy</button>**  
                    **</div>**  
                **</div>**  
            **</div>**  
        **</div>**  
    **</div>**  
**</div>**  
**```**

****19. Context Skeleton Window****

* **Friendly Description: A "fake" window frame used to preview designs. It wraps your content (like an email signature) in a mock browser or email client window so you can see how it looks in real life.**  
* **AI-Tuned Description:**  
  * **Component Type: Layout Container / Feedback Indicator**  
  * **Use Cases: Website Builder Preview, Email Signature Preview, Ad Preview**  
  * **Integration Notes: A container with a styled header that mimics a browser or app window. The content body is an `iframe` or isolated `div`.**  
  * **Configuration Options: Window Type (Browser, Email Client, Mobile Device).**  
  * **When to Use: Use in DIY tools to provide "What You See Is What You Get" (WYSIWYG) confidence.**  
* **Component Relationships:**  
  * **Often Used With: Website Builder Tools**  
  * **Alternative To: Raw Preview.**

**```**  
**<!-- Generic Context Skeleton (Email Variant shown) -->**  
**<div class="context-skeleton-window">**  
    **<div class="context-skeleton-header">**  
        **<!-- Example: Email Header Skeleton -->**  
        **<div class="flex gap-2 mb-2">**  
            **<div class="w-8 h-2 bg-gray-300 rounded"></div>**  
            **<div class="w-48 h-2 bg-gray-200 rounded"></div>**  
        **</div>**  
        **<div class="flex gap-2">**  
            **<div class="w-12 h-2 bg-gray-300 rounded"></div>**  
            **<div class="w-64 h-2 bg-gray-200 rounded"></div>**  
        **</div>**  
    **</div>**  
    **<div class="context-skeleton-body">**  
        **<div class="space-y-3">**  
             **<!-- Abstract Content Lines using Tailwind classes or existing skeleton classes -->**  
             **<div class="w-1/4 h-2 bg-gray-200 rounded"></div>**  
             **<div class="w-3/4 h-2 bg-gray-200 rounded"></div>**  
             **<div class="w-1/2 h-2 bg-gray-200 rounded"></div>**  
        **</div>**  
        **<!-- Slot for Preview Content -->**  
    **</div>**  
**</div>**  
**```**

**```**  
**.context-skeleton-window {**  
    **border: 1px solid var(--color-core-neutral-300);**  
    **border-radius: var(--radius-lg);**  
    **background-color: #FFFFFF;**  
    **overflow: hidden;**  
    **box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);**  
**}**  
**.context-skeleton-header {**  
    **background-color: var(--color-core-neutral-50);**  
    **border-bottom: 1px solid var(--color-core-neutral-200);**  
    **padding: 16px;**  
**}**  
**.context-skeleton-body {**  
    **padding: 24px 16px;**  
**}**  
**```**

****20. Anchor Sidebar Navigation****

* **Friendly Description: A simple, flat menu for settings. It uses "Group Headers" (Icon + Title) to visually organize a long list of text links, making it easy to scan without opening folders.**  
* **AI-Tuned Description:**  
  * **Component Type: Navigation Element**  
  * **Use Cases: Settings Panel, Preferences, Long-form Form Navigation**  
  * **Integration Notes: Fixed width. Items are grouped by `nav-group-header` (Text + Icon). Individual items are text-only to reduce visual noise.**  
  * **Configuration Options: Group Titles, Anchor Links.**  
  * **When to Use: Use for "Settings" or "Preferences" areas where flat scanning is more important than deep hierarchy.**  
* **Component Relationships:**  
  * **Often Used With: Settings Row, Application Tabs**  
  * **Alternative To: Sidebar Navigation (use Anchor Sidebar for flat lists).**

**### **2. HTML Structure (Generic)****

**```**  
**<nav class="sidebar-nav">**  
      
    **<!-- Section 1 -->**  
    **<div class="nav-group-header">**  
        **<i class="ph-fill ph-user-circle"></i> <!-- Icon goes here -->**  
        **<span>Section Title</span>**  
    **</div>**  
    **<div class="nav-items">**  
        **<a href="#" class="nav-item active">Current Page</a>**  
        **<a href="#" class="nav-item">Navigation Link</a>**  
        **<a href="#" class="nav-item">Navigation Link</a>**  
    **</div>**

    **<!-- Section 2 -->**  
    **<div class="nav-group-header">**  
        **<i class="ph-fill ph-gear"></i>**  
        **<span>Section Title</span>**  
    **</div>**  
    **<div class="nav-items">**  
        **<a href="#" class="nav-item">Navigation Link</a>**  
        **<a href="#" class="nav-item">Navigation Link</a>**  
    **</div>**

**</nav>**  
**```**

**### **3. CSS Definition (Generic)****

**```**  
**/* Container */**  
**.sidebar-nav {**  
    **width: 260px; /* Fixed width, consider 300px for German/Long-form languages */**  
    **background: var(--color-core-white);**  
    **border-right: 1px solid var(--color-core-neutral-200);**  
    **display: flex;**  
    **flex-direction: column;**  
    **overflow-y: auto;**  
    **padding-bottom: var(--space-4);**  
    **flex-shrink: 0;**  
**}**

**/* Headers (Visual Anchors) */**  
**.nav-group-header {**  
    **padding: 24px 16px 8px 16px;**  
    **display: flex;**  
    **align-items: center;**  
    **gap: var(--space-1);**  
    **color: var(--color-text-primary);**  
**}**

**.nav-group-header i {**  
    **font-size: 18px;**  
    **/* Use darker shade if brand color is too light */**  
    **color: var(--color-brand-secondary-dark, var(--color-brand-secondary));**   
**}**

**.nav-group-header span {**  
    **font-family: var(--font-family-heading);**  
    **font-size: 13px;**  
    **font-weight: 700;**  
    **text-transform: uppercase;**  
    **letter-spacing: 0.05em;**  
**}**

**/* Link Container */**  
**.nav-items {**  
    **display: flex;**  
    **flex-direction: column;**  
    **padding: 0 8px;**  
**}**

**/* Individual Links */**  
**.nav-item {**  
    **display: flex;**  
    **align-items: center;**  
    **padding: 8px 12px;**  
    **font-size: 13px;**  
    **color: var(--color-text-secondary);**  
    **text-decoration: none;**  
    **border-radius: var(--radius-md);**  
    **margin-bottom: 2px;**  
    **transition: all 150ms ease-out;**  
    **cursor: pointer;**  
    **line-height: 1.4;**  
**}**

**.nav-item:hover {**  
    **background-color: var(--color-core-neutral-100);**  
    **color: var(--color-text-primary);**  
**}**

**/* Active State (High Contrast Mandatory) */**  
**.nav-item.active {**  
    **background-color: var(--color-brand-secondary-light);**  
    **color: var(--color-text-primary); /* Forced Dark Text for Compliance */**  
    **font-weight: 600;**  
**}**

**/* Accessibility Focus */**  
**.nav-item:focus-visible {**  
    **outline: 2px solid var(--color-brand-secondary);**  
    **outline-offset: -2px;**  
**}**  
**```**

****21. Settings Row****

* **Friendly Description: The standard layout for configuration options. It places the label on the left and the control on the right. It supports advanced controls like Segmented Controls (Buttons) and Toggle Switches for clear decision making.**  
* **AI-Tuned Description:**  
  * **Component Type: Layout Container**  
  * **Use Cases: User Preferences, System Configurations, Feature Toggles**  
  * **Integration Notes: Grid layout (`240px 1fr`). Bottom border separates rows. Acts as a wrapper for Forms & Fields components (Segmented Control, Color Picker, Toggle).**  
  * **Configuration Options: Label, Helper Text, Input Control.**  
  * **When to Use: Mandatory for all "Settings" pages.**  
* **Component Relationships:**  
  * **Often Used With: Anchor Sidebar Navigation, Forms & Fields**  
  * **Alternative To: Custom Form Layouts (Settings Row enforces consistency).**

*** **Input Density Rules (Strict):****    
  *** **2 Options: MUST use Segmented Control (Pills).****    
  *** **Boolean (On/Off): MUST use Toggle Switch.****    
  *** **3-5 Options: PREFER Radio Group (Vertical) if space permits.****    
  *** **6+ Options: USE Select Dropdown.****

**### **Structure & Code****

**#### **HTML Structure****

**```**  
**<div class="settings-row">**  
    **<!-- Left Column: Context -->**  
    **<div class="settings-label-group">**  
        **<label class="settings-label">Setting Name</label>**  
        **<span class="settings-description">Optional explanation of the setting.</span>**  
    **</div>**  
      
    **<!-- Right Column: Control -->**  
    **<div class="settings-input-wrapper">**  
        **<!-- INSERT CONTROL HERE (Switch, Input, Segmented Control) -->**  
    **</div>**  
**</div>**  
**```**

**#### **CSS Definition****

**```**  
**/* Core Layout */**  
**.settings-row {**  
    **display: grid;**  
    **grid-template-columns: 240px 1fr; /* Fixed Label | Fluid Input */**  
    **gap: 32px; /* --space-4 */**  
    **padding: 16px 32px; /* --space-2 --space-4 */**  
    **border-bottom: 1px solid var(--color-core-neutral-100);**  
    **align-items: start;**  
**}**

**.settings-row:last-child {**  
    **border-bottom: none;**  
**}**

**/* Label Styling */**  
**.settings-label-group {**  
    **display: flex;**  
    **flex-direction: column;**  
    **gap: 4px;**  
    **padding-top: 8px; /* Optical alignment with inputs */**  
**}**

**.settings-label {**  
    **font-size: 14px;**  
    **font-weight: 600;**  
    **color: var(--color-core-neutral-900);**  
**}**

**.settings-description {**  
    **font-size: 13px;**  
    **color: var(--color-core-neutral-500);**  
    **line-height: 1.4;**  
**}**

**/* Responsive Collapse */**  
**@media (max-width: 768px) {**  
    **.settings-row {**  
        **grid-template-columns: 1fr;**  
        **gap: 8px;**  
    **}**  
**}**  
**```**

****22. Control Panel Login Pattern****

* **Friendly Description: A complete page template for login. It features a centered login card and a "Global Utility Bar" at the top for changing languages or checking status before logging in.**  
* **AI-Tuned Description:**  
  * **Component Type: Page Pattern**  
  * **Use Cases: Authentication, Password Reset, Gateway Screen**  
  * **Integration Notes: Full-page layout. Includes a Utility Bar (Top) and a Centered Card (Middle). Inputs use specific "Flat Design" focus states.**  
  * **Configuration Options: Background Color, Logo, Utility Links, Form Fields.**  
  * **When to Use: The default entry point for the application.**  
* **Component Relationships:**  
  * **Often Used With: Forms & Fields, Selection Dropdown (Language)**  
  * **Alternative To: Modal Login.**

**## **Generic Code Snippet (HTML/CSS)****

**### **CSS (Styles)****

**```**  
**/* Core Variables */**  
**:root {**  
  **--login-bg-page: #F9FAFB;**  
  **--login-bg-card: #FFFFFF;**  
  **--login-text-main: #25282A;**  
  **--login-text-sub: #6B7280;**  
  **--login-brand-color: #25282A;**  
  **--login-accent-color: #2CADB2;**  
  **--login-radius: 6px;**  
**}**

**/* 1. The Input Field */**  
**.form-input {**  
  **width: 100%;**  
  **padding: 10px 16px;**  
  **background: var(--login-bg-card);**  
  **border: 1px solid #D1D5DB;**  
  **border-radius: var(--login-radius);**  
  **color: var(--login-text-main);**  
  **font-size: 14px;**  
  **outline: none; /* Critical for Flat Design */**  
  **transition: all 0.15s ease-out;**  
**}**

**/* Focus State - Flat & Solid */**  
**.form-input:focus {**  
  **border-color: var(--login-accent-color);**  
  **box-shadow: 0 0 0 1px var(--login-accent-color); /* Simulates 2px border */**  
**}**

**/* Error State */**  
**.form-input.error {**  
  **border-color: #EF4444;**  
**}**

**/* 2. The Primary Button */**  
**.btn-primary {**  
  **width: 100%;**  
  **padding: 12px;**  
  **background: var(--login-brand-color);**  
  **color: #FFFFFF;**  
  **border: none;**  
  **border-radius: var(--login-radius);**  
  **font-weight: 600;**  
  **cursor: pointer;**  
  **transition: transform 0.1s;**  
**}**

**.btn-primary:hover { opacity: 0.9; }**  
**.btn-primary:active { transform: scale(0.98); } /* Tactile Click */**

**/* 3. The Pill Toggle */**  
**.toggle-wrapper { display: flex; align-items: center; gap: 8px; cursor: pointer; }**  
**.toggle-input { display: none; }**  
**.toggle-track {**  
  **width: 36px; height: 20px;**  
  **background: #E5E7EB;**  
  **border-radius: 99px;**  
  **position: relative;**  
  **transition: background 0.2s;**  
**}**  
**.toggle-track::after {**  
  **content: ''; position: absolute; top: 2px; left: 2px;**  
  **width: 14px; height: 14px; background: #FFF;**  
  **border-radius: 50%; transition: transform 0.2s;**  
  **box-shadow: 0 1px 2px rgba(0,0,0,0.2);**  
**}**  
**.toggle-input:checked + .toggle-track { background: var(--login-accent-color); }**  
**.toggle-input:checked + .toggle-track::after { transform: translateX(16px); }**  
**```**

**### **HTML Structure****

**```**  
**<div class="login-card">**  
  **<!-- Header -->**  
  **<div class="header">**  
    **<h1>Welcome back</h1>**  
  **</div>**

  **<!-- Form -->**  
  **<form>**  
    **<!-- Standard Input -->**  
    **<div class="group">**  
      **<label>Email</label>**  
      **<input type="text" class="form-input" placeholder="user@example.com">**  
    **</div>**

    **<!-- Toggle Row -->**  
    **<div class="row">**  
      **<label class="toggle-wrapper">**  
        **<input type="checkbox" class="toggle-input">**  
        **<div class="toggle-track"></div>**  
        **<span>Remember me</span>**  
      **</label>**  
    **</div>**

    **<!-- Action -->**  
    **<button class="btn-primary">Log In</button>**  
  **</form>**  
**</div>**  
**```**

**## **Component 23: Selection Dropdown****

* **Friendly Description: A specialized dropdown for picking a single option (like "English" or "My Domain"). It uses a checkmark to clearly show which item is currently active.**  
* **AI-Tuned Description:**  
  * **Component Type: Input Control / Navigation**  
  * **Use Cases: Language Picker, Domain Context Switcher, Currency Selector**  
  * **Integration Notes: Triggered by click. Active item receives `.active` class and visible Checkmark icon. No sidebar decoration.**  
  * **Configuration Options: Options List, Selected State.**  
  * **When to Use: Use for "One-of-Many" selection tasks in headers or toolbars.**  
* **Component Relationships:**  
  * **Often Used With: Control Panel Login Pattern, Top Navigation**  
  * **Alternative To: Accented Dropdown (use Selection for choosing a value).**

**### **Full Component Code (CSS & HTML)****

****CSS****

**```**  
**/* Container/Trigger Context */**  
**.relative {**  
    **position: relative;**  
    **display: inline-block;**  
**}**

**/* Dropdown Menu - Base State (Hidden) */**  
**.dropdown-menu-selection {**  
    **background-color: var(--color-core-white);**  
    **color: var(--color-text-primary);**  
    **position: absolute; /* Changed to absolute for overlay */**  
    **top: 100%;**  
    **right: 0;**  
    **z-index: 50;**  
    **padding: 8px 0;**  
    **border-radius: var(--radius-md);**  
    **border: 1px solid var(--color-border-neutral);**  
    **box-shadow: 0 4px 12px rgba(0,0,0,0.1);**  
    **min-width: 260px;**  
    **display: none; /* Hidden by default for click interaction */**  
    **margin-top: 8px;**  
**}**

**/* Active State (Toggled by JS) */**  
**.dropdown-menu-selection.show {**  
    **display: block;**  
    **animation: fadeIn 0.1s ease-out;**  
**}**

**@keyframes fadeIn {**  
    **from { opacity: 0; transform: translateY(-4px); }**  
    **to { opacity: 1; transform: translateY(0); }**  
**}**

**/* Selection Item */**  
**.dropdown-item-selection {**  
    **display: flex;**  
    **align-items: center;**  
    **justify-content: space-between; /* Pushes checkmark to right */**  
    **padding: 10px 24px;**  
    **transition: background-color 0.1s;**  
    **text-decoration: none;**  
    **color: var(--color-text-primary);**  
    **font-size: 14px;**  
**}**  
**.dropdown-item-selection:hover {**  
    **background-color: var(--color-core-neutral-100);**  
**}**

**/* Active State */**  
**.dropdown-item-selection.active {**  
    **font-weight: 600;**  
    **background-color: var(--color-core-neutral-50);**  
**}**  
**.dropdown-item-selection i.check {**  
    **opacity: 0;**  
    **color: var(--color-brand-primary);**  
    **font-size: 16px;**  
**}**  
**.dropdown-item-selection.active i.check {**  
    **opacity: 1;**  
**}**  
**```**

****HTML Structure****

**```**  
**<div class="relative">**  
    **<!-- Trigger Button -->**  
    **<button class="nav-link-default" id="domain-trigger">**  
        **<span>my-new-startup.com</span>**  
        **<i class="ph ph-caret-down"></i>**  
    **</button>**

    **<!-- Dropdown Menu -->**  
    **<div class="dropdown-menu-selection" id="domain-menu">**  
        **<div class="dropdown-header">Select Domain</div>**  
        **<!-- Active Item -->**  
        **<a href="#" class="dropdown-item-selection active">**  
            **<span>my-new-startup.com</span>**  
            **<i class="ph ph-check check"></i>**  
        **</a>**  
        **<!-- Inactive Item -->**  
        **<a href="#" class="dropdown-item-selection">**  
            **<span>shop.cool-gadgets.net</span>**  
            **<i class="ph ph-check check"></i>**  
        **</a>**  
    **</div>**  
**</div>**

**<!-- Required JS Logic -->**  
**<script>**  
    **document.addEventListener('DOMContentLoaded', () => {**  
        **const trigger = document.getElementById('domain-trigger');**  
        **const menu = document.getElementById('domain-menu');**  
          
        **// Toggle Logic**  
        **trigger.addEventListener('click', (e) => {**  
            **e.stopPropagation();**  
            **menu.classList.toggle('show');**  
        **});**

        **// Close on Outside Click**  
        **document.addEventListener('click', (e) => {**  
            **if (!menu.contains(e.target)) {**  
                **menu.classList.remove('show');**  
            **}**  
        **});**  
    **});**  
**</script>**  
**```**
