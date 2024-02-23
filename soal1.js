const Rectangle = require('./rectangle.js');

rec = new Rectangle(10, 5);

console.log(`Rectangle width: ${rec.width} and length: ${rec.length}`)
console.log(`Area       : ${rec.getArea()}`);
console.log(`Perimeter  : ${rec.getPerimeter()}`);