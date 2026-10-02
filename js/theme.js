/**
 * ============================================================================
 * THEME MODULE (Dark / Light Mode)
 * ============================================================================
 */

function updateThemeButton(isLight) {
    const btn = document.getElementById('theme-btn');
    if (btn) {
        btn.innerHTML = isLight ? '🌙' : '☀️';
    }
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('nookleaf_theme', isLight ? 'light' : 'dark');
    updateThemeButton(isLight);
}

// Auto-initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('nookleaf_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        updateThemeButton(true);
    } else {
        updateThemeButton(false);
    }
});
