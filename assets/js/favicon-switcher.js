(() => {
  'use strict';

  const initFaviconSwitcher = () => {
    const matcher = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!matcher) return;

    const darkLink = document.querySelector('link[rel*="icon"][media*="dark"]');
    const lightLink = document.querySelector('link[rel*="icon"][media*="light"]');
    if (!darkLink || !lightLink) return;

    let activeIcon = document.querySelector('link[data-dynamic-favicon="true"]');
    if (!activeIcon) {
      activeIcon = document.createElement('link');
      activeIcon.setAttribute('rel', 'shortcut icon');
      activeIcon.setAttribute('data-dynamic-favicon', 'true');
      document.head.appendChild(activeIcon);
    }

    const applyFavicon = (isDark) => {
      const source = isDark ? darkLink : lightLink;
      const href = source?.getAttribute('href');
      if (href && activeIcon) {
        activeIcon.setAttribute('type', source.getAttribute('type') || 'image/png');
        activeIcon.setAttribute('href', href);
      }
    };

    applyFavicon(matcher.matches);
    matcher.addEventListener('change', (e) => applyFavicon(e.matches));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaviconSwitcher);
  } else {
    initFaviconSwitcher();
  }
})();
