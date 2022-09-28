// ⦁	7. Пазаруване 
// Петър иска да купи N видеокарти, M процесора и P на брой рам памет. Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:
// ⦁	Видеокарта – 250 лв./бр.
// ⦁	Процесор – 35% от цената на закупените видеокарти/бр.
// ⦁	Рам памет – 10% от цената на закупените видеокарти/бр.
// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
// Вход
// Входът се състои от четири реда:
// ⦁	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// ⦁	Броят видеокарти - цяло число в интервала [0…100]
// ⦁	Броят процесори - цяло число в интервала [0…100]
// ⦁	Броят рам памет - цяло число в интервала [0…100]
// Изход
// На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
// ⦁	Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// ⦁	Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"
// Резултатът да се форматира до втория знак след десетичната запетая.
function shopping(input)
{
    let budget = input.shift();
    let videoCardQ = input.shift();
    let cpuQ = input.shift();
    let ramQ = input.shift();
    let videoCardPrice = 250;
    let videoCardTotalPrice = videoCardQ * videoCardPrice;
    let cpuPrice = videoCardTotalPrice * 0.35
    let cpuTotalPrice = cpuPrice * cpuQ;
    let ramPrice = videoCardTotalPrice * 0.10;
    let ramPriceTotal = ramPrice * ramQ;
    let totalPrice = cpuTotalPrice + ramPriceTotal + videoCardTotalPrice;
    let totalPriceWithDiscount = totalPrice;
if (videoCardQ>cpuQ){
    totalPriceWithDiscount = totalPrice - totalPrice * 0.15;
}
else{
    totalPriceWithDiscount = totalPrice;

}
if(budget>=totalPrice){
    let difference = budget - totalPriceWithDiscount;
    console.log(`You have ${difference.toFixed(2)} leva left!`)
}
else{
    let difference = totalPriceWithDiscount - budget;
    console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`)
}
}
shopping((["920.45",
"3",
"1",
"1"]));