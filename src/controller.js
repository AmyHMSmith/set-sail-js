function Controller () {
    this.initialiseSea();
    }

    Controller.prototype.initialiseSea = function initialiseSea() {
        const background = [
            './images/water0.png',
            './images/water1.jpg',
        ];
        let backgroundIndex = 0;
        window.setInterval(() => {
            document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
            backgroundIndex += 1;
        }, 1000);
};
