// let userName = "Іван";
// let userAge = 22;
// console.log("Ім'я користувача", userName);
// console.log("Вік користувача", userAge);

// let myObject = {
//   stringProperty: "Це рядок",
//   numberProperty: 42,
//   booleanProperty: true,
//   undefinedProperty: undefined,
//   nullProperty: null,
// };
// console.log(myObject);

// let isAdult = confirm("Ви досягли повнолітнього віку?");
// console.log(isAdult);

// let firstName = "Ваше ім'я";
// let lastName = "Ваше прізвище";
// let group = "Навчальна група";
// let birthYear = "Ваш рік народження";
// let isMarried = false;

// console.log("Тип birthYear:", typeof birthYear);
// console.log("Значення birthYear:", birthYear);

// console.log("Тип isMarried:", typeof isMarried);
// console.log("Значення isMarried:", isMarried);

// console.log("Тип firstName:", typeof firstName);
// console.log("Значення firstName:", firstName);

// console.log("Тип lastName:", typeof lastName);
// console.log("Значення lastName:", lastName);

// console.log("Тип group:", typeof group);
// console.log("Значення group:", group);

// let nullVariable = null;
// let undefinedVariable;

// console.log("Тип nullVariable:", typeof nullVariable);
// console.log("Тип undefinedVariable:", typeof undefinedVariable);

// let login = prompt("Введіть ваш логін:");
// let email = prompt("Введіть ваш email:");
// let password = prompt("Введіть ваш пароль:");

// alert(`Dear User, your email is ${email}, your password is ${password}`);

// let secondsInHour = 60 * 60;
// let secondsInDay = secondsInHour * 24;
// let secondsInMonth = secondsInDay * 30.44;
// console.log("Секунд в годині:" + secondsInHour);
// console.log("Секунд в дні:" + secondsInDay);
// console.log("Секунд в місяці:" + secondsInMonth);

// practice 2

// let x = 1;
// let y = 2;
// let res1 = String(x)  + String(y);
// console.log(res1);
// console.log(typeof res1);

// let res2 = Boolean(x) + String(y);
// console.log(res2);
// console.log(typeof res2);

// let res3 = Boolean(x<y);
// console.log(res3);
// console.log(typeof res3);

// let res4 = x / "asb";
// console.log(res4);
// console.log(typeof res4);

// let userInput = prompt ("Введіть число");
// if (userInput !== null) {
//   let number = parseFloat(userInput);

//   if (!isNaN(number)) { 
//     let isEvenPositive = (number > 0) && (number % 2 === 0);
//     console.log("Число є парним додатним:", isEvenPositive);

//     let isMultipleof7 = (number % 7 === 0);
//     console.log("Число є кратним 7:", isMultipleof7);
//   } else {
//     console.log("Введено число некоректне число");
//   }
// } else {
//   console.log("Введення скасовано користувачем.");
// }
 
// let myArray = [];

// myArray[0] = 123;

// myArray[1] = "Привіт";

// myArray[2] = true;

// myArray[3] = null;

// console.log("Кількість елементів в масиві:", myArray.length);

// let userInputt = prompt("Введіть будь-яке значення:");
// myArray[4] = userInputt;

// console.log("П'ятий елемент масиву:", myArray[4]);

// myArray.splice(0, 1);
// console.log("Масив після видалення першого елемента:", myArray);

// let cities = ["Rome", "Lviv", "Warsaw"];
// let result = cities.join("*");
// console.log(result); 

// let ageInput = prompt("Будь ласка, введіть ваш вік:");

// if (ageInput !== null) {
//   let age = parseInt(ageInput);

//   if (!isNaN(age)) {
//     let isAdult = age >= 18;

//     if (isAdult) {
//       alert("Ви досягли повнолітнього віку.");
//     } else {
//       alert("Ви ще надто молоді.");
//     }
//   } else {
//     alert("Будь ласка, введіть коректний вік (число).");
//   }
// } else {
//   alert("Введення віку скасовано користувачем.");
// }

// function calculateTriangle() {
//   const side1Str = prompt("Введіть довжину першої сторони трикутника:");
//   const side2Str = prompt("Введіть довжину другої сторони трикутника:");
//   const side3Str = prompt("Введіть довжину третьої сторони трикутника:");

//   const side1 = parseFloat(side1Str);
//   const side2 = parseFloat(side2Str);
//   const side3 = parseFloat(side3Str);

//   if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0 || (side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) {
//     console.log("Incorrect data");
//     return;
//   }

//   const p = (side1 + side2 + side3) / 2;
//   const area = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
//   const roundedArea = area.toFixed(3);
//   console.log("Площа трикутника:", roundedArea);

//   const sides = [side1, side2, side3].sort((a, b) => a - b); // Сортуємо сторони за зростанням
//   const isRightAngled = (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2));
//   console.log("Трикутник є прямокутним:", isRightAngled);
// }

// calculateTriangle();

// const now = new Date();
// const currentHour = now.getHours();
// let greeting;

