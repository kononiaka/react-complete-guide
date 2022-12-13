const person = {
    name: "Vlad",
    age: 33
};

const { name, age } = person;

console.log(`${name} ${age}`);

const numbers = [1, 2, 3, 4, 5];

const [num1, , num3] = numbers;

console.log(num1, num3);