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


console.log('Задание 8'); // Список.

let arr = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: null
        }
    }
};
var arrayToList = function (arr) {
    var result = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        result = {
            value: arr[i],
            rest: result
        }
    }
    return result;
}

var listToArray = function (list) {
    var result = [];
    do {
        result.push(list.value);
        list = list.rest;
    } while (list !== null)
    return result;
};

var prepend = function (el, list) {
    return {
        value: el,
        rest: list
    }
}

var nth = function (list, ind) {
    if (!list) {
        return undefined;
    } else if (ind === 0) {
        return list.value
    } else {
        return nth(list.rest, ind - 1)
    }
}

console.log(arrayToList([4, 5]));
console.log(listToArray(arrayToList([4, 5, 6])));
console.log(prepend(10, prepend(4, null)));
console.log(nth(arrayToList([4, 5, 6]), 0));

console.log('\n');


console.log('Задание 9'); // Глубокое сравнение

var deepEqual = function (a, b) {
    if (a === b) {
        return true;
    } else if ((typeof a == "object" && a != null) && (typeof b == "object" && b != null)) {
        if (Object.keys(a).length != Object.keys(b).length)
            return false;

        for (var prop in a) {
            if (b.hasOwnProperty(prop)) {
                if (!deepEqual(a[prop], b[prop]))
                    return false;
            } else
                return false;
        }

        return true;
    } else
        return false;
}
var obj = {here: {is: "an", other: "3"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", other: "3"}, object: 2}));
// → true

console.log('\n');


console.log('Задание 10'); // Свертка

var arrays = [[1], [2, 3, 4, 5], [6, 7], [8, 9, 10]];
console.log(arrays);
arrays = arrays.reduce(function (a, b) {
    return a.concat(b);
});
console.log(arrays);

console.log('\n');


console.log('Задание 11'); // Разница в возрасте матерей и их детей

let data = [
    {name: "Carolus Haverbeke", sex: "m", born: 1832, died: 1905, father: "Carel Haverbeke", mother: "Maria van Brussel"},
    {name: "Emma de Milliano",sex: "f",born: 1876,died: 1956,father: "Petrus de Milliano",mother: "Sophia van Damme"},
    {name: "Maria de Rycke",sex: "f",born: 1683,died: 1724,father: "Frederik de Rycke",mother: "Laurentia van Vlaenderen"},
    {name: "Jan van Brussel",sex: "m",born: 1714,died: 1748,father: "Jacobus van Brussel",mother: "Joanna van Rooten"},
    {name: "Philibert Haverbeke",sex: "m",born: 1907,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
    {name: "Jan Frans van Brussel",sex: "m",born: 1761,died: 1833,father: "Jacobus Bernardus van Brussel",mother: null},
    {name: "Pauwels van Haverbeke",sex: "m",born: 1535,died: 1582,father: "N. van Haverbeke",mother: null},
    {name: "Clara Aernoudts",sex: "f",born: 1918,died: 2012,father: "Henry Aernoudts",mother: "Sidonie Coene"},
    {name: "Emile Haverbeke",sex: "m",born: 1877,died: 1968,father: "Carolus Haverbeke",mother: "Maria Sturm"},
    {name: "Lieven de Causmaecker",sex: "m",born: 1696,died: 1724,father: "Carel de Causmaecker",mother: "Joanna Claes"},
    {name: "Pieter Haverbeke",sex: "m",born: 1602,died: 1642,father: "Lieven van Haverbeke",mother: null},
    {name: "Livina Haverbeke",sex: "f",born: 1692,died: 1743,father: "Daniel Haverbeke",mother: "Joanna de Pape"},
    {name: "Pieter Bernard Haverbeke",sex: "m",born: 1695,died: 1762,father: "Willem Haverbeke",mother: "Petronella Wauters"},
    {name: "Lieven van Haverbeke",sex: "m",born: 1570,died: 1636,father: "Pauwels van Haverbeke",mother: "Lievijne Jans"},
    {name: "Joanna de Causmaecker",sex: "f",born: 1762,died: 1807,father: "Bernardus de Causmaecker",mother: null},
    {name: "Willem Haverbeke",sex: "m",born: 1668,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Pieter Antone Haverbeke",sex: "m",born: 1753,died: 1798,father: "Jan Francies Haverbeke",mother: "Petronella de Decker"},
    {name: "Maria van Brussel",sex: "f",born: 1801,died: 1834,father: "Jan Frans van Brussel",mother: "Joanna de Causmaecker"},
    {name: "Angela Haverbeke",sex: "f",born: 1728,died: 1734,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
    {name: "Elisabeth Haverbeke",sex: "f",born: 1711,died: 1754,father: "Jan Haverbeke",mother: "Maria de Rycke"},
    {name: "Lievijne Jans",sex: "f",born: 1542,died: 1582,father: null,mother: null},
    {name: "Bernardus de Causmaecker",sex: "m",born: 1721,died: 1789,father: "Lieven de Causmaecker",mother: "Livina Haverbeke"},
    {name: "Jacoba Lammens",sex: "f",born: 1699,died: 1740,father: "Lieven Lammens",mother: "Livina de Vrieze"},
    {name: "Pieter de Decker",sex: "m",born: 1705,died: 1780,father: "Joos de Decker",mother: "Petronella van de Steene"},
    {name: "Joanna de Pape",sex: "f",born: 1654,died: 1723,father: "Vincent de Pape",mother: "Petronella Wauters"},
    {name: "Daniel Haverbeke",sex: "m",born: 1652,died: 1723,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Lieven Haverbeke",sex: "m",born: 1631,died: 1676,father: "Pieter Haverbeke",mother: "Anna van Hecke"},
    {name: "Martina de Pape",sex: "f",born: 1666,died: 1727,father: "Vincent de Pape",mother: "Petronella Wauters"},
    {name: "Jan Francies Haverbeke",sex: "m",born: 1725,died: 1779,father: "Pieter Bernard Haverbeke",mother: "Livina de Vrieze"},
    {name: "Maria Haverbeke",sex: "m",born: 1905,died: 1997,father: "Emile Haverbeke",mother: "Emma de Milliano"},
    {name: "Petronella de Decker",sex: "f",born: 1731,died: 1781,father: "Pieter de Decker",mother: "Livina Haverbeke"},
    {name: "Livina Sierens",sex: "f",born: 1761,died: 1826,father: "Jan Sierens",mother: "Maria van Waes"},
    {name: "Laurentia Haverbeke",sex: "f",born: 1710,died: 1786,father: "Jan Haverbeke",mother: "Maria de Rycke"},
    {name: "Carel Haverbeke",sex: "m",born: 1796,died: 1837,father: "Pieter Antone Haverbeke",mother: "Livina Sierens"},
    {name: "Elisabeth Hercke",sex: "f",born: 1632,died: 1674,father: "Willem Hercke",mother: "Margriet de Brabander"},
    {name: "Jan Haverbeke",sex: "m",born: 1671,died: 1731,father: "Lieven Haverbeke",mother: "Elisabeth Hercke"},
    {name: "Anna van Hecke",sex: "f",born: 1607,died: 1670,father: "Paschasius van Hecke",mother: "Martijntken Beelaert"},
    {name: "Maria Sturm",sex: "f",born: 1835,died: 1917,father: "Charles Sturm",mother: "Seraphina Spelier"},
    {name: "Jacobus Bernardus van Brussel",sex: "m",born: 1736,died: 1809,father: "Jan van Brussel",mother: "Elisabeth Haverbeke"}
  ];

function average(array) {
    function plus(a, b) {
        return a + b;
    }

    return array.reduce(plus) / array.length;
}

var byName = {};

data.forEach(function (person) {
    byName[person.name] = person;
});

var differences = data.filter(function (person) {
    return byName[person.mother] != null;
}).map(function (person) {
    return person.born - byName[person.mother].born;
});
console.log("Средний возраст:");
console.log(average(differences));

console.log('\n');


console.log('Задание 12'); // Историческая ожидаемая продолжительность жизни

function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
}

var byCenturies = {}

function groupBy(arr, func){ 
    var groupObj = {};
    arr.forEach(function(p){
        var id = func(p);
        if ( groupObj[id] === undefined ) {
            groupObj[id] = [];
        }
        groupObj[id].push( p )
    });
    return groupObj;
}

function getCentury(p) {
    return Math.ceil(p.died / 100);
}

var byCenturies = groupBy( data, getCentury );

for ( century in byCenturies ) {
    byCenturies[century] = average( byCenturies[century].map(function(p){ return p.died - p.born }) );
    console.log( century + ": " + byCenturies[century] );
}

console.log('\n');


console.log('Задание 13'); // Every и some

function every(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i])) {
            return false
        }
    }
    return true;
};

function some(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return true
        }
    }
    return false;
};


console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false