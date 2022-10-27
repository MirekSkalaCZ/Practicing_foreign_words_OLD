
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
    /* Add values into the array from inputs */
    practice_array.push({
        foreign: foreign_word.value,
        native: native_word.value
    });

    var practice_arrayJSON = JSON.stringify(practice_array);
    localStorage.setItem("practice", practice_arrayJSON);
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

let random_foreign = document.getElementsByClassName("random_foreign_word");

let random_native = document.getElementsByClassName("random_native_word");
/*
btn_randomize.addEventListener("click", function(){
    /* Generate Random Number */
    //let random_number = Math.ceil(Math.random() * object_length);   
    /* Show random word from array */
    //console.log(random_number);
/*
});*/

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

