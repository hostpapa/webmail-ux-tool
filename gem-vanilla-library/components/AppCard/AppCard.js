class GemAppCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const icon = this.getAttribute('icon');
        const label = this.getAttribute('label');
        const href = this.getAttribute('href') || '#';
        const brand = this.getAttribute('brand');

        this.innerHTML = `
            <a href="${href}" class="gem-app-card" ${brand ? `brand="${brand}"` : ''}>
                ${icon ? `<i class="ph-fill ph-${icon}"></i>` : ''}
                <span>${label || ''}</span>
            </a>
        `;
    }
}

class GemAppCardGrid extends HTMLElement {
    connectedCallback() {
        this.classList.add('gem-app-card-grid');
    }
}

customElements.define('gem-app-card', GemAppCard);
customElements.define('gem-app-card-grid', GemAppCardGrid);
