if (window.top === window) {
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'toggleCSS') {
      document.body.classList.toggle('ambitube-enabled');
      window.dispatchEvent(new Event('resize'));
    }
  });

  window.addEventListener('keydown', (e) => {
    // Ignore if typing in an input, textarea, or contenteditable
    const active = document.activeElement;
    if (
      active &&
      (active.tagName === 'INPUT' ||
        active.tagName === 'TEXTAREA' ||
        active.isContentEditable)
    ) {
      return;
    }
    // Backtick key (unshifted: `, key: 'Backquote')
    if (e.key === '`' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      document.body.classList.toggle('ambitube-enabled');
      window.dispatchEvent(new Event('resize'));
    }
  });
}
