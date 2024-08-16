import chalk from "chalk";
import inquirer from "inquirer";

// STUDENT CLASS:
export class Student {
  static staticId: number = 10000;
  id: number;
  name: string;
  courses: string[];
  balance: number;

  constructor(name: string) {
    this.id = Student.staticId++;
    this.name = name;
    this.balance = 50;
    this.courses = [];
  }

  // method to enroll the student
  enrollCourse(course: string) {
    this.courses.push(course);
  }

  // method for view student balance
  viewBalance() {
    console.log(`${this.name} remaining balance is ${this.balance}`);
  }

  // method for paying student fee:
  payStudentFee(feeAmount: number) {
    this.balance -= feeAmount;
    console.log(chalk.green(
      `Your Fee is successfully paid ${feeAmount}PKR: Your new balance is ${this.balance}PKR`
    ));
  }

  // method for displaying student status
  viewStatus() {
    console.log(`ID: ${this.id}`);
    console.log(`Name: ${this.name}`);
    console.log(`Course: ${this.courses}`);
    console.log(`Balance: ${this.balance}`);
  }
}

/* ================================== $#$#$#$# ================================== */

// creating class to manage the students
export class ManageStudent {
  students: Student[];

  constructor() {
    this.students = [];
  }

  // Method to add a new student
  addStudent(name: string) {
    let student = new Student(name);
    this.students.push(student);
    console.log(chalk.green(
      `Student ${name} is added successfully, his/her ID is ${student.id}`
    ));
  }

  // Method to enrol students in the course
  enrollStudent(stdId: number, course: string) {
    let student = this.findStudent(stdId);
    if (student) {
      student.enrollCourse(course);
      console.log(
        chalk.green(`${student.name} enrolled in ${course} successfully!`
        ));
    } else {
      console.log(`Student Id not found`);
    }
  }

  // Method to view a student's balance
  studentBalance(stdId: number) {
    let student = this.findStudent(stdId);
    if (student) {
      student.viewBalance();
    } else {
      console.log(`Student ID not found!`);
    }
  }

  // Method to pay a student's fee
  payStdFee(stdId: number, feeAmount: number) {
    let student = this.findStudent(stdId);
    if (student) {
      student.payStudentFee(feeAmount);
    } else {
      console.log(`Student ID not found!`);
    }
  }

  // method to show student status
  studentStatus(stdId: number) {
    let student = this.findStudent(stdId);
    if (student) {
      student.viewStatus();
    } else {
      console.log(`Student ID not found!`);
    }
  }

  // method to find student
  findStudent(stdId: number) {
    return this.students.find((std) => std.id === stdId);
  }
}


