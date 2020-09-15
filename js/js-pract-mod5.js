// const CarCreator = function(name = "default", age = "default", color = "default", fuelType = "default", weight = "default", speed = "default"){
//   this.name = name;
//   this.age = age;
//   this.color = color;
//   this.fuelType = fuelType;
//   this.weight = weight;
//   this.speed = speed;
//   this.checkAcceleration = function (){
//     console.log(this.weight * this.speed);
//   }
// }

// console.log(CarCreator);

// const ferrari = new CarCreator ("")


// =============================================================================================

// const Gerl = function (name = "default", age = "default", color = "default", weight = "default", cook = "default"){
//   this.name = name;
//   this.age = age;
//   this.color = color;
//   this.weight = weight;
//   this.cook = cook;
//   this.experience = function (){
//     console.log(this.cook * this.weight / this.age);
//   }

// }

// const masha = new Gerl("Masha", 28, "white", 80, 3);

// masha.experience()

// console.log(masha);

// ==================================================================================================

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// }

// const strange = Object.create(Hero);
// strange.power = 10;
// console.log(strange);

// // доделать

// ,===========================================================================================================
// home-task1

// const Account = function ({login, email}) { //// {} - добавили в параметры, что бы распушить объект
//   this.login = login;
//   this.email = email;
// }
// Account.prototype.getInfo = function(){
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// }
// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com


// ===========================================================================================
// let i = 0;
// let j = 0;
// // Желаемое количество строк
// let lines = 5;
// let space = "";
// let star = "";

// while (i < lines) {
//     space = "";
//     star = "";
//      for (j = 0; j < lines - i; j++) space += " ";
//     for (j = 0; j < 2 * i + 1; j++) star += "*";
//     console.log(space + star);
//     i++;
// }

// ===================================================================

// const House = function (doors, windows, roof, color) {
//   this.ground = 50;
//   this.doors = doors;
//   this.windows = windows;
//   this.roof = roof;
//   this.silences = "";
//   this.color = color;
// }

// House.prototype.changColor = function(color){
//   this.color = color;
// }

// House.prototype.changDoor = function(doors){
//   this.doors = doors;
// }

// const newHouse = new House(2,10,2,"red");
// console.log(newHouse);

// newHouse.changColor("black")
// console.log(newHouse);

// newHouse.changDoor(4)
// console.log(newHouse);

// newHouse.changDoor(1)
// console.log(newHouse);


// const windows = [{name:'1', count: 4},{name:'2', count: 4},{name:'3', count: 4},{name:'4', count: 4}];

// const myHouse = new House(1, windows, 1, "black");
// console.log(myHouse);

// House.prototype.upgradeWindows = function(name, num){
//   // this.windows = window;
//   for(let obj of this.windows){
//     if(obj.name === name){
//       return (obj.count = num)

//     }
//   }
// }
// myHouse.upgradeWindows("1", 2)

// ==================================================================================================

// const Bouquet = function (flowers = "defolt", bottles = 0, octopus = 0, fruits = "defolt", sweets = "defolt", vegetables = "defolt", sausages = 0){
//  this.isDeveloper = false;
//   this.flowers = flowers;
//   this.bottles = bottles;
//   this.octopus = octopus;
//   this.fruits = fruits;
//   this.sweets =sweets;
//   this.vegetables = vegetables;
//   this.sausages = sausages;
// }

// const myBouquet = new Bouquet("rose", undefined, undefined, undefined, "sugar");
// console.log(myBouquet);
// Bouquet.prototype.changeFlowers = function (value) {
//   if(!this.isDeliver){
//     return this.flowers = value;
//   }
//   return "Заказ отправлен";
// }
// Bouquet.prototype.toggleProp = function(){
//   if(this.isDeliver) return (this.isDeliver = false)
//   if(!this.isDeliver) return (this.isDeliver = true)
// }


// console.log(myBouquet.changeFlowers("pion")); // изменили на пионы
// console.log(myBouquet);

// myBouquet.isDeliver = true; // заказ отправили
// console.log(myBouquet);
// console.log(myBouquet.changeFlowers("cactus")); // не смогли изминить, така как заказ отправлен

// myBouquet.toggleProp(); // отменили заказ
// console.log(myBouquet);
// console.log(myBouquet.changeFlowers("cactus")); // изменили на кактус
// console.log(myBouquet);


// myBouquet.toggleProp(); // отправили заказ
// console.log(myBouquet);


// ============================================================================================================

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers






