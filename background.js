dateNow = new Date();
dateFuture = new Date(2016,(dateNow.getMonth()),(dateNow.getDate()),15,28,40);
delete dateNow;

//function goFullscreen(){chrome.windows.update(WindowType, {type: 'app'})} –Expand popup to fullscreen if possible…
function GetCount(){

        dateNow = new Date();                                                                        //grab current date
        amount = dateFuture.getTime() - dateNow.getTime();                //calc milliseconds between dates
        delete dateNow;

        // time is already past
        if(amount < 0){
                out = "School's Out!";
        }
        // date is still good
        else{
                hours=0;mins=0;secs=0;out="";

                amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

                hours=Math.floor(amount/3600);//hours
                amount=amount%3600;

                mins=Math.floor(amount/60);//minutes
                amount=amount%60;

                secs=Math.floor(amount);//seconds

                if(hours != 0){out += hours +" hour"+((hours!=1)?"s":"")+", ";}
                if(hours != 0 || mins != 0){out += mins +" minute"+((mins!=1)?"s":"")+", ";}
                out += secs +" seconds to dismissal";

                chrome.browserAction.setBadgeText({text: hours+":"+mins});
        }
        return out; // The variable "out" should be set to whatever value you want to appear on the popup page.
}

// Make sure this extension runs at browser startup.
// https://developer.chrome.com/extensions/runtime#event-onStartup
chrome.runtime.onStartup.addListener(function(){
    GetCount();
    setInterval(GetCount, 1000);
});

// Make sure this script runs when the extension is first installed (or reloaded after updating the code)
// https://developer.chrome.com/extensions/runtime#event-onInstalled
chrome.runtime.onInstalled.addListener(function(details) { // Details is just a placeholder and can be ignored.
	GetCount();
	setInterval(GetCount, 1000);
});
