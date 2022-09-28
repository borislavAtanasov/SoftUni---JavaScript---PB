// ⦁	Отлична оценка
// Първата задача от тази тема е да се напише функция, която чете оценка, получена като аргумент и отпечатва "Excellent!", ако оценката е 5.50 или по-висока.
function result(input)
{
    let points = input.shift();
if (points>=5.50){
    console.log(`Excellent!`)
}
}
result([`5.40`])