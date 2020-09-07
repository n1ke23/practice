// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45

// =================================================================

let a = 5;
// Присвоение по значению, в памяти будет создана еще
// одна ячейка в которую будет скопировано значение 5
let b = a;
console.log(a); // 5
console.log(b); // 5

// Изменим значение a
a = 10;
b = a;
console.log(a); // 10
// Значение b не изменилось так как это отдельная копия
console.log(b); // 5
