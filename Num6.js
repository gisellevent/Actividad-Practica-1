//Haz un programa que pida al usuario dos números y diga cuántos de ellos son positivos.

let num1=Number(prompt("Por Favor, ingrese un número."))
let num2=Number(prompt("Por Favor, ingrese un número."))

if(num1 > 0 && num2 > 0)
{
    msj = "Los 2 números son positivos";
}

if(num1 < 0 && num2 < 0)
{
    msj = "Ninguno de los 2 números son positivos";
}

if(num1 > 0 && num2 < 0)
{
    msj = "Uno de los 2 números es positivo";
}

if(num1 < 0 && num2 > 0)
{
    msj = "Uno de los 2 números es positivo";
}

document.write("------------------------------------------------------------------------------------");
document.write("<br>")
document.write(msj)
document.write("<br>")
document.write("------------------------------------------------------------------------------------");