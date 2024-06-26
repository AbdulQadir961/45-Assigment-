function show_magicians(magicions: string[]): void{
    for (const magicion of magicions)
        {
        console.log(magicion.charAt(0).toUpperCase() + magicion.slice(1));
    }
}


const magicion: string[] = ["hassan","ali","baqar"];
show_magicians(magicion);
function make_great(magician:string[]):void{
    for (let q=0; q < magician .length ;q++){
        magician[q] = magician[q]+' is the great'
    }
}


const magician2: string[]=['hassan','ali','baqar'];
make_great(magician2)
show_magicians(magician2)