if (window.top === window) {
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'toggleCSS') {
      document.body.classList.toggle('ambitube-enabled');
    }
  });
}
