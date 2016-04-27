dateNow = new Date();
var dateFuture = new Date()
if ((dateNow.getDay()==1)||(dateNow.getDay()==2)||(dateNow.getDay()==4)||(dateNow.getDay()==5)){
	dateFuture = new Date((dateNow.getFullYear()),(dateNow.getMonth()),(dateNow.getDate()),15,28,30)}
	else if(dateNow.getDay()==3){dateFuture= new Date((dateNow.getFullYear()),(dateNow.getMonth()),(dateNow.getDate()),13,13,30)}
delete dateNow;

function GetCount(){

        dateNow = new Date();                                                                        //grab current date
        amount = dateFuture.getTime() - dateNow.getTime();                //calc milliseconds between dates
        delete dateNow;
        if ((dateFuture.getDay()==0)||(dateFuture.getDay()==7)){wkdTime = new Date; (out="It's the weekend!\n"+wkdTime.getHours()+":"+wkdTime.getMinutes()+":"+wkdTime.getSeconds());chrome.browserAction.setBadgeText({text: "WKD"});}
        // time is already past
        else if(amount < 0){
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
                
                if ((hours||mins||secs)<0){out="School's Out!";chrome.browserAction.setBadgeText({text: "0:0"});} //time is already past
                else{out = hours+":"+mins+":"+secs; //assuming the settings page is set to mini mode…
                chrome.browserAction.setBadgeText({text: hours+":"+mins});}
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
