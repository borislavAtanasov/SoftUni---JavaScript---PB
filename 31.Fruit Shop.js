// ⦁	Магазин за плодове
// Магазин за плодове през работните дни работи на следните цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	 2.50	1.20	 0.85	    1.45	2.70	5.50	    3.85
// Събота и неделя магазинът работи на по-високи цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	 2.70	 1.25	0.90	1.60	    3.00	5.60	    4.20
// Напишете функция, която получава аргументи:плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число) и пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 

function fruitShop(input){
    let fruit = input.shift();
    let day = input.shift();
    let qty = input.shift();
    let productPrice = 0;
    let finalPrice = 0;

    if (day=='Monday' || day=='Tuesday' || day=='Wednesday' || day=='Thursday' || day=='Friday') {
            switch (fruit) {
                case "banana":
                    productPrice = 2.50;
                    break;
                case "apple":
                    productPrice = 1.20;
                    break;
                case "orange":
                    productPrice = 0.85;
                    break;
                case "grapefruit":
                    productPrice = 1.45;
                    break;
                case "kiwi":
                    productPrice = 2.70;
                    break;
                case "pineapple":
                    productPrice = 5.50;
                    break;
                case "grapes":
                    productPrice = 3.85;
                    break;
            
                default:
                    console.log(`error`)
                    break;
              
            }
            if(productPrice==0){

            }
            else{
            finalPrice = productPrice*qty;
            console.log(finalPrice.toFixed(2))
            }
    }
    else if(day=="Saturday" || day=="Sunday"){
        switch (fruit) {
            case "banana":
                productPrice = 2.70;
                break;
            case "apple":
                productPrice = 1.25;
                break;
            case "orange":
                productPrice = 0.90;
                break;
            case "grapefruit":
                productPrice = 1.60;
                break;
            case "kiwi":
                productPrice = 3;
                break;
            case "pineapple":
                productPrice = 5.60;
                break;
            case "grapes":
                productPrice = 4.20;
                break;
        
            default:
                console.log(`error`)
                break;
          
        }
        if (productPrice==0) {
            
        } else {
            finalPrice = productPrice*qty;
            console.log(finalPrice.toFixed(2))
        }

    }
    else{
        console.log(`error`)
    }
}
fruitShop(["tomato",
"Sunday",
"0.5"])

