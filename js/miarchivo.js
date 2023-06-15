//Aca se crea la funcion
function tabla() {
    //Aca se solicita el numero del que se va a crear la tabla de multiplicar
    let numero = parseInt(prompt("Ingrese un número para hacer la tabla (0 para terminar):"));
    
    //Aca se aplica el condicional(El numero tiene que ser distinto a 0)
     while (numero !==0) {
         //Se crea un bucle con la cantidad de veces que se va a multiplicar el numero solicitado al usuario
        for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        document.write("<tr><td>" + numero + " x " + i + "</td><td>   =   " + resultado + "</td></tr>" + "<br>");
        }      
        document.write("<br>"+"<br>"+"<br>");
        numero = parseInt(prompt("Ingrese otro número (0 para terminar):"));
        if (numero === 0){
             alert("Ingresaste 0, se finalizara el proceso");
        }
     }
}
tabla()
