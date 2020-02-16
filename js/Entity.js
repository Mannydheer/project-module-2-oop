class Entity {
    constructor(root, type, enemySpot) {

        this.x = 0;
        this.y = 0;
        if (type === 'player') {
            this.x = 3 * PLAYER_WIDTH;
            this.y = GAME_HEIGHT - PLAYER_HEIGHT - 10;

        } else if (type === 'enemy') {
            this.x = enemySpot * ENEMY_WIDTH;
            this.y = -ENEMY_HEIGHT;

        }
        // We create a DOM node. We will be updating the DOM node every time we move the player, so we store a reference to the

        this.domElement = document.createElement("img");
        this.domElement.src = `images/${type}.png`;
        this.domElement.style.position = 'absolute';
        this.domElement.style.left = `${this.x}px`;
        this.domElement.style.top = ` ${this.y}px`;
        this.domElement.style.zIndex = '10';
        root.appendChild(this.domElement);


    }

}