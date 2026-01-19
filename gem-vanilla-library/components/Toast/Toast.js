class GemToast {
    static container = null;

    static init() {
        if (!GemToast.container) {
            GemToast.container = document.createElement('div');
            GemToast.container.className = 'gem-toast-container';
            document.body.appendChild(GemToast.container);
        }
    }

    static show(message, duration = 3000) {
        GemToast.init();

        const toast = document.createElement('div');
        toast.className = 'gem-toast';
        toast.innerHTML = `
            <i class="ph-fill ph-check-circle"></i>
            <span>${message}</span>
        `;

        GemToast.container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('is-fading');
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, duration);
    }
}

// Make globally available
window.GemToast = GemToast;
