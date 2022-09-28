// ⦁	8. Обедна почивка
// По време на обедната почивка искате да изгледате епизод от своя любим сериал. Вашата задача е да напишете програма, с която ще разберете дали имате достатъчно време да изгледате епизода. По време на почивката отделяте време за обяд и време за отдих. Времето за обяд ще бъде 1/8 от времето за почивка, а времето за отдих ще бъде 1/4 от времето за почивка. 
// Вход
// От конзолата се четат 3 реда:
// ⦁	Име на сериал – текст
// ⦁	Продължителност на епизод  – цяло число в диапазона [10… 90]
// ⦁	Продължителност на почивката  – цяло число в диапазона [10… 120]
// Изход
// На конзолата да се изпише един ред:
// ⦁	Ако времето е достатъчно да изгледате епизода: 
// "You have enough time to watch {име на сериал} and left with {останало време} minutes free time."
// ⦁	Ако времето не Ви е достатъчно:
// "You don't have enough time to watch {име на сериал}, you need {нужно време} more minutes."
// Времето да се закръгли до най-близкото цяло число нагоре.

function lunchBreak(input)
{
    let serialName = input.shift();
    let timePerEpisode = Math.trunc(input.shift());
    let lunchBreakTime = Math.trunc(input.shift());
    let lunchTime = lunchBreakTime / 8;
    let restTime = lunchBreakTime / 4;
    let timeForEpisode = lunchBreakTime - lunchTime - restTime;
    let difference = 0;
        if(timePerEpisode<=timeForEpisode){
            difference = timePerEpisode - timeForEpisode;
            console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(difference)} minutes free time.`)
        }
else{
    difference = timePerEpisode - timeForEpisode;
    console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(difference)} more minutes.`)
}
}
lunchBreak(["Teen Wolf",
"48",
"60"])
