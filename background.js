chrome.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.match(/^https:\/\/(www\.|m\.)?youtube\.com\//)) {
    chrome.tabs.sendMessage(tab.id, { action: 'toggleCSS' });
  } else {
    chrome.action.setBadgeText({ text: '!', tabId: tab.id });
    setTimeout(() => chrome.action.setBadgeText({ text: '', tabId: tab.id }), 1500);
  }
});
