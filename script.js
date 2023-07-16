'use strict';
// console.log("test");


// calculate a senior discount
// variables: name, bill, pax, seniorPax, discount;
    function fetch(){
        const bill = document.getElementById("bill").value;
        console.log(bill);
        const fullName = document.getElementById("fullName").value;
        console.log(fullName);
        const numberOfPax = document.getElementById("pax").value;
        console.log(numberOfPax);
        const numberOfSenior = document.getElementById("seniorPax").value;
        console.log(numberOfSenior);
        console.log(calculateBill(bill ,numberOfPax, numberOfSenior));
    }

    //calculate senior discount
    const calculateBill = (bill, pax, seniorPax) => {
        const totalBill = bill - (((bill / pax) * seniorPax) * 0.20);
        return totalBill;
    }

//    console.log(calculateBill(1000 , 10, 1));




