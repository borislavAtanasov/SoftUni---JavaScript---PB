// ⦁	Квартално магазинче
// Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града:
// град / продукт	coffee	water	beer	sweets	peanuts
// Sofia	        0.50	0.80	1.20	1.45	1.60
// Plovdiv	        0.40	0.70	1.15	1.30	1.50
// Varna	        0.45	0.70	1.10	1.35	1.55
// Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число), и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. 

function coffeeShop(input){
    let product = input.shift();
    let city = input.shift();
    let qty = Number(input.shift());
    let productPrice = 0;
    let finalPrice = 0;
    if (city=='Sofia') {
        switch (product) {
            case "coffee":
                productPrice = 0.50;
                break;
        
            case "water":
                productPrice = 0.80;
                break;
        
            case "beer":
                productPrice = 1.20;
                break;
        
            case "sweets":
                productPrice = 1.45;
                break;
        
            case "peanuts":
                productPrice = 1.60;
                break;
        
            default:
                console.log(`Error`);
                break;
                
        }  
        finalPrice = productPrice * qty;
        console.log(finalPrice)
        
    }
    else if (city=='Plovdiv') {
        switch (product) {
            case "coffee":
                productPrice = 0.40;
                break;
        
            case "water":
                productPrice = 0.70;
                break;
        
            case "beer":
                productPrice = 1.15;
                break;
        
            case "sweets":
                productPrice = 1.30;
                break;
        
            case "peanuts":
                productPrice = 1.50;
                break;
        
            default:
                console.log(`Error`);
                break;
                
        }  
        finalPrice = productPrice * qty;
        console.log(finalPrice)
        
    }
    else if (city=='Varna') {
        switch (product) {
            case "coffee":
                productPrice = 0.45;
                break;
        
            case "water":
                productPrice = 0.70;
                break;
        
            case "beer":
                productPrice = 1.1;
                break;
        
            case "sweets":
                productPrice = 1.35;
                break;
        
            case "peanuts":
                productPrice = 1.55;
                break;
        
            default:
                console.log(`Error`);
                break;
                
        }  
        finalPrice = productPrice * qty;
        console.log(finalPrice)
        
    }
}
coffeeShop(["beer",
"Sofia",
"6"])