// const sum = require('./sum.js'); // referencia relativa - CommonJS
import sum from './sum.js'; // ES2015
import './image_viewer'; // Solo se ejecuta este archivo ; no hay un export en image_viewer.js

total = sum(10, 5);

console.log(total);