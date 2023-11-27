import '../styles/style.css'
import {deepwoken} from './mylists'


document.querySelector('#app').innerHTML = `
<button id="ethanbutton">Frostdraw</button>
<button id="ethanbutton2">Flamecharm</button>
<button id="ethanbutton3">Galebreathe</button>
<button id="ethanbutton4">Thundercall</button>
<button id="ethanbutton5">Ironsing</button>
<button id="ethanbutton6">Shadowcast</button>
<button id="ethanbutton7">Physical</button>
<button id="ethanbutton8">Monster</button>
<button id="theme1">Theme Changer</button>

<div id="container"> </div>`




const DOMselectors = {
    y:document.querySelector("#ethanbutton"),
    card:document.querySelector(".card"),
    container:document.querySelector("#container"),
    cards:document.querySelector("#card"),
    buttin2:document.querySelector("#ethanbutton2"),
    buttin3:document.querySelector("#ethanbutton3"),
    buttin4:document.querySelector("#ethanbutton4"),
    buttin5:document.querySelector("#ethanbutton5"),
    buttin6:document.querySelector("#ethanbutton6"),
    buttin7:document.querySelector("#ethanbutton7"),
    buttin8:document.querySelector("#ethanbutton8"),
    theme1:document.querySelector("#theme1"),



}
function yay(attunement,et){
   et.addEventListener("click", function(event){
        event.preventDefault()
        let htmlelements = ""
        let x = deepwoken.filter((something)=>something.attunement===`${attunement}`);
        x.forEach((sm)=>htmlelements+=`<div class="card"> <p>${sm.name}</p> <img src=${sm.img}> <p>${sm.type}</p> <p> ${sm.stars}</p> </div>`)
        DOMselectors.container.innerHTML = htmlelements
        
    });

}



DOMselectors.theme1.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
      document.body.classList.add("cotton");
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("cotton");
    }
  });





yay("Frostdraw",DOMselectors.y)
yay("Flamecharm",DOMselectors.buttin2)
yay("Galebreathe",DOMselectors.buttin3)
yay("Thundercall",DOMselectors.buttin4)
yay("Ironsing",DOMselectors.buttin5)
yay("Shadowcast",DOMselectors.buttin6)
yay("Physical",DOMselectors.buttin7)
yay("Monster",DOMselectors.buttin8)
















