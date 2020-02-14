class Playnyansong {
    constructor(root) {

        this.soundtrack = document.createElement('audio');
        this.soundtrack.src = ("./images/nyan-cat_1.mp3");
        root.appendChild(this.soundtrack);
        this.soundtrack.id = 'nyansong';

    }

    playnyanSong = () => {
        let playSong = document.getElementById('nyansong');
        playSong.play();
    }
    stopnyanSong = () => {
        let stopSong = document.getElementById('nyansong');
        stopSong.pause();
    }
}