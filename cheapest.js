const phones = [
    { name: 'Samsung', price: 20000, camera: '12mp', color: 'black' },
    { name: 'Xoami', price: 18000, camera: '12mp', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '12mp', color: 'black' },
    { name: 'Iphone', price: 100000, camera: '12mp', color: 'black' },
    { name: 'walton', price: 31000, camera: '12mp', color: 'black' },
    { name: 'HTC', price: 27000, camera: '12mp', color: 'black' },
]

function getCheapestPhone(phones) {
    // console.log(phones)
    let min = phones[0];
    for (const phone of phones) {
        // console.log(phone);
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
console.log(cheap);