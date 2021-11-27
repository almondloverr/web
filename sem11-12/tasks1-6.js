console.log('Задание 1'); // Создайте объект city1, укажите у него свойства name и population 

let city1 = new Object();
city1.name = 'Город N';
city1.population = 10000000;

console.log(city1);

console.log('Задание 2'); // Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}

let city2 = {
    name: 'Город M',
    population: 1e6,
}

console.log(city2);

console.log('Задание 3'); // Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов.

city1.getName = function() {
    return this.name; 
}
city2.getName = function() {
    return this.name; 
}

console.log(city1.getName())
console.log(city2.getName())


console.log('Задание 4'); // Создайте методы exportStr() у каждого из объектов, метод должен возвращать информацию о городе в формате «name=ГородN\npopulation=10000000\n».

city1.exportStr = function() {
    return `name:${this.name}\\npopulation:${this.population}\\n`; 
}
city2.exportStr = function() {
    return `name:${this.name}\\npopulation:${this.population}\\n`; 
}
console.log(city1.exportStr())
console.log(city2.exportStr())

console.log('Задание 5'); // Создайте глобальную функцию getObj(), которая возвращает this. А у каждого из объектов city1 или city2 метод getCity, который ссылается на getObj.

function getObj() { 
    return this; 
}
city1.getCity = city2.getCity = getObj;

console.log(city1.getCity().getName() + ' ' + city1.getCity().population);
console.log(city2.getCity().getName() + ' ' + city2.getCity().population);

console.log('Задание 6'); // Создать объект obj, с методами method1(),method2() и method3(). В методе method3() должна возвращаться строка «метод3». Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3().

let obj = {
    a: 0,
    b: 1,
    c: 'метод3',
    method1() {
        this.a;
        return this;
    },
    method2() {
        this.b;
        return this;
    },
    method3() {
        return this.c;
    },
}

console.log(obj.method1().method2().method3());
