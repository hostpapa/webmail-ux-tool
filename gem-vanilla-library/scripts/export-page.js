/**
 * GEM Page Exporter
 * Run this in the browser console to export the current page as a standalone HTML file
 * 
 * Usage: Just type `exportPage()` in the console
 */

async function exportPage() {
    console.log('🚀 Starting page export...');

    // Prevent multiple simultaneous exports
    if (window._gemExportInProgress) {
        console.warn('⚠️ Export already in progress. Please wait...');
        return;
    }
    window._gemExportInProgress = true;

    try {
        // 0. Wait a moment to ensure all components have finished their internal rendering
        // (Some components like Sidebar use setTimeout for rendering)
        console.log('🕒 Ensuring all components are rendered...');
        await new Promise(resolve => setTimeout(resolve, 150));

        // 1. Get all stylesheets and inline them
        console.log('📝 Collecting styles...');
        const styles = await collectStyles();

        // 2. Clone the current document
        console.log('🔄 Cloning document...');
        const clonedDoc = document.documentElement.cloneNode(true);

        // 3. Remove custom elements and replace with rendered content
        console.log('🎨 Rendering custom elements...');
        renderCustomElements(clonedDoc, document.documentElement);

        // 4. Remove script tags (we don't need them in static version)
        console.log('🧹 Cleaning up scripts...');
        const scripts = clonedDoc.querySelectorAll('script');
        scripts.forEach(script => {
            // Keep Phosphor Icons CDN and other essential CDNs
            const keepScript = script.src && (
                script.src.includes('phosphor-icons') ||
                script.src.includes('unpkg.com') ||
                script.src.includes('cdn.jsdelivr.net')
            );
            if (!keepScript) {
                script.remove();
            }
        });

        // 5. Remove external stylesheet links
        console.log('🔗 Removing external stylesheets...');
        const links = clonedDoc.querySelectorAll('link[rel="stylesheet"]');
        links.forEach(link => {
            // Keep font links
            if (!link.href.includes('fonts.googleapis.com') &&
                !link.href.includes('fontshare.com')) {
                link.remove();
            }
        });

        // 6. Inject collected styles
        console.log('💉 Injecting inline styles...');
        const head = clonedDoc.querySelector('head');
        if (head) {
            const styleTag = document.createElement('style');
            styleTag.textContent = styles;
            head.appendChild(styleTag);
        }

        // 7. Inject GEM Runtime for basic interactivity
        console.log('⚡ Injecting GEM runtime...');
        const runtimeScript = document.createElement('script');
        runtimeScript.textContent = `
            // GEM Runtime for Exported Pages
            document.addEventListener('click', function(e) {
                // TopNav Profile Toggle
                const profileTrigger = e.target.closest('.gem-topnav-profile-trigger');
                if (profileTrigger) {
                    const profile = profileTrigger.closest('.gem-topnav-profile');
                    const menu = profile ? profile.querySelector('.gem-topnav-profile-menu') : null;
                    if (menu) {
                        const isOpen = menu.classList.toggle('is-open');
                        profileTrigger.classList.toggle('is-active', isOpen);
                        e.stopPropagation();
                    }
                }

                // TopNav Advanced Search Toggle
                const searchToggle = e.target.closest('.gem-topnav-advanced-toggle');
                if (searchToggle) {
                    const search = searchToggle.closest('.gem-topnav-search');
                    const panel = search ? search.querySelector('.gem-topnav-advanced-panel') : null;
                    if (panel) {
                        const isOpen = panel.classList.toggle('is-open');
                        searchToggle.classList.toggle('is-active', isOpen);
                        e.stopPropagation();
                    }
                }

                // Close menus when clicking outside
                if (!e.target.closest('.gem-topnav-profile') && !e.target.closest('.gem-topnav-search')) {
                    document.querySelectorAll('.gem-topnav-profile-menu.is-open, .gem-topnav-advanced-panel.is-open').forEach(el => {
                        el.classList.remove('is-open');
                    });
                    document.querySelectorAll('.gem-topnav-profile-trigger.is-active, .gem-topnav-advanced-toggle.is-active').forEach(el => {
                        el.classList.remove('is-active');
                    });
                }
                
                // Compose Dropdown toggles
                const dropdownTrigger = e.target.closest('[onclick^="toggleDropdown"]');
                if (dropdownTrigger) {
                    const match = dropdownTrigger.getAttribute('onclick').match(/toggleDropdown\(['"](.+?)['"]\)/);
                    if (match) {
                        const menuId = match[1];
                        const menu = document.getElementById(menuId);
                        if (menu) {
                            menu.classList.toggle('show');
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                }

                // Generic Modal close
                const closeBtn = e.target.closest('[onclick^="closeModal"]');
                if (closeBtn) {
                    const match = closeBtn.getAttribute('onclick').match(/closeModal\(['"](.+?)['"]\)/);
                    if (match) {
                        const modal = document.getElementById(match[1]);
                        if (modal) modal.classList.remove('open', 'show');
                    }
                }
            });
            
            // Basic Compose functions
            window.toggleCcBcc = function() {
                const ccRow = document.getElementById('row-cc');
                const bccRow = document.getElementById('row-bcc');
                if (ccRow && bccRow) {
                    ccRow.classList.toggle('hidden');
                    bccRow.classList.toggle('hidden');
                }
            };
            
            window.showToast = function(msg) {
                console.log('Toast:', msg);
            };
        `;
        const body = clonedDoc.querySelector('body');
        if (body) {
            body.appendChild(runtimeScript);
        }

        // 8. Update title
        const title = clonedDoc.querySelector('title');
        if (title) {
            title.textContent = title.textContent + ' (Exported)';
        }

        // 9. Create the final HTML
        console.log('📦 Building final HTML...');
        let html = '<!DOCTYPE html>\n' + clonedDoc.outerHTML;

        // Convert placeholder tags back to original tags (avoids the upgrade cycle in-browser)
        html = html.replace(/-gem-static/g, '');

        // 10. Download the file
        console.log('💾 Downloading file...');
        downloadFile(html, 'exported-page.html', 'text/html');

        console.log('✅ Export complete! Check your downloads folder.');

    } catch (error) {
        console.error('❌ Export failed:', error);
    } finally {
        window._gemExportInProgress = false;
    }
}

