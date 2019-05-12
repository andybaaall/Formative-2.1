// console.log("hello world, and welcome to my homework adventure");

//function: find max value of a number list
function findMax(aNums) {
    var iMax = aNums[0];

    for(var iCount=0; iCount<aNums.length; iCount++) {
        if(iMax > aNums[iCount]) {
            iMax = aNums[iCount];
        }
    }

    return iMax;
}


// cf ---------------------------------
// function findLargest(){
//   var largest = testArray[0];
//   for (var i = 0; i < testArray.length; i++) {
//     if(testArray[i] > largest){
//       largest = testArray[i];
//     }
//   }
//   console.log(largest);
// }
// okay, so: this works in the homework excercise (why?)
// but here it's only logging 3, which is definitely not the largest Number
// both findMax and findLargest are logging 3
// okay so I will try findMax in context?
// the homework excercise thing is a problem for the homework excercise thing. Still don't know why it works, though?
//  ---------------------------------

//-----------------------------------------

// Input: Get 3 grades for each student

// okay, let's just get this working.
// let's make sure we're getting the input values and that we're logging them 

var iSize = parseInt(prompt('Class size?'));
var aGradesPhysics = [];
var aGradesChemistry = [];
var aGradesBiology = [];

function getInputs(){
    for(var iCount=0; iCount<iSize; iCount++) {
    var iGradePhysics = parseInt(prompt('Student '+(iCount+1)+': Grade for Physics out of 100'));
    aGradesPhysics.push(iGradePhysics);

    var iGradeChemistry = parseInt(prompt('Student '+(iCount+1)+': Grade for Biology out of 100'));
    aGradesChemistry.push(iGradeChemistry);

    var iGradeBiology = parseInt(prompt('Student '+(iCount+1)+': Grade for Chemistry out of 100'));
    aGradesBiology.push(iGradeBiology);
  }
}

// processing: calculate average grade for each student and find top grade in class
// var aAverageGrades = [];
//
// for(var iCount=0; iCount<iSize; iCount++) {
//     var fAverage = (aGradesPhysics[iCount] + aGradesChemistry[iCount] + aGradesBiology[iCount]) / aGradesPhysics.length;
//     aAverageGrades.push(fAverage);
// }
// var iTopGrade = findMaxs(aAverageGrades);

//output: list result for each student and top grade


// for(var iCount=1; iCount<aAverageGrades.length; iCount++) {
//     if(aAverageGrades[iCount] < 50) {
//
//         document.write('Student '+(iCount+1)+': Fail'+'<br>');
//
//     } else if(aAverageGrades[iCount] > 50 && aAverageGrades[iCount] < 80) {
//
//         document.write('Student '+(iCount+1)+': Pass<br>');
//
//     } else {
//
//         document.write('Student '+(iCount+1)': Pass with Distinction'+'<br>');
//     }
// }
//
// document.write('<h1>The top overall grade is '+iTopgrade+'</h1>');
