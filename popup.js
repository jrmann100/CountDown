function showCount() { // Call GetCount() from background.js, and use its return value to update the page.
        var background = chrome.extension.getBackgroundPage();
        document.getElementById('countbox').innerHTML = background.GetCount();
}


window.onload=function(){ //call when everything has loaded¸
        showCount(); // Call showCount() once to initialize the display.
        setInterval(showCount, 1000); // Call showCount() every second forever.
}
