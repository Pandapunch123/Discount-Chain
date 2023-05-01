//Copy and paste the following customer objects into a new index.js file.

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
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

function sumOfPrice(prefill, refill) {
  return prefill * refill;
}

//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

function subscription(total) {
  return total - total * 0.25;
}

//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.

function coupon(total) {
    return total >= 10 ? total - 10 : total;
}

//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

function grandTotal (customer){
    let refill = sumOfPrice(customer.pricePerRefill, customer.refills);
    
    if (customer.subscription) {
        refill = subscription(refill);
    }
     if (customer.coupon) {
        refill = coupon(refill);
    } 
    return refill;

}

console.log(grandTotal(timmy));
console.log(grandTotal(sarah));
console.log(grandTotal(rocky));