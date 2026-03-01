// ================================================================
// DARK / LIGHT MODE – Portfolio de Pablo Legerén
// ================================================================

(function () {
  const STORAGE_KEY = 'portfolioTheme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);

    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;

    if (theme === 'dark') {
      btn.innerHTML = '<i class="fas fa-sun"></i>';
      btn.setAttribute('aria-label', 'Switch to light mode');
      btn.title = 'Light mode';
    } else {
      btn.innerHTML = '<i class="fas fa-moon"></i>';
      btn.setAttribute('aria-label', 'Switch to dark mode');
      btn.title = 'Dark mode';
    }
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Apply saved or system preference immediately (before DOMContentLoaded to avoid flash)
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', () => {
    // Re-apply so the button icon renders correctly after DOM is ready
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current);

    const btn = document.getElementById('themeToggleBtn');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();
