const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];

console.log(merged);

const obj1 = {"work": "coding"};
const obj2 = {"name":"Fred"};

const merge = {...obj1, ...obj2};
console.log(merge);
