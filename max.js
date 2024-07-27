const disha = 165;
const salman = 95;

if (disha > salman) {
    console.log('Disha will get the strawberry');
}
else {
    console.log('Salman will eat strawberry');
}

function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}

const max = getMax(100, 199);
console.log(max)