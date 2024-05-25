#! /usr/bin/env/ node

import inquirer from "inquirer";

console.log("Welcome to my Table project");

let myTable = true;
// out full code will e within while loop
while(myTable){

let myInput = await inquirer.prompt({

    type: `number`,
    name: `num`,
    message: "Enter your number"

})
let myNumber = myInput.num;
// console.log(myNumber);

if (myNumber){
    console.log(`Here is the table of ${myNumber}\n`);
    
    for (let i=1; i <= 10; i++){
        console.log(`${myNumber} x ${i} = ${myNumber * i}`);
        
    }
}else{
    console.log(`Enter only a numer`);
    

}
// asking user if he want to print table again

let againPrint = await inquirer.prompt({

    type: `confirm`,
    name: `askUser`,
    message: "Do you want to print another table",
    default: false

});
if(againPrint.askUser == false){
    myTable = false;
    console.log(`Thak you`);
    
}
}

// manual table counter

// let num1 = 5
// let num2 = 1
// console.log(num1, 'x', num2, '=', num1 * num2);
// num2 = ++num2
// console.log(num1, 'x', num2, '=', num1 * num2);
// num2 = ++num2;
// console.log(num1, 'x', num2, '=', num1 * num2);
// num2 = ++num2;
// console.log(num1, 'x', num2, '=', num1 * num2);
// num2 = ++num2;
// console.log(num1, 'x', num2, '=', num1 * num2);
// num2 = ++num2;
// console.log(num1, 'x', num2, '=', num1 * num2);
// num2 = ++num2;
// console.log(num1, 'x', num2, '=', num1 * num2);
// num2 = ++num2;
// console.log(num1, 'x', num2, '=', num1 * num2);
// num2 = ++num2;
// console.log(num1, 'x', num2, '=', num1 * num2);
// num2 = ++num2;
// console.log(num1, 'x', num2, '=', num1 * num2);
