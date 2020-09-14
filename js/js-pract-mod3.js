// let a = 1;

// const testObj = {
//   test: "123",

// }

// delete testObj.test;
// testObj['a'] = a;

// console.log(testObj);
// console.log(testObj.name);
// console.log(testObj);

// ===============================================

// const obj = {
//   defaultValue: 0,
//   add: function(){
//     obj.defaultValue +=1
//     const a = 10;
//     return a;
//   },
//   onDecrement: function() {
//     obj.defaultValue -=1
//   }
// }

// obj.add();
// obj.add();
// obj.add();
// obj.add();
// let increment = obj.add();
// console.log(obj);
// console.log(increment);

// ==============================================================

// const obj = {
//   defaultValue: 0,
//   add: function(n){
//     obj.defaultValue += n;
//   },
//   onDecrement: function(n) {
//     obj.defaultValue -= n;
//   },
//   onPow: function(n) {
//     obj.defaultValue *= n;
//   },
//   offPow: function(n) {
//     obj.defaultValue /= n;
//   },
//   showTheValue: function(){
//     console.log(obj.defaultValue);
//   }
// }
// obj.add(10);
// console.log(obj);
// obj.onDecrement(3)
// console.log(obj);
// obj.onPow(9);
// console.log(obj);
// obj.offPow(1000);
// console.log(obj);
// obj.showTheValue();

// =================================================

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// console.log(obj.entries[1]); // непонятно
// let total = 0;
// for (let key in obj){
//   console.log(`${key} is equa ${obj[key]}`);
// total += obj[key];
// }
// console.log(total);

// ========================================================

// const obj1 = {
//   a: 1,
//   b: 2,
// }
// const obj2 = {
//   b: 5,
//   c: 6,
// }
// let q = 15;
// let p = 30;
// const obj3 = {p, ...obj1, q, obj2};
// console.log(obj3);

// ========================================================

// // hw-task-01

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = "happy";
// console.log(user);
// user.hobby = "skydiving";
// console.log(user);
// user.premium = "false";
// console.log(user);

// let keys = Object.keys(user);
// console.log(keys);

// for(let key of keys) {
//   console.log(`${key}:${user[key]}`);
// };

// =========================================================

// hw-task-02

// const countProps = function(obj) {
//   const array = Object.keys(obj).length;
//   //  console.log(array);
//   const array2 = Object.values(obj).length;
//   //  console.log(array2);
//   return array;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// =========================================================================

//task 3

// const findBestEmployee = function(employees) {
//   const array = Object.entries(employees);
//   let bestName = array[0][0];
//   let bestScore = array[0][1];
//   // console.log(bestName);
//   // console.log(bestScore);
//   for ( let i = 1; i < array.length; i++ ) {
//     const totalArray = array[i];
//     // console.log(totalArray);
//     let name = totalArray[0];
//     let score = totalArray[1];
//     if (bestScore < score) {
//       bestName = name;
//       bestScore = score;
//       // console.log(bestName);
//       // console.log(bestScore);
//     }
//   }
//   return bestName
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// =========================================================================

// task 04

// const countTotalSalary = function(employees) {
//   const arr = Object.values(employees);
//   // console.log(arr);
//   let total = 0;
//   for(let elem of arr) {
//     total += elem
//   }
//   console.log(total);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// =========================================================================
// task 05
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//   let array = [];
//   for(let obj of arr) {
//     for(let key in obj) {
//       if (key === prop) {
//         array.push(obj[key]);
//       }
//     }
//   }
//   return array;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// =================================================================

