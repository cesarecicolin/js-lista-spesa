const spesa = ["mela","carta", "libri", "pesce", ]

 
let i = 0
let message = ""
while (i < spesa.length ) {
    const lista = spesa[i]
    

    message += `<li>${lista}</li>`
    

  i++
  
    
}
const listaFinale = document.querySelector("ul")
  
document.querySelector("ul").innerHTML = message