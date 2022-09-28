// ⦁	Нов дом
// Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята, че Ви убеждава да напишете функция, която да изчисли колко  ще им струва, да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. Различните цветя са с различни цени. 
// цвете	            Роза	Далия	Лале	Нарцис	Гладиола
// Цена на брой в лева	5	    3.80	2.80	3	    2.50
// Съществуват следните отстъпки:
// ⦁	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
// ⦁	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
// ⦁	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
// ⦁	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
// ⦁	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
// Функцията получава 3 аргумента:
// ⦁	Вид цветя - текст с възможности - "Roses", "`Dahlias`", "Tulips", "Narcissus", "Gladiolus"
// ⦁	Брой цветя - цяло число в интервала [10…1000]
// ⦁	Бюджет - цяло число в интервала [50…2500]
// Да се отпечата на конзолата на един ред:
// ⦁	Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
// ⦁	Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
// Сумата да бъде форматирана до втория знак след десетичната запетая.

function newHouse(input) {
    let type = input.shift();
    let qty = Number(input.shift());
    let budget = Number(input.shift());
    let productPrice = 0;
    if (type == 'Roses') {
        if (qty >= 80) {
            productPrice = 5 - 5 * 0.1;
        }
        else { productPrice = 5; }

    }
    else if (type == `Dahlias`) {
        if (qty >= 90) {
            productPrice = 3.8 - 3.8 * 0.15;
        }
        else {
            productPrice = 3.8;
        }
    }
    else if (type == `Tulips`) {
        if (qty >= 80) {
            productPrice = 2.8 - 2.8 * 0.15;
        }
        else {
            productPrice = 2.8;
        }
    }
    else if (type == `Narcissus`) {
        if (qty < 120) {
            productPrice = 3 + 3 * 0.15;
        }
        else {
            productPrice = 3;
        }
    }
    else if (type == `Gladiolus`) {
        if (qty <= 80) {
            productPrice = 2.5 + 2.5 * 0.2;
        }
        else {
            productPrice = 2.5;
        }
    }
    else {
    }
    let totalPrice = qty * productPrice;

        if (totalPrice <= budget) {
            let difference = budget - totalPrice;
            console.log(`Hey, you have a great garden with ${qty} ${type} and ${difference.toFixed(2)} leva left.`)
        }
        else {
            let difference = totalPrice - budget;
            console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`)
        }
    }
newHouse(["Narcissus",
"0",
"100"])

