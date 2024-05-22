


let mysteryWord = getRandomWords()
console.log(mysteryWord)

function getRandomWords(){
    let num = Math.floor(Math.random() * disco.length);
    return dico[num]
}

function displayMysteryWords(){
    const domWord = document.getElementById("mysteryWord")
    domWord.innerText = mysteryWord.replace(/\w/, "_")
}

function checkLetter(letter){
    let domWord = document.getElementById("mysteryWord").innerText.split('')
    console.log(domWord)
    for(let i = 0; i < mysteryWord.length; i++){
        if(mysteryWord[i] === letter) {
            domWord[i] = letter
        }
    }

    document.getElementById("mysteryWord").innerText = domWord.join(" ")
}

function checkWinOrLoose(){
    let domWord = document.getElementById("mysteryWord").innerText
    let attempt = document.getElementById("attempts").innerText

    if(domWord === mysteryWord){
        alert("Bravo: T'es un champion, champion!")
    }else{
        attempt--
        if(attempt === 0){
            alert("Perdu!")
        }else{
            document.getElementById("attempts").innerText = attempt
        }
    }
}

function createLetters(){
    let letters = document.getElementById("letters")
    for(let i = 64; i<=90; i++) {
        const letter = String.fromCharCode(i);
        console.log(letter);

        const button = document.createElement("button")
        button.innerText = letter
        button.addEventListener("click", function() {
            checkLetter()
        })
        letters.append(button)
    }
}
createLetters()

function init(){
    createLetters()
    displayMysteryWords()
}
window.onload = init