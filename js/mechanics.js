//this will count the clicks by looking up the id and changing the status of it
var clicks;
clicks = 0;
function picClick() {
    "use strict";
    if (this.getAttribute("data-state") === "true") {
        this.setAttribute("data-state", "false");
        clicks++;
    }
}

// function picClick () {
//     document.getElementById( "meme" ); //searches for and detects the input element from the 'meme' id
//     value = "clicked meme"; //changes the value
//     if (img.id == "meme") { 
//     img.id= "clicked";
//     clicks = clicks++;
//   }

// }

// document.write('<a href="#" onclick="linkClick()">Click Me!</a>');