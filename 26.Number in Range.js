// ⦁	Число в интервалa
// Да се напише функция, която проверява дали въведеното от потребителя число е в интервала [-100, 100] и е различно от 0 и извежда "Yes", ако отговаря на условията, или "No" ако е извън тях.

function numberInRange(input){
    let a = Number(input.shift());

    if (a>0 && a<=100) {
            console.log(`Yes`)
    }
    else if(a<0 && a>=-100){
        console.log(`Yes`)
    }
    else{
        console.log(`No`)
    }
}
numberInRange(["0"])