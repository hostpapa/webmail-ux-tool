class GemCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const title = this.getAttribute('title');
        const subtitle = this.getAttribute('subtitle');
        const hasFooter = this.querySelector('[slot="footer"]');
        const hasHeader = title || subtitle || this.querySelector('[slot="header"]');

        this.classList.add('gem-card');

        // Preserve original content before clearing for wrap
        const content = Array.from(this.childNodes);
        this.innerHTML = '';

        if (hasHeader) {
            const header = document.createElement('div');
            header.className = 'gem-card-header';

            const headerSlot = this.querySelector('[slot="header"]');
            if (headerSlot) {
                header.appendChild(headerSlot);
            } else {
                if (title) {
                    const h = document.createElement('h2');
                    h.className = 'gem-card-title';
                    h.textContent = title;
                    header.appendChild(h);
                }
                if (subtitle) {
                    const p = document.createElement('p');
                    p.className = 'gem-card-subtitle';
                    p.textContent = subtitle;
                    header.appendChild(p);
                }
            }
            this.appendChild(header);
        }

        const body = document.createElement('div');
        body.className = 'gem-card-content';

        // Append all nodes except footer slot
        content.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE && node.getAttribute('slot') === 'footer') return;
            if (node.nodeType === Node.ELEMENT_NODE && node.getAttribute('slot') === 'header') return;
            body.appendChild(node);
        });

        this.appendChild(body);

        if (hasFooter) {
            const footer = document.createElement('div');
            footer.className = 'gem-card-footer';
            const footerSlot = content.find(n => n.nodeType === Node.ELEMENT_NODE && n.getAttribute('slot') === 'footer');
            footer.appendChild(footerSlot);
            this.appendChild(footer);
        }
    }
}

customElements.define('gem-card', GemCard);
