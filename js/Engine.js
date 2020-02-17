// The engine class will only be instantiated once. It contains all the logic
// of the game relating to the interactions between the player and the
// enemy and also relating to how our enemies are created and evolve over time
class Engine {
    // The constructor has one parameter. It will refer to the DOM node that we will be adding everything to.
    // You need to provide the DOM node when you create an instance of the class
    constructor(theRoot) {
        // We need the DOM element every time we create a new enemy so we
        // store a reference to it in a property of the instance.
        this.root = theRoot;

        // lettuce: 

        // We create our hamburger.
        // Please refer to Player.js for more information about what happens when you create a player
        this.player = new Player(this.root, 'player');
        // Initially, we have no enemies in the game. The enemies property refers to an array
        // that contains instances of the Enemy class
        this.enemies = [];
        //

        // We add the background image to the game
        addBackground(this.root);

        // ------ Score board implement.
        this.scoreBoard = new ScoreBoard();
        //------- Nyan eats the burger image to pop up with message. Pass the object theRoot which is the DIV
        this.nyaneatsBurger = new Nyaneatsburger(theRoot);
        //------- PLAY NYAN SONG.
        this.playnyanSong = new Playnyansong(theRoot);
        //------- LIVES.
        // 
        this.restartButton = document.createElement('div');
        theRoot.appendChild(this.restartButton);
        this.restartButton.id = 'restartBtn';
        this.restartButton.innerText = 'Restart';



    }
    // ------------------------------
    // RESTART GAME!!!!
    restartGame = () => {
        for (let i = 0; i <= 70; i++) {
            let healthbar = document.createElement('span')
            document.getElementById('health').appendChild(healthbar);
            healthbar.classList.add('healthBlock');
            healthbar.innerText = 'o';
        }
        this.nyaneatsBurger.hidenyanBurger();
        this.scoreBoard.score = 0;
        this.scoreBoard.levelup.innerText = "Meow";
        this.gameLoop();
        //reset enemy counter;
        MAX_ENEMIES = 3;

    }

    // The gameLoop will run every few milliseconds. It does several things
    //  - Updates the enemy positions
    //  - Detects a collision between the player and any enemy
    //  - Removes enemies that are too low from the enemies array
    gameLoop = () => {
        // This code is to see how much time, in milliseconds, has elapsed since the last
        // time this method was called.
        // (new Date).getTime() evaluates to the number of milliseconds since January 1st, 1970 at midnight.
        if (this.lastFrame === undefined) this.lastFrame = (new Date).getTime();
        let timeDiff = (new Date).getTime() - this.lastFrame;
        this.lastFrame = (new Date).getTime();
        // We use the number of milliseconds since the last call to gameLoop to update the enemy positions.
        // Furthermore, if any enemy is below the bottom of our game, its destroyed property will be set. (See Enemy.js)
        this.enemies.forEach(enemy => {
            enemy.update(timeDiff);


        });
        // We remove all the destroyed enemies from the array referred to by \`this.enemies\`.
        // We use filter to accomplish this.
        // Remember: this.enemies only contains instances of the Enemy class.
        this.enemies = this.enemies.filter(enemy => {
            return !enemy.destroyed;
        });
        // We need to perform the addition of enemies until we have enough enemies.
        while (this.enemies.length < MAX_ENEMIES) {
            // We find the next available spot and, using this spot, we create an enemy.
            // We add this enemy to the enemies array 

            const spot = nextEnemySpot(this.enemies);
            this.enemies.push(new Enemy(this.root, spot, "enemy"));
        }

        //score board increment.
        this.scoreBoard.incrementScore();
        this.scoreBoard.levelUp();
        // 
        //PLAY SONG!!!
        this.playnyanSong.playnyanSong();



        this.enemies.forEach(enemy => {

            this.player.bulletHolder.forEach(bullet => {

                if (`${enemy.x}px` === bullet.lettucePositionX && `${enemy.y}px` >= bullet.lettucePositionY) {
                    let enemyPosition = this.enemies.indexOf(enemy);
                    this.enemies.splice(enemyPosition, 1);
                    // this.player.lettuceShow.style.visibility = 'hidden';
                    enemy.domElement.style.display = 'none';
                    //
                    let bulletPosition = this.player.bulletHolder.indexOf(bullet);
                    this.player.bulletHolder.splice(bulletPosition, 1);
                    bullet.lettuceShow.style.display = 'none';


                }


            });


        });



        // We check if the player is dead. If he is, we alert the user
        // and return from the method (Why is the return statement important?)
        if (this.isPlayerDead()) {


            this.nyaneatsBurger.shownyanBurger();
            this.playnyanSong.stopnyanSong();


            let restart = document.getElementById('restartBtn');
            restart.addEventListener('click', this.restartGame);



            return;

        }

        //method


        // If the player is not dead, then we put a setTimeout to run the gameLoop in 20 milliseconds
        setTimeout(this.gameLoop, 20);
    }
    // This method is not implemented correctly, which is why
    // the burger never dies. In your exercises you will fix this method.


    isPlayerDead = () => {
        let isDead = false;
        this.enemies.forEach(enemy => {

            if (enemy.x === this.player.x && enemy.y + ENEMY_HEIGHT >= this.player.y) {
                healthcount += 1;
                let removeHealth = document.getElementById('health');
                removeHealth.removeChild(removeHealth.childNodes[0])
                isDead = false;
                if (healthcount === 70) {

                    isDead = true;

                }

            }
        });
        return isDead;
    }
}

//  CLASS ENGINE ENDS HERE. WHOLE THING IS THE CLASS.