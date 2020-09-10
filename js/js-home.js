const userAnswerRef = document.querySelector(".input-ref");
const buttonRef = document.querySelector(".button");
// let country = userСountry[0].toUpperCase() + userСountry.substring(1); //

buttonRef.addEventListener("click", function () {
  const userAnswer = userAnswerRef.value;
  const userСountry = userAnswer.toLowerCase();

  const china = "китай";
  const chile = "чили";
  const australia = "австралия ";
  const india = "индия";
  const jamaica = "ямайка";
  let cost;

  switch (userСountry) {
    case china:
      cost = 100;
      alert(`Доставка в ${china} будет стоить ${cost} кредитов`);
      break;

    case chile:
      cost = 250;
      alert(`Доставка в ${chile} будет стоить ${cost} кредитов`);
      break;

    case australia:
      cost = 170;
      alert(`Доставка в ${australia} будет стоить ${cost} кредитов`);
      break;

    case india:
      cost = 80;
      alert(`Доставка в ${india} будет стоить ${cost} кредитов`);
      break;

    case jamaica:
      cost = 120;
      alert(`Доставка в ${jamaica} будет стоить ${cost} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
});
// let userAnswerRef = document.querySelector(".input-ref");
// const userAnswer = userAnswerRef.value;
// const userСountry = userAnswer.toLowerCase();
// let country = userСountry[0].toUpperCase() + userСountry.substring(1); //

// const china = "Китай";
// const chile = "Чили";
// const australia = "Австралия ";
// const india = "Индия";
// const jamaica = "Ямайка";
// let cost;

// buttonRef.addEventListener("click", function () {
//   if (china === country) {
//     cost = 100;
//     console.log(`Доставка в ${china} будет стоить ${cost} кредитов`);
//   } else if (chile === country) {
//     cost = 250;
//     console.log(`Доставка в ${chile} будет стоить ${cost} кредитов`);
//   } else if (australia === country) {
//     cost = 170;
//     console.log(`Доставка в ${australia} будет стоить ${cost} кредитов`);
//   } else if (india === country) {
//     cost = 80;
//     console.log(`Доставка в ${india} будет стоить ${cost} кредитов`);
//   } else if (jamaica === country) {
//     cost = 120;
//     console.log(`Доставка в ${jamaica} будет стоить ${cost} кредитов`);
//   } else {
//     console.log("В вашей стране доставка не доступна");
//   }
// });
