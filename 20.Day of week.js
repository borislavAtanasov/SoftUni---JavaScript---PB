// ⦁	Ден от седмицата
// Напишете функция, която получава цяло число и отпечатва ден от седмицата (на английски език), в граници [1...7] или отпечатва "Error" в случай, че въведеното число е невалидно. 

function weekDays(input){
    let a = input.shift();
    if (a==1){
        console.log(`Monday`)
    }
    else if (a==2){
        console.log(`Tuesday`)
    }
    else if (a==3){
        console.log(`Wednesday`)
    }
    else if (a==4){
        console.log(`Thursday`)
    }
    else if (a==5){
        console.log(`Friday`)
    }
    else if (a==6){
        console.log(`Saturday`)
    }
    else if (a==7){
        console.log(`Sunday`)
    }
    else{
        console.log(`Error`)
    }
}
weekDays(["7"])