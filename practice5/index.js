// TASK 1 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function propsCount(currentObject) {
// return Object.keys(currentObject).length;
// }

// let mentor = {
//   course: "JS fundamental",
//   duration: 3,
//   direction: "web-development",
// };

// console.log(propsCount(mentor));

// TASK 2 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// function showProps(obj) {
//     const proporties = [];
//     const values = [];
//     for (const key in obj){
//         if(Object.prototype.hasOwnProperty.call(obj, key)){
//             proporties.push(key);
//             values.push(obj[key]);
//         }
//     }
//     console.log("Check list:", proporties);
//     console.log("Massive", values);
// }

//     let myObject = {
//         name : "Andrew",
//         age : 23,
//         city : "Lviv",
//         isStudent : false,
//         hobbies : ["voleyball", "football", "basketball"]
//     }

//     showProps(myObject);

// TASK 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   showFullName() {
//     console.log(`${this.name} ${this.surname}`);
//   }
// }

// class Student extends Person {
//   constructor(name, surname, year) {
//     super(name, surname);
//     this.year = year;
//   }

//   showFullName(middleName) {
//     console.log(`${this.name} ${middleName} ${this.surname}`);
//   }

//   showCourse() {
//     const currentYear = new Date().getFullYear();
//     let course = currentYear - this.year;
//     if (course < 1) {
//       course = 1;
//     } else if (course > 6) {
//       course = 6;
//     }
//     console.log(`This Course: ${course}`);
//     return course;
//   }
// }

// const person1 = new Person("Іван", "Франко");
// person1.showFullName();

// const student1 = new Student("Bob", "Marley", 2022);
// student1.showFullName("Ivanovich");
// student1.showCourse();

// const student2 = new Student("Father", "Rome", 2025);
// student2.showFullName("Tolykovuch");
// student2.showCourse();

// const student3 = new Student("Vitya", "Yanykovuch", 2021);
// student3.showFullName("Fedorovuch");
// student3.showCourse();

// TASK 4 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// class Worker {
//   constructor(fullName, dayRate, workingDays) {
//     this.fullName = fullName;
//     this.dayRate = dayRate;
//     this.workingDays = workingDays;
//     this._experience = 1.2;
//   }

//   showSalary() {
//     const salary = this.dayRate * this.workingDays;
//     console.log(`${this.fullName} salary: ${salary}`);
//     return salary;
//   }

//   showSalaryWithExperience() {
//     const salaryWithExperience =
//       this.dayRate * this.workingDays * this._experience;
//     console.log(
//       `${this.fullName} salary with experience: ${salaryWithExperience}`
//     );
//     return salaryWithExperience;
//   }

//   get experience() {
//     return this._experience;
//   }

//   set experience(value) {
//     if (typeof value === "number" && value > 0) {
//       this._experience = value;
//     } else {
//       console.error("Experience must be positive");
//     }
//   }
// }

// const worker1 = new Worker("Іван Коваленко", 25.5, 20);
// console.log(`Початковий experience для ${worker1.fullName}: ${worker1.experience}`);
// worker1.experience = 1.5;
// console.log(`Новий experience для ${worker1.fullName}: ${worker1.experience}`);
// worker1.showSalaryWithExperience();

// const worker1 = new Worker("John Smith", 25.5, 20, 1.5);
// worker1.showSalary();
// worker1.showSalaryWithExperience();
// worker1.experience ();


// const worker2 = new Worker("Brendi Cola", 30, 22);
// worker2.showSalary();
// worker2.showSalaryWithExperience();


// const worker1 = new Worker("Джон Доу", 19, 20);
// console.log(worker1.fullName);
// worker1.showSalary(); // 380
// console.log("New experience: " + worker1.experience);
// worker1.experience = 1.5;
// console.log("New experience: " + worker1.experience);
// worker1.showSalaryWithExperience(); 

// console.log("\n---");

