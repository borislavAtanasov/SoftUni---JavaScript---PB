// ⦁	По-голямото число
// Да се напише функция, която получава две цели числа и отпечатва по-голямото от двете. 
function greaterNumber(input)
{
    let a = input.shift();
    let b = input.shift();
if(a>b)
{
    console.log(a);
}
else{
    console.log(b);
}
}
greaterNumber(["-5", "5"])