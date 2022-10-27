
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

if(localStorage.getItem("practice") == null) {
    var practice_array = [];
}   else {
    practice_array = JSON.parse(localStorage.getItem("practice"));
}

btn1.addEventListener("click", function(){
    
    practice_array.push({
        foreign: foreign_word.value,
        native: native_word.value
    });

    var practice_arrayJSON = JSON.stringify(practice_array);
    localStorage.setItem("practice", practice_arrayJSON);

    foreign_word.value = "";
    native_word.value = "";

});


/**** First Practice ****/

/* Randomize Function */

/* Could be native_word_FromLS.length */
/*
var array_length = foreign_word_FromLS.length;   

console.log(array_length);

let btn_randomize = document.getElementById("randomize_btn");

let random_foreign = document.getElementsByClassName("random_foreign_word");

let random_native = document.getElementsByClassName("random_native_word");

btn_randomize.addEventListener("click", function(){
    /* Generate Random Number */
    /*let random_number = Math.ceil(Math.random() * array_length);   
    /* Show random word from array */
    /*console.log(random_number);

});*/

/**** Words List ****/
/*
let word_list = document.getElemenetById("list");

let my_storage = localStorage.getItem("practice");
let my_storage_JSON = JSON.parse(my_storage);

my_storage_JSON.forEach(function(word){
    word_list.innerHTML = word.foreign + word.native;
});*/

function myFunction(){
    let my_storage = localStorage.getItem("practice");
    let my_storage_JSON = JSON.parse(my_storage);    
    let list = "<table><tr><th>Cizí výraz</th><th>Český výraz</th></tr>"
    for (let x in my_storage_JSON) {
        list += "<tr><td>" + my_storage_JSON[x].foreign + "</td><td>" + my_storage_JSON[x].native + "</td></tr>";
    }
    list += "</table>"

    document.getElementById("list").innerHTML = list;
};

myFunction();

/* List Refresh */

let refresh_btn = document.getElementById("refresh_btn");

refresh_btn.addEventListener("click", function(){
    
    location.reload();

});