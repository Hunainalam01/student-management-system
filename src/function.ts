import chalk from "chalk";
import inquirer from "inquirer";
import { ManageStudent } from "./classes.js";

export async function run() {
    console.log(`\n======= STUDENT MANAGEMENT SYSTEM! =======\n`);
  
    let studentManager = new ManageStudent();
  
    while (true) {
      const choice = await inquirer.prompt([
        {
          name: "Choice",
          type: "list",
          message: "Select the option you want !!",
          choices: [
            { name: chalk.green("I WANT TO ADD STUDENT"), value: "I WANT TO ADD STUDENT" },
            { name: chalk.green("I WANT TO ENROLL STUDENT"), value: "I WANT TO ENROLL STUDENT" },
            { name: chalk.green("I WANT TO VIEW STUDENT BALANCE"), value: "I WANT TO VIEW STUDENT BALANCE" },
            { name: chalk.green("I WANT TO PAY STUDENT FEE"), value: "I WANT TO PAY STUDENT FEE" },
            { name: chalk.green("SHOW STUDENT STATUS"), value: "SHOW STUDENT STATUS" },
            { name: chalk.red("EXIT !!!"), value: "EXIT !!!" },
          ],
        },
      ]);
  
      switch (choice.Choice) {
        // first case
        case "I WANT TO ADD STUDENT":
          const inputName = await inquirer.prompt([
            {
              name: "name",
              type: "input",
              message: "Enter student name:",
            },
          ]);
          studentManager.addStudent(inputName.name);
          break;
  
        // second case
        case "I WANT TO ENROLL STUDENT":
          let enroll = await inquirer.prompt([
            {
              name: "Enroll",
              message: "Enter student ID:",
              type: "input",
            },
            {
              name: "course",
              message: "Enter the course name you want:",
              type: "input",
            },
          ]);
          studentManager.enrollStudent(parseInt(enroll.Enroll), enroll.course);
          break;
  
        // third case
        case "I WANT TO VIEW STUDENT BALANCE":
          let balance = await inquirer.prompt([
            {
              name: "balanceId",
              type: "input",
              message: "Enter student ID:",
            },
          ]);
          studentManager.studentBalance(parseInt(balance.balanceId));
          break;
  
        // case four
        case "I WANT TO PAY STUDENT FEE":
          let feePay = await inquirer.prompt([
            {
              name: "feeId",
              type: "input",
              message: "Enter student ID:",
            },
            {
              name: "feeAmount",
              type: "input",
              message: "Enter student Fee:",
            },
          ]);
          studentManager.payStdFee(parseInt(feePay.feeId), parseInt(feePay.feeAmount));
          break;
  
       // case five
        case "SHOW STUDENT STATUS":
          let status = await inquirer.prompt([
            {
              name: "statusId",
              type: "input",
              message: "Enter student ID:",
            },
          ]);
          studentManager.studentStatus(parseInt(status.statusId));
          break;
  
        // case six
        case "EXIT !!!":
          console.log(
            chalk.red.bold("Exiting program...")
          );
          process.exit();
      }
    }
  }