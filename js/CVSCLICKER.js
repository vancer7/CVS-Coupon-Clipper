// JavaScript source code
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
}, 50);