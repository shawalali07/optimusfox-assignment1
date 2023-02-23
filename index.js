const multiply = (num1, num2) => {
  return num1 * num2;
};

// console.log(multiply(7, 5));

const greeting = (name) => {
  return `Hello, ${name}!`;
};

// console.log(greeting('shawal'));

const arraySum = (arr) => {
  const sum = arr.reduce((sum, num) => {
    return sum + num;
  }, 0);
  return sum;
};

// console.log(arraySum([3, 8, 1, 10]));

const calculateBMI = (weight, height) => {
  return (weight / (height * height)).toFixed(2);
};

console.log(calculateBMI(80, 1.8288));

const stringLength = (str) => {
  return str.length;
};

// console.log(stringLength('shawal'));

const reversString = (str) => {
  return str.split('').reverse().join('');
};

// console.log(reversString('shawal'));

const greetUser = (user) => {
  const { first, last } = user;
  return `Hello, ${first} ${last}!`;
};

// console.log(greetUser({ first: 'shawal', last: 'ali' }));

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// console.log(capitalize('shawal'));

const capitalizeArray = (arr) => {
  return arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
};

// console.log(capitalizeArray(['shawal', 'ali']));

const isPalindrome = (str) => {
  const reverse = str.split('').reverse().join('');
  return reverse === str ? true : false;
};

// console.log(isPalindrome('racecar'));
