/**
 * GEM Sidebar Custom Elements
 * Optimized for plain HTML environments.
 */

class GemSidebarItem extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const href = this.getAttribute('href') || '#';
        const isActive = this.hasAttribute('active');
        const icon = this.getAttribute('icon');
        const content = this.textContent.trim();

        // Clear and rebuild to avoid duplicate rendering if connectedCallback fires twice
        this.innerHTML = `
            <a href="${href}" class="gem-sidebar-item ${isActive ? 'is-selected' : ''}">
                ${icon ? `<i class="ph ${icon}"></i>` : ''}
                <span>${content}</span>
            </a>
        `;
    }
}

class GemSidebarSection extends HTMLElement {
    connectedCallback() {
        // We defer rendering to ensure children are parsed
        setTimeout(() => this.render(), 0);
    }

    render() {
        const title = this.getAttribute('title');
        const icon = this.getAttribute('icon');

        // Items are already rendered by GemSidebarItem, we just need to wrap them
        const items = Array.from(this.children)
            .filter(child => child.tagName.toLowerCase() === 'gem-sidebar-item')
            .map(item => item.outerHTML)
            .join('');

        this.innerHTML = `
            <div class="gem-sidebar-section">
                <div class="gem-sidebar-section-header">
                    ${icon ? `<span class="gem-sidebar-section-icon"><i class="ph-fill ${icon}"></i></span>` : ''}
                    <span class="gem-sidebar-section-text">${title}</span>
                </div>
                <nav class="gem-sidebar-nav">
                    ${items}
                </nav>
            </div>
        `;
    }
}

class GemSidebar extends HTMLElement {
    connectedCallback() {
        setTimeout(() => this.render(), 0);
    }

    render() {
        const title = this.getAttribute('title');
        // Capture everything that isn't the header we're about to create
        const content = Array.from(this.children)
            .map(child => child.outerHTML)
            .join('');

        this.innerHTML = `
            <aside class="gem-sidebar">
                ${title ? `
                <div class="gem-sidebar-header">
                    <h1>${title}</h1>
                </div>
                ` : ''}
                <div class="gem-sidebar-content">
                    ${content}
                </div>
            </aside>
        `;
    }
}

class GemSidebarUsage extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const used = this.getAttribute('used');
        const total = this.getAttribute('total');
        const unit = this.getAttribute('unit') || 'GB';
        const percentage = Math.min((used / total) * 100, 100);
        const isDanger = (used / total) >= 0.9;

        this.innerHTML = `
            <div class="gem-sidebar-footer">
                <div class="gem-usage-label">Usage ${used} ${unit} / ${total} ${unit} (${Math.round(percentage)}%)</div>
                <div class="gem-usage-bar">
                    <div
                        class="gem-usage-bar-fill ${isDanger ? 'gem-usage-bar-fill-danger' : ''}"
                        style="width: ${percentage}%"
                    ></div>
                </div>
            </div>
        `;
    }
}

// Register elements
if (!customElements.get('gem-sidebar')) {
    customElements.define('gem-sidebar', GemSidebar);
}
if (!customElements.get('gem-sidebar-item')) {
    customElements.define('gem-sidebar-item', GemSidebarItem);
}
if (!customElements.get('gem-sidebar-section')) {
    customElements.define('gem-sidebar-section', GemSidebarSection);
}
if (!customElements.get('gem-sidebar-usage')) {
    customElements.define('gem-sidebar-usage', GemSidebarUsage);
}
