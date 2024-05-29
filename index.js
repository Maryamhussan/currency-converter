#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 278.71,
    GBP: 0.78404,
    EUR: 0.92,
    JPY: 157.27,
    AUD: 1.51,
    CAD: 1.37,
    CHF: 0.91,
    CNY: 7.25,
    HKD: 7.81,
    INR: 83.39,
    AED: 3.67,
    SAR: 3.75,
    QAR: 3.64,
    KWD: 0.31,
    OMR: 0.38,
    BHD: 0.38,
};
let x = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Please select the currency you want to convert from:",
        choices: ["USD", "PKR", "GBP", "EUR", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD", "INR", "AED", "SAR", "QAR", "KWD", "OMR", "BHD"],
    },
    {
        name: "to",
        type: "list",
        message: "Please select the currency you want to convert to:",
        choices: ["USD", "PKR", "GBP", "EUR", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD", "INR", "AED", "SAR", "QAR", "KWD", "OMR", "BHD"],
    },
    {
        name: "amount",
        type: "number",
        message: "Please enter your amount:",
    }]);
let fromamount = currency[x.from];
let toamount = currency[x.to];
let amount = x.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount;
let y = convertedamount.toFixed(2);
console.log("Your Converted Amount Is:");
console.log(y);
