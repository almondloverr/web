console.log('Задание 1'); // Напишите цикл,  выводит треугольник из #
for (let i = 1; i < 8; i++){
	console.log('#'.repeat(i));
}

console.log('Задание 2'); // Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
for (let i = 1; i < 101; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i, 'FizzBuzz');
    } 
    else if (i % 3 == 0) {
        console.log(i, 'Fizz');
    } 
    else if (i % 5 == 0) {
        console.log(i, 'Buzz');
    }
}

console.log('Задание 3'); // Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #.
let chess = '\n';
for (let row = 1; row < 9; row++) {
    for (let column = 1; column < 9; column++) {
        if ((row % 2) == (column % 2)) {
            chess += '#';
        } else {
            chess += ' ';
        }
    }
    chess += '\n';  
}
console.log(chess);

console.log('Задание 4'); // Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log('Задание 5'); // Считаем бобы. 
function countBs(str, value){
    let count = 0;
    for (let i = 1; i <= (str.length - 1); i++) {
        if (str.charAt(i) == value) {
            count += 1;
        }
    }
    return console.log(`Количество букв ${value} в строке ${str} равно ${count}`);
}
countBs('Here is our string', 'e');

console.log('Задание 6'); // Сумма диапазона. 
function range(start, end, step) {
    var i = start;
    arr = [];
    if (!step) {  
        step = 1
    }
    if (step < 0) {
        start = end; 
        end = i;
    }
    for (; i >= start && i <= end; i += step) {  // Переменнаяя уже объявлена
        arr.push(i); 
    }
    return arr;
}

function sum(arr) {
    var counter = arr[0];
    for (var i = arr[0]; i < arr.length; i++) {
        counter += arr[i];
    }
    return counter
}

console.log('Sum of the range(1, 10): ' + sum(range(1, 10)));
console.log('Range (5, 2, -1): ' + range(5, 2, -1));


console.log('Задание 7')  // Обращаем массив вспять.
function reverseArray(array){
    var newArray1 = [];
    for (var i = array.length; i > 0; i--){
        newArray1.push(array.pop());
    }
    return newArray1;
}
  
function reverseArrayInPlace(array){ 
    var newArray2 = [];
    for (var i = array.length; i > 0; i--){
        newArray2.push(array.pop()); 
    }
    for (var j = newArray2.length; j > 0; j--){
        array.unshift(newArray2.pop());  
    }
    return array;
};

console.log('Reverse of [1, 2, 3] by reverseArray: '+reverseArray([1, 2, 3]));
var array3 = [1, 2, 3]; 
console.log('Reverse of array3=[1, 2, 3] by reverseArrayInPlace: '+reverseArrayInPlace(array3));