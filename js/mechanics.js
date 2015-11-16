//this will count the clicks by looking up the id and changing the status of it

var clicks = 0;


function picClick () {
    document.getElementById( "meme" );
    if (this.getAttribute( "data-state" ) === "unClicked") {
    this.setAttribute ( "data-state"  , "clicked" ) ;
    clicks = clicks++;
  }
}

// document.write('<a href="#" onclick="linkClick()">Click Me!</a>');