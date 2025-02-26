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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
} else {
    window.Port = Port;
}