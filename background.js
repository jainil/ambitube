chrome.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.match(/^https:\/\/(www\.|m\.)?youtube\.com\//)) {
    chrome.tabs.sendMessage(tab.id, { action: 'toggleCSS' }, (response) => {
      if (chrome.runtime.lastError) {
        console.warn('Content script not found:', chrome.runtime.lastError.message);
      }
    });
  } else {
    chrome.action.setBadgeText({ text: '!', tabId: tab.id });
    setTimeout(() => chrome.action.setBadgeText({ text: '', tabId: tab.id }), 1500);
  }
});
