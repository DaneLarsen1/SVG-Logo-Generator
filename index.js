const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/shapes/circle');
const Square = require('./lib/shapes/square');
const Triangle = require('./lib/shapes/triangle');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text (keyword or hex):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape (keyword or hex):'
        }
    ]);
}

function generateSVG({ text, textColor, shape, shapeColor }) {
    let shapeObj;
    switch (shape) {
        case 'circle':
            shapeObj = new Circle(shapeColor);
            break;
        case 'triangle':
            shapeObj = new Triangle(shapeColor);
            break;
        case 'square':
            shapeObj = new Square(shapeColor);
            break;
    }

    const shapeSVG = shapeObj.render();
    const { x, y } = shapeObj.getCenter();

    return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeSVG}
            <text x="${x}" y="${y}" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="20">${text}</text>
        </svg>
    `;
}

async function main() {
    try {
        const answers = await promptUser();
        const svgContent = generateSVG(answers);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error generating SVG:', error);
    }
}

main();
