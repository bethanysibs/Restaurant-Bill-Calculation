'use strict';
// console.log("test");


// calculate a senior discount
// variables: name, bill, pax, seniorPax, discount;

const calculateBill = (bill, pax, seniorPax) => {
    const totalBill = bill - (((bill / pax) * seniorPax) * 0.20);
    return totalBill;
}

// console.log(calculateBill(1000, 10, 1));