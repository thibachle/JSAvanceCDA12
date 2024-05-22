const livre1 = {
    title : "Metro 2033",
    author : "Un gars Russe",
    year : 2010,
    getDescription: function(){
        return `${this.author} a écrit ${this.title} en ${this.year}`
    }
}
console.log(livre1)
console.table(livre1)
console.error(livre1)

livre1.editor = "Gallimard"
console.log(livre1)
console.log(livre1.author)
console.log(livre1.getDescription())