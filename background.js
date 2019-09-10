/// Messages
// Listen for messages from the content script
browser.runtime.onMessage.addListener(function(message) {
	switch (message.action) {
		case "closeTab":
			closeTab();
			break;
		default:
			break;
	}
});

/// Tab functions
function closeTab(){
	browser.tabs.query({currentWindow: true, active: true}).then((activeTabs) => {
		let activeTab = activeTabs[0];
		browser.tabs.remove(activeTab.id);
	}, console.error);
}
