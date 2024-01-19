class Circle {
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
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}
 
module.exports = Circle;