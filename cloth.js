function clothQuantity(shirtQuantity, pantQuantity, shoeQuantity) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const shirtTotalPrice = shirtQuantity * shirtPrice;
    const pantTotalPrice = pantQuantity * pantPrice;
    const shoeTotalPrice = shoeQuantity * shoePrice;

    const totalCloth = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalCloth;
}

const totalClothPrice = clothQuantity(1, 1, 2);
console.log(totalClothPrice);