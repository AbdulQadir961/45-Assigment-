//making a program which will print string And number
let Marksheet:string = ("English , urdu , maths , Science");
let totalMarks:number = 400;
let English:number = 88;
let urdu:number = 49;
let Maths:number = 100;
let Science:number = 95;
let obtaibnedMarks:string =`obtained Marks:${English+urdu+Maths+Science}`;
//Now Printing the Result 
let FinalResult:string =`${obtaibnedMarks}-${totalMarks}`;

console.log(FinalResult);
