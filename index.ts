#!usr/bin/env node 
//it is called sheban with tells the system about the path 

// first import all the dependenices you have installed now
import inquirer  from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import { async } from "@firebase/util";
import { type } from "os";

const sleep =()=>{
    return new Promise((resolve)=>{
      setTimeout(resolve,2000)
    })
}
async function welcome() {
 let rainbowTitle =  chalkAnimation.rainbow('Lets start calculation');//start
 await sleep();//wait for 2 secs for start continue 
 rainbowTitle.stop(); //then stop

}
 //as animation will start and we have to stop it soon so create a promise here

 
 console.log(chalk.red(`           888                888        888                   
                888                888        888                   
                888                888        888                   
 .d8888b 8888b. 888 .d8888b888  888888 8888b. 888888 .d88b. 888d888 
d88P"       "88b888d88P"   888  888888    "88b888   d88""88b888P"   
888     .d888888888888     888  888888.d888888888   888  888888     
Y88b.   888  888888Y88b.   Y88b 888888888  888Y88b. Y88..88P888     
 "Y8888P"Y888888888 "Y8888P "Y88888888"Y888888 "Y888 "Y88P" 888   `));
 
 console.log(chalk.yellow(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`));
await welcome();

 async function askQuestion(){
await inquirer
  .prompt([//as multiple prompts so pass it in array
    /* Pass your questions in here */
    {
        type:"list",//type is list because there's in a list contain add,mul,sub,div
        name:"operator",
        message:"which operation you want to perform?",
        choices:["Addition","Subtraction","Multipilication","Division"]
    },
    { //for input of numbers
       type:"number",
       name:'num1',
       message:chalk.blue("Enter number 1:")
    },
     { //for input of numbers
       type:"number",
       name:'num2',
       message:"Enter number 2:"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    
 if(answers.operator == "Addition"){
    console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
}
    else if(answers.operator == "Subtraction"){
    console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
}
    else if(answers.operator == "Multiplication"){
    console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
}
    else if(answers.operator == "Division"){
    console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`))
    ;} 
   })
}
// askQuestion()


async function startAgain() {
    do{
        await askQuestion();
        var again =  await inquirer
       .prompt([
        {
         type:"input",
         name:"restart",
         message:"Do you want to continue? Press y or n: "
        }]
    )
    }while(again.restart == 'y' || again.restart == 'Y' || again.restart =="YES" ||again.restart =="yes")
}
startAgain()
 //then use chalk