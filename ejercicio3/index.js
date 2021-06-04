/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» 
y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let suma = 0;
do {
    let nro = prompt("Escribir un numero");
    if(isNaN(nro)) {
        alert(nro + " No es un numero");
    }
    else{
        suma = suma + parseInt(nro);
    }
} while (confirm("Desea seguir?"));
alert(suma);   
