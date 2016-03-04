// importa o módulo de filesystem
var fs = require("fs");

// faz leitura do arquivo
fs.readFile('input.txt', function (err, data) {
    if (err) {
        console.log(err.stack);
        return;
    }
    
    // loga o conteúdo do arquivo
    console.log(data.toString());
});

console.log("Program Ended");