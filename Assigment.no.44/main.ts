 function burger(...items: string[]): void{
    console.log("buger order:")

    for (let i = 0; i < items.length; i++){
        console.log(`-${items[i]}`)
    }
 }


 console.log("enjoy your buger qadir khan")


 burger('chicken','moye sauce','cheese')
 burger('beef','capsicum','tomato')
 burger('chicken','tomato','chili sauce')