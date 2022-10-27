
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

let confirm_text = document.getElementById("confirm_text");

if(localStorage.getItem("practice") == null) {
    var practice_array = [];
}   else {
    practice_array = JSON.parse(localStorage.getItem("practice"));
}

btn1.addEventListener("click", function(){
    /* Add values into the array from inputs */
    practice_array.push({
        foreign: foreign_word.value,
        native: native_word.value
    });

    var practice_arrayJSON = JSON.stringify(practice_array);
    localStorage.setItem("practice", practice_arrayJSON);

    /* Confirm Text and Timer */
    confirm_text.textContent = "Slova se uložila, můžete přidat další";
    setTimeout(function(){
        confirm_text.textContent = "";
    }, 1500);

    /* Reset values from inputs */
    foreign_word.value = "";
    native_word.value = "";

});


/**** First Practice ****/

var my_storage = localStorage.getItem("practice");

var my_storage_JSON = JSON.parse(my_storage);

/* Object Length */

let object_length = my_storage_JSON.length;

/* Randomize Function */

let btn_randomize = document.getElementById("randomize_btn");

let random_foreign = document.getElementById("random_foreign_word");

let random_native = document.getElementById("random_native_word");

btn_randomize.addEventListener("click", function(){
    /* Reset values */
    random_foreign.innerText = "";
    random_native.innerText = "";
    /* Generate Random Number */
    var random_number = Math.ceil((Math.random() * object_length) - 1);   
    /* Show random word from array */
    random_foreign.innerText = my_storage_JSON[random_number].foreign;
    random_native.innerText = my_storage_JSON[random_number].native;
});

/**** Second Practice ****/

/* Result text */
let practice_result = document.getElementById("practice_result");

let btn_practice_submit = document.getElementById("btn_practice_submit");

let native_word_practice = document.getElementById("native_word_practice");

btn_practice_submit.addEventListener("click", function(){

    /* Generate Random Number */
    var random_number = Math.ceil((Math.random() * object_length) - 1);
    
    native_word_practice.innerText = "";

    if(native_word_practice.value == "pes"){
        practice_result.innerHTML = "<span class='true'>Správná odpověď</span>";
    }   else {
        practice_result.innerHTML = "<span class='false'>Špatná odpověď</span>";
    }

});

/**** Words List ****/

function createList(){ 

    let list = "<table><tr><th>Cizí výraz</th><th>Český výraz</th></tr>"
    for (let x in my_storage_JSON) {
        list += "<tr><td>" + my_storage_JSON[x].foreign + "</td><td>" + my_storage_JSON[x].native + "</td></tr>";
    }
    list += "</table>"

    document.getElementById("list").innerHTML = list;

};

createList();

/* List Refresh */

let refresh_btn = document.getElementById("refresh_btn");

refresh_btn.addEventListener("click", function(){
    
    location.reload();

});

