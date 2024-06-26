let users : string[]=["Admin", "Hassan" , "Ahmed" , "Inshall" , "Subhan"];
for (let user of users) {
    if (user==="Admin"){
        console.log("Hello, Admin Welcome Would you like to see status report?")
    }else{
        console.log(`Hello ${users},"Thank you for logging in again`)
    }
}

//Assignment.no:31
// sequle of Assignment>no:30
// if (users.length === 0 ) {
//     console.log("We need to Find some Users"); 
// } else {
//     for(let user of users){
//         if (user==="Admin"){
//          } else {
//                 console.log("Hello, Admin Welcome Would you like to see status report?");
                
//             }
//         }
//     }

    users=[];
    if(users.length===0){
        console.log("We need to find some users");
        
    }