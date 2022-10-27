
/**** Welcome Text ****/

const heading = document.getElementById("text");

const text = "Procvičování cizích slov";

let idLetter = 1;

let delay = 150;

function printText(){
    heading.innerText = text.slice(0,idLetter)

    idLetter++;

    if(idLetter > text.length){
        idLetter = 1;
    }

    setTimeout(printText, delay);
}

printText();

/**** Btn - show window */

for( let i = 1; i <= 3; i++ ) {
    let btn = document.getElementById("btn" + i);

    let window = document.getElementById("window" + i);

    btn.onclick = function(){
    btn.style.display = "none";

    if(btn.style.display == "none") {
        window.style.display = "block";
    }

    /**** Cross Fce ****/

    let cross = document.getElementById("cross" + i);

    cross.onclick = function(){
        window.style.display = "none";

        if(window.style.display == "none") {
            btn.style.display = "block";
        }
    }
}
}