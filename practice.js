// fuction findAverage (arrayOfNumbers) {
// let sum = 0;
// for (let i = 0; i < arrayOfNumbers.length; i++){
// let currentNummber = arrayOfNumbers[i]
// sum += currentNummber;
// }
// const average = sum / arrayOfNumbers;
// return average;
// }

// let array = [1, 2, 3]; //avg: 2
// const result = findAverage(array); // call or invoke the function
// console.log(result); // 2

// main fuction
// fuction findAverage (array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++){
//     let currentNummber = array[i]
//     sum += currentNummber;
// const average = sum / array;
// return average;

//     }

// helper fuction
// fuction findSum (array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++){
//     let currentNummber = array[i]
//     sum += currentNummber;
//     }
//     console.log(sum);
    
    
//     }

//     let array = [1, 2, 3]; //avg: 2
// const result = findAverage(array); // call or invoke the function
// console.log(result); // 2


const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}



const calculateRefillTotal = (customer) => customer.pricePerRefill * customer.refills;

const applySubscriptionDiscount = (refillTotal, hasSubscription) => {
  if (hasSubscription) {
    const subscriptionDiscount = refillTotal * 0.25;
    refillTotal -= subscriptionDiscount;
  }
  return refillTotal;
}

const applyCouponDiscount = (refillTotal, hasCoupon) => {
  if (hasCoupon) {
    refillTotal -= 10;
  }
  return refillTotal;
}

const calculateGrandTotal = (customer) => {
  let refillTotal = calculateRefillTotal(customer);
  refillTotal = applySubscriptionDiscount(refillTotal, customer.subscription);
  refillTotal = applyCouponDiscount(refillTotal, customer.coupon);
  const finalAmount = refillTotal.toFixed(2);
  console.log(`Your grand total is ${finalAmount}.`);
}

// Testing with the three customer objects:
calculateGrandTotal(timmy); // "Your grand total is $65.00."
calculateGrandTotal(sarah); // "Your grand total is $37.50."
calculateGrandTotal(rocky); // "Your grand total is $102.50."
