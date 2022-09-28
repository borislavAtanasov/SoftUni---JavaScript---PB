// ⦁	Кино
// В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции с билети на различни цени:
// ⦁	Premiere – премиерна прожекция, на цена 12.00 лева.
// ⦁	Normal – стандартна прожекция, на цена 7.50 лева.
// ⦁	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
// Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала. Резултатът да се отпечата във формат като в примерите по-долу, с 2 знака след десетичната точка.  

function cinemaCity(input){
    let type = input.shift();
    let row = Number(input.shift());
    let collum = Number(input.shift());
    let ticketPrice = 0;
    switch (type) {
        case "Premiere":
            ticketPrice = 12;
            
            break;
        case "Normal":
            ticketPrice = 7.5;
            
            break;
        case "Discount":
            ticketPrice = 5;
            
            break;
    
        default:
            break;
    }
    let finalPrice = ticketPrice * row * collum;
    console.log(`${finalPrice.toFixed(2)} leva`)
}
cinemaCity(["Discount",
"12",
"30"])