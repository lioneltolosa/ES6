'use strict';

(function() {

    let person1 = {
        firtsName: 'Lionel',
        lastName: 'Tolosa',
        age: 18,
        isAdult: function() { return this.age >= 18},
        isAdultShortHand() { return this.age >= 18}
    };

    /* console.log(person1.isAdult());
    console.log(person1.isAdultShortHand()); */
    
    function registerUsers(firtsName, lastName) {
        let person = {
            firtsName,
            lastName,
            age: 32,
            isAdult: function() { return this.age >= 18}
        };
        return person
    }

    /* console.log(registerUsers('Lionel', 'Tolosa')); */

    // Object Keys

   /*  console.log(Object.keys(person1)); */

    // Object Equality 
    // ==
    // ===
    // Object.is()

    let one = {
        name: 'Lionel'
    }

    let two = {
        name: 'Lionel'
    }

    /* console.log(Object.is(one, two)); */  // false

/*     console.log(one === two); */ // false - 
    // This is because in object the equality look the address in memorie

    let one1 = 'Lio';
    let two1 = 'Lio';

    /* console.log(Object.is(one1, two1)); */
    // But with strings the object equiality look the content
    // and in this case is true


    // Object.assing()
    // Create a new object from an existing one

    const person2 = {};
    Object.assign(person2, person1)

    /* console.log('person2', person2 ); */

    let healt = {
        height: 65,
        weight: 150,
    }

    Object.assign(person2, healt)

  /*   console.log('person2 with healt', person2 );
    console.log('person1', person1); */

    function mergePersonWithHealt(person, healt) {
        return Object.assign({}, person, healt)
    }

    // Example Object.assing

    let count = 0
    const onee = {}
    const twoo = {
        get count () { return count },
        set count (value) { count = value }
    }
    const three = Object.assign({}, onee, twoo)

    /* console.log('two:', twoo)
    console.log('three:', three) */

    /* console.log('mergePersonWithHealt', mergePersonWithHealt(person1, healt));
    console.log('person1 fusion', person1); */

    // Using constructor Funcionts
    
    function Person(firtsName, lastname, age) {
        this.firtsName = firtsName,
        this.lastname = lastname,
        this.age = age;
        this.isAdult = function() { return this.age >= 18}
    }

    const lionel = new Person('Lionel', 'Tolosa', 32 );
    const mateo = new Person('Mateo', 'Tolosa', 2)

    /* console.log('lionel', lionel.isAdult());
    console.log('mateo', mateo.isAdult()); */






    // JAVASCRIPT OBJECT PROPERTIES WITH PROPERTY DESCRIPTORS

    // Writable

    let user = {
        firtsName: 'Lionel',
        lastName: 'Tolosa',
        age: 18,
    };

    /* console.log(user.firtsName);
    console.log(user['firtsName']); */

    let propertyName = 'firtsName';
    /* console.log(user[propertyName]); */

    /* for(let i in user) {
        console.log(i + ': ' + user[i]);
    } */

    // No se puede modificar la propiedad firtsName
    // console.log('Asignando Writable', Object.defineProperty(user, 'firtsName', {writable: false}));

    // user.firtsName = 'Mateo'; // ERROR

    // getOwnPropertyDescriptor muestra las propiedades del objeto
    // console.log('Ver Writable', Object.getOwnPropertyDescriptor(user, 'firtsName'));
    // imprime que writable de firtsName is false


    // Example With User 2

    let user2 = {
        name: {
            firtsName: 'Mateo',
            lastName: 'Andres',
        },
        age: 18,
    };

    // console.log('Asignando Writable User2', Object.defineProperty(user2, 'name', {writable: false}));

    // Object.freeze(user2.name)
    user2.name.firtsName = 'Andrea'; // Si se puede modificar ya que writable false es para el objeto name
    // y no para sus propiedades

    //console.log('Ver Writable User 2', Object.getOwnPropertyDescriptor(user2, 'name'));


    // JSON.stringify -  Combierte un objeto en una cadena de texto
    /* console.log(JSON.stringify({ x: 5, y: 6 })); */


    // Enumerable

    let enumerable = {
        firtsName: 'Lionel',
        lastName: 'Tolosa',
        age: 18,
    };

    const asignarEnumerable = Object.defineProperty(enumerable, 'age', {enumerable: false})

    /* console.log('Asignar Enumerable', asignarEnumerable); */

    const verEnumerable = Object.getOwnPropertyDescriptor(enumerable, 'age')

    /* for(let enu in enumerable) {
       console.log('age no esta', JSON.stringify(enu));
    }

    console.log('verEnumerable', verEnumerable); */

    // Configurable

    // No deja colocar el enumerable ni el writable ni en true ni en false. Bloquea toda la configuration
    

    // CREATING PROPERTY WITH GETTERS AND SETTERS

    let employes = {
        name: {
            firtsName: 'Mateo',
            lastName: 'Andres',
        },
        age: 18,
    };

    Object.defineProperty(employes, 'fullName', 
        {
            get: function() {
                return `${this.name.firtsName} ${this.name.lastName}`
            },
            set: function(val) {
                var nameParts = val.split(' ');
                this.name.firtsName = nameParts[0]
                this.name.lastName = nameParts[1]
            }
        }
    )

    employes.fullName = 'Andrea Maria'

    //console.log(employes.fullName);




    // PROTOTYPES

    let myFunction = function () {}

    console.log(myFunction.prototype);

    let person3 = { name: 'Mateo'}

    console.log(person3.__proto__);

    // Example 1

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

    
})();