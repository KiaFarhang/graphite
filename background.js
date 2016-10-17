/*chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.executeScript(null, {file: "graphite.js"});
	
});*/

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
	if (changeInfo.status === 'complete'){
		chrome.tabs.executeScript(tab.id, {file: 'graphite.js'});
	}
});