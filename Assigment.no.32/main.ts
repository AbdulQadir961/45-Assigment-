let Current_users:string []= ["Hassan Ali" , "Admin" , "Farwa siraj" , "Subhan" , "Inshall"];
let New_users:string[] = ["Admin" , "Ali Akbar" , "Abbas" , "Aun Muhammmad", "Qasim"];

let Current_users_lower : string [] = Current_users.map(user=> user.toLowerCase());
for (let New_user of New_users){
    if (Current_users_lower.includes(New_user.toLocaleLowerCase()))
        console.log(`Sorry ${New_users}, that name is taken `);
        else{
            console.log(`yes ${New_user}, is still in the list`);
            
        }
} 