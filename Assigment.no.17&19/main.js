//Print message 
console.log("unfortunately! the new dinner table wont arrive at the time of my Party so We can invite only two Guests");
var GuestList = ["Hassan", "Saif", "nehal", "Salaman"];
GuestList.unshift("areeb", "asim");
//Print the message "Update Guestlist"
console.log("Updated Guestlist:", GuestList);
//Removing Guest from the list 
while (GuestList.length > 2) {
    var removeGuest = GuestList.pop();
    if (removeGuest !== undefined) {
        console.log("Sorry,".concat(removeGuest, ", we can't invite you to my part"));
    }
}
//Print the messge to know that you are still invited
GuestList.forEach(function (Guest) {
    console.log("Dear ".concat(GuestList, ", You are still invited to my party"));
});
//using splice method
GuestList.splice(0, GuestList.length);
//print Completed Empty list
console.log("Updated Guestlist:", GuestList);
//Assignment,no:19 
//print how many people we invite to party
// we print this is in 
