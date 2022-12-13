class Human {
    gender = "male";
    printGender = () => {
        console.log(this.gender);
    };
}

class Person extends Human {
    name = "Vlad";
    gender = 'female'; //not really what you suppose to do
    printName = () => {
        console.log(this.name);
    };
}

const person = new Person();
person.printName();
person.printGender();