// task 06

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function(allProducts, productName) {
//   // console.log(allProducts);
//   console.log(productName);
//   for(let obj of allProducts) {
//     // console.log(obj);
//     for(let key in obj){
//       // console.log(key);
//       // console.log(obj[key]);
//       if (obj[key] === productName) {
//         // console.log(obj[key]);
//         // console.log(obj.price * obj.quantity);
//         return obj.price * obj.quantity
//       }
//     }
//   }
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// ==================================================================

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {

//     let id = this.transactions.length; id=+1;
//     const transaction = {amount: amount , type: type, id: id};
//     return transaction;
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//   const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//   this.transactions.push(transaction);
//     return this.balance += amount;

//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     if(this.balance >= amount) {
//       return this.balance -= amount;
//     } else {
//       return  'Недостаточно денег';
//     }
//     },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     if (this.balance -= amount){
//     return this.balance;
//   }else(this.balance -= amount)
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let obj of this.transactions){
//     for (let key in obj) {
//       if (obj[key] === id) {
//         return obj;
//       }
//     }
//   }
//   },

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     for (let obj of this.transactions){
//       for (let key in obj) {
//         if (obj[key] = `${type}`) {
//           return obj;
//         }

//       }
//     }
//   },
// };

// console.log(account.deposit(400));
// console.log(account.createTransaction(200, Transaction.WITHDRAW))
// console.log(account.createTransaction(300, Transaction.WITHDRAW))
// console.log(account.createTransaction(100, Transaction.DEPOSIT))
// console.log(account.createTransaction(700, Transaction.DEPOSIT))

// // console.log(account.deposit(400));
// // console.log(account.balance);
// // console.log(account.deposit(500));
// // console.log(account.balance);
// // console.log(account.withdraw(300));
// // console.log(account.balance);
// // console.log(account.withdraw(2000));
// console.log(account.getBalance());
// console.log(account.transactions);
//  console.log(account.getTransactionDetails(2));
//  console.log(account.getTransactionTotal());
//  console.log(account.getTransactionTotal('withdraw'));

// //  console.log(account.getTransactionTotal(DEPOSIT));

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */
// const account = {
//   // Текущий баланс счета
//   balance: 0,
//   // История транзакций
//   transactions: [],
//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     let id = this.transactions.length + 1;
//     const transaction = {amount: amount , type: type, id: id};
//     return transaction;
//   },
//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//   const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//   this.transactions.push(transaction);
//     return this.balance += amount;
//   },
//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
//     if(this.balance >= amount) {
//       return this.balance -= amount;
//     } else {
//       return  'Недостаточно денег';
//     }
//     },
//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },
//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {
//     for (let obj of this.transactions){
//     for (let key in obj) {
//       if (obj[key] === id) {
//         return obj;
//       }
//     }
//   }
//   },
//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (let obj of this.transactions){
//       for (let key in obj) {

//         if (obj[key] === `${type}`) {
//           total += obj.amount;
//         }
//       }
//     }
//     return total;
//   },
// };
// console.log(account.createTransaction(500, Transaction.DEPOSIT));
// console.log(account.deposit(400));
// console.log(account.balance);
// console.log(account.deposit(500));
// console.log(account.balance);
// console.log(account.withdraw(300));
// console.log(account.balance);
// console.log(account.withdraw(2000));
// console.log(account.getBalance());
// console.log(account.transactions);
// //  console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// // account.getTransactionTotal(Transaction.WITHDRAW);
// //  console.log(account.getTransactionTotal("deposit"));
// //  console.log(account.getTransactionTotal(deposit));
// //  console.log(account.getTransactionTotal(DEPOSIT));

// ==================================================================================================================================

// дополнительные задачки
// ===================== ADDITIONAL ========================== //
// // == task-1 == //
// Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) Ця ф-я має повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 } const orderA = { apple: 5, cheese: 1, bread: 3 } const orderB = { orange: 10, pork: 2, bread: 1 }

// // == task-2 == //
// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false
// isObjectEmpty({}) // true
// isObjectEmpty({name: 'user, age: {21}}) // false

// // == task-3 == //
// Створити обєкт піци з полями і методами

// В обєкті має бути такі поля і методи:

// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
// const SIZES = {
// BIG: { price: 25, cal: 100, time: 15 },
// SMALL : { price : 15, cal: 50, time: 7 },
// MEDIUM: { price : 15, cal: 50, time: 7 }
// },
// const STUFFING = {
// CHEESE: { price : 6.5, cal: 45, time: 2 },
// BEACON : { price : 10, cal: 70, time: 6 },
// TOMATO : { price : 12.1, cal: 4, time: 5 },
// CHICKEN : { price : 9.3, cal: 30, time: 5.1 }
// }
// const SAUCES = {
// MUSTARD: { price : 3, cal: 5, time: 1 },
// KETCHUP = { price : 4.2, cal: 20, time: 1.5 },
// BOLOGNESE = { price : 7.5, cal: 50, time: 3 }
// }
// Створити всі методи і перевірити чи вони працюють

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // // // == task-1 == //
// // Написати ф-ю яка приймає в себе 2 параметра (обєкт замовлення і обєкт з цінами товару) Ця ф-я має повернути ціну замовлення
// const productsPrice = { apple: 20, orange: 5, cheese: 12, pork: 45, bread: 23 };
// const orderA = { apple: 5, cheese: 1, bread: 3 };
// const orderB = { orange: 10, pork: 2, bread: 1 };

// let check = function () {
//   const entriesProductsPrice = Object.entries(productsPrice);
//   const entriesOrderA = Object.entries(orderA);
//   let totalOrderA = 0;
//   for (let price of entriesProductsPrice) {
//     let n = 0;
//     for (let order of entriesOrderA) {
//       if (price[0] === order[0]) {
//         n = price[1] * order[1];
//         totalOrderA += n;
//       }
//     }
//   }
//   const entriesOrderB = Object.entries(orderB);
//   let totalOrderB = 0;
//   for (let price of entriesProductsPrice) {
//     let n = 0;
//     for (let order of entriesOrderB) {
//       if (price[0] === order[0]) {
//         n = price[1] * order[1];
//         totalOrderB += n;
//       }
//     }
//   }
//   console.log(totalOrderA);
//   console.log(totalOrderB);
// };
// check();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // // == task-2 == //
// // Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false
// const isObjectEmpty = function (key) {
//   if (Object.keys(key).length){
//     console.log(false);
//   } else {
//     console.log(true);
//   }
// };

// isObjectEmpty({}); // true
// isObjectEmpty({name: 'user', age: 21}); // false

// =============================================================================

// const numbers = function (... element){
//   for (let num of element) {
//     if (num % 2 === +0){
//       console.log(`${num} - это число четное`);
//     } else {
//       console.log(`${num} - это число не четное`);
//     }
//   }
// }

// numbers(1,2,3,10);

// ================================================================================

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false
// var str = 'яблоко';
// var arr = ['банан', 'яблоко', 'персик'];

// const inArray = function(str, arr) {
// if (arr.includes(str)) return true
// }
// console.log(inArray(str, arr));

// ==========================================================================================
// //Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно
// // больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

// const isNumberInRange = function(numb) {
//   if (numb > Number(10)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isNumberInRange(0));

// function generateId() {
//   const randomNumber = Math.random();
//   return randomNumber.toString().slice(2);
// }

// const shop = {
//   name: 'Shop #1',
//   address: 'Kiev',

//   items: [
//     { id: '1', name: 'bananes', price: 20, amount: 200, category: 'fruits' },
//     { id: '2', name: 'apples', price: 20, amount: 1, category: 'fruits' },
//     {
//       id: 'werwer2343',
//       name: 'apples',
//       price: 20,
//       amount: 1,
//       category: 'fruits',
//     },
//   ],

//   showItems(name) {
//     for (let arr of this.items)
//       if (arr.name === name) {
//         console.log(arr);
//         console.log(
//           `(${arr.id}) - ${arr.name}: ${arr.price}$, amount: ${arr.amount}`,
//         );
//       }
//   },
//   addItem(name, price, amount, category) {
//     let a = { id: generateId(), name, price, amount, category };
//     shop.items.push(a);
//     console.log(shop.items);
//   },

//   removeItem(productName) {},

//   updateItem(productName, newName) {},
// };
// console.log(shop.showItems('apples'));
