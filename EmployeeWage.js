console.log("Welcome to employee wage calculator...!!");
let monthlyWage = 0;
let totalWorkingHour = 0;
let totalWorkingDays = 0;
const maxWorkingHour = 100;
const maxWorkingDays = 20;
// UC1 Check employee present or absent
function getAttendance() {
  return Math.floor(Math.random() * 3);
}

while (totalWorkingDays <= 20 && totalWorkingHour <= 100) {
  let workingHour;
  const wagePerHour = 20;
  const attendance = getAttendance();
  switch (attendance) {
    case 1:
      console.log("Employee is present");
      workingHour = 8;
      break;
    case 2:
      console.log("Employee is part-time");
      workingHour = 4;
      break;
    default:
      console.log("Employee is absent");
      workingHour = 0;
      break;
  }

  totalWorkingDays++;
  totalWorkingHour = totalWorkingHour + workingHour;
  const dailyWage = workingHour * wagePerHour;
  monthlyWage = monthlyWage + dailyWage;
}

// if (attendance === 1) {
//   console.log("Employee is present");
//   workingHour = 8;
// } else if (attendance === 2) {
//   console.log("Employee is part-time");
//   workingHour = 4;
// } else {
//   console.log("Employee is absent");
//   workingHour = 0;
// }

// UC2 calculate daily wage

// UC3 Add Part time

// UC4 Using switch case

// UC5 calculate wage for a month
console.log("Monthly wage for employee is " + monthlyWage);
console.log('Monthly wage using total working hour ' + totalWorkingHour * 20)

// UC6 max hours or working days
