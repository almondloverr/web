console.log('Задание 7'); // добавление числа в массив
var d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log("d1: ", d1);
console.log("d1[6]: ", d1[6]);
console.log("d1[7]: ", d1[7]);


console.log('Задание 8'); // счет суммы с помощью цикла for 
var d2 = [45, 78, 10, 3];
var sum2 = 0;
for(var i in d2) {
    sum2 += d2[i]
};
console.log(sum2);


console.log('Задание 9'); // добавление числа в массив и счет суммы с помощью for 
var d3 = [45, 78, 10, 3];
d3[7] = 100;
var sum3 = 0;
for(var i in d3) {
    sum3 += d3[i]
} ;
console.log(sum3);


console.log('Задание 10'); // сортировка по убыванию
var d4 = [45, 78, 10, 3];
function my(a, b) { 
    return b - a;
}
console.log(d4.sort(my));


console.log('Задание 12'); // векторный тип
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function plus(otherVector) {
    var x = this.x + otherVector.x;
    var y = this.y + otherVector.y;
    return new Vector(x, y);
};
Vector.prototype.minus = function minus(otherVector) {
    var x = this.x - otherVector.x;
    var y = this.y - otherVector.y;
    return new Vector(x, y);
};
Object.defineProperty(Vector.prototype, "length", {
    get: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

console.log('Задание 13'); // оздание типа ячейки StretchCell
function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}
function repeat(string, times) {
	let result = "";
	for (let i = 0; i < times; ++i)
		result += string;
	return result;
}
function TextCell(text) {
	this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) { return Math.max(width, line.length); }, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	let result = [];
	for (let i = 0; i < height; ++i) {
		let line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};
StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
}
let sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));


console.log('number 14'); // интерфейс, абстрагирующий проход по набору значений
function logFive(sequence) {
    for (let i = 0; i < 5; i++) {
        if (!sequence.next()) {
            break;
        }
        console.log(sequence.current());
    }
}

function ArraySeq(array) {
    this.index = -1;
    this.array = array;
}

ArraySeq.prototype.next = function () {
    if (this.index >= this.array.length - 1) {
        return false;
    }
    this.index += 1;
    return true;
};
ArraySeq.prototype.current = function () {
    return this.array[this.index];
};

function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
    this.index = -1;
}

RangeSeq.prototype.next = function () {
    if (this.from + this.index >= this.to) {
        return false;
    }
    this.index += 1;
    return true;
};

RangeSeq.prototype.current = function () {
    return this.from + this.index;
}

logFive(new ArraySeq([1, 2]));
logFive(new ArraySeq([1, 6, 2, 3, 4, 5, 7, 6]));
logFive(new RangeSeq(100, 1000));
