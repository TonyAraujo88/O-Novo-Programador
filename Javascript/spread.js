const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5, 6];

//console.log(newNumbers)

const fruits = ['apple', 'banana', 'charry'];
const moreFruits = [...fruits];

//console.log(moreFruits)

const arrey1 = [1, 2, 3];
const arrey2 = [4, 5, 6];

const combined = [...arrey1, ...arrey2];
//console.log(combined)

const base = [2, 3];
const fllArrey = [1, ...base, 4]
//console.log(fllArrey)

const user = { name: "Tony", age: 36};
const details = { city: 'São Paulo', state: 'SP' }
const newUser = { ...user, };

const updateUser = { name: "Tony Araújo", age:37 };
const fullUser = { ...user, ...details };

console.log(fullUser)

