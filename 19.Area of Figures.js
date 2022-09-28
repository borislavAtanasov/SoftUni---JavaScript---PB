// ⦁	Лица на фигури
// Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle). 
// ⦁	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// ⦁	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// ⦁	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// ⦁	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
// Резултатът да се закръгли до 3 цифри след десетичната запетая. 

function area(input)
{
    let figure = input.shift();
        if(figure==`square`){
            let a = input.shift();
            let squareArea = a*a;
            console.log(squareArea.toFixed(3));
        }
        else if(figure==`rectangle`) {
            let a = input.shift();
            let b = input.shift();
            let rectangleArea = a * b;
            console.log(rectangleArea.toFixed(3))
        }
        else if(figure==`circle`){
            let a = input.shift();
            let circleArea = a * a * Math.PI;
            console.log(circleArea.toFixed(3))
        }
        else if(figure==`triangle`){
            let a = input.shift();
            let b = input.shift();
            let triangleArea = 0.5 * a * b;
            console.log(triangleArea.toFixed(3));
            
        }

}
area(["triangle",
"4.5",
"20"])