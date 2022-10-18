function agafarValors(){
  let estrelles= document.getElementsByClassName("input")[0].value;
  localStorage.setItem("Estrelles",estrelles);
  let radi= document.getElementsByClassName("input")[1].value;
  localStorage.setItem("Radi",radi);
  let distancia= document.getElementsByClassName("input")[2].value;
  localStorage.setItem("Distancia",distancia);
  
  let estr = localStorage.getItem('Estrelles');
  let rad = localStorage.getItem('Radi');
  let dis = localStorage.getItem('Distancia');

  document.getElementsByClassName("valor")[0].innerHTML=estr;
  document.getElementsByClassName("valor")[1].innerHTML=rad;
  document.getElementsByClassName("valor")[2].innerHTML=dis;
}

