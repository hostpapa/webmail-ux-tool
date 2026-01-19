/**
 * Compose Component JavaScript
 * Handles email composition interactions
 */

// Toggle Cc/Bcc fields
function toggleCcBcc() {
    const ccRow = document.getElementById('row-cc');
    const bccRow = document.getElementById('row-bcc');
    if (ccRow && bccRow) {
        if (ccRow.classList.contains('hidden')) {
            ccRow.classList.remove('hidden');
            bccRow.classList.remove('hidden');
        } else {
            ccRow.classList.add('hidden');
            bccRow.classList.add('hidden');
        }
    }
}

// Dropdown management
function toggleDropdown(menuId) {
    // Close other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu.id !== menuId) menu.classList.remove('show');
    });
    const menu = document.getElementById(menuId);
    if (menu) {
        menu.classList.toggle('show');
    }
}

function selectOption(labelId, value, menuId) {
    const label = document.getElementById(labelId);
    const menu = document.getElementById(menuId);
    if (label) label.innerText = value;
    if (menu) menu.classList.remove('show');
}

// Format handling
function handleFormatChange(mode) {
    const formatLabel = document.getElementById('format-label');
    const formatMenu = document.getElementById('format-menu');
    const currentMode = formatLabel ? formatLabel.innerText : '';

    if (formatMenu) formatMenu.classList.remove('show');

    if (mode === 'Plain Text' && currentMode !== 'Format: Plain Text') {
        // Show warning modal
        const modal = document.getElementById('formatWarningModal');
        if (modal) modal.classList.add('open');
    } else if (mode === 'HTML') {
        if (formatLabel) formatLabel.innerText = 'Format: HTML';
        showToast('Switched to HTML', 'info');
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('open');
}

function confirmPlainText() {
    const formatLabel = document.getElementById('format-label');
    if (formatLabel) formatLabel.innerText = 'Format: Plain Text';
    closeModal('formatWarningModal');
    showToast('Switched to Plain Text', 'info');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown-wrapper')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});

// Toggle option buttons (Priority/Read Receipt)
function toggleOption(btn) {
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');

    if (icon) {
        // Toggle between regular and filled icons
        if (btn.classList.contains('active')) {
            icon.classList.remove('ph');
            icon.classList.add('ph-fill');
        } else {
            icon.classList.remove('ph-fill');
            icon.classList.add('ph');
        }
    }
}

// Action handlers
function handleSend() {
    showToast('Message Sent', 'success');
    // In a real app, this would send the email
}

function handleSave() {
    showToast('Draft Saved', 'info');
    // In a real app, this would save the draft
}

function handleDiscard() {
    showToast('Draft Discarded', 'info');
    // In a real app, this would clear the form
}

// Toast notification system
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let iconClass = type === 'success' ? 'ph-fill ph-check-circle' : 'ph-fill ph-info';

    toast.innerHTML = `<i class="${iconClass}"></i> ${message}`;
    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Remove recipient pill
function removePill(pillElement) {
    if (pillElement) {
        pillElement.remove();
    }
}

// Initialize compose component
document.addEventListener('DOMContentLoaded', function () {
    // Set up pill remove handlers
    document.querySelectorAll('.pill-remove').forEach(removeBtn => {
        removeBtn.addEventListener('click', function () {
            const pill = this.closest('.recipient-pill');
            removePill(pill);
        });
    });

    // Set up file chip remove handlers
    document.querySelectorAll('.remove-file').forEach(removeBtn => {
        removeBtn.addEventListener('click', function () {
            const chip = this.closest('.file-chip');
            if (chip) chip.remove();
        });
    });
});
