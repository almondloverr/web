console.log('Задание 15'); // конструктор function Card(from, to){...}
function Card(from, to) {
    this.from = from;
    this.to = to;
    this.show = function () {
        return `${this.from} -> ${this.to} is this card!`
    }
}

let c1 = new Card("Екатеринбург", "Москва");

console.log(c1.show());


console.log('Задние 16'); // описание класса Human
class Human {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getInfo() {
        return `${this.name} ${this.age} ${this.height}`;
    }
    get firstName() {
        return this.name;
    }
}
let humans = [new Human("Коля", 23, 180), new Human("Даша", 19, 170), new Human("Ваня", 18, 192), new Human("Петя", 45, 178), new Human("Вася", 34, 197), new Human("Джони", 40, 168), new Human("Катя", 37, 160), new Human("Петя", 29, 200), new Human("Соня", 21, 172), new Human("Женя", 25, 175)];
console.log("getInfo");
for (let i of humans)
    console.log(i.getInfo())
for (let i of humans)
    console.log(i.firstName);


console.log('Задание 18'); // конструктор Date()
var dt1 = new Date('2045-01-01');
console.log(dt1);


console.log('Задание 19'); // поиск кол-ва секунд, которое прошло с 1 января 1970 года по текущий момент
var dt2= Date.now();
console.log(dt2);


console.log('Задание 20'); // функция getDays, принимает год и месяц, возвращает количество дней в месяце
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(5, 2021));