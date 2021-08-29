var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var output = document.querySelector("#output");
var erase = document.querySelector("#btn-erase")

var server = "https://api.funtranslations.com/translate/groot.json"

function getTranslation(text) {
    return server + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("An error occured" + error);
    alert("PLease retry after somtime");
}

function clickHandler() {
    var input = textInput.value;

    fetch(getTranslation(input))
        .then(Response => Response.json())
        .then(json => {
            var translated = json.contents.translated;
            output.innerText = translated;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);

erase.addEventListener("click", clear);

function clear() {
    textInput.value = "";
    output.innerText = "";
}