class Lettuce {
    constructor(x, y) {


        this.lettuceShow = document.createElement('img');
        this.lettuceShow.classList.add('lettuceClass');
        this.lettuceShow.src = 'images/Vegetable-106-512.png';
        document.getElementById('app').appendChild(this.lettuceShow);
        this.lettuceShow.style.position = 'absolute';
        this.lettuceShow.style.left = x;
        this.lettuceShow.style.top = y - 50;

        let lettuceProgress = 0;
        let timer = setInterval(() => {
            lettuceProgress += 1;
            this.lettuceShow.style.top = y - 50 - lettuceProgress;
            //for collision
            this.lettucePositionY = this.lettuceShow.style.top;
            this.lettucePositionX = this.lettuceShow.style.left;

        }, 10);

    }
}