function init(){
    const cities = ["Quimper" , "Rennes", "Nantes", "Nior"]

        //récupérer le select
    let city = document.getElementById("city")
    cities.forEach(function (val){
        //pour chaque élément  je rcrée une option
        let option = document.createElement("option")
        option.innerText = val
        option.value = val.toLowerCase()

        city.appendChild(option)
    })

    city.addEventListener("change", function (event) {
        console.log(event)
        let val = this.value
        let p = document.createElement("p")
        p.innerText = val
        document.body.appendChild(p)

    })
}

// init()

window.onload = init