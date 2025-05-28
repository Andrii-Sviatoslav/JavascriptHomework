// TASK 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function upperCase(str){
//     if(!str|| str.length === 0){
//         return "line not found";
//     }
//     const firstChar = str[0];
//     if(firstChar === firstChar.toUpperCase()){
//         return "String`s starts with uppercase character";
//     } else {
//         return "String`s not starts with uppercase character";
//     }
// }
// const output1 = document.getElementById('output1');
// const output2 = document.getElementById('output2');

// output1.textContent = upperCase("regexp");
// output2.textContent = upperCase('Regexp');

// TASK 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function checkEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }
// const output1 = document.getElementById('output1');
// const output2 = document.getElementById('output2');
// const output3 = document.getElementById('output3');
// output1.textContent = checkEmail("Qmail12@gmail.com");
// output2.textContent = checkEmail("invalid-email");
// output3.textContent = checkEmail("test@test.com");

// TASK 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const str = "cdbBdbz";
// const regex = /d(b+)(d)/gi;
// let match;
// const results = [];
// while ((match = regex.exec(str)) !== null) {
//     results.push(match[0], match[1], match[2]);
// }
// const output = document.getElementById('output');
// output.textContent = JSON.stringify(results);

// TASK 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const inputString = "Java Script";
// const regex = /(\w+)\s+(\w+)/;
// const outputString = inputString.replace(regex, '$2, $1');
// const output = document.getElementById('output');
// output.textContent = outputString;

// TASK 5 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function validateCardNumber(cardNumber) {
//     const cardRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//     return cardRegex.test(cardNumber);
// }

// const output1 = document.getElementById('output1');
// const output2 = document.getElementById('output2');
// const output3 = document.getElementById('output3');
// const output4 = document.getElementById('output4');
// const output5 = document.getElementById('output5');

// output1.textContent = validateCardNumber("1234-5678-9012-3456");
// output2.textContent = validateCardNumber("1111-2222-3333-4444");
// output3.textContent = validateCardNumber("1234-567-9012-3456");
// output4.textContent = validateCardNumber("1234567890123456");
// output5.textContent = validateCardNumber("ABCD-EFGH-IJKL-MNOP");

//TASK 6 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function checkEmail(email) {

//     const emailRegex = /^[a-zA-Z0-9]+(?:[_-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;

//     if (email.includes("--")) { //
//         return "Email is not correct! (Символ '-' не може повторюватися)";
//     }

//     const parts = email.split('@');
//     if (parts.length === 2) {
//         const username = parts[0];
//         const domain = parts[1];

//         if (username.length > 0 && (username[0] === '_' || username[0] === '-')) { //
//             return "Email is not correct! (Ім'я користувача не може починатися з '_' або '-')";
//         }

//         if (domain.length > 0 && domain[0] === '-') {
//             return "Email is not correct! (Доменне ім'я не може починатися з '-')";
//         }
//     }

//     if (emailRegex.test(email)) {
//         return "Email is correct!";
//     } else {
//         return "Email is not correct!";
//     }
// }

// const output1 = document.getElementById('output1');
// const output2 = document.getElementById('output2');
// const output3 = document.getElementById('output3');
// const output4 = document.getElementById('output4');
// const output5 = document.getElementById('output5');
// const output6 = document.getElementById('output6');

// output1.textContent = checkEmail("my_mail@gmail.com");
// output2.textContent = checkEmail("#my_mail@gmail.com");
// output3.textContent = checkEmail("my_ma--il@gmail.com");
// output4.textContent = checkEmail("my-mail@gmail.com");
// output5.textContent = checkEmail("my.mail@gmail.com");
// output6.textContent = checkEmail("_mymail@gmail.com");

// TASK 7 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function checkLogin(login) {
//   let isLoginValid = true;
//   let foundNumbers = [];
//   if (login.length < 2 || login.length > 10) {
//     isLoginValid = false;
//   }
//   const alphaNumericRegex = /^[a-zA-Z0-9]+$/;
//   if (!alphaNumericRegex.test(login)) {
//     isLoginValid = false;
//   }
//   const firstChar = login.charAt(0);
//   if (/\d/.test(firstChar)) {
//     isLoginValid = false;
//   }
//   const numberRegex = /\d+(?:\.\d+)?/g;
//   let match;
//   while ((match = numberRegex.exec(login)) !== null) {
//     foundNumbers.push(match[0]);
//   }
//   return {
//     isValid: isLoginValid,
//     numbers: foundNumbers,
//   };
// }
// const loginOutput1 = document.getElementById("loginOutput1");
// const numbersOutput1 = document.getElementById("numbersOutput1");
// const loginOutput2 = document.getElementById("loginOutput2");
// const numbersOutput2 = document.getElementById("numbersOutput2");
// const result1 = checkLogin("eel1.Ret3");
// loginOutput1.textContent = result1.isValid;
// numbersOutput1.textContent = result1.numbers.join(", ");
// const result2 = checkLogin("eel1*1Ret3");
// loginOutput2.textContent = result2.isValid;
// numbersOutput2.textContent = result2.numbers.join(", ");
// const result3 = checkLogin("my.Login4.5Val");
// const loginOutput3 = document.createElement("span");
// const numbersOutput3 = document.createElement("span");
// document.body.appendChild(document.createElement("h3")).textContent =
//   'Додатковий приклад: "my.Login4.5Val"';
// document.body.appendChild(document.createElement("p")).textContent =
//   'Логін: "my.Login4.5Val"';
// document.body.appendChild(document.createElement("p")).innerHTML =
//   'Валідність логіна: <span id="loginOutput3"></span>';
// document.getElementById("loginOutput3").textContent = result3.isValid;
// document.body.appendChild(document.createElement("p")).innerHTML =
//   'Знайдені числа: <span id="numbersOutput3"></span>';
// document.getElementById("numbersOutput3").textContent =
//   result3.numbers.join(", ");
