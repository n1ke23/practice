// // // const name = "Alex";
// // let age = prompt `Ведите ваш возраст`;
// // console.log(typeof age);
// // console.log(age);
// // console.log(age + 3);
// // // age = Number(age)
// // age = +age;
// // console.log(age + 3);
// // // console.log(typeof age);
// // console.log(age);
// // let message = 'Привет'+' '+ name;
// // console.log(message);
// // let newMessage = `my age is ${age}`;
// // console.log(newMessage);
// // let answer = confirm (`Вам есть 18?`);
// // console.log(answer);
// // console.log(typeof answer);
// // let newQuestion = `Вы любите js?`;
// // // let newAnswer = confirm (newQuestion);
// // console.log(newAnswer);
// // console.log(typeof newAnswer);


// let num = 23;
// let boolNum = Boolean(num);
// console.log(boolNum);

// num = 0;
// boolNum = Boolean(num);
// console.log(boolNum);

// let str = `Sasha`;
// let boolStr = Boolean(str);
// console.log(boolStr);

// str = ``;
// boolStr = Boolean(str);
// console.log(boolStr);

// str = ` `;
// boolStr = Boolean(str);
// console.log(boolStr);

// let isOpen;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolUnd = Boolean(isOpen);
// console.log(boolUnd);
// console.log(typeof boolUnd);

// isOpen = null;
// console.log(isOpen);
// console.log(typeof isOpen);

// let boolNull = Boolean (isOpen);
// console.log(boolNull);
// console.log(typeof boolNull);

// let vova = {
//   age: 16,
//   dad: 'deputat'
// }
// if(vova.age >=18) {
//   alert('Prohodi');
// } else if (vova.dad === 'deputat'){
//   alert('Prohodi');
// } else {
//   alert('Izvini brat');
// }
// if(vova.age >= 18 || vova.dad === 'deputat') {
//   alert('Prohodi');
// } else {
//   alert('Izvini brat');
// }
// vova.age >= 18 || vova.dad === 'deputat' ? alert('Prohodi') : alert('Izvini brat');

//  i++
//  i=i+1

//  ++i
//  1+i=i

//  const myAge = 31;
//  const bogdanAge = 24;
// let resoltAge = myAge + bogdanAge;
// console.log(resoltAge);

// const radius = 10;
// const PI = 3.14;
// console.log(PI * Math.pow(radius, 2));

// const name = 'ALex';
// const age = 31;
// console.log(`Я ${name} ${age} на 24 буткемпе!`);






// let a = 10;
// a = 20;
// let b = a.append + a;
// console.log(b);



// const credits = 23580;
// const pricePerDroid = 3000;
// const quantityDroid = prompt("Какое кол-во Вы хотите купить дройдов?");
// const totalPrice = pricePerDroid * quantityDroid;
// const newCredits = credits - totalPrice;

// if (!quantityDroid) {
//   console.log("Отменено пользователем!");
// } else if (newCredits < 0) {
//   console.log("Недостаточно средств на счету!");
// } else if (newCredits >= 0) {
//   console.log(
//     `Вы купили ${quantityDroid} дроидов, на счету осталось ${newCredits} кредитов.`
//   );
// }

// ---------------------------------------------------------------------------------------------------

//  let day = prompt()
// switch  (day) {
// case "monday":
// case "tuesday":
// case "wensesday":
// case "thursday":
// case "friday":
// console.log('Это будний день');
// break;

// case "saturday":
// case "sunday":
// console.log('Это выйходной день');
// break;
// default:
// console.log('Укажите пожалуйста валидный день');
// }

// =============================================================================================

// let day = prompt()
// if (day === 'monday' || day === 'tuesday' || day === 'wensesday' || day === 'thursday' || day === 'friday') {
// console.log('Это будний день');
// }
// else if (day === 'saturday'|| day === 'saturday') {
// console.log('Это выйходной день');
// }
// else {
// console.log('Укажите пожалуйста валидный день');
// }
// let userAnswer = prompt('Введите страну');

// let userСountry = (userAnswer + "").toLowerCase() ;

// const china = 'китай';
// const chile = 'чили';
// const australia = 'австралия ';
// const india = 'индия';
// const jamaica = 'ямайка';

// switch (userСountry){
// case china:
//   console.log(`Доставка в ${china} будет стоить 100 кредитов`);
//   break;

//   case chile:
//     console.log(`Доставка в ${chile} будет стоить 250 кредитов`);
//     break;

//     case australia:
//       console.log(`Доставка в ${australia} будет стоить 170 кредитов`);
//       break;

//       case india:
//         console.log(`Доставка в ${india} будет стоить 80 кредитов`);
//         break;

//         case jamaica:
//           console.log(`Доставка в ${jamaica} будет стоить 120 кредитов`);
//           break;

//           default:
//           console.log('В вашей стране доставка не доступна');
// }

// let userAnswer = prompt('Введите страну');

// let userСountry = userAnswer[0].toUpperCase() + userAnswer.substring(1)

// const china = 'китай';
// const chile = 'чили';
// const australia = 'австралия ';
// const india = 'индия';
// const jamaica = 'ямайка';
// let cost;

// switch (userСountry){
// case china:
//   cost = 100;
//   console.log(`Доставка в ${china} будет стоить ${cost} кредитов`);
//   break;

//   case chile:
//   cost = 250;
//     console.log(`Доставка в ${chile} будет стоить ${cost} кредитов`);
//     break;

//     case australia:
//       cost = 170;
//       console.log(`Доставка в ${australia} будет стоить ${cost} кредитов`);
//       break;

//       case india:
//         cost = 80;
//         console.log(`Доставка в ${india} будет стоить ${cost} кредитов`);
//         break;

//         case jamaica:
//           cost = 120;
//           console.log(`Доставка в ${jamaica} будет стоить ${cost} кредитов`);
//           break;

//           default:
//           console.log('В вашей стране доставка не доступна');
// }

// ------
