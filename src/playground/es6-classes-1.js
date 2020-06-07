class Person {
    constructor(name = 'DefaultName', age = 0){
        this.name = name;
        this.age = age;
    }
    exclaim(){
        return `${this.name}!`
    };
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    };
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
       let description = super.getDescription();

       if(this.hasMajor()){
           description += ` He's studying ${this.major}`
       }
       return description;
    };

}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.homeLocation){
            description += ` I'm visiting from ${this.homeLocation}.`
        }
        return description
    }
}
let me = new Traveler('Paimo', 5, 'Lagos')
let jones = new Traveler()
console.log(me.getDescription());
console.log(jones.getDescription());