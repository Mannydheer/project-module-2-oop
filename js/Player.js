

// There will only be one instance of this class. This instance will contain the
// data and methods related to the burger that moves at the bottom of your screen
class Player extends Entity {
    // The constructor takes one parameter. This parameter refers to the parent DOM node.
    // We will be adding a DOM element to this parent DOM node.
    constructor(root, type) {

        super(root, type);
        
        // We create a DOM node. We will be updating the DOM node every time we move the player, so we store a reference to the
        // DOM node in a property.
        // this.domElement = document.createElement("img");
        // this.domElement.src = 'images/player.png';
        // this.domElement.style.position = 'absolute';
        // this.domElement.style.left = `${this.x}px`;
        // this.domElement.style.top =` ${this.y}px`;
        // this.domElement.style.zIndex = '10';
        // root.appendChild(this.domElement);
    }

   
    // This method will be called when the user presses the left key. See in Engine.js
    // how we relate the key presses to this method
    moveLeft() {
        if (this.x > 0) {
            this.x = this.x - PLAYER_WIDTH;
        }
        this.domElement.style.left = `${this.x}px`;
        
    }
    // We do the same thing for the right key. See Engine.js to see when this happens.
    moveRight() {
        if (this.x + PLAYER_WIDTH < GAME_WIDTH) {
            this.x = this.x + PLAYER_WIDTH;
        }
        this.domElement.style.left = `${this.x}px`;
    }
}


// ---------
