// code for challenge 3!

let basicsalary;
let tax;
function tax() {
  if (basicsalary <= 24000) {
    return basicsalary * 0.1;
  } else if (24000 < basicsalary <= 32333) {
    return basicsalary * 0.25;
  } else if (32333 < basicsalary <= 500000) {
    return basicsalary * 0.3;
  } else if (500000 < basicsalary <= 800000) {
    return basicsalary * 0.325;
  } else if (basicsalary > 800000) {
    return basicsalary * 0.35;
  }
}

let NHIFcover;
function NHIFcover() {
  if (basicsalary < 6000) {
    return basicsalary - 150;
  } else if (6000 <= basicsalary < 8000) {
    return basicsalary - 300;
  } else if (8000 <= basicsalary < 12000) {
    return basicsalary - 400;
  } else if (12000 <= basicsalary < 15000) {
    return basicsalary - 500;
  } else if (15000 <= basicsalary < 20000) {
    return basicsalary - 600;
  } else if (20000 <= basicsalary < 25000) {
    return basicsalary - 700;
  } else if (25000 <= basicsalary < 30000) {
    return basicsalary - 800;
  } else if (30000 <= basicsalary < 35000) {
    return basicsalary - 900;
  } else if (35000 <= basicsalary < 40000) {
    return basicsalary - 1000;
  } else if (40000 <= basicsalary < 45000) {
    return basicsalary - 1100;
  } else if (45000 <= basicsalary < 50000) {
    return basicsalary - 1200;
  } else if (50000 <= basicsalary < 60000) {
    return basicsalary - 1300;
  } else if (60000 <= basicsalary < 70000) {
    return basicsalary - 1400;
  } else if (70000 <= basicsalary < 80000) {
    return basicsalary - 1500;
  } else if (80000 <= basicsalary < 90000) {
    return basicsalary - 1600;
  } else {
    return basicsalary - 1700;
  }
}

let nssfCover = basicsalary * 0.06;
let housingLevy = basicsalary * 0.015;
const personalRelief = 2400;
const insuranceRelief = 5000;
const pensionContribution = 20000;
const housingRelief = 9000;
const ownerOccupierInterest = 25000;

let grossSalary =
  basicsalary -
  tax -
  NHIFcover -
  nssfCover -
  housingLevy +
  personalRelief +
  insuranceRelief -
  pensionContribution +
  housingRelief -
  ownerOccupierInterest;

let netSalary = grossSalary * 12;
