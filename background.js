let tabBlocking = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  tabBlocking = !tabBlocking;

  if (tabBlocking) {
    chrome.browserAction.setIcon({ path: "red-sphere.png" });
  } else {
    chrome.browserAction.setIcon({ path: "green-sphere.png" });
  }
});

chrome.tabs.onCreated.addListener(function(tab) {
  if (tabBlocking) {
    chrome.tabs.remove(tab.id);
  }
});
