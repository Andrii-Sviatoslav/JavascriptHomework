let userName = "Іван";
let userAge = 22;
console.log("Ім'я користувача", userName);
console.log("Вік користувача", userAge);

let myObject = {
  stringProperty: "Це рядок",
  numberProperty: 42,
  booleanProperty: true,
  undefinedProperty: undefined,
  nullProperty: null,
};
console.log(myObject);

let isAdult = confirm("Ви досягли повнолітнього віку?");
console.log(isAdult);

let firstName = "Ваше ім'я";
let lastName = "Ваше прізвище";
let group = "Навчальна група";
let birthYear = "Ваш рік народження";
let isMarried = false;

console.log("Тип birthYear:", typeof birthYear);
console.log("Значення birthYear:", birthYear);

console.log("Тип isMarried:", typeof isMarried);
console.log("Значення isMarried:", isMarried);

console.log("Тип firstName:", typeof firstName);
console.log("Значення firstName:", firstName);

console.log("Тип lastName:", typeof lastName);
console.log("Значення lastName:", lastName);

console.log("Тип group:", typeof group);
console.log("Значення group:", group);

let nullVariable = null;
let undefinedVariable;

console.log("Тип nullVariable:", typeof nullVariable);
console.log("Тип undefinedVariable:", typeof undefinedVariable);

let login = prompt("Введіть ваш логін:");
let email = prompt("Введіть ваш email:");
let password = prompt("Введіть ваш пароль:");

alert(`Dear User, your email is ${email}, your password is ${password}`);

let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInDay * 30.44;
console.log("Секунд в годині:" + secondsInHour);
console.log("Секунд в дні:" + secondsInDay);
console.log("Секунд в місяці:" + secondsInMonth);
