class GemSettingsRow extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const label = this.getAttribute('label');
        const description = this.getAttribute('description');

        const content = Array.from(this.childNodes);
        this.innerHTML = '';
        this.classList.add('gem-settings-row');

        const info = document.createElement('div');
        info.className = 'gem-settings-info';

        if (label) {
            const lbl = document.createElement('div');
            lbl.className = 'gem-settings-label';
            lbl.textContent = label;
            info.appendChild(lbl);
        }

        if (description) {
            const desc = document.createElement('div');
            desc.className = 'gem-settings-description';
            desc.textContent = description;
            info.appendChild(desc);
        }

        this.appendChild(info);

        const control = document.createElement('div');
        control.className = 'gem-settings-control';

        content.forEach(node => control.appendChild(node));

        this.appendChild(control);
    }
}

customElements.define('gem-settings-row', GemSettingsRow);
