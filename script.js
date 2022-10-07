

1 // Write a funciton with no parameters that returns the string `Hello World`. Log the function to console.


function helloWorld() {
  return `Hello World`
}

console.log(helloWorld());


2 /*  Create a function called quadrupler with one parameter. The function should return 4 times the parameter. Try logging to console with different arguments */


function quadrupler(x) {
  return x * 4;
}

console.log(quadrupler(5));



3  /*Create a function called Welcome with two parameters: firstName and lastName. The function should return the string `Hello firstName lastName, how can I help?`. Modify the function so that firstName islower case, and lastName is uppercase.*/


function welcome(firstName, lastName) {

  firstName = firstName.toLowerCase();
  lastName = lastName.toUpperCase();

  return `Hello ${firstName} ${lastName}, how can I help?`
}

console.log(welcome(`Jamie`, `Hopwood`));


4 /*Create a function called `temperatureConverter`, which converts any temperature in fahrenheit to celcius using the the formula:

celcius = (fahrenheit - 32) x (5 / 9)*/



function temperatureConverter(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
  
}

console.log(Math.round(temperatureConverter(32)));


5 /*Create a function that converts a persons age in to dog years (1st year of dog's life = 15 human years, second year = 9 human years, each additional year = 5 human years ). Log to the console a template literal with the persons name, and age in dog years.*/


function dogYears(age, name) {

    let ageDogYears = Math.ceil((age - 24) / 5 + 2);
    console.log(`Hi ${name}, you are ${ageDogYears} years old in dog years!`)
}

dogYears(22, `Ethan`);


6 /*Create a function called calculator which takes three arguments​

Check the first and third arguments are numbers. If they are not numbers, log an error to the console​

Check the second argument is a string of either +, -, * or  /. If it is not log an error to the console.​

Use if and else statement to perform the correct calculation and return the correct answer depending on the second argument​

Try Console logging your calculator function with different arguments and see what happens.​*/


function calculator(num1, operator, num2) {

  if(typeof num1 === `number` && typeof num2 === `number`) {

    if(operator === `+` || operator === '-' || operator === '*' || operator === '/') {

      if(operator === `+`) {
         console.log(num1 + num2);
      } else if(operator === `-`) {
        console.log(num1 - num2);
      } else if(operator === `*`) {
        console.log(num1 * num2);
      } else if(operator === `/`) {
        console.log(num1 / num2);
      }

      
    } else {console.log(`Second argument needs to be a string of either +, -, * or / `)};

  } else {console.log(`First and third arguments need to be a number`);
  }

}

calculator(25, `/`, 5);



7 // Write a function which returns the lesser of two numbers



function min(a, b) {
  return (Math.min(a, b));
}

console.log(min(67, 68));


8 // Write a function that returns `x` in the power of `n`


function pow(x, n) {
  return x ** n;
}

console.log(pow(4, 3));

const myAge = 31;
