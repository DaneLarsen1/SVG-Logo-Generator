class Square {
    constructor(color) {
        this.color = color;
    }

    getCenter() {
        return { x: 150, y: 100 };
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = Square;
