'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {
          schemes: ['http', 'https']
        }
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

  chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      file: 'contentScript.js'
    });
  });
});
