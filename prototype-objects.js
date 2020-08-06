/* let cat = {
    sonido() {
        console.log('Miau');
    },
    chillido() {
        console.log('MIIAAUU');
    }
}

let dog = {
    sonido() {
        console.log('Raww');
    }
} */

/* const some = Object.create( cat )

console.log( 'Cat', Object.getPrototypeOf( some ) === cat);

some.sonido();
some.chillido();

Object.setPrototypeOf( some, dog);

console.log( 'Dog', Object.getPrototypeOf( some ) === dog);

some.sonido(); */
//some.chillido();

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    },
    sayHi() {
        return 'Hiiiiiiiiiiiii'
    }
};

var userTwo = {
    email: 'lioneltolosa.com',
    name: 'Lionel Tolosa',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    },
    sayHi() {
        return super.sayHi()
    }
};

Object.setPrototypeOf(userTwo, userOne)

console.log(userTwo.sayHi() );


// PROTOTYPES

let myFunction = function () {}

console.log(myFunction.prototype);

let person3 = { name: 'Mateo'}

console.log(person3.__proto__);



// Example Prototypes

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
}

Person.prototype.age = 333

let lion = new Person('Lionel', 'Tolosa');
let mat = new Person('Mateo', 'Ontoloza');

mat.age = 2;

console.log('lion', lion.age);
console.log('lion proto', lion.__proto__);

console.log('Mateo', mat.age);
console.log('Mateo proto', mat.__proto__);

console.log(Person.prototype === lion.__proto__); // true

console.log(mat.age); // 2 
console.log(mat.__proto__.age); // 333

console.log(lion.age); // 2 
console.log(lion.__proto__.age); // 333

console.log(mat.hasOwnProperty('age'));

console.log(Object.getPrototypeOf(mat)); // Obtiene el prototipo del objeto especificado

console.log(Object.getPrototypeOf(lion));