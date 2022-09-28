// ⦁	Обръщение според възраст и пол
// Да се напише функция, която получава възраст (реално число) и пол ('m' или 'f'), въведени от потребителя, и отпечатва обръщение измежду следните:
// ⦁	"Mr." – мъж (пол 'm') на 16 или повече години
// ⦁	"Master" – момче (пол 'm') под 16 години
// ⦁	"Ms." – жена (пол 'f') на 16 или повече години
// ⦁	"Miss" – момиче (пол 'f') под 16 години

function personalTitles(input)
{
    let age = Number(input.shift());
    let sex = input.shift();
    if (age<"16"){
        if (sex=="m"){
            console.log(`Master`);
        }
        else if(sex=="f"){
            console.log(`Miss`)
        }
    }
    else if(age>="16"){
        if (sex=="m"){
            console.log(`Mr.`)
        }
        else if(sex=="f"){
            console.log(`Ms.`)
        }
    }
}
personalTitles(["4.5",
"m"])