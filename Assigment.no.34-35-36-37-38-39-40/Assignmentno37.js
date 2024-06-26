function make_shirt2(size, message) {
    console.log("You Have order a ".concat(size, "-sized shirt with the message: \"").concat(message, "\" "));
}
//calling function 
make_shirt2("large", "I love Typescript");
//create the medium shirt with the default message 
make_shirt2('medium', 'I love Typescript');
//  create a shirt of any size with a different message
make_shirt2('small', 'keep calm and do coding');
