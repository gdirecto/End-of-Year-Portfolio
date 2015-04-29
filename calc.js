var keys = document.querySelectorAll('div.button');
var output = document.getElementById("display");
var prevInput;
var hasOpp = false;
var btnVal1 = 0;
var btnVal2 = 0;
var clearPress = true;
console.log(keys);
for(var i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", mathify, false);
};

function mathify() {
    if(clearPress === true) {
        output.innerHTML = ""
        clearPress = false;
    }
    if(this.classList.contains("opp") && !isNaN(prevInput)) {
        var btnVal = output.innerHTML;
        output.insertAdjacentHTML('beforeend', this.innerHTML);
        hasOpp = true;
        prevInput = this.innerHTML;
    } else if(this.innerHTML === "=") {
        output.innerHTML = eval(output.innerHTML)
        clearPress = true;
    } else if(this.innerHTML === "Clear") {
        output.innerHTML = " ";
    } else if(this.innerHTML === "pi") {
        prevInput = 3.14
        output.insertAdjacentHTML('beforeend', eval(Math.PI));
    } else if(this.innerHTML === "sqrt") {
        output.innerHTML = eval(Math.sqrt(output.innerHTML))
    } else if(!isNaN(this.innerHTML)) {
        output.insertAdjacentHTML('beforeend', this.innerHTML);
        var btnVal = output.innerHTML;
        prevInput = this.innerHTML;
    }
};