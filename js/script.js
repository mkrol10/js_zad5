function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        console.log('Nie prawidlowe dane');

    }

    return a * h / 2;

}

var triangleArea1 = getTriangleArea(4, 6);
var triangleArea2 = getTriangleArea(12, 4);
var triangleArea3 = getTriangleArea(4, 33);

console.log('Pole pierwszego trojkata wynosi: ' + triangleArea1 + '.  Pole drugiego trojkota wynosi: ' + triangleArea2 + '.  Pole trzeciego trojkata wynosi: ' + triangleArea3);