const jim = 56;
const tim = 89;
const kim = 68;;

if (jim > tim && jim > kim) {
    console.log('Jim is ultimate boss');
}
else if (tim > jim && tim > kim) {
    console.log('Tim is boos');
}
else {
    console.log('kim is real boss')
}

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}
const max = maxOfThree(20, 40, 30);
console.log(max);

const maximum = Math.max(12, 45, 656, 58, 25, 23);
console.log('max is using Math.max', maximum);