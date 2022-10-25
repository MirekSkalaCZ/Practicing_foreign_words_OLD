
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

/**** Insert Words Btn ****/

let insert_btn = document.getElementById("btn_insert_words");

let insert_input = document.getElementById("input_insert_words");

insert_btn.onclick = function(){
    insert_btn.style.display = "none";

    if(insert_btn.style.display == "none") {
        insert_input.style.display = "block";
    }

    /**** Cross Fce ****/

    let cross = document.getElementById("cross");

    cross.onclick = function(){
        insert_input.style.display = "none";

        if(insert_input.style.display == "none") {
            insert_btn.style.display = "block";
        }
    }
}

/**** Practice ****/

let practice_btn = document.getElementById("btn_practice_open");

let practice_window = document.getElementById("practice_window");

practice_btn.onclick = function(){
    practice_btn.style.display = "none";

    if(practice_btn.style.display == "none") {
        practice_window.style.display = "block";
    }

    /**** Cross Fce ****/

    let cross = document.getElementById("cross1");

    cross.onclick = function(){
        practice_window.style.display = "none";

        if(practice_window.style.display == "none") {
            practice_btn.style.display = "block";
        }
    }
}