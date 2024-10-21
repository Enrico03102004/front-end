import { yearUntilRetirement, addNumber, calculateArea, makeAjaxRequest } from './utils.js';

// 1. Calculate retirement
console.log(yearUntilRetirement({ year: 1987, firstName: 'John' }));

// 2. Add numbers
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. Calculate area
let radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. Make Ajax request
console.log(makeAjaxRequest('www.google.com'));
