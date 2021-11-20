// alert("Hello world");

// Взаимодействие с пользователем через браузер

// 1. Alert — вспылывающее уведомление 
alert("Что-то произошло");

// 2. Confirm — подтверждение действия 
let confirmTask = confirm("Вы согласны?"); // true/false

/* 3. Promt - ввод данных пользователем 
Функция, условие, значение по умолчанию
*/

let variable = prompt("Сколько вам лет?", 0);


// Типы данных

// 1. Тип данных Number
// Принимает значения: -беск, беск, от -(2^53)-1 до (2^53)-1
let var1 = 15;
let var2 = 3.5;
console.log(typeof var1);
console.log(typeof 2);
console.log(typeof Infinity);
console.log(typeof -Infinity);

// 2. BigInt – больше, чем инт
let varBigInt = 17459644850348503580284138238559230325; 
let varBigInt2 = 10n;
console.log(typeof varBigInt);
console.log(typeof varBigInt2);



// Математические операции
console.log('Математические операции');
console.log(`Сложение: ${var1 + var2}`);
console.log(`Вычитание: ${var1 - var2}`);
console.log(`Деление: ${var1 / var2}`);
console.log(`Умножение: ${var1 * var2}`);
console.log(`Возведение в степень: ${var1 ** var2}`);
console.log(`Остаток от деления: ${var1 % var2}`);
console.log(`---------------------\n`);


// Присвоение с мат операцией
let x = 15;


// Префиксная и постфиксная декрементация и инкрементация

// Префиксная 
++x; // сначала измение значение, потом возвращения пересенной
--x;

// Постфиксная
x++; // сначала возвращение переменной, потом ее изменение
x--;

// 3. String
let varString  = 'Простая строка';
let varString2 = "Простая строка 2";

let name = "Анастасия";
let varString3 = `Добрый день, ${name}`; // аналог f и format в Python
console.log(varString3);

let varString4 = `Тип данных переменной name, ${name}`;

// 4. Boolean - true / false
let boolVar = 5<15;
console.log(boolVar);

// 5. Неопределенные значения 

// 6. ничего


//-------------------------------------------------------------------------

// Сравнения

// Логическое И - &&
console.log(`Логическое И: ${5<15 && 30<14}`); // если левая часть фолс, то следующую он выполнять даже не будет 
// Логическое ИЛИ - ||
console.log(`Логическое ИЛИ: ${5<15 || 30<14}`);


// === - сравнение на идентичность 

let one = null;
console.log(one == undefined);
console.log(one === undefined);

let two = '';
console.log(two==false); //вернет тру
console.log(two===false); // вернет фолс (хоть и равны, не идентичны)

// IF ELSE
if (15<3) {
    // тело условия
} else if(13<3) {
    // тело условия 2
} else if(6<3) {
    // тело условия 2
} else {
    // тело else
}

// Тернарный оператор
// не поняла, надо узнать 


// SWITCH case
let month = "июль";

switch(month){
    case "Январь":
        alert("Данный месяц Январь");
        break;
    case "Июль":
        alert("Данный месяц Июль");
        break;
    case "Декабрь":
        alert("Данный месяц Декабрь");
        break;
    default:
        alert("Вы неверно ввели данные");
        breat;
}

// SWITCH case когда не надо писать break - эквивалент ИЛИ

switch(month) {
    case "Январь":
    case "Феварль":
    case "Декабрь":
        alert("Зима");
        break;
    case "Март":
    case "Апрель":
    case "Май":
        alert("Весна");
        break;
    case "Июнь":
    case "Июль":
    case "Август":
        alert("Лето");
        break;
    case "Сентябрь":
    case "Октябрь":
    case "Ноябрь":
        alert("Осень");
        break;
    default:
        alert("Вы неверно ввели данные");
        breat;
}


// КОНЕЦ УСЛОВИЙ 

// ЦИКЛЫ
// 1. WHILE

let counter = 0;
while (counter<15) {
    console.log(`WHILE: ${counter++}`);
    console.log(`COUNTER AFTER: ${counter}`);
}

let counter = 0;
while (counter<15) {
    console.log(`WHILE: ${++counter}`);
    console.log(`COUNTER AFTER: ${counter}`);
}


//2. DO WHILE – вначале проходит тело, только потом проверка на условия
let counter2 = 35;
do {
    console.log("Первое значение");
} while (counter2<100)
    
    
// 3. FOR (значение; условие; шаг)

for(let i=0;i<25;i++) {
    console.log(`FOR цикл: ${i}`);
}

// BREAK CONTINUE

for(let i=0; i<45; i++) {
    if(i%2==1) {
        break;
    }
    console.log(i);
}

for(let i=0; i<45; i++) {
    if(i%2==1) {
        continue;
    }
    console.log(i);
}



// Функции в javascript 
function showMessage(let1, let2, let3, let4, let5='Переменная по умолчанию') {
    return let1 + let2 + let3 + let4 + let5;
}
alert(showMessage(1,2,3,4,"5")) // js переводит в значения, которые ему легче всего обработать (сроковые)

