import { log } from "console";

let placeTovist:string[] = ["Makkah" , "Madina" , "Karbala"];

//printing the orignal order
console.log("orignal order:" , placeTovist);

console.log("Alphabatical order:" , placeTovist.slice().sort()
);
console.log("orignal order:" , placeTovist);

//print Array in reverse Alphabatical order 
console.log("reverse Alphabatical order:" , placeTovist.slice().sort().reverse());

//Showing that array is still in its orignal order
console.log("orignal order:" , placeTovist);

console.log("Reversed Order changed");
placeTovist.reverse();
console.log(placeTovist);

//Reverse the order of the list again.print the list to show back in its orignal order
console.log("orignal order:" ,placeTovist.sort());
console.log(placeTovist);

//sort to changed that array so its stored in resversed alphabatical order . print the list to show that the order has changed
console.log("reversed Alphabaticla order:" , placeTovist.sort().reverse());

console.log(placeTovist);


