const arr = ['банан', 'пика', 'черва', 'бубей', 'крести', '7'];
const getRandomIndex = function (numb) {
  return Math.floor(Math.random() * Math.floor(numb));
};
let total = 1000;
const start = function (n) {
  const windowOne = arr[getRandomIndex(6)];
  const windowTwo = arr[getRandomIndex(6)];
  const windowThree = arr[getRandomIndex(6)];
  if (total > n) {
    console.log(windowOne, windowTwo, windowThree);
    if (windowOne === windowTwo && windowOne === windowThree) {
      return (total = 4 * n + total);
    } else {
      return (total = total - n);
    }
  } else {
    return console.log('У вас не достаточно средств для игры, внесите сумму');
  }
};

start(100);
console.log(`Ваш баланс ${total}`);
start(100);
console.log(`Ваш баланс ${total}`);
start(100);
console.log(`Ваш баланс ${total}`);
start(100);
console.log(`Ваш баланс ${total}`);
start(50);
console.log(`Ваш баланс ${total}`);
start(50);
console.log(`Ваш баланс ${total}`);
start(50);
console.log(`Ваш баланс ${total}`);
start(50);
console.log(`Ваш баланс ${total}`);
start(20);
console.log(`Ваш баланс ${total}`);
start(1000);
console.log(`Ваш баланс ${total}`);
