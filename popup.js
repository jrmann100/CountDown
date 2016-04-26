dateNow = new Date()
dateFuture = new Date(2016,(dateNow.getMonth()),(dateNow.getDate()),15,28,40);
delete dateNow
//function goFullscreen(){chrome.windows.update(WindowType, {type: 'app'})} –Expand popup to fullscreen if possible…
function GetCount(){

        dateNow = new Date();                                                                        //grab current date
        amount = dateFuture.getTime() - dateNow.getTime();                //calc milliseconds between dates
        delete dateNow;

        // time is already past
        if(amount < 0){
                document.getElementById('countbox').innerHTML="School's Out!";
        }
        // date is still good
        else{
                days=0;hours=0;mins=0;secs=0;out="";

                amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs

                days=Math.floor(amount/86400);//days
                amount=amount%86400;

                hours=Math.floor(amount/3600);//hours
                amount=amount%3600;

                mins=Math.floor(amount/60);//minutes
                amount=amount%60;

                secs=Math.floor(amount);//seconds

                if(days != 0){out += days +" day"+((days!=1)?"s":"")+", ";}
                if(days != 0 || hours != 0){out += hours +" hour"+((hours!=1)?"s":"")+", ";}
                if(days != 0 || hours != 0 || mins != 0){out += mins +" minute"+((mins!=1)?"s":"")+", ";}
                out += secs +" seconds to dismissal";
                document.getElementById('countbox').innerHTML=out;
                chrome.browserAction.setBadgeText({text: hours+":"+mins});
        }
}

window.onload=function(){ //call when everything has loaded¸
        GetCount(); // Call GetCount() once to initialize the display.
        setInterval(GetCount, 1000); // Call GetCount() every second forever.
}
