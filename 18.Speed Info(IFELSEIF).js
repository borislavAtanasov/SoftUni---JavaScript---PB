// ⦁	Информация за скоростта
// Да се напише функция, която получава скорост (реално число) и отпечатва информация за скоростта. 
// ⦁	При скорост до 10 (включително) отпечатайте "slow"
// ⦁	При скорост над 10 и до 50 (включително) отпечатайте "average" 
// ⦁	При скорост над 50 и до 150 (включително) отпечатайте "fast"
// ⦁	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast" 
// ⦁	При по-висока скорост отпечатайте "extremely fast"

function speedInfo(input)
{
    let speed = input.shift();
    let slow = 10;
    let average = 50;
    let fast = 150;
    let ultrafast = 1000;
        if (speed<=slow){
            console.log(`slow`)
        }
        else if (speed<=average){
            console.log(`average`)
        }
        else if (speed<=fast){
            console.log(`fast`)
        }
        else if(speed<=ultrafast){
            console.log(`ultra fast`)
        }
        else{
            console.log(`extremely fast`)
        }
}
speedInfo(["1000000"])