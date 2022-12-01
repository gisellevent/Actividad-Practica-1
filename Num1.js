//Crea un programa que al recibir dos números 
//escriba un resultado con las operaciones matemáticas básicas.

let operador=Number(prompt("Por Favor, ingrese un primer número."))
let operando=Number(prompt("Por Favor, ingrese un segundo número."))
let resultadosum=operador+operando;
let resultadores=operador-operando;
let resultadomult=operador*operando;
let resultadodiv=operador/operando;

document.write("------------------------------------------------------------------------------------");
document.write("<br>")
document.write("El resultado de la suma es: ", resultadosum);
document.write("<br>")
document.write("------------------------------------------------------------------------------------");
document.write("<br>")
document.write("El resultado de la resta es: ", resultadores);
document.write("<br>")
document.write("------------------------------------------------------------------------------------");
document.write("<br>")
document.write("El resultado de la multiplicación es: ", resultadomult);
document.write("<br>")
document.write("------------------------------------------------------------------------------------");
document.write("<br>")
document.write("El resultado de la división es: ", resultadodiv);
document.write("<br>")
document.write("------------------------------------------------------------------------------------");


