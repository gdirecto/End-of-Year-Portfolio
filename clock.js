//Sets all global variables
var ampm = "AM";
var setAlarm = document.getElementById("setAlarm");
var alarmTimer = null;
/*var resetAlarm = document.getElementByID('resetAlarm');*/
//These variables create the dropboxes for hours, minutes, and seconds for the alarm
var hourDropBox = document.getElementById('hourdropbox');
//This for loop starts the options at 0 and ends at 24. Within the loop it turns i into a string which displays the number into the dropbox and gives it a value. The last line in the loop keeps running through the loop until it reaches 24.
for(var i = 1; i <= 24; i++) {
    var toAdd = document.createElement("option");
    toAdd.text = i.toString();
    toAdd.value = i;
    hourDropBox.add(toAdd);
}
var minuteDropBox = document.getElementById('minutedropbox');
//This for loop does the same thing as the one above but for minutes.
for(var i = 0; i < 60; i++) {
    var toAdd = document.createElement("option");
    toAdd.text = i.toString();
    toAdd.value = i;
    minuteDropBox.add(toAdd);
}
var secondDropBox = document.getElementById('seconddropbox');
//This for loop does the same thing as the one above but for seconds.
for(var i = 0; i < 60; i++) {
    var toAdd = document.createElement("option");
    toAdd.text = i.toString();
    toAdd.value = i;
    secondDropBox.add(toAdd);
}
//This function creates the clock

function displayTime() {
    var currentTime = new Date();
    var days = currentTime.getDay();
    var dates = currentTime.getDate();
    var months = currentTime.getMonth();
    var years = currentTime.getYear() + 1900;
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    //to put it into regular time
    /*if (hours > 12) {
        hours = hours - 12;
        ampm = "PM";
      }
      if (hours === 0) {
        hours = 12;
      }*/
    //to make sure the seconds and minutes less than 10 are still 2 digits
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    // makes the numbers pulled for the day into names of weekdays
    if(days === 1) {
        days = "Monday";
    }
    if(days === 2) {
        days = "Tuesday";
    }
    if(days === 3) {
        days = "Wednesday";
    }
    if(days === 4) {
        days = "Thursday";
    }
    if(days === 5) {
        days = "Friday";
    }
    if(days === 6) {
        days = "Saturday";
    }
    if(days === 7) {
        days = "Sunday";
    }
    //makes the numbers pulled for the month into names of months
    if(months === 0) {
        months = "January";
    }
    if(months === 1) {
        months = "February";
    }
    if(months === 2) {
        months = "March";
    }
    if(months === 3) {
        months = "April";
    }
    if(months === 4) {
        months = "May";
    }
    if(months === 5) {
        months = "June";
    }
    if(months === 6) {
        months = "July";
    }
    if(months === 7) {
        months = "August";
    }
    if(months === 8) {
        months = "September";
    }
    if(months === 9) {
        months = "October";
    }
    if(months === 10) {
        months = "November";
    }
    if(months === 11) {
        months = "December";
    }
    //displays the stuff in the HTML
    var weekdayDiv = document.getElementById('weekday');
    var dateDiv = document.getElementById('date');
    var clockDiv = document.getElementById('clock');
    //pulls the stuff from the function and puts semicolons between them
    weekdayDiv.innerText = days;
    dateDiv.innerText = months + " " + dates + ", " + years;
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + ampm;
}
//Creates alarm

