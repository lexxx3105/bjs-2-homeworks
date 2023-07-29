"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d))/(2*a);
    let x2 = (-b - Math.sqrt(d))/(2*a);
    arr.push(x1, x2);
  } else if (d == 0) {
      let x1 = -b/(2*a);
      arr.push(x1);
  }
  console.log(arr);
  return arr;
}

solveEquation(2,4,8);


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let per = parseInt(percent) / 100 / 12; //процент
    let con = parseInt(contribution); 	  //начальный взнос	
    let am = parseInt(amount);  			  //общая стоимость	
  	if (isNaN(per) || per < 0) {
   		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
   	} else if (isNaN(con) || con < 0) {
   		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
   	} else if (isNaN(am) || am < 0) {
   		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
   	} else {
			
  		let today = new Date();
  		if (today.fullYear() > countMonths.fullYear()) {
			return `Параметр "срок ипотеки" содержит неправильное значение ${countMonths}`;
		} else {
			let s = am - con; //тело кредита
  			let n = countMonths.getMonth() - today.getMonth() + (12*(countMonths.fullYear() - today.fullYear())); //срок кредита в месяцах
  			let pay = s*(per+per/(((1+per)**n)-1));			//ежемесячная оплата
  			let totalAmount = (pay * n).toFixed(2);
  			console.log(totalAmount);
 			return +totalAmount;
 		 }	
   }
  }
  calculateTotalMortgage(10, 0, 50000, 12)
  calculateTotalMortgage(10, 1000, 50000, 12)
  calculateTotalMortgage(10, 0, 20000, 24)
  calculateTotalMortgage(10, 1000, 20000, 24)
  calculateTotalMortgage(10, 20000, 20000, 24)
  calculateTotalMortgage(10, 0, 10000, 36)
  calculateTotalMortgage(10, 0, 10000, 36)
  

