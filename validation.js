function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please provide a number';
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(5, '7');
// console.log(result);

function fullName(first, second) {
    if (typeof first !== 'string' || typeof second !== 'string') {
        return 'Please provide a string';
    }
    const full = first + ' ' + second;
    return full;
}

const full = fullName('Hafsa', 'Moni');
// console.log(full);

function getPrice(product) {
    if (typeof product !== 'object') {
        return 'Please provide a object '
    };
    const price = product.price;
    return price;
}
const price = getPrice({ name: 'chulkani dandi', price: 35, color: 'blue' });
// console.log(price);

function getSecond(numbers) {
   if (Array.isArray(numbers) === false){
        return 'Please provide an array'
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([45, 65, 2]);
console.log(second);