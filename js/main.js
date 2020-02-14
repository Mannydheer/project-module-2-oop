// We create an instance of the Engine class. Looking at our index.html,
// we see that it has a div with an id of \`"app"\`  
//class create.
const gameEngine = new Engine(document.getElementById("app"));
// keydownHandler is a variable that refers to a function. The function has one parameter
// (does the parameter name matter?) which is called event. As we will see below, this function
// will be called every time the user presses a key. The argument of the function call will be an object.
// The object will contain information about the key press, such as which key was pressed. 
const keydownHandler = event => {
    // event.code contains a string. The string represents which key was press. If the
    // key is left, then we call the moveLeft method of gameEngine.player (where is this method defined?)
    if (event.code === "ArrowLeft") {
        gameEngine.player.moveLeft();
    }
    // If \`event.code\` is the string that represents a right arrow keypress,
    // then move our hamburger to the right
    if (event.code === "ArrowRight") {
        gameEngine.player.moveRight();
    }
}
//TIMER;



// We add an event listener to document. document the ancestor of all DOM nodes in the DOM.
document.addEventListener("keydown", keydownHandler);

//START BUTTON. -----------------------
let startButton = document.createElement('div');
document.getElementById('app').appendChild(startButton);
startButton.id = 'startBtn';
startButton.innerText = "Start";
startButton.style.cursor = 'pointer';
startButton.style.padding = 0;
startButton.style.margin = 0;
startButton.style.position = 'absolute';
startButton.style.textAlign = 'center';
startButton.style.border = "solid black 2px"
startButton.style.display = 'inline';
// 

let start = document.getElementById('startBtn');
start.addEventListener('click', startGame);
// -----------------------------------------
//ADD ANOTHER EVENT LISTENER THATS ALWAYS LISTENING.
//RESTART BUTTON. 
let restartButton = document.createElement('div');
document.getElementById('app').appendChild(restartButton);
restartButton.id = 'restartBtn';
restartButton.innerText = "Restart";




// We call the gameLoop method to start the game
function startGame() {
    gameEngine.gameLoop();
    start.removeEventListener('click', startGame);
    startButton.style.display = 'none';
};



//NOTES:--------------------------------
//this part of code is for kepresses of the hamburger. 
//Listenening event.s

//We are creating a new object called gameEngine. We are creating it based on our class
//new Engine, which will hold all the properties that we will be making of
//the class. 