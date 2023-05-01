//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.

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

function subscription(total) {
  return total - total * 0.25;
}

function coupon(total) {
    return total >= 10 ? total - 10 : total;
}

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