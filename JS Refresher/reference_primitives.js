const num1 = 1;
const num2 = num1;

console.log(num2);

const person = {
    name: 'Vlad'
};

const person2 = person;

const person3 = { ...person };

person2.name = "Julia";

console.log(person);
console.log(person3);
