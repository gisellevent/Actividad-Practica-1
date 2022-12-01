//Crea un programa que pida un número al usuario y diga si es positivo, negativo o cero.

let num=Number(prompt("Por Favor, ingrese un número."))

if(num == 0)
{
    msj = "EL NÚMERO ES IGUAL A 0";
}

if(num > 0)
{
        msj = "EL NÚMERO ES POSITIVO"; 
}

if(num < 0)
{
    msj = "EL NÚMERO ES NEGATIVO"; 
}


document.write("------------------------------------------------------------------------------------");
document.write("<br>")
document.write(msj)
document.write("<br>")
document.write("------------------------------------------------------------------------------------");