// if (currentHour >= 23 || currentHour < 5) {
//   greeting = "Доброї ночі";
// } else if (currentHour >= 5 && currentHour < 11) {
//   greeting = "Доброго ранку";
// } else if (currentHour >= 11 && currentHour < 17) {
//   greeting = "Доброго дня";
// } else {
//   greeting = "Доброго вечора";
// }

// console.log(greeting);

// let numbers = [2, 3, 4, 5];
// let product = 1;

// for (let i = 0; i < numbers.length; i++) {
//   product *= numbers[i];
// }

// console.log("Добуток елементів (for):", product);

// let numbers = [2, 3, 4, 5];
// let product = 1;
// let i = 0;

// while (i < numbers.length) {
//   product *= numbers[i];
//   i++;
// }

// console.log("Добуток елементів (while):", product);

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} is even`);
//   } else {
//     console.log(`${i} is odd`);
//   }
// }

// function randArray(k) {
//   const arr = [];
//   for (let i = 0; i < k; i++) {
//     arr.push(Math.floor(Math.random() * 500) + 1);
//   }
//   return arr;
// }

// console.log(randArray(5));

// function raiseToDegree() {
//   const aStr = prompt("Введіть ціле число для піднесення до степеня (a):");
//   const bStr = prompt("Введіть ціле число для степеня (b):");

//   const a = parseInt(aStr);
//   const b = parseInt(bStr);

//   if (Number.isInteger(a) && Number.isInteger(b)) {
//     const result = Math.pow(a, b);
//     alert(`Результат піднесення ${a} до степеня ${b} дорівнює: ${result}`);
//     return result;
//   } else {
//     alert("Будь ласка, введіть цілі числа.");
//     return NaN; 
//   }
// }

// raiseToDegree();

// function findMin() {
//   if (arguments.length === 0) {
//     return undefined; 
//   }
//   let min = arguments[0];
//   for (let i = 1; i < arguments.length; i++) {
//     if (arguments[i] < min) {
//       min = arguments[i];
//     }
//   }
//   return min;
// }

// console.log(findMin(12, 14, 4, -4, 0.2));

// function findUnique(arr) {
//   const seen = new Set();
//   for (const element of arr) {
//     if (seen.has(element)) {
//       return false;
//     }
//     seen.add(element);
//   }
//   return true;
// }

// console.log(findUnique([1, 2, 3, 5, 3]));
// console.log(findUnique([1, 2, 3, 5, 11]));

// function lastElem(arr, x) {
//   if (x === undefined) {
//     return arr[arr.length - 1];
//   } else if (x > 0) {
//     return arr.slice(Math.max(arr.length - x, 0));
//   } else {
//     return []; // Або інше значення за замовчуванням для некоректного x
//   }
// }

// console.log(lastElem([3, 4, 10, -5]));
// console.log(lastElem([3, 4, 10, -5], 2));
// console.log(lastElem([3, 4, 10, -5], 8));

// function capitalizeFirstLetterOfEachWord(str) {
//   return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

// const inputString = 'i love java script';
// const outputString = capitalizeFirstLetterOfEachWord(inputString);
// console.log(outputString);



// let calcRectangleArea = (height, width) => {
// let S = height * width;
// let isInteger = Number.isInteger(height, width);

// if (isInteger) {
//   return S;
// } else {
//   console.log("Error");
//   return;
// }
// }


// console.log(calcRectangleArea(2,3));
// console.log(calcRectangleArea("string",3));
// console.log(calcRectangleArea(null, 3));

// function checkAge() {
//   try {
//     const ageInput = prompt("Будь ласка, введіть ваш вік:");

//     if (ageInput === "") {
//       throw new Error("The field is empty! Please enter your age");
//     }

//     const age = parseInt(ageInput);

//     if (isNaN(age)) {
//       throw new Error("Incorrect data: You entered a non-numeric value");
//     }

//     if (age < 14) {
//       throw new Error("Access denied: Your age is less than 14");
//     }

//     alert("Доступ до перегляду фільму надано!");

//   } catch (error) {
//     alert(`Помилка: ${error.name}\nОпис: ${error.message}`);
//   }
// }

// checkAge();

// class MonthException extends Error {
//   constructor(message) {
//     super(message);
//     this.name = 'MonthException';
//   }
// }

// function showMonthName(month) {
//   const monthNames = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   if (month < 1 || month > 12 || !Number.isInteger(month)) {
//     throw new MonthException('Incorrect month number');
//   }

//   return monthNames[month - 1];
// }

// try {
//   console.log(showMonthName(5));
//   console.log(showMonthName(14));
// } catch (error) {
//   console.error(`${error.name}: ${error.message}`);
// }

// function showUser(id) {
//   if (id < 0) {
//     throw new Error(`ID must not be negative: ${id}`);
//   }
//   return { id: id };
// }

// function showUsers(ids) {
//   const validUsers = [];
//   for (const id of ids) {
//     try {
//       const user = showUser(id);
//       validUsers.push(user);
//     } catch (error) {
//       console.error(`Error: ${error.message}`);
//     }
//   }
//   return validUsers;
// }

// const users = showUsers([7, -12, 44, 22]);
// console.log(users);























