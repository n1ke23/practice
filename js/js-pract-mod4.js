// const arr = function (n, str) {

//   for ( let i = 1; i <= n; i++) {
//     console.log(img);
//     console.log(`${str} - ${i}`);
//     img(src; name)
//   }
//   sdiasfhsduifhisoaid
// }
// arr(12, 'Количество цыфр')

// const filter = function(array, test) {
//   const filteredElements = [];
//   for (const element of array) {
//     const passed = test(element);
//     if (passed) {
//       filteredElements.push(element);
//     }
//   }
//   return filteredElements;
// };
// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];
// // const freshFruits = filter(fruits, fruit => fruit.isFresh);
// // console.log(freshFruits); // массив с объектами apples и bananas
// // const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// // console.log(fruitsWithQuantity); // массив с объектами apples и grapes
// const filterBananas = filter(fruits, fruit => fruit.name === "bananas")
// console.log(filterBananas);

// ============================================================================================================================================

// zarplata > 100 and not works

// const filter = function (array, fun) {
//   let gay = []
//   for(let arr of array){
//     if (fun(arr)) {
//       gay.push(arr)
//     }
//   }
//   return gay;
// }
// const community = [
//   { name: `John`, salary: 200, isActiveWorker: true },
//   { name: `Derek`, salary: 150, isActiveWorker: false },
//   { name: `Anna`, salary: 100, isActiveWorker: true },
//   { name: `Marii`, salary: 50, isActiveWorker: false },
//   { name: `Tony`, salary: 100, isActiveWorker: true },
// ];
// const bad = filter(community, communitys => communitys.salary > 100 && !communitys.isActiveWorker)
// console.log(bad);

// =======================================================================================================================================
// console.log(q);
// console.log(y);
// fn4
// console.log(t);
// fn3;
// console.log(r);
// fn1;
// console.log(w);
// fn2
// console.log(e);

// qytrwe

// let a=10;
// { let a = 1}
// console.log(a);

// ===================== ADDITIONAL ========================== //
// // == task-1 == //
// Написати метод every який приймає масив і ф-ю callback (в якій ми будемо робити різні перевірки) Цей метод повертає true якщо кожен елемент масиву пройшов перевірку з callback. Якщо хоча б один елемент не проходить перевірку то повертає false, callback приймає елемент масиву
// const every = function (arr, callback){
//  console.log(callback(arr));
// }
// function callback(argument) {
//   for(let numb of argument) {
//     console.log(numb);
//     if(numb < 10) {
//       continue
//     } else {
//       return false
//     }
//   }
//   return true
// }
// every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
// every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)
// // == task-2 == //
// Написати метод some який приймає масив і ф-ю callback. Цей метод поверне true якщо хоча б один елемент масиву пройже перевірку з callback callback приймає елемент масиву

const some = function (arr, callback){
 console.log(callback(arr));
}
function callback1(argument) {
  let a
  for(let numb of argument) {
    if(numb > 10) {
       a = true
    }
  }
  if(a === true){
      return true
    } else {
      return false
  }
}
function callback2(argument) {
  let a
  for(let numb of argument) {
    console.log(numb);
    if(numb < 10) {
       a = true
    }
  }
  if(a === true){
    return true
  } else{
    return false
  }
}

some([1,2,3,23,5], callback1) // true (перевіряємо чи елементи > 10)
some([12,45,67,34], callback2) // false (перевіряємо чи елементи < 10)

// // == task-3 == //
// Створити метод compact який приймає масив і вертає новий де відсутні будь-які значення що при переведені в bool дають false
// let a = [ ];
// console.log(a);
// const compact = function(arr){
//   for(let elem of arr) {
//     if(elem){
//       a.push(elem)
//     } else {
//       continue
//     }
//   }
// }
//  compact([1,0,'', null, 'Hello']) // [1,'Hello']

// // == task-4 == //
// Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.

// Якщо прогрес доставки 100 показувати строку "Done"

// Якщо прогрес доставки < 100 показувати строку "In progress"

// Якщо прогрес доставки null показувати строку "Ready for delivery"

// const showDeliveryStatus = function (argument) {
// for(let arg of argument){
//   if(arg.deliveryProgress === 100){
//     console.log("Done");
//   } else if (arg.deliveryProgress === null){
//     console.log("Ready for delivery");
//   } else if (arg.deliveryProgress < 100) {
//     console.log("In progress");
//   }
// }

// }

// const ordersA = [
// { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
// { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
// { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
// ]

// const ordersB = [
// { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
// { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
// ]

// showDeliveryStatus(ordersA) // "In Progress", "Done", "Ready for delivery"
// showDeliveryStatus(ordersB) // "In progress", "Not Ordered", "Ready for delivery"

// ??????????????????????????????????????????????????????????????????????????????????????????????????????????/
// const some = function (arr, callback){
//   console.log(callback(arr));
//  }
//  function callback(argument) {
//    for(let numb of argument) {
// console.log(numb);
//        return numb > 10 ? true  : false

//    }

//  }

