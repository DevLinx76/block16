// // fuction findAverage (arrayOfNumbers) {
// // let sum = 0;
// // for (let i = 0; i < arrayOfNumbers.length; i++){
// // let currentNummber = arrayOfNumbers[i]
// // sum += currentNummber;
// // }
// // const average = sum / arrayOfNumbers;
// // return average;
// // }

// // let array = [1, 2, 3]; //avg: 2
// // const result = findAverage(array); // call or invoke the function
// // console.log(result); // 2

// // main fuction
// // fuction findAverage (array) {
// //     let sum = 0;
// //     for (let i = 0; i < array.length; i++){
// //     let currentNummber = array[i]
// //     sum += currentNummber;
// // const average = sum / array;
// // return average;

// //     }

// // helper fuction
// // fuction findSum (array) {
// //     let sum = 0;
// //     for (let i = 0; i < array.length; i++){
// //     let currentNummber = array[i]
// //     sum += currentNummber;
// //     }
// //     console.log(sum);
    
    
// //     }

// //     let array = [1, 2, 3]; //avg: 2
// // const result = findAverage(array); // call or invoke the function
// // console.log(result); // 2


// const timmy = {
//     prescription: "acetaminophen",
//     pricePerRefill: 25,
//     refills: 3,
//     subscription: false,
//     coupon: true,
// };

// const sarah = {
//     prescription: "diphenhydramine",
//     pricePerRefill: 50,
//     refills: 1,
//     subscription: true,
//     coupon: false,
// }

// const rocky = {
//     prescription: "phenylephrine",
//     pricePerRefill: 30,
//     refills: 5,
//     subscription: true,
//     coupon: true,
// }



// const calculateRefillTotal = (customer) => customer.pricePerRefill * customer.refills;

// const applySubscriptionDiscount = (refillTotal, hasSubscription) => {
//   if (hasSubscription) {
//     const subscriptionDiscount = refillTotal * 0.25;
//     refillTotal -= subscriptionDiscount;
//   }
//   return refillTotal;
// }

// const applyCouponDiscount = (refillTotal, hasCoupon) => {
//   if (hasCoupon) {
//     refillTotal -= 10;
//   }
//   return refillTotal;
// }

// const calculateGrandTotal = (customer) => {
//   let refillTotal = calculateRefillTotal(customer);
//   refillTotal = applySubscriptionDiscount(refillTotal, customer.subscription);
//   refillTotal = applyCouponDiscount(refillTotal, customer.coupon);
//   const finalAmount = refillTotal.toFixed(2);
//   console.log(`Your grand total is ${finalAmount}.`);
// }

// // Testing with the three customer objects:
// calculateGrandTotal(timmy); // "Your grand total is $65.00."
// calculateGrandTotal(sarah); // "Your grand total is $37.50."
// calculateGrandTotal(rocky); // "Your grand total is $102.50."

//







/* pseudocode
   2 functions
   => we want to calcute the final cost after sale tax (toatlCost)
-sales tax => 8%

- create first function
    - five variables => budget, price1, price2, salestax, total
    - total = price1 + price2 * (0.08)
    - withinBudget = isWIthinBudge(total, budget)

   => if we are within (true) or over budget (false) we return the relevant boolean [isWIthinBudget]
        - diff = total - budget
        - if total > budget
            return false
        - else if total <= budget
            return true
    
   totalCost(50, [20, 25]) => true
   totalCost(100 [50, 46]) => false 
   */

//    function totalCost(budget, prices) {
//     let price1 = price[0];
//     let price2 = prices[1]
//     const salestax = 1.08;
//     let totalCost = 0;
//     totalCost = (price1 + price2) * salestax;
//     const withinBudget = isWithinBudget(totalCost, budget);
//     return withinBudget;
//    };

//    const isWithinBudget = (totalCost, budget) => {
//     if (totalCost > budget) {
//         return false;
//     } else if {
//         return true;
//     }
//    };

//    console.log(totalCost(50, [20, 25]));
//    console.log(totalCost(100 [50, 46]));






// create logic for checkout system
// return total cost of all refills including if customer has a subscription or a coupon
// total = if customer has subscription => refill total - 25% discount
// if customer has a coupon but also has a subscription =>
  // grandtotal = refill total $10 of the coupon
// else if customer has a subscripiton no coupon =>
  // grandtotal => total
// else if customer has nothing
  // grandtotal => refill total
// return the grand total

/*
   checkoutSystem(customer) =>
     - totalCost = customer.pricePerRefill
     - customerHasSubscription = customer.subscription;
     - customerHasCoupon = customer.coupon
     - if (customerHasSubscription && customerHasCoupon)
       - calculateTotalCost(customerHasSubscription)

    calculateCost1(refillToal, subscriptionDiscount = 0.25, couponDiscount = 10) {
        grandtotal = (refillTotal * subscriptionDiscount
    }

    checkoutSystem(timmy)
    checkoutSystem(sarah) 
    checkoutSystem(rocky)
*/