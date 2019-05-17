// console.log("hello world, and welcome to my homework adventure");

//function: find max value of a number list

function findMax(aNums) {
    var iMax = aNums[0];

    for(var iCount = 0; iCount < aNums.length; iCount ++) {
        if(aNums[iCount] > iMax) {
            iMax = aNums[iCount];
        }
    }

    return iMax;
}

// Input: Get 3 grades for each student

var iSize = parseInt(prompt('Class size?'));

var aGradesPhysics = [];
var aGradesChemistry = [];
var aGradesBiology = [];

function getInputs(){
    for(var iCount = 0; iCount < iSize; iCount ++) {
    var iGradePhysics = parseInt(prompt('Student ' + (iCount+1) + ': Grade for Physics out of 100'));
    aGradesPhysics.push(iGradePhysics);
    console.log('grade for Physics is' + iGradePhysics);

    var iGradeChemistry = parseInt(prompt('Student ' + (iCount+1) + ': Grade for Biology out of 100'));
    aGradesChemistry.push(iGradeChemistry);
    console.log('grade for Chemistry is' + iGradeChemistry);

    var iGradeBiology = parseInt(prompt('Student ' + (iCount+1) + ': Grade for Chemistry out of 100'));
    aGradesBiology.push(iGradeBiology);
    console.log('grade for biographical is' + iGradeBiology);
    }
}

getInputs();

// processing: calculate average grade for each student and find top (average) grade in class

var aAverageGrades = [];

for(var iCount = 0; iCount < iSize; iCount ++) {
    var fAverage = (aGradesPhysics[iCount] + aGradesChemistry[iCount] + aGradesBiology[iCount]) / 3;
    aAverageGrades.push(fAverage);
}

var iTopGrade = findMax(aAverageGrades);

// output: list result for each student and top grade

for(var iCount = 0; iCount<aAverageGrades.length; iCount ++) {

     if(aAverageGrades[iCount] < 50) {

        document.write('Student ' + (iCount + 1) + ': Fail' + '<br>');

    } else if((aAverageGrades[iCount] >= 50) && (aAverageGrades[iCount] <= 80)) {

        document.write('Student ' + (iCount + 1) + ': Pass' + '<br>');

    }

    else {

        document.write('Student ' + (iCount + 1) + ': Pass with Distinction' + '<br>');
    }
}

document.write('<h1>The top overall grade is ' + iTopGrade + '</h1>');
