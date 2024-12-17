

class Person{

    #privateAbility;  // private 
    #State

    constructor(name, age){  // hvis vi har ikke en constructor, vi kan ikke lave mere object
        this.name = name; // 'this' refer to variable outside
        this.age = age;
        this.kind = "human";
        this.#privateAbility = "i can do anything"; 


    }

    sayHi(){
        console.log(`my name is ${this.name} and i am ${this.age}`);
        
    }

    set State(value){
        this.#State = value;
    }

    get State(){
       return this.#State;
    }
}

let person = new Person('Kasper', 33);  
let personTwo = new Person('bo', 56);
console.log(person);
console.log(personTwo);
person.sayHi()


class Professional extends Person {
    constructor(name, age, profession) {
        super(name, age);
        this.accupation = profession;
    }

    syOccupation() {
        console.log(`Hello my name is ${this.name} and i am ${this.accupation}`);
        
    }
}

let doctor = new Professional('ib', 25 , 'Doctor');
console.log(doctor);


class third extends Professional {
    constructor(name, age, profession, tall) {
        super(name, age, profession)
        this.long = tall;
    }
    howLong(){
        console.log(`Hello my name is ${this.name}, i am ${this.age} years old and i am a ${this.accupation}, i am ${this.long}m tall`);
        
    }
    
}
let talls = new third('Odin', 4000, 'God', 3);
console.log(talls);
talls.howLong()


class sports extends third {
    constructor(name, age, profession, tall, baseball){
        super(name, age, profession, tall)
        this.sport = baseball;
    }
    mySport(){
        console.log(`Hello my name is ${this.name}, i am ${this.age} years old and i am a ${this.accupation}, i am ${this.long}m tall, and i play ${this.sport}`);
    }
}

let newSport = new sports('Omid', 33, 'doctor', 2, 'footbal');

console.log(newSport);




