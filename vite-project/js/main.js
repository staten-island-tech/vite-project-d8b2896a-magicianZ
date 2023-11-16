import '../styles/style.css'
import {deepwoken} from './mylists'


document.querySelector('#app').innerHTML = `
<button id="ethanbutton">Button</button>
<div id="container"> </div>`



const DOMselectors = {
    y:document.querySelector("#ethanbutton"),
    card:document.querySelector(".card"),
    container:document.querySelector("#container")

}


DOMselectors.y.addEventListener("click", function(event){
    event.preventDefault()
    var htmlelements = ""
    let x = deepwoken.filter((something)=>something.attunement==="Frostdraw");
    x.forEach((sm)=>htmlelements+='<div id="card"> <p>${sm.name}</p></div>')
    DOMselectors.container.innerHTML = htmlelements
    
});