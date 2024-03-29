// Code your solution in this file!

const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = function (array) {
  return array.slice(0, 2);
};
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function (array) {
  return array.slice(-2);
};

// console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// console.log(selectingDrivers.slice(0, 1));

function createFareMultiplier(number) {
  return function multiply(fare) {
    return fare * number;
  };
}
console.log(createFareMultiplier(1)(4));

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10));

function selectDifferentDrivers(x, y) {
  return y(x);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
