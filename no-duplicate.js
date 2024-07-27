const biryanikhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61, 5];

function noDuplicate(array) {
    const unique = []
    for (item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryanikhor);
// console.log(uniqueArray);

function noDuplicate2(array) {
    const uniqueNumber = [];
    for (number of array) {
        if (uniqueNumber.includes(number) === false) {
            uniqueNumber.push(number);
        }
    }
    return uniqueNumber;
}
const uniqueArray2 = noDuplicate2(numbers);
console.log(uniqueArray2);