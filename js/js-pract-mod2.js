// const arr = ['Mango', 'Poly', 'Ajax'];

// if(arr) {
//   console.log(arr);
// }

// for (let i = 0 ; i < arr.length; i++) {

//   console.log(`element #${i+1}: ${arr[i]}`);

// }

// console.log(arr[2]);

// for(let el of arr){
//   console.log(el);
// }

// const arr2 = [[1,2,3], [1,2,3], [1,2,3]];
// const arr3 = [];

// // for (let i = 0 ; i < arr2.length; i++) {

// //   console.log(`element #${i+1}: ${arr2[i]}`);

// // }

// for(let el of arr2) {
//   for(let i = 0 ; i < arr2.length; i++){
//     console.log(el[i]);
//     arr3.push(el[i]);
//   }
// }
// console.log(arr3);




// ====================================================


// let a = 1;
// let b = a;
// a=2;
// console.log(b);


// ==========================================

// const obj = {name: 'Jone', surname: 'Vick'};
// console.log('obj', obj);
// const objCopy = obj;
// console.log('objCopy', objCopy);

// obj.name = "Vasilij";
// console.log('objCopy', objCopy);
// console.log('obj', obj);


// =====================================================

// let str = "helow world, i'm Johny";
// console.log(str.split(",").join('').split(" "));


// ===================================================


// let str = 'AVA';
// let str2 = str.split("").reverse().join("");

// console.log(str===str2);

// ===========================================================
 

// let arr = [1, 2, 3];
// let newArr = arr.slice(1);
//  

// let arr = [1,2,3];
// arr.splice(1, 0, 'hellow');
// console.log(arr);

// ======================================================
// #2
// 1.Создайте массив styles с элементами «Джаз» и «Блюз».
// 2.Добавьте «Рок-н-ролл» в конец.
// 3.Замените значение в середине на «Классика». Ваш код для поиска значения
//  в середине должен работать для массивов с любой длиной.
// 4.Удалите первый элемент массива и покажите его.
// 5.Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:


// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// console.log(styles);
// styles.splice(1, 1, 'Классика');
// console.log(styles);
// styles.shift();
// console.log(styles);
// console.log('вырезал - ', styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles)


// +++++++++++++++++++++
// const fn = function (a=0, b=0, c=0,d=0) {
//   console.log(a,b,c,d);
// }
// fn (1)

// const showMeArguments = function (... args) {
//  console.log(args);
// }
// showMeArguments( 'Thor', 'Black Window', 'Ant Man')
// let arr =  [1,2,3,4,5]

// let arr2 = [6,7,8]
// let newArr = [...are, ...are2]
// console.log(newArr);
// непонятно

// ===============================



// а теперь максимальное число если функция принимает неограниченое к-во аргументов
// const max = function () {}
// let a = [2, 3]
// let b = 3;



// const max = function (... ars) {
  
//   return  console.log(Math.max(... ars));;
  
// }

// max(1,2,3,12131, "bdjcb ");


// const max = function () {
//   let total = [];
//   for(const argument of arguments) {
//     total = total.push()
//   }
//   return  Math.max.total();
  
// }
// max(1,2,3,10)



// const humanCreate = function(hend, legs) {
//   return `human have ${hend} hend and ${legs} legs`
// }
// console.log(humanCreate(2,3));
// console.log(humanCreate(1,4));


// const humanCreate = (hend, legs) => console.log(`human have ${hend} hend and ${legs} legs`);

// humanCreate(2,3);
// humanCreate(1,4);


// ========================================================================



// const hellow = (name = 'гость') => `Привет ${name}`;

// console.log(hellow("Vick"));


// ================================================================

// const repeat = function (str, n) {
//   let result = "";
//   for (let i = 0; i < n ; i++) {
//     result += str;
//   }
//   console.log(result);
// }
// repeat('hellow', 3)

//===================================


// const avg = function(... arg) {
//    let total = 0;
//   for(const argument of arg) {
//     total += argument;
//   }
//   return total/arg.length;
// }

// console.log(avg(1,2,3,4,23123));


// ===========================================


// ===================== ADDITIONAL ========================== //
// // == task-1 == //
// Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const capitalize = function (string){
//   let word = string.split(' ');
//   console.log(word);
//   for(let elem of word){
//     let wordCapitalize = elem[0].toUpperCase + elem.substring(1);
//     let arrayCapitalize = [];
//     arrayCapitalize.push(wordCapitalize);
//   }
//   return arrayCapitalize.join(' ');
// }
// console.log(capitalize('the quick brown fox'));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(capitalize('the quick brown fox'));
// capitalize('the quick brown fox') // 'The Quick Brown Fox '

// // == task-2 == //
// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. aeiouAEIOU - рядок з голосними в англ алфавіті

// countVowels('the quick brown fox') // 5
const vowels = 'aeiouAEIOU';
const countVowels = function(string) {
  console.log(string);
  let arr = string.split('');
  console.log(arr);
  let a = [];
  for(let elem of arr) {
    if (vowels.includes(elem)) {
      a.push(elem);

    }
  }
  console.log(a.length);
}
 countVowels('the quick brown fox') // 5

// // == task-3 == //
// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і велечину базового шрифта ("20px") і вертає конвертований розмір в пікселях

// // == task-4 == //
// Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах

// // == task-5 == //
// Написати ф-ю calculateDogAge яка приймає один параметр - вік собачки. Результатом її роботи буде вік перевединий на людський (1 рік собаки це 7 років в людини)

// // == task-6 == //
// Написати ф-ю rgbToHex яка приймає колір в форматі rgb і повертає колір в форматі hex

// // == task-7 == //
// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи
// nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
// nonUniqueElements([1, 2, 3, 4, 5]) // []
// nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]

// // == task-8 == //
// Написати ф-ю median яка приймає масив і знаходить його медіану Медіана – це числове значення, яке ділить відсортований масив чисел на більшу і меншу половини. У відсортованому масиві з непарним числом елементів медіана – це число в середині масиву. Для масиву з парним числом елементів, де нема ні одного елемента точно посередині, медіана – це середнє значення двох чисел, які знаходяться в середині масиву. В цій задачі заданий непустий масив натуральних чисел. Вам потрібно знайти медіану даного масиву.
// median([1, 2, 3, 4, 5]) // 3
// median([3, 6, 10, 15, 20, 99]) // 12.5