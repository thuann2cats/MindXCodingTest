document.getElementById("current-color-code").innerHTML = "#FFFFFF";

// This function sets a new random background color
function setBackgroundColor(newColor) {
    document.getElementById("current-color-code").innerHTML = newColor.toUpperCase();
    document.body.style.backgroundColor = newColor;
}

// When user clicks on Set Random Color button
function pickRandomColor() {
    var newColor = Math.floor(Math.random()*16777215).toString(16);
    setBackgroundColor("#"+newColor);
    
}

document.getElementById("new-color").addEventListener('click', pickRandomColor);

// When user changes the color using the color picker
function colorInputReceived(event) {
    setBackgroundColor(event.target.value);
}

document.getElementById("colorpicker").addEventListener('input', colorInputReceived);


// When user clicks on copy button
function copyHEXcode() {
    var colorCode = document.getElementById("current-color-code").innerHTML;
    navigator.clipboard.writeText(colorCode);
    alert("This color code has been copied: "+colorCode);

}

document.getElementById("copy-color-code").addEventListener('click', copyHEXcode);