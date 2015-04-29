//State all global variables
var allEvents = [];
var allReminders = [];
var alarmTimer = null;

//This variable creates the drop down box for the months. Delete when finalizing.
/*var EmonthDropBox = document.getElementById("EmonthDropBox");
for(var i = 1; i <= 12; i++){
  var toAdd = document.createElement("option");
  toAdd.text = i.toString();
  toAdd.value = i;
  EmonthDropBox.add(toAdd);
}*/

//This variable creates the drop down box for the days.
var EdayDropBox = document.getElementById("EdayDropBox");
for(var i = 1; i<= 28; i++) {
  var toAdd = document.createElement("option");
  toAdd.text = i.toString();
  toAdd.value = i;
  EdayDropBox.add(toAdd);
}

/*var RmonthDropBox = document.getElementById("RmonthDropBox");
for(var i = 1; i <= 12; i++){
  var toAdd = document.createElement("option");
  toAdd.text = i.toString();
  toAdd.value = i;
  RmonthDropBox.add(toAdd);
}*/

//This variable creates the drop down box for the days.
var RdayDropBox = document.getElementById("RdayDropBox");
for(var i = 1; i<= 28; i++) {
  var toAdd = document.createElement("option");
  toAdd.text = i.toString();
  toAdd.value = i;
  RdayDropBox.add(toAdd);
}

//This variable creates the drop down box for the hours.
var RhourDropBox = document.getElementById("RhourDropBox");
for(var i = 0; i<= 23; i++) {
  var toAdd = document.createElement("option");
  toAdd.text = i.toString();
  toAdd.value = i;
  RhourDropBox.add(toAdd);
}

//This variable creates the drop down box for the minutes.
var RminuteDropBox = document.getElementById("RminuteDropBox");
for(var i = 0; i<= 59; i++) {
  var toAdd = document.createElement("option");
  toAdd.text = i.toString();
  toAdd.value = i;
  RminuteDropBox.add(toAdd);
}

//This function creates alarm that alerts a set time before for reminders.
function setAlarm() {
  //Creates variables for if/else if statements that check to see if drop box values match the current time.
  var currentTime = new Date();
  var day = currentTime.getDate();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var tomorrow = false;
  
  if (RdayDropBox.value < day.value) {tomorrow = true;}
  else if(RdayDropBox.value == day.value && RhourDropBox.value < hours.value) {tomorrow = true;}
  else if(RdayDropBox.value == day.value && RhourDropBox == hours.value && RminuteDropBox < minutes.value) {tomorrow = true;}
  
  //Creates variables for the setTimeout method.
  var currentTime2 = new Date();
  var year = currentTime2.getFullYear();
  var month = parseInt(currentTime2.getMonth());
  
  //Takes all time and adds them together to turn them into milliseconds. Then subtracts from current time ( in milliseconds) to create timer from setTimeout function that makes alert show at desired time.
  var time = new Date (year, month, RdayDropBox.value, RhourDropBox.value, RminuteDropBox.value,  0, currentTime2.getMilliseconds() );
  time = (time - new Date());
  
  alarmTimer = setTimeout(function() {alert("Time to go!");}, parseInt(time));
}

//This function displays input section where user can input information for the event.
function inputEvent() {
  document.getElementById("putEvent").style.display = "inline";}

//This function displays input section where user can input information for the reminder.
function inputReminder() {
  document.getElementById("putReminder").style.display = "inline";}

//This object Constructor makes a new event Object.  It includes methods to add the object to the calendar.
function AddEvent (/*eMonth,*/ eDay, eText) {
    //this.eMonth = eMonth;
    this.eDay = eDay;
    this.eText = document.getElementById("ETextArea");
}

//This object Constructor makes a new reminder Object. It includes methods to add the object to the calendar.
function AddReminder(rHour, rMinute, /*rMonth,*/ rDay, rText) {
    this.rHour = document.getElementById("RhourDropBox");
    this.rMinute = document.getElementById("RminuteDropBox");
    //this.rMonth = rMonth;
    this.rDay = rDay;
    this.rText = document.getElementById("RTextArea");
}

