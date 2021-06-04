/* Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el
usuario de la siguiente forma : (suponiendo que indica 30).
30303030303030303030303030303030303
2828282828282828282828282
.....
333
1 */

let nrep = prompt("Ingresa un numero entre el 1 y el 1000");

if (isNaN(nrep)!=true && nrep == nrep) {

    if (nrep > 0 && nrep <= 1000) {
        
        let rep,i;

        for (i = nrep; i >= 1; i--) {

            for (rep = i; rep >= 1; rep--) {
                document.write(i);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("Este numero no es correcto");
    }
} 
else {
    alert("No ingresaste un numero");
}
