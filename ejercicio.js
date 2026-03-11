
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese la primera nota: ", function(nota1) {
  rl.question("Ingrese la segunda nota: ", function(nota2) {
    rl.question("Ingrese la tercera nota: ", function(nota3) {

      nota1 = parseFloat(nota1);
      nota2 = parseFloat(nota2);
      nota3 = parseFloat(nota3);

      let promedio = (nota1 + nota2 + nota3) / 3;

      console.log("Promedio:", promedio);

      if (promedio >= 3) {
        console.log("Aprueba");
      } else {
        console.log("Reprueba");
      }

      rl.close();
    });
  });
});