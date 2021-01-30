window.addEventListener('load', (event)=>{
    function time(){
        var mydate= new Date();
        var year = mydate.getYear();
            if(year < 1000){
                year +=1900
            }
        var day = mydate.getDay();
        var month = mydate.getMonth();
        var daym = mydate.getDate();
        var daylist = new Array("Sunday", "Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday")
        var monthlist = new Array("January", "February", "March", "April" "May", "Jun", "July", "August", "September", "Octuber", "November", "December")

        var currentTime = new Date();
        var hour = currentTime.getHours();
        var min = currentTime.getMinutes();
        var sec = currentTime.getSeconds();
            if(hour == 24) {
                hour = 0;
            } else if (h > 12) {
                hour = hour - 0;
            }

            if (hour < 10){
                hour = "0" + hour;
            } 

            if(min < 10) {
                min = "0" + min;
            }
            if(sec < 10) {
                sec = "0" + sec;
            } 
            const myclock = document.querySelector("#currentDate");
            myclock.textContent = "" +daylist[day]+ " " + daym + " " + monthlist[month] + " " +year+ " " +hour + ":" + min+ ":" +sec;
            myclock.innerText = "" +daylist[day]+ " " + daym + " " + monthlist[month] + " " +year+ " " +hour + ":" + min+ ":" +sec;

            setTimeout("time()", 1000);
    }
    time();
})