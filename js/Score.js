let score = 3;

//ASK why span has to come before everything in the HTML.
class ScoreBoard {

    constructor() {
        this.score = 0;
        this.levelup;
        let scoreSpan = document.createElement('span');
        document.getElementById('app').appendChild(scoreSpan);
        scoreSpan.id = 'scoreTarget';
        scoreSpan.style.fontSize = '50px'
        scoreSpan.style.color = 'white';
        scoreSpan.style.position = 'absolute';
        scoreSpan.style.top = '10px';
        scoreSpan.style.left = '10px';

        //
        let lvlSpan = document.createElement('span');
        document.getElementById('app').appendChild(lvlSpan);
        lvlSpan.id = 'lvlTarget';
        lvlSpan.style.fontSize = '50px';
        lvlSpan.style.color = 'white';
        lvlSpan.style.position = 'absolute';
        lvlSpan.style.top = '50px';
        lvlSpan.style.left = '300px';

        //ENEMY COUNTER:
        let enemyCount = document.createElement('span');
        document.getElementById('app').appendChild(enemyCount);
        enemyCount.id = 'enemyCounter';



        //Have a "method" that you will call within this constructor. 
    }

    incrementScore = () => {
        this.score = this.score + 1;
        //Retarget the span ID to updat the score.
        let displayScore = document.getElementById('scoreTarget')
        displayScore.innerText = this.score;
        // return this.score;
    }

    levelUp = () => {

        if (this.score % 100 === 0) {
            this.levelup = document.getElementById('lvlTarget')
            let levelConvert = this.score / 100;
            MAX_ENEMIES += 1;
            this.levelup.innerText = "Lvl " + levelConvert;

            //
            this.enemyCounter = document.getElementById('enemyCounter');
            this.enemyCounter.innerHTML = `# of Enemies: ${MAX_ENEMIES}`;
        }

        // return this.score;
    }

    // 
    //    getScore = () => {
    // }



    //METHODS HERE.
}



//When creating a class
//define the attributes that you want : All the things that might change.
//constructor: What is a car?
// constrcutor an object.
//methods, are how you can manioulate that object. outside of the contructor.