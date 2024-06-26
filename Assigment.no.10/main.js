//making a program which will print string And number
var Marksheet = ("English , urdu , maths , Science");
var totalMarks = 400;
var English = 88;
var urdu = 49;
var Maths = 100;
var Science = 95;
var obtaibnedMarks = "obtained Marks:".concat(English + urdu + Maths + Science);
//Now Printing the Result 
var FinalResult = "".concat(obtaibnedMarks, "-").concat(totalMarks);
console.log(FinalResult);
