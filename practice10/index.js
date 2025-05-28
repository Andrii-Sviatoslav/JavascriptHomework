//  TASK 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, ...restArray] = arr;
// console.log(x); 
// console.log(y); 
// console.log(restArray);
// let [a, b, , zArr] = arr;
// console.log(zArr);
// let [val1, val2, , val3] = arr;
// console.log([val3]);

// variant 1 

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, , z] = arr; 

// console.log(x); 
// console.log(y); 
// console.log([z]); 

// variant 2 

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, ...temp] = arr; // temp = ["Ray", "Bob"]
// let [, z] = temp; // Деструктуруємо temp, щоб пропустити "Ray" і взяти "Bob"
//                    // z = "Bob"

// console.log(x); // "Tom"
// console.log(y); // "Sam"
// console.log([z]); // ["Bob"] - виводимо z в масиві

// TASK 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };

// let {
//     names: [, name2, , name4],
//     ages: [, age2, , age4]
// } = data;
// console.log(name2);
// console.log(age2);
// console.log(name4);
// console.log(age4);  

// TASK 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function mul(...args) { 
//     let product = 1; 

//     let hasNumbers = false; 

//     for (let i = 0; i < args.length; i++) {
//         const arg = args[i];

//         if (typeof arg === 'number' && !isNaN(arg)) {
//             product *= arg; 
//             hasNumbers = true; 
//         }
//     }

//     if (!hasNumbers) {
//         return 0;
//     }

//     return product;
// }

// console.log(mul(1, "str", 2, 3, true));
// console.log(mul(null, "str", false, true));
// console.log(mul());
// console.log(mul("hello", "world")); 
// console.log(mul(5, 0, 10)); 
// console.log(mul(2.5, 2)); 

// TASK 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// let server = {
//     data: 0,
//     convertToString: function (callback) {
//         callback(() => { 
//             return this.data + "";
//         });
//     }
// };

// let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//         this.server.data = data;
//         this.server.convertToString(this.notification());
//     },
//     notification: function () {
//         return (callback) => { 
//             this.result = callback();
//         };
//     }
// };

// client.calc(123);
// console.log(client.result);    
// console.log(typeof client.result); 

// TASK 5 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function mapBuilder(keysArray, valuesArray) {
//     const myMap = new Map();
//     if (keysArray.length !== valuesArray.length) {
//         console.warn("Попередження: Масиви мають різну довжину. Це може призвести до неочікуваних результатів.");
//     }

//     for (let i = 0; i < keysArray.length; i++) {

//         myMap.set(keysArray[i], valuesArray[i]);
//     }
//     return myMap;
// }

// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);

// console.log(map.size);     // 4 (як очікується)
// console.log(map.get(2));   // "span" (як очікується)

// // Додаткові перевірки:
// console.log(map.get(1));   // "div"
// console.log(map.get(4));   // "i"
// console.log(map.has(3));   // true
// console.log(map.has(5));   // false

// let keys2 = ["name", "age", "city"];
// let values2 = ["Alice", 30, "New York"];
// let map2 = mapBuilder(keys2, values2);
// console.log(map2.get("name")); // "Alice"
// console.log(map2.get("age"));  // 30