const IS_ABSENT = 0
const IS_FULL_TIME = 1
const IS_PART_TIME = 2
const FULL_TIME_HOURS = 8
const PART_TIME_HOURS = 4
const WAGE_PER_HOUR = 20

let empWage = 0
let empCheck = Math.floor(Math.random() * 10) % 3
if (empCheck == IS_FULL_TIME){
    console.log("Employee is full time")
    empWage = FULL_TIME_HOURS * WAGE_PER_HOUR
} if (empCheck == IS_PART_TIME){
    console.log("Employee is part time")
    empWage = PART_TIME_HOURS * WAGE_PER_HOUR
}else{
    console.log("Employee is absent")
    empWage = 0
}

console.log("Employee Wage:" + empWage)