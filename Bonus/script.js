/*
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const btnPlay = document.getElementById('playbtn');
const gridElement = document.getElementById("grid");

//Si showa al click
btnPlay.addEventListener('click',

    function () {
        //Stringa vuota per non far generare la griglia piu' di una volta
        gridElement.innerHTML = "";

        //Ciclo for per avere le mie celle
        for (let i = 1; i <= 100; i++) {

            const newElement = createMyElement("div", "square");
            gridElement.append(newElement);
            newElement.append(i);

            //funzione per colorare la cella all'interno della griglia
            newElement.addEventListener('click',
                function () {
                    console.log("Hai cliccato una cella", i);
                    newElement.classList.add('clicked');
                }
            );
        }
    }
);


//Definisco la funzione
function createMyElement(tagtype, classname) {

    const currentElement = document.createElement(tagtype);
    currentElement.classList.add(classname);

    return currentElement;
};