var ShowCount = function() {
	document.getElementById('countbox').innerHTML = chrome.extension.getBackgroundPage().GetCount();
};

window.onload=function(){ //call when everything has loaded¸
        ShowCount();
        setInterval(ShowCount, 1000); // Call showCount() every second forever.
};
