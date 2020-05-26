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