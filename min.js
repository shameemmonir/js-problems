const prices = [20000, 16000, 50000, 10000, 12000, 30000, 35000];

function getMin(numbers) {
    // console.log(numbers);
    let min = numbers[0];
    for (const num of numbers) {
        // console.log(num);
        if (num < min) {
            min = num
        }
    }
    return min;
}

const cheap = getMin(prices);
console.log('cheapest one is:', cheap);