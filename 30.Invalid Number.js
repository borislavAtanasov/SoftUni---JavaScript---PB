// ⦁	Невалидно число
// Дадено число е валидно, ако е в диапазона [100…200] или е 0. Да се напише функция, която приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно. 

function invalidNumber(input){
    let a = Number(input.shift());
    if (a<=200 && a>=100) {
        
    } else if(a==0){
        
    }
    else{
        console.log(`invalid`)
    }
}
invalidNumber(["0"])