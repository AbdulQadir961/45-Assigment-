let GuestList :string[] = ["Amir" , "Ali" , "Asim" , "Anus"];

//Print the name of the person who is not invited dinner
let uneableAttend:string = GuestList.splice(1,1)[0];
console.log(`${uneableAttend}, not invited for dinner`);

//Using Push
GuestList.push("Abdul qadir");

//Print a new message for each person one by one
GuestList.forEach(message => {
console.log(`Dear ${message}, your are invited to my house Party`);    
});

//Output Should look like this:

//Subhan, not invited for dinner
//Dear Huzaifa, your are invited to my house Party
//Dear Inshall, your are invited to my house Party
//Dear Sarim, your are invited to my house Party
//Dear Hasssan ali, your are invited to my house Party


//Assignment.no:16//
//Continue by Assignment.no:15//
console.log("Great News! We found a New Table");

//Adding a new Guest start of array
//using unshift method
GuestList.unshift("Hassan ali");

//Adding a new Guest middle of array
GuestList.splice(Math.floor(GuestList.length/2),0, "amir Baig");

//Adding a new Guest End of array
//Using Push method
GuestList.push("Ahmed");

//printing the result
console.log(GuestList); 

//giving a new invitation message to each person one by one 
//using foreach
GuestList.forEach(NewMessage => {
    console.log(`Dear ${NewMessage}, You all are Invuted to my bbq Party`);
});