/* Pide una nota (número). Muestra la calificación según la nota:
○ 0-3: Muy deficiente
○ 3-5: Insuficiente
○ 5-6: Suficiente
○ 6-7: Bien
○ 7-9: Notable
○ 9-10: Sobresaliente*/ 

let nota=prompt("Ingrese la nota del alumno ");
            if(nota<3){
               alert("Muy deficiente");
            }
            else if(nota<5){
               alert("Insuficiente");
            }
            else if(nota<6){
                alert("Suficiente");
            }
            else if(nota<7){
                alert("Bien");
            }
            else if(nota<9){
                alert("Notable");
            }
            else if(nota<=10){
                alert("Sobresaliente")
            }
            else {
                alert("Nota incorrecta");
            }
