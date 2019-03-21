var moment = require('moment');
const chalk = require('chalk');
 

console.log(chalk.green.underline(moment().format("dddd")));

if (moment().format("H") < 12){
    console.log(chalk.green.underline("Good morning!"));
}
else if (moment().format("H") > 12 && moment().format("H") < 17){
    console.log(chalk.green.underline("Good afternoon!"));
}
else if (moment().format("H") >= 17){
    console.log(chalk.green.underline("Good evening!"));
}