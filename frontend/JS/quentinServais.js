let cpu = [
    {
  marque: "Intel",
  model: "I7 10700k",
  prix: "550",
  code: 1
},
    {
    marque: "Intel",
    model: "I5 10600k",
    prix: "330",
    code: 1
},
    {
      marque: "AMD",
      model: "R7 3700X",
      prix: "350",
      code: 2
}
];
let carteMere = [{
  marque: "MSI",
  chipset: "Z390",
  prix: "250",
  code: 1
  }
];
function compatibilite(){
  if(cpu[2].code == carteMere[0].code){
      document.getElementById("rep").innerHTML = "C'est compatible !";
  }
  else{
    document.getElementById("rep").innerHTML = "Attention Ce n'est pas compatible !";
  }
}
function selectCpu(){
  let selection = document.getElementById("selectCpu").value;
  for(let i = 0; i < cpu.length; i++){
    if(selection == cpu[i].model){
      document.getElementById("cpuBox").innerHTML = "Vous avez choisi : " + cpu[i].marque + " " + cpu[i].model + " " + cpu[i].prix + "€";
    }
  }
}
