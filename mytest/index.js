//Data types

// 1 - String
// let greetingsForUsers = "Hello world!";

// console.log(typeof greetingsForUsers);

// 2 - Number
// const num = 100;
// console.log(typeof num);

// 3 - Boolean
// const boolTrue = true;
// const boolFalse = false;
// console.log(typeof boolTrue);
// console.log(typeof boolFalse);

// 4 - Null
//   const someNullValue = null;
// console.log(someNullValue);

// 5 -underfined
// const someUnderfinedValue = undefined;
// console.log(someUnderfinedValue);


// object
// const obj = {
//     name: "Ilya",
//     age: 12,
//     hobby: "chess",
//     gender: "male",
// };

// console.log(obj);


// If Else operator 

// const isUserLoggedIn = false; 
// if (isUserLoggedIn){
//     alert("You are logged in!");
// } else {
//     alert("You are not logged in!");
// }

// Ternary operator

// const isUserLoggedIn = true;
// isUserLoggedIn ? alert("You are logged in!") : alert("You are not logged in!");

// Switch operator

// const age = 70;

// switch (age){
//     case 10:
//         alert("Happy birthday, give me a kiss!");
//         break;
//     case 20:
//         alert("Happy birthday, give me a hug!");
//         break;
//     case 30:
//         alert("Happy birthday, give me a grandchildren!");
//         break;
//     default:
//         alert("Happy birthday, give me your legacy!");
// }

// MATH

// const num1 = 10;
// const num2 = 5;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);

// let num3 = 50;
// num3 = num3 + 30; // num3 += 30;
// console.log (num3);

// ТО САМЕ 

// let num3 = 50;
// num3 += 30; // num3 = num3 + 30;
// console.log (num3);


// const isUserLoggedIn = true;
// const name = "Andrew"; // && - I, || - АБО  === - дорівнює, !== - не дорівнює
// const age = 18;

// if (age === 18 && name === "Andrew" ) {
//     alert("Congrats, you are allowed to watch uor content!");
// }

// // String 
// console.log ("my" + "string"); // mystring
// console.log ("my " + "string"); // my string

// let name1 = "Vlad";
// name1 += " is the best";
// console.log(name1); // Vlad is the best

// FUNCTIONS !!!!!!! 

// function sayHello(name){
//     alert ("Hello, dear  " + name)
// }
// sayHello("Andrew");



// function createUserName() {
//     return "Andrew";
// }

// const userName = createUserName(); //const userName = "Andrew";
// console.log(userName);

// function sayHello(greetings) { //FUNCTION DECLARATION
//     alert(greetings);
// }
// sayHello("Bonjour")

// const sayHello2 = function sayHello(greetings) { //FUNCTION EXPRESSION
//     alert(greetings);
// }
// sayHello2("Chezczh")

// МАСИВИ

// const usersArr = [1, 2, 3, 4, 5];
// console.log(usersArr)

// const usersArro = ["orange", "apple", "watermaloon" ];
// console.log(usersArro)

// const andriy = [
//     {name: "user1", age: 23, proffesion: "programmer"},
//     {name: "user2", age: 21, proffesion: "driver"}
// ];
// console.log(andriy)



// While anf For

// const subscribers = [
//     {name: "Andrew", isCloseFriend: true},
//     {name: "Sasha", isCloseFriend: false},
//     {name: "Peter", isCloseFriend: false},
//     {name: "Vitaly", isCloseFriend: false},
//     {name: "Sarah", isCloseFriend: true},
//     {name: "Jessica", isCloseFriend: false},
//     {name: "Gunter", isCloseFriend: false},
//     {name: "Brad", isCloseFriend: true},
// ];

// for(let i = 0; i < subscribers.length; i++) {
// console.log(subscribers[i])

// }

// const obj = {
//     name : "Andrew",
//     age : 23,
//     sex : "male",
//     nation : "ukrainian",
//     hobby : "football"
// }

// for (const key in obj) {
// console.log(obj[key]);

// }

// const obj = {
//     name : "Andrew",
//     age : 23,
//     sex : "male",
//     nation : "ukrainian",
//     hobby : "football"
// }

//12.05.25 DOM - Document object Model
// const button = document.querySelector("button");
// const username = document.querySelector("#username");
// const greeting = document.querySelector("#username");

// button.addEventListener ("click", () => {
// console.log(username.value);
// greeting.innerHTML += `Hello $(username.value)`;
// username.value = '';
// })

//console.log(localStorage.getItem("name"));

//регулярні вирази 



