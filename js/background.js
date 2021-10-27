var scroller_on = false;
var scroller;
var speed;
chrome.runtime.onInstalled.addListener(function () {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: { hostEquals: 'www.cvs.com' },
			})],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});

