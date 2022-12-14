
// ENIGMA. Encriptado y desencriptado de textos.

var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

var text = (document.getElementById("decrypt-text").value).toLowerCase();

function enigma(alphabet1, alphabet2, id1, id2) {
    text = (document.getElementById(id1).value).toLowerCase();
    var result = "";
    for (var i = 0; i < text.length; i++) {
        for (var x = 0; x < alphabet1.length; x++) {
            if (text[i] === alphabet1[x]) {
                result += alphabet2[x];
                document.getElementById(id2).innerText = result;
            } else if (alphabet1.indexOf(text[i]) === -1 && !x){
                result += text[i];
            }
        }
    }
}

var decryptBox = "decrypt-text";
var encryptBox = "encrypt-text";

function encryptText() {
    enigma(plainAlphabet, encryptedAlphabet, decryptBox, encryptBox);
}

function decryptText() {
    enigma(encryptedAlphabet, plainAlphabet, encryptBox, decryptBox);
}

document.getElementById("encrypt-button").addEventListener("click", encryptText);
document.getElementById("decrypt-button").addEventListener("click", decryptText);

// GENERADOR ALEATORIO. Combinaciones de números sin números repetidos. 

console.log("GENERADOR ALEATORIO");
console.log("---------------------------");

function randomPick(n, min, max) {
    var newArray = [];
    var range = max - min + 1;
    for (var i = 0; i < n; i++) {
        var randomNumber = Math.floor(Math.random() * range) + min;
        if (newArray.indexOf(randomNumber) === -1) {
            console.log("Número aleatorio " + randomNumber);
            newArray.push(randomNumber);
        } else {
            console.log("Número repetido " + randomNumber + ". No se añade.");
            i--;
        }
    }
    console.log("Combinación ganadora: " + newArray);
}

randomPick(6, 1, 49);
