var PeriodUtils = {
	InBetween: function(period, date){
		// Layer 0
		if(!(date.getHours() <= period.end[0] && date.getHours() >= period.start[0])) return false;
		if(period.start[0] === period.end[0]){
			// Layer 1
			if(!(date.getMinutes() < period.end[1] && date.getMinutes() >= period.start[1])) return false;
			if(period.start[1] === period.end[1]){
				// Layer 2
				if(!(date.getSeconds() < period.end[2] && date.getSeconds() >= period.start[2])) return false;
				if(period.start[2] === period.end[2]){
					console.error("Error in period - start and end time congruent");
					return false;
				}else return true;
			}else return true;
		}else return true;
	}
};

var PeriodSchedule = {
	// Rootlevel: Day of Week
	0: {
		schoolDay: false,
		classes: []
	},

	2: {
		schoolDay: true,
		classes: [
			{
				start: [8, 30, 0],
				end: [9, 21, 0],
				name: "Period 1"
			},
			{
				start: [9, 24, 0],
				end: [10, 13, 0],
				name: "Period 2"
			},
			{
				start: [10, 13, 01],
				end: [10, 28, 0],
				name: "Recess"
			},
			{
				start: [10, 31, 0],
				end: [11, 20, 0],
				name: "Period 3"
			},
			{
				start: [11, 23, 0],
				end: [12, 12, 0],
				name: "Period 4"
			},
			{
				start: [12, 12, 01],
				end: [12, 52, 0],
				name: "Lunch"
			},
			{
				start: [12, 55, 0],
				end: [13, 44, 0],
				name: "Period 5"
			},
			{
				start: [13, 47, 0],
				end: [14, 36, 0],
				name: "Period 6"
			},
			{
				start: [14, 39, 0],
				end: [15, 28, 0],
				name: "Period 7"
			}
		]
	},

	5: PeriodSchedule[2]

	//TODO: Finish
};

dateNow = new Date();
var dateFuture = new Date();
if ((dateNow.getDay()==1)||(dateNow.getDay()==2)||(dateNow.getDay()==4)||(dateNow.getDay()==5)){
	dateFuture = new Date((dateNow.getFullYear()),(dateNow.getMonth()),(dateNow.getDate()),15,28,30);
}else if(dateNow.getDay()==3){
	dateFuture = new Date((dateNow.getFullYear()),(dateNow.getMonth()),(dateNow.getDate()),13,13,30);
}
delete dateNow;

function GetCount(){

        dateNow = new Date();                                                                        //grab current date
        amount = dateFuture.getTime() - dateNow.getTime();                //calc milliseconds between dates
        delete dateNow;
        if ((dateFuture.getDay()==0)||(dateFuture.getDay()==7)){
        	wkdTime = new Date();
        	(out="It's the weekend!\n"+wkdTime.getHours()+":"+wkdTime.getMinutes()+":"+wkdTime.getSeconds());chrome.browserAction.setBadgeText({text: "WKD"});}
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
                else{out = hours+":"+mins+":"+secs; //assuming the settings page is set to mini mode...
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
