class Triangle {
    constructor(color) {
        this.color = color;
    }

    getCenter() {
        return { x: (50 + 100 + 0) / 3, y: (15 + 100 + 100) / 3 };
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="50,15 100,100 0,100" fill="${this.color}" />`;
    }
}

module.exports = Triangle;
