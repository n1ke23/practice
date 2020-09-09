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
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let id = this.transactions.length + 1;
    const transaction = {amount: amount , type: type, id: id};
    return transaction;
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
  const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
  this.transactions.push(transaction);
    return this.balance += amount;
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
    if(this.balance >= amount) {
      return this.balance -= amount;
    } else {
      return  'Недостаточно денег';
    }
    },
  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let obj of this.transactions){
    for (let key in obj) {
      if (obj[key] === id) {
        return obj;
      }
    }
  }
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let total = 0;
    for (let obj of this.transactions){
      for (let key in obj) {
      
        if (obj[key] === `${type}`) {
          total += obj.amount;
        }
      }
    }
    return total; 
  },
};
console.log(account.createTransaction(500, Transaction.DEPOSIT));
console.log(account.deposit(400));
console.log(account.balance);
console.log(account.deposit(500));
console.log(account.balance);
console.log(account.withdraw(300));
console.log(account.balance);
console.log(account.withdraw(2000));
console.log(account.getBalance());
console.log(account.transactions);
//  console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
// account.getTransactionTotal(Transaction.WITHDRAW);
//  console.log(account.getTransactionTotal("deposit"));
//  console.log(account.getTransactionTotal(deposit));
//  console.log(account.getTransactionTotal(DEPOSIT));
