class Nyaneatsburger {

    constructor(root) {

        // constructer will implement this - create an image with the burger. s
        this.nyanburgerPic = document.createElement('img');
        this.nyanburgerPic.src = ("./images/nyaneatsBurger.gif");
        root.appendChild(this.nyanburgerPic);
        this.nyanburgerPic.id = 'nyanBurger';
        this.nyanburgerPic.style.opacity = 0;
        //styling.
        this.nyanburgerPic.style.width = '530px';
        this.nyanburgerPic.style.height = '750px';
        this.nyanburgerPic.style.position = 'absolute';
        this.nyanburgerPic.style.top = 0;
        this.nyanburgerPic.style.left = 0;
        //construct sound.

    }

    shownyanBurger = () => {
        //this here is HOW I WANT TO MANIPULATE the img. What I want to do with it. 
        this.nyanburgerPic.style.opacity = 100;
    }
    hidenyanBurger = () => {
        this.nyanburgerPic.style.opacity = 0;
    }
}