"use strict"
function solveEquation(a, b, c) {
  let arr = [];
    
    let discriminant;
    discriminant = Math.pow(b, 2) - 4 * a * c;

    let root;

    if(discriminant < 0) {
      return arr;
    } else if (discriminant === 0) {
      root = -b / (2 * a);
      arr.push(root);
    } else if (discriminant > 0) {
      root = (-b + Math.sqrt(discriminant) ) / (2 * a);
      arr.push(root);
      root = (-b - Math.sqrt(discriminant) ) / (2 * a);
      arr.push(root);
    }

  return arr;
}


// Задание 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 
  let P;
  let S;
  let monthlyPayment;
  let totalAmount;

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    console.log("Введены некорректные данные")
  }

     P = percent / 100 / 12;
     S = amount - contribution;
     monthlyPayment = S * (P + (P / (((1 + P) ** countMonths) - 1)));
     totalAmount = monthlyPayment * countMonths;
     totalAmount.toFixed(3);
     Number(totalAmount);
  

  return totalAmount;
}