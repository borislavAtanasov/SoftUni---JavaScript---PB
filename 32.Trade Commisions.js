// ⦁	Търговски комисионни
// Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:
// Град	    0 ≤ s ≤ 500	    500 < s ≤ 1 000	    1 000 < s ≤ 10 000	   s > 10 000
// Sofia	5%	            7%	                        8%	            12%
// Varna	4.5%	        7.5%	            10%	                    13%
// Plovdiv	5.5%	        8%	                12%	                    14.5%
// Напишете функция, която  получава име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error". 


function tradecommision(input){
    let city = input.shift();
    let salesVolume = Number(input.shift());
    let commisionPercent = 0;

    switch (city) {
        case "Sofia":
            if (salesVolume>=0 && salesVolume <=500) {
                commisionPercent = 0.05;
            }
            else if(salesVolume>=500 && salesVolume <=1000){
                commisionPercent = 0.07
            }
            else if(salesVolume>=1000 && salesVolume <=10000){
                commisionPercent = 0.08
            }
            else if(salesVolume>10000){
                commisionPercent = 0.12
            }
            else{
                console.log('error')
            }
            break;
        case "Varna":
            if (salesVolume>=0 && salesVolume <=500) {
                commisionPercent = 0.045;
            }
            else if(salesVolume>=500 && salesVolume <=1000){
                commisionPercent = 0.075
            }
            else if(salesVolume>=1000 && salesVolume <=10000){
                commisionPercent = 0.10
            }
            else if(salesVolume>10000){
                commisionPercent = 0.13
            }
            else{
                console.log('error')
            }
            break;
         case "Plovdiv":
            if (salesVolume>=0 && salesVolume <=500) {
                commisionPercent = 0.055;
            }
            else if(salesVolume>=500 && salesVolume <=1000){
                commisionPercent = 0.08
            }
            else if(salesVolume>=1000 && salesVolume <=10000){
                commisionPercent = 0.12
            }
            else if(salesVolume>10000){
                commisionPercent = 0.145
            }
            else{
                console.log('error')
            }
            break;     
    
        default:
            console.log('error')
            break;
    }
    let comision = salesVolume*commisionPercent;
    if(comision<=0){

    }
    else{
    console.log(comision.toFixed(2));
    }
}
tradecommision(["Kaspichan",
"-50"])