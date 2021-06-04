/* Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al  salir con “cancelar” deben 
mostrarse todas las cadenas concatenadas con un - (guión).*/

let result = "";

do {
    let cadena = prompt("Escribir una cadena de texto");
    
    if (result == "") {
        result = result + cadena;
    }
    else {
        result = result +' '+ "-" +' '+ cadena;
    }
} while (confirm("Desea seguir?"));

alert(result);
