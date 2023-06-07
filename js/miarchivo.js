
//Aca se crea la funcion
function tabla() {
    //Aca se solicita el numero del que se va a crear la tabla de multiplicar
    numero = parseInt(prompt("Ingrese un número para hacer la tabla (0 para terminar):"));
    //Aca se aplica el condicional(El numero tiene que ser distinto a 0)
    while (numero !==0) {
        for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        document.write("<tr><td>" + numero + " x " + i + "</td><td>   =   " + resultado + "</td></tr>" + "<br>");
        }
        document.write("<br>"+"<br>"+"<br>");
        numero = parseInt(prompt("Ingrese otro número (0 para terminar):"));
    }
}
tabla()