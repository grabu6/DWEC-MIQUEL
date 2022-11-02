import {objects} from './iphone.js';
function llista(){
   
    let iphonellista = ["iPhone", "iPhone 3G", "iPhone 3GS", "iPhone 4", "iPhone 5", "iPhone 5C","iPhone 5S", "iPhone 6", "iPhone 6 Plus", "iPhone 6S Plus","iPhone 7", "iPhone 7 Plus","iPhone 8", "iPhone 8 Plus","iPhone X", "iPhone 11"];
    const campSeleccionat= document.getElementsByTagName("select")[0];

    for (let i=0; i<iphonellista.length; i++){
        let option= document.createElement("option");
        option.value= iphonellista[i];
        option.innerHTML= iphonellista[i];
        campSeleccionat.append(option);
    }
    return iphonellista;
}
function addRow(){
    let taula = document.getElementById("taula");
    let row = taula.insertRow(-1); 
    let codi = row.insertCell(0);
    let nom = row.insertCell(1);
    let quantitat = row.insertCell(2);
    let preu = row.insertCell(3);
    let total = row.insertCell(4);

    let values=getValues();
    
    codi.innerText = values[0];
    nom.innerText = values[1];
    preu.innerText = values[2];
    total.innerText=values[3];
}
function getValues(){
let valor=llista();
if(valor[0]){    
    let iphone=JSON.parse(localStorage.getItem("iphone"));
    let codi=iphone.codi;
    let nom=iphone.nom;
    let preu=iphone.preu;
    let total=iphone.total;
    return [codi,nom,preu,total];
}else if(valor[1]){    
    let iphone3G=JSON.parse(localStorage.getItem("iphone3G"));
    let codi=iphone3G.codi;
    let nom=iphone3G.nom;
    let preu=iphone3G.preu;
    let total=iphone3G.total;
    return [codi,nom,preu,total];
}else{
    return false;
}

}

window.onload= function start(){
    llista();
    const boto= document.getElementsByTagName("button")[0];
    boto.addEventListener("click", addRow);
}

