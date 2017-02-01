function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        return 'Nie prawidłowe dane';
    }
    return a * h / 2;
}

var triangleArea1 = getTriangleArea(4, 6);
var triangleArea2 = getTriangleArea(12, 4);
var triangleArea3 = getTriangleArea(4, 33);
var triangleArea4 = getTriangleArea(-4, 3);
var triangleArea5 = getTriangleArea(2, -6);
var triangleArea6 = getTriangleArea(1, 6);

console.log('Pole pierwszego trojkata wynosi: ' + triangleArea1);
console.log('Pole drugiego trojkata wynosi: ' + triangleArea2);
console.log('Pole trzeciego trojkata wynosi: ' + triangleArea3);
console.log('Pole czwartego trojkata wynosi: ' + triangleArea4);
console.log('Pole piątego trojkata wynosi: ' + triangleArea5);
console.log('Pole szóstego trojkata wynosi: ' + triangleArea6);