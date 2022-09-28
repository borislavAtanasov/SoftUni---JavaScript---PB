// ⦁	Лодка за риболов
// Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб. Цената за наемане на кораба зависи от сезона и броя рибари.
// Цената зависи от сезона:
// ⦁	Цената за наем на кораба през пролетта е  3000 лв.
// ⦁	Цената за наем на кораба през лятото и есента е  4200 лв.
// ⦁	Цената за наем на кораба през зимата е  2600 лв.
// В зависимост от броя си групата ползва отстъпка:
// ⦁	Ако групата е до 6 човека включително  –  отстъпка от 10%.
// ⦁	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// ⦁	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
// Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
// Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 
// Вход
// Приемат се 3 аргумента:
// ⦁	Бюджет на групата – цяло число в интервала [1…8000]
// ⦁	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
// ⦁	Брой рибари – цяло число в интервала [4…18]
// Изход
// Да се отпечата на конзолата един ред:
// ⦁	Ако бюджетът е достатъчен:
// "Yes! You have {останалите пари} leva left."
// ⦁	Ако бюджетът НЕ Е достатъчен:
// "Not enough money! You need {сумата, която не достига} leva."
// Сумите трябва да са форматирани с точност до два знака след десетичната запетая.

function FishingBoat(input) {
    let budget = Number(input.shift());
    let season = String(input.shift());
    let fishers = Number(input.shift());
    let boatPrice = Number(0);
    let difference = Number(0);
    let discount = Number(0);
    switch (season) {
        case "Summer":
            boatPrice = 4200
            break;
        case "Winter":
            boatPrice = 2600
            break;
        case "Autumn":
            boatPrice = 4200
            break;
        case "Spring":
            boatPrice = 3000
            break;
    
        default :
            break;
    }
    if (fishers <=6) {
        discount = 0.1;
    }
    else if(fishers>6 && fishers <12){
        discount = 0.15;
    }
    else{
        discount = 0.25
    }
    let finalPrice = boatPrice - boatPrice * discount;
    if(fishers % 2 == 0 && season !== "Autumn"){
        finalPrice *= 0.95;
    }
    if (finalPrice <= budget) {
        difference = budget - finalPrice;
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`)
    } else {
        difference = finalPrice - budget;
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`)
    }


}
FishingBoat(["2000",
"Winter",
"13"])
