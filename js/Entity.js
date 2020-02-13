

class Entity {
    constructor(root, type) {
        
        //player
        // The x position starts off in the middle of the screen. Since this data is needed every time we move the player, we
        // store the data in a property of the instance. It represents the distance from the left margin of the browsing area to
        // the leftmost x position of the image.
        this.x = 3 * PLAYER_WIDTH;
        
        // The y position never changes, so we don't need to store it in a property. It represents the y position of the top of the
        // hamburger. The y position is the distance from the top margin of the browsing area.
        this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;
       
        this.domElement = document.createElement("img");
        this.domElement.src = `images/${type}.png`;
        this.domElement.style.position = 'absolute';
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top =` ${this.y}px`;
        this.domElement.style.zIndex = '10';
        root.appendChild(this.domElement);


    }
        
}
