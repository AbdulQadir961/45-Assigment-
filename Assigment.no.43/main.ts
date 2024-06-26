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


const magician2: string[]=["amir","saif","raza"];
make_great(magician2)
show_magicians(magician2)

 function make_great2(magicions: string[]): string[] {
    const greatMagicions: string[] = [];
    for (let a = 0;  a < magicions.length; a++ ){
        greatMagicions.push(magicions[a] + ' the great');

    }
    return greatMagicions;
 }

const magicians3: string[] =["ayan","ahmed","salman"];
const greatMagician2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagician2);