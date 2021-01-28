"use strict";

let submissions = [
  {
    name: "jane",
    score: 95,
    date: "A date",
    passed: true,
  },
  {
    name: "joe",
    score: 77,
    date: "Tommarow",
    passed: true,
  },
  {
    name: "jack",
    score: 59,
    date: "yesterday",
    passed: false,
  },
  {
    name: "jill",
    score: 88,
    date: "Next year",
    passed: true,
  },
];
// add new Submission
// #2
const addSubmission = (array, newName, newScore, newDate) => {
  let newStudent = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60 ? true : false,
  };
  array.push(newStudent);
};

addSubmission(submissions, "Dominick", 90, "today");
console.log(submissions);

// delete by index
// #3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 4);
console.log(submissions);

// #4
const myFindIndex = (array, name) => {
  return array.findIndex((item) => {
    return item.name === name;
  });
};
// delete by name
const deleteSubmissionByName = (array, name) => {
  let index = myFindIndex(array, name);
  deleteSubmissionByIndex(array, index);
};

deleteSubmissionByName(submissions, "jill");
console.log(submissions);

// edit submission
// #5
// const editSubmission = (array, index, score) => {
//   array[index].score = score;
//   array[index].passed = score >= 60;
// };

// editSubmission(submissions, 0, 20);
// console.log(submissions);

// #6

//   console.log(includesBrand(objects, "Dell"));
const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};

// console.log(findSubmissionByName(submissions, "jack"));

// #7

// let anotherArrayOfNumbers = [2, 9, 4, 10];
// console.log(calcProduct(anotherArrayOfNumbers));

const lowestScore = (array) => {
  let score = 100;
  array.forEach((submission) => {
    if (submission.score < score) {
      score = submission.score;
    }
  });
  return score;
};

console.log(lowestScore(submissions));

// #8
// Declare a function named findAverageScore
// ○ Parameter(s): array
// ○ Functionality: return the average quiz score. Use a for...of loop.

// for of
// for (let number of numbers) {
//     console.log(number);

// const findAverageScore = (array) => {
//   for (let scores of array) {
//     return array.reduce((score) => {});
//   }
// };

// console.log(findAverageScore(submissions));

// #9

const filterPassing = (array) => {
  return array.filter((passing) => {
    return passing.passed;
  });
};

// console.log(filterPassing(submissions));

// #10
// 10. Declare a function named filter90AndAbove
// ○ Parameter(s): array
// ○ Functionality: return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.

const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};

console.log(filter90AndAbove(submissions));
