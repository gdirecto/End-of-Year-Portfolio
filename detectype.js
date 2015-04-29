var studentNames;
var forms = document.getElementById("myForm");
var input = document.getElementById("mytext");
var remainder;
function doTheStuff(){
    getTheNames();
    splitTheNames();
    randomGroups();
    divideGroups();
    printGroups();
}

// This function takes the input from the names and places them into a single variable
function getTheNames(){
    studentNames=input.value;
}

function myFunction() {
    input.push(input[studentNames]);
    document.getElementById("display").innerHTML = input;
}

//This function takes the variable with the names seperated by a space and splits them into pieces in an array
function splitTheNames(){
    studentNames = studentNames.split(/[\",",]+/);
}

//This function randomizes the inputted names
function randomGroups() {
    for(var i = studentNames.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = studentNames[i];
        studentNames[i] = studentNames[j];
        studentNames[j] = temp;
    }
    return studentNames;
}

//This function divides the number of student names by the number of groups and prints it
function divideGroups() {
  var result;
  var e = document.getElementById("dropdown");
  var select =e.options[e.selectedIndex].value;
  for(var i=0; i<studentNames.length; i++) {
    remainder = (i)%select;
        var content= document.createTextNode(studentNames[i]);
        if(remainder===0) {
            var theDiv = document.getElementById("table0");
            theDiv.appendChild(content);}
      
        else if(remainder===1) {
            var theDiv1 = document.getElementById("table1");
            theDiv1.appendChild(content);}
      
        else if(remainder===2) {
            var theDiv2 = document.getElementById("table2");
            theDiv2.appendChild(content);}
      
        else if(remainder===3) {
            var theDiv3 = document.getElementById("table3");
            theDiv3.appendChild(content);}
      
        else if(remainder===4) {
            var theDiv4 = document.getElementById("table4");
            theDiv4.appendChild(content);}
      
        else if(remainder===5) {
            var theDiv5 = document.getElementById("table5");
            theDiv5.appendChild(content);}
      
        else if(remainder===6) {
            var theDiv6 = document.getElementById("table6");
            theDiv6.appendChild(content);}
      
        else if(remainder===7) {
            var theDiv7 = document.getElementById("table7");
            theDiv7.appendChild(content);}
      
        else if(remainder===8) {
            var theDiv8 = document.getElementById("table8");
            theDiv8.appendChild(content);}
      
        else if(remainder===9) {
            var theDiv9 = document.getElementById("table9");
            theDiv9.appendChild(content);}
      
        else if(remainder===10) {
            var theDiv10 = document.getElementById("table10");
            theDiv10.appendChild(content);}
      
        else if(remainder===11) {
            var theDiv11 = document.getElementById("table11");
            theDiv11.appendChild(content);}
      
        else if(remainder===12) {
            var theDiv12 = document.getElementById("table12");
            theDiv12.appendChild(content);}
      
        else if(remainder===13) {
            var theDiv13 = document.getElementById("table13");
            theDiv13.appendChild(content);}
      
        else if(remainder===14) {
            var theDiv14 = document.getElementById("table14");
            theDiv14.appendChild(content);}}}
    

//This function prints the groups
function printGroups() {
    document.getElementById("table0" + "table1" +"table2" + "table3" + "table4" + "table5" + "table6" + "table7" + "table8" + "table9" + "table10" + "table11" + "table12" + "table13" + "table14");
}
//This function clears the groups and the text area
function clearButton() {
  document.getElementById("mytext").value = " ";
  document.getElementById("table0").innerHTML = " ";
  document.getElementById("table1").innerHTML = " ";
  document.getElementById("table2").innerHTML = " ";
  document.getElementById("table3").innerHTML = " ";         document.getElementById("table4").innerHTML = " ";
  document.getElementById("table5").innerHTML = " ";
  document.getElementById("table6").innerHTML = " ";   document.getElementById("table7").innerHTML = " ";
  document.getElementById("table8").innerHTML = " ";
  document.getElementById("table9").innerHTML = " ";   document.getElementById("table10").innerHTML = " ";
  document.getElementById("table11").innerHTML = " ";
  document.getElementById("table12").innerHTML = " ";
  document.getElementById("table13").innerHTML = " ";
  document.getElementById("table14").innerHTML = " ";
  }
