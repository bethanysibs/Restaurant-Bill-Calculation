'use strict';
// console.log("test");


// calculate a senior discount
// variables: name, bill, pax, seniorPax, discount;
function calculate(){
    const fullName = document.getElementById("fullName").value;
    const numberOfPax = document.getElementById("pax").value;
    const numberOfSenior = document.getElementById("seniorPax").value;

    const calculateBill = (bill, pax, seniorPax) => {
        const totalBill = bill - (((bill / pax) * seniorPax) * 0.20);
        return totalBill;
    }
    console.log(calculateBill(fullName, numberOfPax, numberOfSenior));
}




