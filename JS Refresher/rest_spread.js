const person = {
    name: "Vlad"
};

const person2 = {
    ...person,
    age: 33
};

console.log(person2);

const myFilter = (...args) => {
    return args.filter(el => el >= 3);
};

console.log(myFilter(1, 3, 4, 6));