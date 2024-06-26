function show_magicians(magicions) {
    for (var _i = 0, magicions_1 = magicions; _i < magicions_1.length; _i++) {
        var magicion_1 = magicions_1[_i];
        console.log(magicion_1.charAt(0).toUpperCase() + magicion_1.slice(1));
    }
}
var magicion = ["hassan", "ali", "baqar"];
show_magicians(magicion);
function make_great(magician) {
    for (var q = 0; q < magician.length; q++) {
        magician[q] = magician[q] + ' is the great';
    }
}
var magician2 = ['hassan', 'ali', 'baqar'];
make_great(magician2);
show_magicians(magician2);
