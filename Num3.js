//Crea un programa que calcule la superficie de un círculo a partir de su radio 
//(π * Radio2) y que después muestre el valor de dicha superficie 
//(Nota: para calcular el cuadrado de un número puedes usar la función 
//Math.pow(base, exponente) o bien elevar un número a una potencia 
//utilizando dos asteriscos base**exponente).

const pi=3.14;
let radio=Number(prompt("Por Favor, ingrese el redio del círculo."))
let result=pi*Math.pow(radio, 2);

document.write("------------------------------------------------------------------------------------");
document.write("<br>")
document.write("La superficie del círculo es: ", result);
document.write("<br>")
document.write("------------------------------------------------------------------------------------");