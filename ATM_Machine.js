#! /usr/bin/env node
import inquirer from "inquirer";
const myPin = 1122;
let myBalance = 20000;
let pinCode = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "Enter Your Pin",
    },
]);
if (myPin === pinCode.pincode) {
    let menu = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Please select one option:",
            choices: ["Cash Withdraw", "Cash Transfer", "Balance Inquiry"],
        },
    ]);
    if (menu.options === "Cash Withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "withdrawamount",
                type: "number",
                message: "Enter Your Amount",
            },
        ]);
        if (withdrawAmount.withdrawamount <= myBalance) {
            console.log(`Transaction Successfull, Rs. `, withdrawAmount.withdrawamount);
            console.log(`Your remaining balance is ${myBalance - withdrawAmount.withdrawamount}`);
        }
        else {
            console.log("Insuficient Balance");
        }
    }
    if (menu.options === "Cash Transfer") {
        let transferAmount = await inquirer.prompt([
            {
                name: "transferamount",
                type: "number",
                message: "Enter Your Amount for transfer",
            },
            {
                name: "transferTo",
                type: "number",
                message: "Enter Reciever's IBN or Mobile Number1 number",
            },
        ]);
        if (transferAmount.transferamount <= myBalance) {
            console.log(`Successfully Transfered Rs.${transferAmount.transferamount} to ${transferAmount.transferTo}`);
            console.log(`Your remaining balance is Rs.${myBalance - transferAmount.transferamount}`);
        }
    }
    if (menu.options === "Balance Inquiry") {
        console.log(myBalance);
    }
}
else {
    console.log("Wrong Pin.! Please enter correct pin");
}
