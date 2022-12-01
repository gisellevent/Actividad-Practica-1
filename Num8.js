//Prepara un programa que pida al usuario tres números y diga cuál es el mayor de los tres.

let num1=Number(prompt("Por Favor, ingrese un número."))
let num2=Number(prompt("Por Favor, ingrese un número."))
let num3=Number(prompt("Por Favor, ingrese un número."))

if(num1 > num2 && num1 > num3)
{
    document.write("------------------------------------------------------------------------------------");
    document.write("<br>")
    document.write("El primer número ingresado, o sea el ", num1, " es el mayor de todos");
    document.write("<br>")
    document.write("------------------------------------------------------------------------------------");

}

if(num2 > num1 && num2 > num3)
{
    document.write("------------------------------------------------------------------------------------");
    document.write("<br>")
    document.write("El segundo número ingresado, o sea el ", num2, " es el mayor de todos");
    document.write("<br>")
    document.write("------------------------------------------------------------------------------------");

}

if(num3 > num1 && num3 > num2)
{
    document.write("------------------------------------------------------------------------------------");
    document.write("<br>")
    document.write("El tercer número ingresado, o sea el ", num3, " es el mayor de todos");
    document.write("<br>")
    document.write("------------------------------------------------------------------------------------");
}