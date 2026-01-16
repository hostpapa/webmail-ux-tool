# Hostopia GEM React Component Library

This repository contains the official Hostopia UX component library, ported to strict React + CSS Modules. It is designed to be a "drop-in" resource for building compliant interfaces.

## 🛠 Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite 5 (Compatible with Node 20.17+)
- **Styling:** CSS Modules + Global CSS Variables
- **Icons:** @phosphor-icons/react

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Showcase App
This launches the "Kitchen Sink" interactive documentation.
```bash
npm run dev
```

## 📦 Component Usage

### Global Tokens (Critical)
You must import the design tokens at the root of your application (`main.jsx` or `App.jsx`) for components to render correctly.
```javascript
import './styles/design-tokens.css';
```

### 1. Buttons
```javascript
import { Button } from './components';

<Button variant="primary">Save Changes</Button>
<Button variant="secondary" isLoading>Exporting...</Button>
```

### 2. Top Navigation (Compound Component)
```javascript
import { TopNav } from './components';

<TopNav>
  <TopNav.Logo>My Brand</TopNav.Logo>
  <TopNav.Links>
    <TopNav.Link isActive>Dashboard</TopNav.Link>
  </TopNav.Links>
</TopNav>
```

### 3. Sidebar
```javascript
import { Sidebar } from './components';

<Sidebar>
  <Sidebar.Header>Nav</Sidebar.Header>
  <Sidebar.Nav>
    <Sidebar.Item isSelected>Files</Sidebar.Item>
  </Sidebar.Nav>
  <Sidebar.Footer>
    <Sidebar.Usage used={9} total={10} />
  </Sidebar.Footer>
</Sidebar>
```

### 4. Forms
```javascript
import { FormGroup, Input } from './components';

<FormGroup label="Email">
  <Input type="email" />
</FormGroup>
```

## 🎨 Design Systems Handling
- **Strict Flat Design:** All shadows have been removed. Depth is indicated by `1px` borders and subtle color shifts (`--color-core-neutral-100`).
- **CSS Modules:** Each component (e.g., `TopNav`) has a corresponding `TopNav.module.css` file that scopes its styles.
- **Tokens:** All colors and spacing use `var(--color-...)` defined in `design-tokens.css`.
