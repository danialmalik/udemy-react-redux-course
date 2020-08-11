class Person{
    constructor(name = 'Anonymous'){
        this.name = name;
    }

    greet(){
        console.log(`Hi ${this.name}`);
    }
}


class Student extends Person{
    constructor(name, major){
        super(name);
        this.major = major;

    }
}


const person = new Student('Dante', 'Science');
console.log(person)
person.greet()
