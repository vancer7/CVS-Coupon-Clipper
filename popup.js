
clipCoupons.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
		{
			file: 'js/CVSCLICKER.js' });
  });
};
function load_all() {
	chrome.tabs.onUpdated.addListener(function (id, info, tab) {
		chrome.pageAction.show(tab.id);
	});

	chrome.pageAction.onClicked.addListener(function (tab) {
		chrome.storage.sync.set({ 'myKey': 0 });
		chrome.storage.sync.get({
			speed: 25
		}, function (items) {
			speed = items.speed;
			scroller_on = !scroller_on;
			if (scroller_on) {
				//alert(speed);
				//chrome.tabs.executeScript(tab.id, { code: "var body = document.body;scroller = setInterval(function(){scrollTo(scrollX, scrollY+100);}, 0);" });
				chrome.tabs.executeScript(tab.id, {
					code: `
					function clickLinks() {

					var x = document.getElementsByClassName("action-items red");
					var i;
					alert("Pending Coupons " + x.length);
					for (i = 0; i < x.length; i++) {

						x[i].click();


						}
					};
				var xx = 0;
				var cnt = 0;
				scroller2 = setInterval(function () {
					var body = document.body, html = document.documentElement;
					var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
					scrollTo(scrollX, scrollY + 10000);

					if (xx === body.scrollHeight) {
						//alert(cnt);
						cnt++;
						if (cnt === 5) {
							clearInterval(scroller2);
							//alert(height + 'I' + html.scrollHeight + 'I' + body.scrollHeight);
							clickLinks();
						};
						
					}
					else {
						cnt = 0;
					xx = body.scrollHeight
					}
				},50); ` });
				chrome.pageAction.setTitle({ "tabId": tab.id, "title": "Auto Scroll (ON: " + speed + ")" });

			} else {
				chrome.tabs.executeScript(tab.id, { code: "clearInterval(2);" });
				chrome.pageAction.setTitle({ "tabId": tab.id, "title": "Auto Scroll (OFF)" });

			}
		});
	});
}