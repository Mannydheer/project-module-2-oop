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

    if (event.code === "ArrowUp") {
        gameEngine.player.shoot();
    }
}
//TIMER;

//add event listener for shooting.



// We add an event listener to document. document the ancestor of all DOM nodes in the DOM.
document.addEventListener("keydown", keydownHandler);

//START BUTTON. -----------------------
let startButton = document.createElement('div');
document.getElementById('app').appendChild(startButton);
startButton.id = 'startBtn';
startButton.innerText = "Start";

// 

let start = document.getElementById('startBtn');
start.addEventListener('click', startGame);
// -----------------------------------------
//HEALTH BAR: 
let health = document.createElement('div');
document.getElementById('app').appendChild(health);
health.id = "health";
let healthcount = 0;

//for loop for details of health bar. 
for (let i = 0; i <= 70; i++) {
    let healthbar = document.createElement('span');
    document.getElementById('health').appendChild(healthbar);
    healthbar.classList.add('healthBlock');
    healthbar.innerText = 'o';
}


// INSTRUCTIOMS
let instruction = document.createElement('div');
document.getElementById('app').appendChild(instruction);
instruction.id = 'instruction';
instruction.innerHTML = 'Welcome to Burger Eats Cats: Instructions!!!' + 'Move with LEFT and RIGHT arrow KEYS. Shoot with UP arrow key (Sorry if it doesnt work too well).' +
    'You have a health bar and the number of enemies increase as you LVL up!';





// We call the gameLoop method to start the game
function startGame() {
    gameEngine.gameLoop();
    start.removeEventListener('click', startGame);
    startButton.style.display = 'none';
    let menu = document.getElementById('instruction');
    menu.style.display = 'none';
};

// function restartGame() {
//     location.reload();
// }






//NOTES:--------------------------------
//this part of code is for kepresses of the hamburger. 
//Listenening event.s

//We are creating a new object called gameEngine. We are creating it based on our class
//new Engine, which will hold all the properties that we will be making of
//the class. 