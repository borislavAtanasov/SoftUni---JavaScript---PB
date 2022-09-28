// ⦁	Пътешествие
// Странно, но повечето хора си плануват отрано почивката. Млад програмист разполага с определен бюджет и свободно време в даден сезон. Напишете функция, която да получава бюджета и сезона и на изхода да изкарва, къде ще почива програмистът и колко ще похарчи.
// Бюджета определя дестинацията, а сезона определя колко от бюджета ще изхарчи. Ако е лято ще почива на къмпинг, а зимата в хотел. Ако е в Европа, независимо от сезона ще почива в хотел. Всеки къмпинг или хотел, според дестинацията, има собствена цена която отговаря на даден процент от бюджета: 
// ⦁	При 100лв. или по-малко – някъде в България
// ⦁	Лято – 30% от бюджета
// ⦁	Зима – 70% от бюджета
// ⦁	При 1000лв. или по малко – някъде на Балканите
// ⦁	Лято – 40% от бюджета
// ⦁	Зима – 80% от бюджета
// ⦁	При повече от 1000лв. – някъде из Европа
// ⦁	При пътуване из Европа, независимо от сезона ще похарчи 90% от бюджета.
// Вход
// Приемат се 2 аргумента :
// ⦁	Първи– Бюджет, реално число в интервала [10.00...5000.00].
// ⦁	Втори–  Един от двата възможни сезона: "summer" или "winter"
// Изход

function trip(input){
    let budget = Number(input.shift());
    let season = input.shift();
    let vacPrice = Number(0);
    let destination = `none`;
    let type = `none`;

    if (budget<=100){
        if (season=="summer") {
            vacPrice = budget*0.3;
            destination = 'Bulgaria';
            type = `Camp`;
        }
        else{
            vacPrice = budget*0.7;
            destination = 'Bulgaria';
            type = `Hotel`;
        }
    }
    else if (budget>100 && budget<=1000) {
        if (season=="summer") {
            vacPrice = budget*0.4;
            destination = 'Balkans';
            type = `Camp`;
        }
        else{
            vacPrice = budget*0.8;
            destination = 'Balkans';
            type = `Hotel`;
        }
        
    }
    else{
        if (season=="summer") {
            vacPrice = budget*0.9;
            destination = 'Europe';
            type = `Hotel`;
        }
        else{
            vacPrice = budget*0.9;
            destination = 'Europe';
            type = `Hotel`;
        }
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${vacPrice.toFixed(2)}`)
}
trip(["1500", "winter"])


// На конзолата трябва да се отпечатат два реда.
// ⦁	Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
// ⦁	Втори ред – "{Вид почивка} – {Похарчена сума}"
// ⦁	Почивката може да е между "Camp" и "Hotel"
// ⦁	Сумата трябва да е закръглена с точност до вторият знак след запетаята.
