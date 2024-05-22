function Livre (title, author, year) {
    this.title = title
    this.author = author
    this.year = year
}
Livre.prototype.getDescription = function(){
    return `${this.author} a écrit ${this.title} en ${this.year}`
}


let livre1  = new Livre("Le problème à 3 corp", "une chinoise", 2002)
let livre2  = new Livre("Les fleurs du mal", "Baudelaire", 1857)


console.table(livre1)
livre1.editor = "Gillard"
console.log(livre1.editor)
console.log(livre1)
console.log(livre1.getDescription())

console.log(livre2)