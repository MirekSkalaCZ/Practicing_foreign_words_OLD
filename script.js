
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

/**** Input Values ****/

let btn1 = document.getElementById("btn_insert_submit");

let input_foreign = document.getElementById("foreign_word");

let input_native = document.getElementById("native_word");

let foreign_word = [];

let native_word = [];


btn1.addEventListener("click", function(){
    /* Add a foreign word to array */
    foreign_word.push(input_foreign.value);
    console.log(foreign_word);
    /* Add to Local Storage */
    let foreign_word_ToLS = JSON.stringify(foreign_word);
    localStorage.setItem("Foreign Words", foreign_word_ToLS);
    input_foreign.value = "";
    let foreign_word_FromLS = JSON.parse(foreign_word_ToLS);

    /* Add a native word to array */
    native_word.push(input_native.value);
    console.log(native_word);
    /* Add to Local Storage */
    let native_word_ToLS = JSON.stringify(native_word);
    localStorage.setItem("Native Words", native_word_ToLS);
    input_native.value = "";
    let native_word_FromLS = JSON.parse(native_word_ToLS);  

    /* Could be native_word_FromLS.length */

    var array_length = foreign_word_FromLS.length;   

    /**** First Practice ****/

    /* Randomize Function */

    let btn_randomize = document.getElementById("randomize_btn");

    let random_foreign = document.getElementsByClassName("random_foreign_word");

    let random_native = document.getElementsByClassName("random_native_word");

    btn_randomize.addEventListener("click", function(){
        /* Generate Random Number */
        /*let random_number = Math.ceil(Math.random() * array_length);   
        /* Show random word from array */
        /*random_foreign.innerHTML = foreign_word_FromLS[random_number];
        /* Show random word from array */
        /*random_native.innerHTML = native_word_FromLS[random_number];*/
        for( let x = 0; x < array_length; x++ ) {
            
        }
    });

});


/**** First Practice ****/

/* Randomize Function */
/*
let btn_randomize = document.getElementById("randomize_btn");

let random_foreign = document.getElementsByClassName("random_foreign_word");

let random_native = document.getElementsByClassName("random_native_word");

btn_randomize.addEventListener("click", function(){
    /* Generate Random Number *//*
    let random_number = Math.ceil(Math.random() * array_length);   
    /* Show random word from array */
    /*console.log(random_number);

});*/