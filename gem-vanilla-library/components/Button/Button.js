/**
 * GEM Button Custom Element
 * Supports variants: primary, secondary, tertiary, icon
 */

class GemButton extends HTMLElement {
    constructor() {
        super();
        this._initialized = false;
    }

    static get observedAttributes() {
        return ['variant', 'loading', 'disabled', 'type'];
    }

    connectedCallback() {
        // Defer rendering to ensure children are parsed
        setTimeout(() => this.render(), 0);
    }

    attributeChangedCallback() {
        if (this._initialized) {
            this.render();
        }
    }

    render() {
        // Prevent double rendering if connectedCallback fires after attribute changes
        if (this._initialized && !this.hasAttribute('loading')) {
            // If we already rendered and we're not in a loading transition, 
            // we might not want to overwrite innerHTML again if it hasn't changed.
            // But for simplicity in this vanilla version, we'll just be careful.
        }

        const variant = this.getAttribute('variant') || 'primary';
        const isLoading = this.hasAttribute('loading');
        const isDisabled = this.hasAttribute('disabled') || isLoading;
        const type = this.getAttribute('type') || 'button';

        // IMPORTANT: We need to capture the ORIGINAL content only once
        if (!this._originalContent) {
            this._originalContent = this.innerHTML.trim();
        }

        this.innerHTML = `
            <button 
                type="${type}" 
                class="gem-btn gem-btn-${variant} ${isDisabled ? 'is-disabled' : ''}"
                ${isDisabled ? 'disabled' : ''}
            >
                ${isLoading ? `
                    <div class="gem-btn-spinner"></div>
                    ${variant !== 'icon' ? `<span>Loading...</span>` : ''}
                ` : this._originalContent}
            </button>
        `;

        this._initialized = true;
    }
}

// Register element
if (!customElements.get('gem-button')) {
    customElements.define('gem-button', GemButton);
}
