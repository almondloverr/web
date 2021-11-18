console.log('задание 1')
for (let i = 1; i < 8; i++){
	console.log('#'.repeat(i));
}

console.log('задание 2')

for (let i = 1; i < 101; i++){
	if ((i % 3 == 0) && (i%5 == 0)){
		console.log('FizzBuzz');
	} 
	else if (i%3 == 0) {
		console.log('Fizz');
	}
	else if (i%5 == 0) {
		console.log('Buzz');
	}
	else {
		console.log(i);
	}
}

console.log('задание 3')
var result = "\n";
for (var row = 1; row <= 8; row++) {
  for (var cell = 1; cell <= 8; cell++) {
    result += (row % 2 == cell % 2) ? "#" : " ";
  }
  result += "\n";
}
console.log(result);


console.log('задание 4')
function min(a, b){
	return (a < b) ? a : b;
}

console.log(min(4,1));

console.log('задание 5')
function countBs(str, char) {
    let count = 0;
    for(let i = 0; i <= (str.length - 1); i++){
        if(str.charAt(i) == char) {
            ++count;
        } 
    }
    return console.log(`\nString: ${str} 
    \nSymbol: ${char} 
    \nNumber of this type of symb in the str: ${count} `);
}
countBs('There are two a in this str', 'a');




console.log('задание 6')
function range(start, end, step) {
    var i = start,  
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
console.log('Sum of the range(1, 10): '+sum(range(1, 10)));
console.log('Range (5, 2, -1): '+range(5, 2, -1));


console.log('задание 7')
function reverseArray(array){
    var newArray1 = [];
    for (var i = array.length; i > 0; i--){
        newArray1.push(array.pop());
    }
    return newArray1;
};
  
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