// This function happens when the user presses submit in the event input section.
function eventSubmitPress(){
  document.getElementById("putEvent").style.display = "none";
  allEvents.unshift(new AddEvent(/*AddEvent.eMonth,*/ AddEvent.eDay, AddEvent.eText));
  console.log(allEvents[0].eText.value);
  if(EdayDropBox.value==1){
    document.getElementById("1").insertAdjacentHTML('beforeend',  "<br>Event: " + allEvents[0].eText.value);
    }
  else if(EdayDropBox.value==2){
    document.getElementById("2").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==3){
    document.getElementById("3").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==4){
    document.getElementById("4").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==5){
    document.getElementById("5").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==6){
    document.getElementById("6").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==7){
    document.getElementById("7").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==8){
    document.getElementById("8").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==9){
    document.getElementById("9").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==10){
    document.getElementById("10").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==11){
    document.getElementById("11").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==12){
    document.getElementById("12").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==13){
    document.getElementById("13").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==14){
    document.getElementById("14").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==15){
    document.getElementById("15").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==16){
    document.getElementById("16").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==17){
    document.getElementById("17").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==18){
    document.getElementById("18").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==19){
    document.getElementById("19").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==20){
    document.getElementById("20").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==21){
    document.getElementById("21").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==22){
    document.getElementById("22").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==23){
    document.getElementById("23").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==24){
    document.getElementById("24").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==25){
    document.getElementById("25").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==26){
    document.getElementById("26").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else if(EdayDropBox.value==27){
    document.getElementById("27").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
  }
  else {document.getElementById("28").insertAdjacentHTML('beforeend', "<br>Event: " + allEvents[0].eText.value);
}
  document.getElementById("ETextArea").value = "";
}

//This function happens when the user presses the back button.
function eventBackButton() {
  document.getElementById("putEvent").style.display = "none";
}

//This function happens when the user presses submit in the reminder input section.
function reminderSubmitPress() {
  document.getElementById("putReminder").style.display = "none";
  allReminders.unshift(new AddReminder(AddReminder.rDay, AddReminder.rHour, AddReminder.rMinute, /*AddReminder.rMonth,*/ AddReminder.rText));
  console.log(allReminders[0].rText.value);
  console.log(allReminders[0].rHour.value);
  console.log(allReminders[0].rMinute.value);
  setAlarm();
  
  //Displays the reminder description in the box according to the day.
  if(RdayDropBox.value==1){
    document.getElementById("1").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":0" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==2){
    document.getElementById("2").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":0" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==3){
    document.getElementById("3").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":0" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==4){
    document.getElementById("4").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":0" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==5){
    document.getElementById("5").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":0" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==6){
    document.getElementById("6").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":0" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==7){
    document.getElementById("7").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":0" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==8){
    document.getElementById("8").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":0" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==9){
    document.getElementById("9").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":0" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==10){
    document.getElementById("10").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==11){
    document.getElementById("11").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":0" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==12){
    document.getElementById("12").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==13){
    document.getElementById("13").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==14){
    document.getElementById("14").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==15){
    document.getElementById("15").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==16){
    document.getElementById("16").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==17){
    document.getElementById("17").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==18){
    document.getElementById("18").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==19){
    document.getElementById("19").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==20){
    document.getElementById("20").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==21){
    document.getElementById("21").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==22){
    document.getElementById("22").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==23){
    document.getElementById("23").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==24){
    document.getElementById("24").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==25){
    document.getElementById("25").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==26){
    document.getElementById("26").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else if(RdayDropBox.value==27){
    document.getElementById("27").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  else {
    document.getElementById("28").insertAdjacentHTML('beforeend',  "<br>Reminder: " + allReminders[0].rText.value + " " + allReminders[0].rHour.value + ":" + allReminders[0].rMinute.value);
  }
  document.getElementById("RTextArea").value = "";
}

//This function happens when the user presses the back button.
function reminderBackButton() {
  document.getElementById("putReminder").style.display = "none";
}