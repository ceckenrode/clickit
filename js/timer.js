var secondsCount = 0;
var timerInterval;
var toggleStart = document.getElementById( "startbtn" );
var endGame;

function gameTimer () {
  endGame = setTimeout (gameOver, 20000); {
    function gameOver () {
      alert ( "Time is UP!" )
    }
  }
}

// setTimeout ( function() {
//     if ( secondsCount === 0 ) {
//       toggleStart.parentNode.removeChild(toggleStart);
//       alert( " play faster! " ) ;
//   }
// }, 3000 ) ;


function toggleTime() {
  if (this.getAttribute( "data-state" ) === "start") {
    this.innerHTML = "Stop Game";
    this.setAttribute ( "data-state"  , "stop" ) ;
    secondsCount = 0;
    timerInterval = setInterval (addSeconds, 1000);
  } else {
    this.innerHTML = "Start Game";
    clearInterval ( timerInterval );
    alert ( "You took" + secondsCount  + " seconds");
  }
}




toggleStart.addEventListener("click" , toggleTime);
