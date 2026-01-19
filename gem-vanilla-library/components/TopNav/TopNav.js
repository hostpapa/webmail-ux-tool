/**
 * GEM TopNav Custom Elements
 */

class GemTopNav extends HTMLElement {
    static get observedAttributes() {
        return ['active'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'active' && oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const activeItem = this.getAttribute('active') || 'Mail';
        const base = this.getAttribute('base') || '.';

        this.innerHTML = `
            <header class="gem-topnav">
                <div class="gem-topnav-container">
                    <gem-topnav-logo href="${base}/index.html">Hostopia</gem-topnav-logo>
                    
                    <gem-topnav-search placeholder="Search mail..."></gem-topnav-search>
                    
                    <gem-topnav-actions>
                        <gem-topnav-link href="${base}/mail/main.html" icon="envelope-simple" title="Mail" ${activeItem === 'Mail' ? 'active' : ''}></gem-topnav-link>
                        <gem-topnav-link href="${base}/calendar/main.html" icon="calendar" title="Calendar" ${activeItem === 'Calendar' ? 'active' : ''}></gem-topnav-link>
                        <gem-topnav-link href="${base}/contacts/main.html" icon="users" title="Contacts" ${activeItem === 'Contacts' ? 'active' : ''}></gem-topnav-link>
                        <gem-topnav-link href="${base}/tasks/main.html" icon="check-square" title="Tasks" ${activeItem === 'Tasks' ? 'active' : ''}></gem-topnav-link>
                        <gem-topnav-separator></gem-topnav-separator>
                        <gem-topnav-profile name="John Doe" email="john.doe@example.com" settings-href="${base}/preferences/connected-accounts.html"></gem-topnav-profile>
                    </gem-topnav-actions>
                </div>
            </header>
        `;
    }
}

class GemTopNavLogo extends HTMLElement {
    connectedCallback() {
        const href = this.getAttribute('href') || '#';
        const text = this.textContent.trim();

        this.innerHTML = `
            <a href="${href}" class="gem-topnav-logo">
                <span class="gem-topnav-logo-text">${text}</span>
            </a>
        `;
    }
}

class GemTopNavSearch extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        const placeholder = this.getAttribute('placeholder') || 'Search mail, contacts, events...';

        this.innerHTML = `
            <div class="gem-topnav-search">
                <div class="gem-topnav-search-input-wrapper">
                    <span class="gem-topnav-search-icon"><i class="ph ph-magnifying-glass"></i></span>
                    <input type="text" class="gem-topnav-search-input" placeholder="${placeholder}">
                    <button class="gem-topnav-advanced-toggle" aria-label="Toggle Advanced Search">
                        <i class="ph ph-sliders-horizontal"></i>
                    </button>
                </div>

                <div class="gem-topnav-advanced-panel">
                    <div class="gem-form-group">
                        <label class="gem-form-label">From</label>
                        <input type="text" class="gem-form-input" placeholder="Sender name or email">
                    </div>
                    <div class="gem-form-group">
                        <label class="gem-form-label">To</label>
                        <input type="text" class="gem-form-input" placeholder="Recipient">
                    </div>
                    <div class="gem-form-group gem-form-group-full">
                        <label class="gem-form-label">Subject</label>
                        <input type="text" class="gem-form-input" placeholder="Contains words...">
                    </div>
                    <div class="gem-form-group">
                        <label class="gem-form-label">Date Range</label>
                        <select class="gem-form-select">
                            <option>Any time</option>
                            <option>Last 7 days</option>
                            <option>Last 30 days</option>
                            <option>Custom range...</option>
                        </select>
                    </div>
                    <div class="gem-form-group">
                        <label class="gem-form-label">Folder</label>
                        <select class="gem-form-select">
                            <option>All Folders</option>
                            <option>Inbox</option>
                            <option>Sent</option>
                            <option>Drafts</option>
                        </select>
                    </div>
                    <div class="gem-panel-actions">
                        <button class="gem-btn gem-btn-secondary gem-advanced-cancel">Cancel</button>
                        <button class="gem-btn gem-btn-primary">Search</button>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const toggle = this.querySelector('.gem-topnav-advanced-toggle');
        const panel = this.querySelector('.gem-topnav-advanced-panel');
        const cancelBtn = this.querySelector('.gem-advanced-cancel');

        if (toggle && panel) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = panel.classList.toggle('is-open');
                toggle.classList.toggle('is-active', isOpen);
            });

            // Prevent clicks inside panel from closing it if we added a document listener
            panel.addEventListener('click', (e) => e.stopPropagation());
        }

        if (cancelBtn && panel) {
            cancelBtn.addEventListener('click', () => {
                panel.classList.remove('is-open');
                toggle.classList.remove('is-active');
            });
        }

        // Close panel when clicking outside
        document.addEventListener('click', () => {
            if (panel && panel.classList.contains('is-open')) {
                panel.classList.remove('is-open');
                toggle.classList.remove('is-active');
            }
        });
    }
}

class GemTopNavActions extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            const content = this.innerHTML;
            this.innerHTML = `<div class="gem-topnav-actions">${content}</div>`;
        }, 0);
    }
}

class GemTopNavLink extends HTMLElement {
    connectedCallback() {
        const href = this.getAttribute('href') || '#';
        const icon = this.getAttribute('icon');
        const isActive = this.hasAttribute('active');
        const title = this.getAttribute('title') || '';
        const iconWeight = isActive ? 'fill' : 'regular';

        this.innerHTML = `
            <a href="${href}" class="gem-topnav-link ${isActive ? 'is-active' : ''}" title="${title}">
                ${icon ? `<i class="ph${iconWeight === 'fill' ? '-fill' : ''} ph-${icon}"></i>` : this.textContent}
            </a>
        `;
    }
}

class GemTopNavSeparator extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="gem-topnav-separator"></div>`;
    }
}

