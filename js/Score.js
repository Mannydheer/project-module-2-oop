



class ScoreBoard {
    constructor() {
        let score = 0;
        let scoreSpan = document.createElement('span');
        document.getElementById('app').appendChild(scoreSpan);
        scoreSpan.innerText = score;
        scoreSpan.style.fontSize = '30px';
        scoreSpan.style.color = 'white';
        //Have a "method" that you will call within this constructor. 
    }

    incrementScore = () => {
        this.score += 1;
    }

    //METHODS HERE.
}
//When creating a class
//define the attributes that you want : All the things that might change.
//constructor: What is a car?
// constrcutor an object.
//methods, are how you can manioulate that object. outside of the contructor.