/**
 * Collect all CSS from stylesheets and inline styles
 */
async function collectStyles() {
    let allStyles = '';

    // Get all stylesheet links
    const styleSheets = Array.from(document.styleSheets);

    for (const sheet of styleSheets) {
        try {
            // Skip external stylesheets we want to keep (fonts)
            if (sheet.href && (
                sheet.href.includes('fonts.googleapis.com') ||
                sheet.href.includes('fontshare.com')
            )) {
                continue;
            }

            // Get CSS rules
            const rules = Array.from(sheet.cssRules || sheet.rules || []);
            const css = rules.map(rule => rule.cssText).join('\n');
            allStyles += css + '\n';

        } catch (e) {
            // CORS issues with external stylesheets - skip them
            console.warn('Could not access stylesheet:', sheet.href);
        }
    }

    // Also get inline styles
    const styleTags = document.querySelectorAll('style');
    styleTags.forEach(tag => {
        allStyles += tag.textContent + '\n';
    });

    return allStyles;
}

/**
 * Replace custom elements with their rendered content
 * Processes elements from deepest nesting level up to handle nested custom elements properly
 */
function renderCustomElements(clonedRoot, originalRoot) {
    // List of custom elements to process (ordered from most nested to least nested)
    const customElements = [
        'gem-topnav-logo',
        'gem-topnav-search',
        'gem-topnav-actions',
        'gem-topnav-link',
        'gem-topnav-separator',
        'gem-topnav-profile',
        'gem-sidebar-item',
        'gem-sidebar-section',
        'gem-sidebar-usage',
        'gem-sidebar',
        'gem-topnav',
        'gem-modal',
        'gem-settings-row',
        'gem-app-card',
        'gem-app-card-grid',
        'gem-card',
        'gem-button'
    ];

    // Process each type of custom element
    customElements.forEach(tagName => {
        const clonedElements = Array.from(clonedRoot.querySelectorAll(tagName));
        const originalElements = Array.from(originalRoot.querySelectorAll(tagName));

        // Process elements in reverse order to handle nested elements correctly
        for (let i = clonedElements.length - 1; i >= 0; i--) {
            const cloned = clonedElements[i];
            const original = originalElements[i];

            if (!original) continue;

            try {
                // Use a placeholder tag name to avoid triggering the browser's upgrade logic
                // if we are in the same window where custom elements are defined.
                const staticTag = tagName + '-gem-static';
                const wrapper = clonedRoot.ownerDocument.createElement(staticTag);
                
                // Copy the fully rendered innerHTML from the LIVE document
                wrapper.innerHTML = original.innerHTML;

                // Copy all attributes to preserve state and styling
                Array.from(original.attributes).forEach(attr => {
                    wrapper.setAttribute(attr.name, attr.value);
                });

                // Replace the custom element in the clone with the static placeholder
                if (cloned.parentNode) {
                    cloned.parentNode.replaceChild(wrapper, cloned);
                }
            } catch (error) {
                console.warn(`Failed to render custom element ${tagName}:`, error);
            }
        }
    });
}

/**
 * Download a file to the user's computer
 */
function downloadFile(content, filename, mimeType) {
    try {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.style.display = 'none';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Clean up the URL
        setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
        console.error('❌ Failed to download file:', error);
        throw error;
    }
}

// Make it globally available
window.exportPage = exportPage;

console.log('✨ GEM Page Exporter loaded! Type exportPage() to export this page.');