class GemTopNavProfile extends HTMLElement {
    connectedCallback() {
        this.render();
        this.setupEventListeners();
    }

    render() {
        const name = this.getAttribute('name') || 'John Doe';
        const email = this.getAttribute('email') || 'john.doe@example.com';
        const settingsHref = this.getAttribute('settings-href') || '#settings';

        this.innerHTML = `
            <div class="gem-topnav-profile">
                <button class="gem-topnav-profile-trigger">
                    <i class="ph ph-user-circle" style="font-size: 28px;"></i>
                    <i class="ph ph-caret-down" style="font-size: 14px;"></i>
                </button>

                <div class="gem-topnav-profile-menu">
                    <div class="gem-menu-header">
                        <span class="gem-user-name">${name}</span>
                        <span class="gem-user-email">${email}</span>
                    </div>
                    <a href="${settingsHref}" class="gem-menu-item"><i class="ph ph-gear"></i> Settings</a>
                    <a href="#support" class="gem-menu-item"><i class="ph ph-life-buoy"></i> Support</a>
                    <a href="#logout" class="gem-menu-item gem-menu-item-logout"><i class="ph-fill ph-sign-out"></i> Logout</a>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const trigger = this.querySelector('.gem-topnav-profile-trigger');
        const menu = this.querySelector('.gem-topnav-profile-menu');

        if (trigger && menu) {
            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = menu.classList.toggle('is-open');
                trigger.classList.toggle('is-active', isOpen);
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', () => {
            if (menu && menu.classList.contains('is-open')) {
                menu.classList.remove('is-open');
                trigger.classList.remove('is-active');
            }
        });
    }
}

// Register elements
if (!customElements.get('gem-topnav')) customElements.define('gem-topnav', GemTopNav);
if (!customElements.get('gem-topnav-logo')) customElements.define('gem-topnav-logo', GemTopNavLogo);
if (!customElements.get('gem-topnav-search')) customElements.define('gem-topnav-search', GemTopNavSearch);
if (!customElements.get('gem-topnav-actions')) customElements.define('gem-topnav-actions', GemTopNavActions);
if (!customElements.get('gem-topnav-link')) customElements.define('gem-topnav-link', GemTopNavLink);
if (!customElements.get('gem-topnav-separator')) customElements.define('gem-topnav-separator', GemTopNavSeparator);
if (!customElements.get('gem-topnav-profile')) customElements.define('gem-topnav-profile', GemTopNavProfile);
