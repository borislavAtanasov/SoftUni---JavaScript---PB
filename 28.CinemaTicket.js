// ⦁	Билет за кино
// Да се напише функция, която получава ден от седмицата (текст) и принтира на конзолата цената на билет за кино според деня от седмицата:
// Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
// 12	        12	    14	        14	        12	    16	    16


function cinemaCity(input){
    let day = input.shift();
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log(`12`);
            
            break;
        case "Wednesday":
        case "Thursday":
            console.log(`14`);
            break;
        case "Saturday":
        case "Sunday":
            console.log(`16`);
            break;

        default:
            break;
    }

}
cinemaCity(["Sunday"])