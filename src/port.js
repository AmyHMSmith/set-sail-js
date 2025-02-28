// function invoked as soon as it is declared () at end of wrapper
(function exportPort() {
    class Port {
        constructor(name) {
            this.name = name;
            this.dockedShips = [];
        };

        addShip(ship) {
            this.dockedShips.push(ship);
        };

        removeShip(ship) {
            this.dockedShips = this.dockedShips.filter(ship => ship !== ship);
        };
    }
    // check if in Node.js env
    if (typeof module !== 'undefined' && module.exports) {
        // if yes, then export Port from the module
        module.exports = Port;
    } else {
        // otherwise attach the Port object to the window object in the browser environment
        window.Port = Port;
    }
}());