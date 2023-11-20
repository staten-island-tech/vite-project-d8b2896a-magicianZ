import '../styles/style.css'
import {deepwoken} from './mylists'


document.querySelector('#app').innerHTML = `
<button id="ethanbutton">Frostdraw</button>
<button id="ethanbutton2">Flamecharm</button>
<button id="ethanbutton3">Galebreathe</button>
<button id="ethanbutton4">Thundercall</button>
<button id="ethanbutton5">Ironsing</button>
<div id="container"> </div>`




const DOMselectors = {
    y:document.querySelector("#ethanbutton"),
    card:document.querySelector(".card"),
    container:document.querySelector("#container"),
    cards:document.querySelector("#card"),
    buttin2:document.querySelector("#ethanbutton2"),
    buttin3:document.querySelector("#ethanbutton3"),
    buttin4:document.querySelector("#ethanbutton4"),
    buttin5:document.querySelector("#ethanbutton5")


}


DOMselectors.y.addEventListener("click", function(event){
    event.preventDefault()
    let htmlelements = ""
    let x = deepwoken.filter((something)=>something.attunement==="Frostdraw");
    x.forEach((sm)=>htmlelements+=`<div id="card"> <p>${sm.name}</p> <img src=${sm.img}><p>${sm.type}</p> </div>`)
    DOMselectors.container.innerHTML = htmlelements
    
});

DOMselectors.buttin2.addEventListener("click", function(event){
    event.preventDefault()
    let htmlelements = ""
    let x = deepwoken.filter((something)=>something.attunement==="Flamecharm");
    x.forEach((sm)=>htmlelements+=`<div id="card"> <p>${sm.name}</p> <img src=${sm.img}><p>${sm.type}</p> </div>`)
    DOMselectors.container.innerHTML = htmlelements
    
});
DOMselectors.buttin3.addEventListener("click", function(event){
    event.preventDefault()
    let htmlelements = ""
    let x = deepwoken.filter((something)=>something.attunement==="Galebreathe");
    x.forEach((sm)=>htmlelements+=`<div id="card"> <p>${sm.name}</p> <img src=${sm.img}><p>${sm.type}</p> </div>`)
    DOMselectors.container.innerHTML = htmlelements
    
});
DOMselectors.buttin4.addEventListener("click", function(event){
    event.preventDefault()
    let htmlelements = "" 
    let x = deepwoken.filter((something)=>something.attunement==="Thundercall");
    x.forEach((sm)=>htmlelements+=`<div id="card"> <p>${sm.name}</p> <img src=${sm.img}><p>${sm.type}</p> </div>`)
    DOMselectors.container.innerHTML = htmlelements
    
});
DOMselectors.buttin5.addEventListener("click", function(event){
    event.preventDefault()
    let htmlelements = ""
    let x = deepwoken.filter((something)=>something.attunement==="Ironsing");
    x.forEach((sm)=>htmlelements+=`<div id="card"> <p>${sm.name}</p> <img src=${sm.img}><p>${sm.type}</p> </div>`)
    DOMselectors.container.innerHTML = htmlelements
    
});




