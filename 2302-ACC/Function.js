// [Block16] Workshop: Discount Chain

// Overview:
// You have been hired by a pharmaceutical startup as a junior developer. 
// Things are busy and they need you to start right away. To encourage 
// customer retention, they have been reworking their checkout system to 
// include two different types of discounts.

// Using the following criteria, your first assignment is to create the 
// logic for their checkout system that returns the total cost of all 
// refills including if the customer has a subscription and/or a coupon.

// If a customer has a subscription, the customer will receive a 25% 
// discount after the refill total has been calculated.
// If the customer has a coupon, the customer will receive a $10 discount 
// after the subscription discount has been calculated.
// At the end of the script, you should return and log the 
// string "Your grand total is ${finalAmount}." 


// Directions:
// 1. Copy and paste the following customer objects into a new index.js file:

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

// 2. Using what we know about functions, pseudocode the prompt and a 
//    solution with your partner.
//
// HINT: Despite this prompt being one large question, it can be broken 
// down into three smaller prompts. Break your pseudocode into three 
// smaller prompts.
//
//   * Each of these small prompts should be addressed as an individual 
//     function.
//   * Remember, a function should only do one task.
//   * The returns of these functions should be stored in a variable, 
//     allowing other functions to use the result.

// 3. Assign someone to be the driver for the current function.

// 4. As you code, be sure to console.log or debug your solution.

// 5. When a solution has been found, be sure to test all three 
//   customer objects.

// 6. After the solution has been confirmed, move on to the next 
//    function and switch drivers.

// Note: Each student is required to submit their own file with their 
// solution to the workshop.

// Expected Results:
//
// Timmy => "Your grand total is $65"
// Sarah => "Your grand total is $37.5."
// Rocky => "Your grand total is $102.5"




// Function 1: calculateRefillTotal(customer):
// Pseudocode:
//   * Define a function that takes a customer object as input.
//   * Inside the function, calculate the total cost of all refills for 
//     the customer.
//   * Return the total cost.

const calculateRefillTotal = (customer) => customer.pricePerRefill * customer.refills;


// Function 2: applySubscriptionDiscount(refillTotal):
// Pseudocode:
//   * Define a function that takes a refill total as input.
//   * Inside the function, apply a 25% discount to the refill total if 
//     the customer has a subscription.
//   * Return the discounted refill total.

const applySubscriptionDiscount = (refillTotal, hasSubscription) => {
  if (hasSubscription) {
    const subscriptionDiscount = refillTotal * 0.25;
    refillTotal -= subscriptionDiscount;
  }
  return refillTotal;
}
  

// Function 3: applyCouponDiscount(refillTotal)
// Pseudocode:
//   * Define a function that takes a refill total as input.
//   * Inside the function, apply a $10 discount to the refill total if the 
//     customer has a coupon.
//   * Return the discounted refill total.

const applyCouponDiscount = (refillTotal, hasCoupon) => {
  if (hasCoupon) {
    refillTotal -= 10;
  }
  return refillTotal;
}


// The calculateGrandTotal function is a higher-level function that calls 
// three other functions (calculateRefillTotal, applySubscriptionDiscount, 
// and applyCouponDiscount) to calculate the total cost of all refills for 
// a given customer, including any applicable discounts (subscription and coupon). 
// It takes a customer object as a parameter and returns nothing, but logs a 
// string to the console indicating the grand total cost of all refills after 
// any applicable discounts have been applied.:

const calculateGrandTotal = (customer) => {
  let refillTotal = calculateRefillTotal(customer);
  refillTotal = applySubscriptionDiscount(refillTotal, customer.subscription);
  refillTotal = applyCouponDiscount(refillTotal, customer.coupon);
  const finalAmount = refillTotal.toFixed(2);
  console.log(`Your grand total is $${finalAmount}.`);
}
 
  
  // Testing with the three (customer) objects:
  calculateGrandTotal(timmy); // "Your grand total is $65.00."
  calculateGrandTotal(sarah); // "Your grand total is $37.50."
  calculateGrandTotal(rocky); // "Your grand total is $102.50."
  
  


