// 5.1
/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}
*/

// prac 5.3
/*
for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
let sum = 0
for (let i = 0; i < 11; i++) {
    sum += i
}
console.log(sum)
*/

// 5.4. Цикл while
/*
let count = 0;

while (count < 3) {
    console.log("Count:",count);
    count++;
}
*/
// zadan 2
/*
let number = 5;

while (number >= 0) {
    console.log("Num:", number);
    number--;
}
*/

// 5.6. Цикл do...while
/*
let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while (doValue < 3);
// 5.7. Операторы break и continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
*/

// zadan 4
/*
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    } else if(i === 8) {
        break;
    }
    console.log(i);
}
*/

//  5.9. Вложенные циклы
/*
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
*/
// 5.10. zadan 5
// for (let i = 1; i <= 4; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//         stars += "*";
//     }
//     console.log(stars);
// }


// 6.2. Объявление функции
function sum(a, b) {
    return a + b;
}

console.log(sum(3, 5));
// Практическое задание №1
function mult(a1, b1) {
    return a1 * b1;
}
console.log(multi(3, 5));

// Функция без return
function Hello(name) {
    console.log(`Hello, ${name}`);
}
Hello("Misha")

function Info(name, age) {
    console.log(`Hello, ${name}, вам ${age} лет`);
}
Info("Misha", 19)

// 6.6. Значения параметров по умолчанию
function good(name = "Гость") {
    console.log("Привет, " + name);
}
good();
good("aleksey");
// 6.7. Практическое задание №3
function calculate(num, num2 = 10) {
    const num3 = (num * num2) / 100
    const num4 = num - num3
    console.log("Цена с учетом скидки: ", + num4)
}
calculate(num = 1000);
calculate(num = 1000, num2 = 15);

// 6.8. Функции как значения
const add = function (a, b) {
    return a + b;
};
console.log(add(2, 3));

// 6.9. Стрелочные функции
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => a + b;


// 7.2. Создание массива
let numbersArr = [1,2,3,4,5];
console.log(numbersArr);
// 7.3. Доступ к элементам массива
console.log(numbersArr[0]);

// 7.4. zadan 1
let colors = ["green", "red", "yellow"];
console.log(colors[0]);
console.log(colors[2]);
colors[1] = "pink";
console.log(colors[1]);

// 7.5. Длина массива
console.log(numbersArr.length);
// 7.6. Добавление и удаление элементов
numbersArr.push(10);
console.log(numbersArr);

numbersArr.pop();
console.log(numbersArr);

// 7.7. zadan 2
let people = [];
people.push("Misha", "Tim", "Lepilkin");
console.log(people)
people.pop();
console.log(people);

// 7.8. Перебор массива с помощью цикла for
let number2 = [10,20,30];
for (let i = 0; i < number2.length; i++) {
    console.log(number2[i]);
}

// 7.9. Цикл for...of
for (let value of number2) {
    console.log(value);
}

// 7.10. Массивы с разными типами данных
let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);
// 7.11. Поиск элемента в массиве
console.log(numbersArr.includes(1));
console.log(numbersArr.indexOf(2));

// 7.12. zadan 4
let city = ["Volz", "Volg", "Moskva"];
console.log(city.includes("Volz"))
console.log(city.indexOf("Volz"))



// 8.2. Создание объекта (object literal)
let user2 = {
    name: "Misha",
    age: 19,
    isStudent: true,
};

console.log(user2);
console.log(user2.name);
console.log(user2.age);
console.log(user2["name"]);

// 8.4. zadan1
let book = {
    title: "Преступление и наказание",
    author: "Достоевский",
    year: 1866,
}
console.log(book);
book.year = 1966
console.log(book.year)

// 8.5. Добавление и удаление свойств
user2.age = 30;
user2.name = "Кирилл";
delete user2.isStudent;
console.log(user2);
// 8.6. Объект с методами
let user2 = {
    name: "Misha",
    age: 19,
    isStudent: true,
    sayHello: function () {
        console.log(`Hello, my name is ${name}`);
    },
};

user2.sayHello();

// 8.7. Zadan 2
let car = {
    brand: "Mazda",
    year: 2013,
    getInfo: function () {
        console.log(`Вчера купил машину марка ${brand}, ${year} года.`);
    },
}
car.getInfo();

// 8.8. Перебор свойств объекта
for (let key in user2) {
    console.log(key + ": " + user2[key]);
}

// 8.9. Zadan 3
let Product = {
    name: "xleb",
    sroc_godnosti: "16.04.2026",
    isProduct: true,
};
for (let key in Product) {
    console.log(key + ": " + Product[key]);
}

// 8.10. Вложенные объекты и массивы
let student = {
    name: "Rinat",
    skills: ["Html", "CSS", "JS"],
    address: {
        city: "Volzchky",
        street: "Mira",
    },
};
console.log(student.skills[0]);
console.log(student.address.city);