function alarmSet() {
    var currentTime2 = new Date();
    var hours2 = currentTime2.getHours();
    var minutes2 = currentTime2.getMinutes();
    var seconds2 = currentTime2.getSeconds();
    var tomorrow = false;
    if(hourDropBox.value < hours2.value) {
        tomorrow = true;
    } else if(hourDropBox.value == hours2.value && minuteDropBox.value < minutes2.value) {
        tomorrow = true;
    } else if(hourDropBox.value == hours2.value && minuteDropBox.value == minutes2.value && secondDropBox.value < seconds2.value) {
        tomorrow = true;
    }
    //Sets all global variables
    var ampm = "AM";
    var setAlarm = document.getElementById("setAlarm");
    var alarmTimer = null;
    /*var resetAlarm = document.getElementByID('resetAlarm');*/
    //These variables create the dropboxes for hours, minutes, and seconds for the alarm
    var hourDropBox = document.getElementById('hourdropbox');
    //This for loop starts the options at 0 and ends at 24. Within the loop it turns i into a string which displays the number into the dropbox and gives it a value. The last line in the loop keeps running through the loop until it reaches 24.
    for(var i = 1; i <= 24; i++) {
        var toAdd = document.createElement("option");
        toAdd.text = i.toString();
        toAdd.value = i;
        hourDropBox.add(toAdd);
    }
    var minuteDropBox = document.getElementById('minutedropbox');
    //This for loop does the same thing as the one above but for minutes.
    for(var i = 0; i < 60; i++) {
        var toAdd = document.createElement("option");
        toAdd.text = i.toString();
        toAdd.value = i;
        minuteDropBox.add(toAdd);
    }
    var secondDropBox = document.getElementById('seconddropbox');
    //This for loop does the same thing as the one above but for seconds.
    for(var i = 0; i < 60; i++) {
        var toAdd = document.createElement("option");
        toAdd.text = i.toString();
        toAdd.value = i;
        secondDropBox.add(toAdd);
    }
    //This function creates the clock

    function displayTime() {
        var currentTime = new Date();
        var days = currentTime.getDay();
        var dates = currentTime.getDate();
        var months = currentTime.getMonth();
        var years = currentTime.getYear() + 1900;
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        //to put it into regular time
        if(hours > 12) {
            hours = hours - 12;
            ampm = "PM";
        }
        if(hours === 0) {
            hours = 12;
        }
        //to make sure the seconds and minutes less than 10 are still 2 digits
        if(seconds < 10) {
            seconds = "0" + seconds;
        }
        if(minutes < 10) {
            minutes = "0" + minutes;
        }
        // makes the numbers pulled for the day into names of weekdays
        if(days === 1) {
            days = "Monday";
        }
        if(days === 2) {
            days = "Tuesday";
        }
        if(days === 3) {
            days = "Wednesday";
        }
        if(days === 4) {
            days = "Thursday";
        }
        if(days === 5) {
            days = "Friday";
        }
        if(days === 6) {
            days = "Saturday";
        }
        if(days === 7) {
            days = "Sunday";
        }
        //makes the numbers pulled for the month into names of months
        if(months === 0) {
            months = "January";
        }
        if(months === 1) {
            months = "February";
        }
        if(months === 2) {
            months = "March";
        }
        if(months === 3) {
            months = "April";
        }
        if(months === 4) {
            months = "May";
        }
        if(months === 5) {
            months = "June";
        }
        if(months === 6) {
            months = "July";
        }
        if(months === 7) {
            months = "August";
        }
        if(months === 8) {
            months = "September";
        }
        if(months === 9) {
            months = "October";
        }
        if(months === 10) {
            months = "November";
        }
        if(months === 11) {
            months = "December";
        }
        //displays the stuff in the HTML
        var weekdayDiv = document.getElementById('weekday');
        var dateDiv = document.getElementById('date');
        var clockDiv = document.getElementById('clock');
        //pulls the stuff from the function and puts semicolons between them
        weekdayDiv.innerText = days;
        dateDiv.innerText = months + " " + dates + ", " + years;
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + ampm;
    }
    //Creates alarm

    function alarmSet() {
        //I had to create new variables that do all the same things because it won't let me use them as global variables
        var currentTime2 = new Date();
        var hours2 = currentTime2.getHours();
        var minutes2 = currentTime2.getMinutes();
        var seconds2 = currentTime2.getSeconds();
        var tomorrow = false;
        //The if/else if statements check if the inputted alarm time is the same as the current time. If it isn't then it doesn't create the alert.
        if(hourDropBox.value < hours2.value) {
            tomorrow = true;
        } else if(hourDropBox.value == hours2.value && minuteDropBox.value < minutes2.value) {
            tomorrow = true;
        } else if(hourDropBox.value == hours2.value && minuteDropBox.value == minutes2.value && secondDropBox.value < seconds2.value) {
            tomorrow = true;
        }
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        //parseInt takes in a string and returns an integer
        var day = parseInt(date.getDate());
        if(tomorrow) {
            day += 1;
        }
        var time = new Date(year, month, day, hourDropBox.value, minuteDropBox.value, secondDropBox.value, date.getMilliseconds());
        time = (time - new Date());
        alarmTimer = setTimeout(function() {
            alert("It's time!");
        }, parseInt(time));
    }
    //This calls back the function to run through it
    displayTime();
    //makes clock run through displayTime every second; makes it "tick"; 1000 because it runs in milliseconds (1000 milliseconds = 1 second)
    setInterval(displayTime, 1000);
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    //parseInt takes in a string and returns an integer
    var day = parseInt(date.getDate());
    if(tomorrow) {
        day += 1;
    }
    var time = new Date(year, month, day, hourDropBox.value, minuteDropBox.value, secondDropBox.value, date.getMilliseconds());
    time = (time - new Date());
    alarmTimer = setTimeout(function() {
        alert("hello");
    }, parseInt(time));
}
//This calls back the function to run through it
displayTime();
//makes clock run through displayTime every second; makes it "tick"; 1000 because it runs in milliseconds (1000 milliseconds = 1 second)
setInterval(displayTime, 1000);