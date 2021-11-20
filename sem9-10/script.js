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

