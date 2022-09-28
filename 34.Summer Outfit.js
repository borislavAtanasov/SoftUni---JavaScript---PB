// Лято е с много променливо време и Виктор има нужда от вашата помощ. Напишете функция,  която спрямо времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече. Вашия приятел има различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от таблицата.
// Функцията получава два аргумента:
// ⦁	Градусите - цяло число в интервала [10…42]
// ⦁	Текст, време от денонощието - с възможности - "Morning", "Afternoon", "Evening"


function summerOutfit(input) {
    let degrees = Number(input.shift());
    let timeOfDay = input.shift();
    let outfit;
    let shoes;
    if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay == 'Morning') {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if (timeOfDay == 'Afternoon' || timeOfDay == 'Evening') {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    else if (degrees > 18 && degrees <= 24) {
        if (timeOfDay == 'Morning' || timeOfDay == 'Evening') {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (timeOfDay == 'Afternoon') {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }
    else if(degrees>=25){
        if (timeOfDay == 'Morning') {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        else if(timeOfDay == 'Afternoon'){
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
        else if (timeOfDay == 'Evening') {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
summerOutfit(["22",
"Afternoon"])