var users = ["Admin", "Hassan", "Ahmed", "Inshall", "Subhan"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "Admin") {
        console.log("Hello, Admin Welcome Would you like to see status report?");
    }
    else {
        console.log("Hello ".concat(users, ",\"Thank you for logging in again"));
    }
}
//Assignment.no:31
// sequle of Assignment>no:30
if (users.length === 0) {
    console.log("We need to Find some Users");
}
else {
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user = users_2[_a];
        if (user === "Admin") {
        }
        else {
            console.log("Hello, Admin Welcome Would you like to see status report?");
        }
    }
}
users = [];
if (users.length === 0) {
    console.log("We need to find some users");
}
