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
const every = function (arr, callback){
 console.log(callback(arr));
}
function callback(argument) {
  for(let numb of argument) {
    console.log(numb);
    if(numb < 10) {
      continue
    } else {
      return false
    }
  }
  return true
}
every([1,2,3,4,5], callback) // true (перевіряємо чи елементи < 10)
every([2,45,67,34], callback) // false (перевіряємо чи елементи > 10)
// // == task-2 == //
// Написати метод some який приймає масив і ф-ю callback. Цей метод поверне true якщо хоча б один елемент масиву пройже перевірку з callback callback приймає елемент масиву

// const some = function (arr, callback){
//  console.log(callback(arr));
// }
// function callback(argument) {
//   for(let numb of argument) {
//     console.log(numb);
//     if(numb < 10) {
//       return true
//     } else {
//       continue
//     }
//   }
//   return false
// }

//  some([1,2,3,23,5], callback) // true (перевіряємо чи елементи > 10)
//  some([12,45,67,34], callback) // false (перевіряємо чи елементи < 10)

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














