
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
}