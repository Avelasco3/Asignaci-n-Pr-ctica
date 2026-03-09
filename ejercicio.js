// Sistema de Promedio de Notas con decimales

// Ingreso de notas
let nota1 = parseFloat(prompt("Ingrese la primera nota (puede ser decimal):"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota (puede ser decimal):"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota (puede ser decimal):"));

// Cálculo del promedio
let promedio = (nota1 + nota2 + nota3) / 3;

// Mostrar promedio con 2 decimales
console.log("El promedio es: " + promedio.toFixed(2));

// Condicional para aprobar o reprobar
if (promedio >= 3.0) {
    console.log("El estudiante APRUEBA");
} else {
    console.log("El estudiante REPRUEBA");
}