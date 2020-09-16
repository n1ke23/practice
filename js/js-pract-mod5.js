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

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// ================================================================================================================

// class Cats {
//   constructor(whiskers = "defolt", teeth = "defolt", tail = "defolt", claws = "defolt"){
//     this.whiskers = whiskers;
//     this.teeth = teeth;
//     this.tail = tail;
//     this.claws = claws;

//   }
// }

// class Cat extends Cats {
//   constructor (whiskers, teeth, tail, claws, ears){
//     super(whiskers, teeth, tail, claws)
//     this.ears = ears;

//   }
// }

// =========================================================================================================================

// task-2


// class User{
//   constructor({name, age, followers}){
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo(){
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//   }
// }
 
// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// =======================================================================================================================================

// task 3
// class Storage{
//   constructor(array){
//     this.items = array
//   }
//   getItems(){
//     return this.items;
//   }
//   addItem(item){
//     return this.items.push(item)
//   }
//   removeItem(item){
//     for(let elm of this.items){
//       if(item === this.items[elm]){
//         console.log(elm);
//         return this.items.splice(elm,1)
//       }
//     }
    
//   }
// }

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);


// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]


// ==================================================================
// task 4

// class StringBuilder{
//   constructor(value){
//     this._value = value;
//   }
//   get value(){
//   return this._value;
//   }
//   append(str){
//     this._value += str;
//     return this
//   }
//   prepend(str){
//     this._value = str + this._value;
//     return this
//   }
//   pad(str){
//     this._value = str + this._value + str;
//   return this
//   }
// }



// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

//  console.log(builder.pad('=').prepend('^').append('^'));

// ====================================================================================================
// task 5


// class Car {
//   static getSpecs({maxSpeed, _price, speed, isOn, distance}){
    
//     console.log(`maxSpeed: ${maxSpeed}, price: ${_price}, speed: ${speed}, isOn: ${isOn}, distance: ${distance} `);
//   }
  
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */

//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */

//   constructor({maxSpeed = 0, price = 0, speed = 0, isOn = false, distance = 0}) {
//     this.maxSpeed = maxSpeed;
//     this._price = price;
//     this.speed = speed;
//     this.isOn = isOn;
//     this.distance = distance;
//   }
//   get price(){
//    return this._price
    
//   }
//   set price(value){
//    return this._price = value
//   }



//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */

//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true
//   }

//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.isOn = false;
//     this.speed = 0;
//   }

//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     let newSpeed = this.speed + value;
//     if(newSpeed < this.maxSpeed) {
//       this.speed = newSpeed 
//     } else {
//       console.log("Скорость превышает максимальое значение");
//     }
//   }

//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     let newSpeed = this.speed - value;
//     if(newSpeed >= 0) {
//       this.speed = newSpeed 
//     } else {
//       console.log("Ты стоишь на месте");
//     }
//   }

//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if(this.isOn) {
//       this.distance += hours * this.speed
//     } else {
//       console.log("Заведи машину!");
//     }
//   }
// }

// // const car = {
// //   maxSpeed: 200,
// //   price: 2000, 
// //   speed: 60, 
// //   isOn: false, 
// //   distance: 100
// // };
// // Car.getSpecs(car)

// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang);
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000



// let fruits = ["bananas", "melon", "apple"]


// let [,,a] = fruits

// console.log(pizza);
// console.log(a);



// let user ={
//   name: "Mango",
//   age: 102,
//   email: "aa@BhxBrowser.com",
//   isAdmin: false,
//   address:{
//     street: "Almazova",
//     city: "Kyiv",
//     home: 10
//   },
//   hobbies: ["footbol", "beer", "tv"]
// }
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let {maxSpeed, price, speed, isOn, distance} = car
// let {email, age, address:{city}, address:{home}, hobbies:[footbol, beer, tv]} = user
// console.log(city);
// console.log(home);
// console.log(beer);

// ====================================================================================================================================================================

// const specialPunch = [
//   { name: "fatality", weapons: "sword", damage: 50, price: 3000 },
//   { name: "babality", weapons: "knife", damage: 10, price: 2000 },
//   { name: "brutality", weapons: "nunchak", damage: 25, price: 1000 },
// ];
// class Hero {
//   constructor() {
//     this._name = "";
//     this.hp = 3;
//     this.speed = 50;
//     this.punchForce = 10;
//     this._weapons = [];
//     this.specialPunch = "";
//   }
//   addHp(value) {
//     this.hp += value;
//   }
//   killHero(value) {
//     this.hp -= value;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     return (this._name = newName);
//   }
//   get weapons() {
//     return this._weapons;
//   }
//   set weapons(weapon) {
//     if (!this._weapons.includes(weapon)) {
//       return this._weapons.push(weapon);
//     } else console.log("Такое оружие уже есть");
//   }
//   chooseSpecialPunch(array, value) {
//     for (const obj of array) {
//       if (obj.name === value) {
//         return (this.specialPunch = obj);
//       }
//     }
//   }
// }
// const Lui = new Hero();
// console.log(Lui);
// Lui.name = "Sasha";
// console.log(Lui.name);
// Lui.chooseSpecialPunch(specialPunch, "brutality");
// console.log(Lui);
// class SuperHero extends Hero {
//   constructor() {
//     super();
//     this.superSpeed = false;
//   }
//   toggleSuperSpeed() {
//     this.superSpeed ? (this.superSpeed = false) : (this.superSpeed = true);
//   }
// }
// const Valera = new SuperHero();
// Valera.name = "Nastya";
// console.log(Valera);
// Valera.toggleSuperSpeed();
// Valera.toggleSuperSpeed();

// =====================================================================================================================


// class User {
// 	constructor(name, surname) {
// 		this._name = name;
// 		this._surname = surname;
// 	}

// 	getFullName() {
// 		return this._name + ' ' + this._surname;
// 	}
// }
// class Student extends User {
//   constructor(name, surname, year){
//     super(name, surname)
//     this.year = year;

//   }

//   gerCourse (currentYear){
//     return currentYear - this.year;
//   }
// }
// const Lika = new Student("Lika", "Goncharova", 2014)

// console.log(Lika);
// console.log(Lika.gerCourse(2020));



