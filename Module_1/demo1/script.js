let pinguin = "Pingouin"
let polarBear = "Ours polaire"
let quantite = 12

let toDay = new Date()

let locations = ["banquise", "batman", "madagascar", "l'age de glace"]

console.log(pinguin)
console.log(typeof pinguin)
console.log(locations)

//boucles

//for in
for (const location of locations){
    console.log(location)
}

let morse = {
    name : "MorseAttack",
    age : 12,
    gender : "M"
}

for (const morseKey in morse) {
    console.log(morseKey)
    console.log(morse[morseKey])
}

locations.forEach(function (value, idx){
    console.log(value)
})

locations.forEach(val => console.log(val + "lambda"))

locations.forEach(val => {
    console.log(val + "lambda")
})

function hello(){
    console.log("Hello word !")
}
hello()

const hell = function(){
    console.log("Hello world !")
}
hell()

//(function (){
//    console.log("Hello word !")
//})()












