class GemModal extends HTMLElement {
    constructor() {
        super();
        this._isOpen = false;
        this._initialChildren = [];
    }

    connectedCallback() {
        // Capture children before rendering
        this._initialChildren = Array.from(this.childNodes);
        this.render();
        this.setupEventListeners();
        this.updateVisibility();
    }

    static get observedAttributes() {
        return ['open', 'title'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'open') {
            this._isOpen = newValue !== null;
            this.updateVisibility();
        }
        if (name === 'title' && this.querySelector('.gem-modal-title')) {
            this.querySelector('.gem-modal-title').textContent = newValue;
        }
    }

    updateVisibility() {
        const overlay = this.querySelector('.gem-modal-overlay');
        if (overlay) {
            if (this._isOpen) {
                overlay.classList.add('is-open');
                this.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                overlay.classList.remove('is-open');
                this.style.display = 'none';
                document.body.style.overflow = '';
            }
        } else {
            // If not rendered yet, just set display
            this.style.display = this._isOpen ? 'block' : 'none';
        }
    }

    render() {
        const title = this.getAttribute('title') || '';

        this.innerHTML = `
            <div class="gem-modal-overlay">
                <div class="gem-modal" role="dialog" aria-modal="true" onclick="event.stopPropagation()">
                    <div class="gem-modal-header">
                        <h2 class="gem-modal-title">${title}</h2>
                        <button class="gem-modal-close" aria-label="Close modal">
                            <i class="ph ph-x"></i>
                        </button>
                    </div>
                    <div class="gem-modal-body"></div>
                    <div class="gem-modal-footer"></div>
                </div>
            </div>
        `;

        const body = this.querySelector('.gem-modal-body');
        const footer = this.querySelector('.gem-modal-footer');

        this._initialChildren.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE && node.getAttribute('slot') === 'footer') {
                footer.appendChild(node);
            } else {
                body.appendChild(node);
            }
        });

        if (footer.childNodes.length === 0) {
            footer.style.display = 'none';
        }
    }

    setupEventListeners() {
        const closeBtn = this.querySelector('.gem-modal-close');
        const overlay = this.querySelector('.gem-modal-overlay');

        if (closeBtn) closeBtn.onclick = () => this.close();
        if (overlay) overlay.onclick = () => this.close();

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.hasAttribute('open')) {
                this.close();
            }
        });
    }

    open() { this.setAttribute('open', ''); }
    close() { this.removeAttribute('open'); }
}

customElements.define('gem-modal', GemModal);
