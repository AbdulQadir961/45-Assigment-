let numbers : number[] =[1,2,3,4,5,6,7,8,9];

for (let number of numbers) {
    let ordinalEnding:string;

    //Determine the ordinal ending based on the number
    if(number===1){
        ordinalEnding= "st";
    } else if  (number ===2){
        ordinalEnding="nd";
    } else if (number===3){
        ordinalEnding="rd"
    } else {
        ordinalEnding="th"
    }
    //print the number with its prpper ending 
    console.log(`${number}${ordinalEnding}`);
}