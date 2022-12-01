//Crea un programa que pida al usuario dos números y 
//muestre su división si el segundo no es cero, 
//o un mensaje de aviso en caso contrario.

let dividendo=Number(prompt("Por Favor, ingrese un número."))
let divisor=Number(prompt("Por Favor, ingrese un número."))
let resultadodiv=dividendo/divisor;

if(divisor == 0)
{
    alert("AVISO, cambie el divisor. ESTE ES IGUAL A 0. POR ESTA RAZÓN LA DIVISIÓN NO SE REALIZARÁ");
}

if(divisor != 0)
{

document.write("------------------------------------------------------------------------------------");
document.write("<br>")
document.write("El resultado de la división es: ", resultadodiv);
document.write("<br>")
document.write("------------------------------------------------------------------------------------");

}
