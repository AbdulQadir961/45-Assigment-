var Current_users = ["Hassan Ali", "Admin", "Farwa siraj", "Subhan", "Inshall"];
var New_users = ["Admin", "Ali Akbar", "Abbas", "Aun Muhammmad", "Qasim"];
var Current_users_lower = Current_users.map(function (user) { return user.toLowerCase(); });
for (var _i = 0, New_users_1 = New_users; _i < New_users_1.length; _i++) {
    var New_user = New_users_1[_i];
    if (Current_users_lower.includes(New_user.toLocaleLowerCase()))
        console.log("Sorry ".concat(New_users, ", that name is taken "));
    else {
        console.log("yes ".concat(New_user, ", is still in the list"));
    }
}
