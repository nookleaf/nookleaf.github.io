/**
 * ============================================================================
 * MAIN APPLICATION MODULE
 * ============================================================================
 */

/**
 * Modular view navigation / routing
 * Allows switching between modular pages seamlessly
 */
function toggleView(viewName) {
    const pageMap = {
        'home': 'index.html',
        'news': 'news.html',
        'teto': 'teto.html',
        'teto11': 'teto11.html',
        'zenth': 'zenth.html'
    };

    const targetUrl = pageMap[viewName];
    if (targetUrl) {
        // If already on the target page, scroll to top
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        if (currentFile === targetUrl) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.location.href = targetUrl;
        }
    }
}

/**
 * Highlight active navigation link based on current filename
 */
function highlightActiveNav() {
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const onclickAttr = link.getAttribute('onclick') || '';

        if (
            (currentFile === 'index.html' && (href === 'index.html' || onclickAttr.includes("'home'"))) ||
            (currentFile === 'news.html' && (href === 'news.html' || onclickAttr.includes("'news'")))
        ) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveNav();
});
