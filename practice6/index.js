// TASK 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// variant 1

// document.getElementById("test").innerHTML = "Last";

// variant 2

// const element = document.getElementById("test");
// element.innerHTML = "Last";

// TASK 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// document.getElementsByClassName("image").src = "cat.jpg";
// alert(image);

// TASK 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const paragraphsInsideDiv = document.querySelectorAll('#test p');
// paragraphsInsideDiv.forEach((pElement, index) => {
//     const paragraphText = pElement.innerText;
//     console.log(`Selector text ${index} : ${paragraphText}`);
// });

// TASK 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function showListContentMethod1() {
//   const list = document.getElementById("list");
//   if (list) {
//     const items = list.children;
//     const firstItem = items[0].innerText;
//     const lastItem = items[items.length - 1].innerText;
//     const secondtItem = items[1].innerText;
//     const fourthItem = items[3].innerText;
//     const thirdItem = items[2].innerText;
//     const result = `${firstItem}, ${lastItem}, ${secondtItem}, ${fourthItem}, ${thirdItem}`;
//     alert(result);
//   } else {
//     alert('Список з ID "list" не знайдено.');
//   }
// }

// function showListContentMethod2() {
//   const items = document.querySelectorAll("#list li");
//   if (items.length > 0) {
//     const items = list.children;
//     const firstItem = items[0].innerText;
//     const lastItem = items[items.length - 1].innerText;
//     const secondtItem = items[1].innerText;
//     const fourthItem = items[3].innerText;
//     const thirdItem = items[2].innerText;
//     const result = `${firstItem}, ${lastItem}, ${secondtItem}, ${fourthItem}, ${thirdItem}`;
//     alert(result);
//   } else {
//     alert('Список з ID "list" не знайдено.');
//   }
// }

// TASK 5!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// document.addEventListener('DOMContentLoaded', () => {
//     // 1. Заголовок: зелений, великий, жирний
//     const header = document.getElementById('header');
//     if (header) {
//         header.style.color = 'green';
//         header.style.fontSize = '2.5em';
//         header.style.fontWeight = 'bold';
//     }

//     // Отримуємо всі параграфи з div#text
//     const paragraphs = document.querySelectorAll('#text p');

//     // 2. Другий параграф: червоний
//     if (paragraphs[1]) {
//         paragraphs[1].style.color = 'red';
//     }

//     // 3. Третій параграф: курсив
//     if (paragraphs[2]) {
//         paragraphs[2].style.fontStyle = 'italic';
//     }

//     // 4. Список "Make me horizontal!": елементи в один рядок
//     // Отримуємо всі елементи списку
//     const listItems = document.querySelectorAll('#myList li');
//     listItems.forEach(item => {
//         item.style.display = 'inline';
//         item.style.marginRight = '5px'; // Для невеликого відступу між словами
//     });

//     // 5. Текст "Make me invisible, please!": зникнути
//     const spanToHide = document.getElementById('invisibleSpan');
//     if (spanToHide) {
//         spanToHide.style.display = 'none';
//     }
// });


// TASK 6 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// function processInputs() {
//     const input1 = document.getElementById('input1');
//     const input2 = document.getElementById('input2');

//     if (!input1 || !input2) {
//         alert("Помилка: Один або обидва інпути не знайдені на сторінці.");
//         return; // Зупиняємо виконання, якщо інпути не знайдені
//     }

//     // 1) Користувач почергово вводить 2 повідомлення (використати prompt())
//     //    1-е повідомлення записується в 1-ий <input>, 2-ге – в 2-ий.

//     const message1 = prompt("Введіть перше повідомлення:");
//     // Перевіряємо, чи користувач не натиснув "Скасувати" або залишив поле порожнім
//     if (message1 !== null) { // prompt повертає null, якщо натиснуто "Скасувати"
//         input1.value = message1;
//     } else {
//         alert("Введення першого повідомлення скасовано.");
//         return; // Зупиняємо виконання, якщо перше введення скасовано
//     }


//     const message2 = prompt("Введіть друге повідомлення:");
//     if (message2 !== null) {
//         input2.value = message2;
//     } else {
//         alert("Введення другого повідомлення скасовано.");
//         return; // Зупиняємо виконання, якщо друге введення скасовано
//     }

//     alert("Значення в інпутах після введення:\nInput 1: " + input1.value + "\nInput 2: " + input2.value);


//     // 2) Поміняти значення 1-го і 2-го інпутів місцями.

//     // Зберігаємо значення input1 у тимчасовій змінній
//     const tempValue = input1.value;

//     // Присвоюємо значення input2 до input1
//     input1.value = input2.value;

//     // Присвоюємо збережене тимчасове значення до input2
//     input2.value = tempValue;

//     alert("Значення в інпутах після обміну:\nInput 1: " + input1.value + "\nInput 2: " + input2.value);
// }


// TASK 7 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// document.addEventListener('DOMContentLoaded', () => {

//     // 1. Створюємо тег <main>
//     const mainElement = document.createElement('main');

//     // 2. Додаємо атрибути до <main>
//     // class="mainClass check item"
//     mainElement.classList.add('mainClass', 'check', 'item');
//     // Або можна так, якщо класів небагато:
//     // mainElement.className = 'mainClass check item';


//     // 3. Створюємо тег <div>
//     const divElement = document.createElement('div');

//     // 4. Додаємо атрибут id="myDiv" до <div>
//     divElement.id = 'myDiv';


//     // 5. Створюємо тег <p>
//     const pElement = document.createElement('p');

//     // 6. Додаємо текст "First paragraph" до <p>
//     pElement.textContent = 'First paragraph';
//     // Або: pElement.innerText = 'First paragraph';
//     // Або: pElement.innerHTML = 'First paragraph'; (якщо текст може містити HTML)


//     // 7. Збираємо структуру:
//     // <p> стає дитиною <div>
//     divElement.appendChild(pElement);

//     // <div> стає дитиною <main>
//     mainElement.appendChild(divElement);

//     // <main> стає дитиною <body>
//     // document.body - це пряме посилання на тег <body> вашої сторінки
//     document.body.appendChild(mainElement);

//     // Для перевірки можна вивести створений HTML у консоль
//     console.log(document.body.innerHTML);
//     // Або подивитися в інструментах розробника (F12) на вкладці "Elements"
// });