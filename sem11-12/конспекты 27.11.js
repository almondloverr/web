let user1 = new Object(); // create a simple object
let user2 = {}; 

let user = { 
    name: "name",
    age: 11
};

console.log(user.name)

user.isAged = true;

delete user.age;

user["several words"] = "czxv";

function makeUser(name, age){ // create an object w/aribut
    return{
        name: name,
        age: age
    };
};

function makeUser2(name, age){ // another way to create object 
    return{
        name,
        age
    };
};

const USER_CONST = { // ?
    name: user.name,
    isAged: user.isAged
};

console.log(USER_CONST);

let input = prompt("Type something here");  

let userEx = { // key 
    [input]: 123,
};

console.log(userEx);

for (let key in user){ // get  properties
    console.log(`${key}: ${user[key]}`);
}

user.sayHi = function() {
    alert(this.name) // this - make a request to the object 
}

user.sayHi();

