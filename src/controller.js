(function exportController () {
    class Controller {
        constructor(ship) {
            this.initialiseSea()
        }

        initialiseSea() {
            const backgrounds = [
                './images/water0.png',
                './images/water1.jpg',
            ];
            let backgroundIndex = 0;

            window.setInterval(() => {
                document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
                backgroundIndex += 1;
            }, 1000);
        };

        renderPorts(ports) {
            const portsElement = document.querySelector("#ports");
            portsElement.style.width = "0px";
        }
    }

    if  (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
}());