//   some([1,2,3,23,5], callback) // true (перевіряємо чи елементи > 10)
//   some([12,45,67,34], callback) // false (перевіряємо чи елементи < 10)
// ?????????????????????????????????????????????????????????????????????????????????????????????????????????/

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// // account.changeDiscount(0.15);
// // console.log(account.discount); // 0.15

// // console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

//  account.addOrder(5000, 'order-4');
//  console.log(account.balance); // 19000
//  console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']
// ========================================================================================
// alert('hellow');
// console.log('hellow123');

// const fun1 = function (callback) {
//   let string = 'Hellow Sasha';
//   callback(string);
// };
// const printMessage = function (asdasd) {
//   console.log(asdasd);
// };
// fun1(printMessage);
// ===============================================================================
// const repeat = function (n, callback) {
//   for (let i = 1; i <= n; i++) {
//     // console.log(i);
//     callback(i);
//   }
// };
// const print = function (action) {
//   console.log(`Ты сегодня сделал это ${action} раз`);
// };
// repeat(5, print);
// =============================================================================



// const hotel1 = {
//   name: "Rivas",
//   star: "5",
//   capacity: 300
// }
// const hotel2 = {
//   name: "Jazz",
//   star: "5",
//   capacity: 200
// }
// const hotel3 = {
//   name: "Dnepro",
//   star: "2+",
//   capacity: 5000
// }

// const fn = function(callback, userName) {
// console.log(`hi ${userName}, welcom to ${this.name} ${this.star} ${this.capacity}`);
// }
// fn.call(hotel1, "user");
// const dneprFn = fn.bind(hotel3);
// dneprFn("Vova");

// ==========================================================================================
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     console.log(this.step );
//     return this;
//   }
// };
// // Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// // Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
// // ladder.up().up().up().down().showStep(); // 1


// // // ==============================================================================
// const film = [];
// const cinema;
// const actor = function(name){
//   cinema[name] = [];
//   return function (kino) {
//     // film.push(kino);
//     cinema[name].push(kino);
//     console.log(`${name} of film: ${kino}`);
//   }
// }

// const stehem = actor('Stethem');
// stehem('Pirati')
// stehem('Oshen')
// // console.log(film);
// console.log(cinema);
// const vick = actor("Jon Vick")
// vick("friends");
// vick("tik-tock")
// console.log(cinema);



// const jony = function(name){
// console.log(`${name}`);
// return (film){

// }}
// jony("Jony Dep")




// const obj = {
//   key: "sasha",
//   age: 23
// }
// console.log(obj.age);




// const user = {
//   name: "Sasha",
//   age: 31,
//   phone: 80660000000,
//   email: "aa@BhxBrowser.com",
//   toShowProps() {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.phone);
//     console.log(this.email);
    
//   }
// }
// const user2 = {
//   name: "Kostya"
// }
// const user3 = {
//   name: "Zaharia",
//   age: 102,
//   toUpdateAge(value){
    
//     return this.age = value
//   }
// }
// // user.toShowProps()

// const example = function (callback, val){
//   return callback(val)
// }

// example(user.toShowProps.bind(user))
// // console.log(this);
// example(user.toShowProps.bind(user2))
// console.log(example(user3.toUpdateAge.bind(user), 20));



// =================================================


// const toGetResult = function(callback,...value){
//   return callback(...value)
// }
// function toGetSum (a,b,c){
//   return a + b + c
// }
// function toGetMultyply(x,y){
//   return x * y
// }
// toGetResult((val) => {console.log(val%5)}, 20);
// console.log(toGetResult(toGetSum, 21, 12, 2));



// function sum (a,b) {
//   return a+b
// }
// function div (a,b) {
//   return a/b
// }
// function sub (a,b) {
//   return a-b
// }
// function mult (a,b) {
//   return a*b
// }
// function calc(a,b,operator){
//   return operator(a,b)
// }

// console.log(calc(10,21, mult));
// console.log(calc(10,21, sub));

// =============================================================================================
// let userName = [];
// let userPhone= [];
// let userEmail = [];
// const toGetForm = function (name,phone,email, ...arr){
//   console.log(arr);
//   userName.push(name);
//   userPhone.push(phone);
//   userEmail.push(email);
// }

// toGetForm("name","phone","email",1,2,3,4,5)
// toGetForm("Sasha","123123123123","aa@bb.com",1,2,3,4,5)

// console.log(userName);
// console.log(userPhone);
// console.log(userEmail);

// 

// ==================================================

// const products = [
//   {
//     name: "Volvo",
//     price: 50000,
//     quantity: 10,
//     premium: true,
//   },
//   {
//     name: "Audi",
//     price: 5000,
//     quantity: 4,
//     premium: true,
//   },
//   {
//     name: "Zhiguli",
//     price: 100,
//     quantity: 1,
//     premium: false,
//   }
// ]

// const totalSum = (value, arr) => {
//   for(let obj of arr){
//       if (value === obj.name) return obj.quantity * obj.price;
//   } 
//   return "Такого не существует"
// }

// console.log(totalSum("Volvo", products));
// console.log(totalSum("Audi", products));
// console.log(totalSum("HP", products));
// console.log(totalSum("Zhiguli", products));