// const worker2 = new Worker("Пітер Сміт", 20, 25);
// console.log(worker2.fullName);
// worker2.showSalary(); 
// console.log("New experience: " + worker2.experience);
// worker2.experience = 1.6;
// console.log("New experience: " + worker2.experience); 
// worker2.showSalaryWithExperience(); 

// console.log("\n---");

// const worker3 = new Worker("Стів Оушен", 15, 18);
// console.log(worker3.fullName);
// worker3.showSalary(); // 270
// console.log("New experience: " + worker3.experience);
// worker3.experience = 1.3;
// console.log("New experience: " + worker3.experience); 
// worker3.showSalaryWithExperience(); 

// console.log("\n--- Сортування зарплат ---");

// const workers = [worker1, worker2, worker3];


// workers.sort((a, b) => {
//   return a.showSalaryWithExperience() - b.showSalaryWithExperience();
// });

// for (const worker of workers) {
//   console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
// }


// TASK 5 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// Батьківський клас
class GeometricFigure {
    getArea() {
      // Порожній метод, буде перевизначений у нащадках
      return 0; // За замовчуванням повертаємо 0
    }
  
    toString() {
      // Повертає назву класу
      return `Class: ${this.constructor.name}`;
    }
  }
  
  // Клас нащадок: Трикутник
  class Triangle extends GeometricFigure {
    constructor(base, height) {
      super(); // Викликаємо конструктор батьківського класу
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      // Площа трикутника: 0.5 * основа * висота
      return 0.5 * this.base * this.height;
    }
  }
  
  // Клас нащадок: Квадрат
  class Square extends GeometricFigure {
    constructor(side) {
      super(); // Викликаємо конструктор батьківського класу
      this.side = side;
    }
  
    getArea() {
      // Площа квадрата: сторона * сторона
      return this.side * this.side;
    }
  }
  
  // Клас нащадок: Коло
  class Circle extends GeometricFigure {
    constructor(radius) {
      super(); // Викликаємо конструктор батьківського класу
      this.radius = radius;
    }
  
    getArea() {
      // Площа кола: PI * радіус^2
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Зовнішня функція для обробки фігур
  function handleFigures(figures) {
    let totalArea = 0;
  
    for (const figure of figures) {
      // Перевірка, чи об'єкт належить батьківському класу з урахуванням наслідування
      if (figure instanceof GeometricFigure) {
        console.log(figure.toString()); // Виводимо назву класу
        const area = figure.getArea();
        console.log(`Area: ${area}`); // Виводимо розраховану площу
        totalArea += area; // Додаємо до сумарної площі
      } else {
        console.log("Об'єкт не є геометричною фігурою:", figure);
      }
    }
  
    // Обчислення сумарної площі за допомогою reduce (альтернативний спосіб або додаткова перевірка)
    // Цей варіант більш компактний для підрахунку суми
    const totalAreaReduce = figures.reduce((sum, figure) => {
      if (figure instanceof GeometricFigure) {
        return sum + figure.getArea();
      }
      return sum; // Ігноруємо об'єкти, які не є GeometricFigure
    }, 0); // Початкове значення суми 0
  
    console.log(`\nСумарна площа всіх фігур (з циклу): ${totalArea}`);
    console.log(`Сумарна площа всіх фігур (з reduce): ${totalAreaReduce}`);
  
    return totalAreaReduce; // Можна повернути сумарну площу
  }
  
  
  // --- Приклад використання ---
  
  // Створення екземплярів різних фігур
  const triangle = new Triangle(4, 5);
  const square = new Square(7);
  const circle = new Circle(3);
  const anotherTriangle = new Triangle(6, 8);
  
  // Створення масиву об'єктів фігур
  const myFigures = [triangle, square, circle, anotherTriangle];
  
  // Виклик зовнішньої функції для обробки масиву фігур
  handleFigures(myFigures);
  
  console.log("\n--- Приклад з некоректним об'єктом ---");
  const mixedFigures = [triangle, {name: "Not a figure"}, square];
  handleFigures(mixedFigures);