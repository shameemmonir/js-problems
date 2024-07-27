// task-01: convert temperature from celsius to fahrenheit

function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 33.8;
    return fahrenheit;
}

const todayTemperature = celsiusToFahrenheit(10);
// console.log(todayTemperature);

// task-2:Write a function to count the number of vowels in a string.

function vowels(string) {
    let counter = 0;
    let letter = '';
    for (let i = 0; i < string.length; i++) {
        letter = string[i].toLowerCase();
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            counter++;
        }
    }
    return counter;
}
vowels('AaBbCcDdEe');


// task-3: Generate a random number between 10 to 20.

    const randomNumber = Math.floor(Math.random()*(20-10))+10;
    console.log(randomNumber)
