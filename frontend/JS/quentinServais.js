"use strict";
let cPU = [
    {
  marque: "Intel",
  model: "I7 10700k",
  socket: "1200",
  fréquence: 5.1,
  prix: 550,
  points: 9,
  image: "IMG/10700k.jpg",
  tdp: 125,
  id: "cpu1",
  nom: "Intel I7 10700k Socket 1200",
  architecture: "Comet Lake"

},
    {
    marque: "Intel",
    model: "I5 10600k",
    socket: "1200",
    fréquence: 4.8,
    prix: 330,
    points: 7,
    image: "IMG/10600k.jpg",
    tdp: 125,
    id: "cpu2",
    nom: "Intel I5 10600k Socket 1200",
    architecture: "Comet Lake"
},
    {
      marque: "AMD",
      model: "R7 3700X",
      socket: "AM4",
      fréquence: 4.4,
      prix: 350,
      points: 8,
      image: "IMG/3700x.jpg",
      tdp: 65,
      id: "cpu3",
      nom: "AMD R7 3700X Socket AM4",
      architecture: "Zen 2"
},
{
  marque: "AMD",
  model: "Threadripper 3990X",
  socket: "TRX40",
  fréquence: 4.3,
  prix: 4700,
  points: 10,
  image: "IMG/3990x.jpg",
  tdp: 280,
  id: "cpu4",
  nom: "AMD Threadripper 3990X Socket TRX40",
  architecture: "Zen 2"
}
];
let carteMere = [
  {
  marque: "MSI",
  model: "Z490",
  socket: "1200",
  format: "ATX",
  prix: 180,
  id: "cm1",
  image: "IMG/z490.jpg",
  nom: "MSI Z490 Socket 1200"
},
  {
  marque: "ASRock",
  model: "B550",
  socket: "AM4",
  format: "Micro-ATX",
  prix: 170,
  id: "cm2",
  image: "IMG/b550.jpg",
  nom: "ASRock B550 Socket AM4"
},
  {
  marque: "Asus",
  model: "X470",
  socket: "AM4",
  format: "ATX",
  prix: 220,
  id: "cm3",
  image: "IMG/x470.jpg",
  nom: "Asus X470 Socket AM4"
},
  {
  marque: "Gigabyte",
  model: "TRX40",
  socket: "TRX40",
  format: "ATX",
  prix: 480,
  id: "cm4",
  image: "IMG/trx40.jpg",
  nom: "Gigabyte TRX40 Socket TRX40"
},
  {
  marque: "MSI",
  model: "B460",
  socket: "1200",
  format: "Micro-ATX",
  prix: 80,
  id: "cm5",
  image: "IMG/b460.png",
  nom: "MSI B460 Socket 1200"
}
];
let rAM = [
  {
    marque: "Corsair",
    model: "Vengeance",
    type: "DDR4",
    fréquence: 3600,
    taille: 16,
    prix: 170,
    points: 8,
    id: "r1",
    image: "IMG/r1.jpg",
    nom: "Corsair Vengeance 3600MHz 16Go"
  },
  {
    marque: "GSkill",
    model: "Trident Z",
    type: "DDR4",
    fréquence: 4000,
    taille: 32,
    prix: 310,
    points: 10,
    id: "r2",
    image: "IMG/r2.jpg",
    nom: "GSkill Trident Z 4000MHz 32Go"
  },
  {
    marque: "Crucial",
    model: "Ballistix",
    type: "DDR4",
    fréquence: 3000,
    taille: 16,
    prix: 130,
    points: 7,
    id: "r3",
    image: "IMG/r3.jpg",
    nom: "Crucial Ballistix 3000MHz 16Go"
  },
  {
    marque: "Corsair",
    model: "Vengeance",
    type: "DDR4",
    fréquence: 3000,
    taille: 8,
    prix: 70,
    points: 6,
    id: "r4",
    image: "IMG/r1.jpg",
    nom : "Corsair Vengeance 3000MHz 8Go"
  },
  {
    marque: "HyperX",
    model: "Fury",
    type: "DDR3",
    fréquence: 1600,
    taille: 8,
    prix: 40,
    points: 4,
    id: "r5",
    image: "IMG/r5.jpg",
    nom: "HyperX Fury 1600MHz 8Go"
  }
];
let gPU = [
  {
    marque: "EVGA",
    model: "RTX 2060",
    name: "SC Ultra Gaming",
    architecture: "Turing",
    fréquence: 1755,
    memoire: 6,
    type: "GDDR6",
    tailleBus: 192,
    Tflops: 6.566,
    prix: 350,
    points: 6,
    id: "gpu1",
    image: "IMG/gpu1.jpg",
    tdp: 160,
    nom: "EVGA RTX 2060 6Go"
  },
  {
    marque: "MSI",
    model: "RTX 2070",
    name: "Ventus GP",
    architecture: "Turing",
    fréquence: 1620,
    memoire: 8,
    type: "GDDR6",
    tailleBus: 256,
    Tflops: 7.465,
    prix: 520,
    points: 8,
    id: "gpu2",
    image: "IMG/gpu2.jpg",
    tdp: 175,
    nom: "MSI RTX 2070 8Go"
  },
  {
    marque: "Gigabyte",
    model: "GTX 1660Ti",
    name: "Gaming OC",
    architecture: "Turing",
    fréquence: 1890,
    memoire: 6,
    type: "GDDR6",
    tailleBus: 192,
    Tflops: 5.71,
    prix: 330,
    points: 6,
    id: "gpu3",
    image: "IMG/gpu3.jpg",
    tdp: 120,
    nom: "Gigabyte GTX 1660Ti 6Go"
  },
  {
    marque: "MSI",
    model: "RTX 2080Ti",
    name: "Gaming X Trio",
    architecture: "Turing",
    fréquence: 1755,
    memoire: 11,
    type: "GDDR6",
    tailleBus: 352,
    Tflops: 15.28,
    prix: 1550,
    points: 10,
    id: "gpu4",
    image: "IMG/gpu4.jpg",
    tdp: 250,
    nom: "MSI RTX 2080Ti 11Go"
  },
  {
    marque: "ASRock",
    model: "RX 5700XT",
    name: "Taichi X OC",
    architecture: "RDNA 1.0",
    fréquence: 2025,
    memoire: 8,
    type: "GDDR6",
    tailleBus: 256,
    Tflops: 10.37,
    prix: 480,
    points: 8,
    id: "gpu5",
    image: "IMG/gpu5.jpg",
    tdp: 225,
    nom: "ASRock RX 5700XT 8Go"
  }
];
let pSU = [
  {
    marque: "Corsair",
    model: "CV450",
    watt: 450,
    prix: 50,
    certification: "80+ bronze",
    modularité: "non-modulaire",
    id: "psu1",
    points: 5,
    image: "IMG/psu1.jpg",
    nom: "Corsair CV450"
  },
  {
    marque: "Corsair",
    model: "CX550",
    watt: 550,
    prix: 85,
    certification: "80+ bronze",
    modularité: "semi-modulaire",
    id: "psu2",
    points: 6,
    image: "IMG/psu2.jpg",
    nom: "Corsair CX550M"
  },
  {
    marque: "Seasonic",
    model: "S12 650",
    watt: 650,
    prix: 80,
    certification: "80+ bronze",
    modularité: "non-modulaire",
    id: "psu3",
    points: 6,
    image: "IMG/psu3.jpg",
    nom: "Seasonic S12 650"
  },
  {
    marque: "Bequiet",
    model: "700",
    watt: 700,
    prix: 105,
    certification: "80+ bronze",
    modularité: "semi-modulaire",
    id: "psu4",
    points: 7,
    image: "IMG/psu4.jpg",
    nom: "Bequiet 700"
  },
  {
    marque: "Corsair",
    model: "HX1200",
    watt: 1200,
    prix: 270,
    certification: "80+ platinum",
    modularité: "modulaire",
    id: "psu5",
    points: 10,
    image: "IMG/psu5.jpg",
    nom: "Corsair HX1200"
  }
];
let cpuChoisis;//Choisi
let cMChoisie;
let rAMChoisie;
let gpuChoisit;//Choisi
let pSUChoisit;//Choisie

function slctCpu(){
  cpuChoisis = document.getElementById("selectCpu").value;
  for(let i = 0; i < cPU.length; i++){
    if(cpuChoisis == cPU[i].id){
      cpuChoisis = cPU[i];
      let cpuData = Object.keys(cpuChoisis);
      document.getElementById("cpuBox").innerHTML = "Vous avez choisi: <br>" + cpuData[0].bold() + ": " + cpuChoisis.marque + "<br>" + cpuData[1].bold() + ": " + cpuChoisis.model + "<br>" + cpuData[2].bold() + ": " + cpuChoisis.socket + "<br>" + cpuData[3].bold() + ": " + cpuChoisis.fréquence + " GHz <br>" + cpuData[10].bold() + ": " + cpuChoisis.architecture + "<br>" + cpuData[4].bold() + ": " + cpuChoisis.prix + "€";
      document.getElementById("cpuIm").src= cpuChoisis.image;
    }
  }
}

function slctCM(){
  cMChoisie = document.getElementById("selectCM").value;
  for(let i = 0; i < carteMere.length; i++){
    if(cMChoisie == carteMere[i].id){
      cMChoisie = carteMere[i];
      let cMData = Object.keys(cMChoisie);
      document.getElementById("cMBox").innerHTML = "Vous avez choisi: <br>" + cMData[0].bold() + ": " + cMChoisie.marque + "<br>" + cMData[1].bold() + ": " + cMChoisie.model + "<br>" + cMData[2].bold() + ": " + cMChoisie.socket + "<br>" + cMData[3].bold() + ": " + cMChoisie.format + "<br>" + cMData[4].bold() + ": " + cMChoisie.prix + "€";
      document.getElementById("cMIm").src= cMChoisie.image;
    }
  }
}

function slctRAM(){
  rAMChoisie = document.getElementById("selectRAM").value;
  for(let i = 0; i < rAM.length; i++){
    if(rAMChoisie == rAM[i].id){
      rAMChoisie = rAM[i];
      let rAMData = Object.keys(rAMChoisie);
      document.getElementById("rAMBox").innerHTML = "Vous avez choisi: <br>" + rAMData[0].bold() + ": " + rAMChoisie.marque + "<br>" + rAMData[1].bold() + ": " + rAMChoisie.model + "<br>" + rAMData[2].bold() + ": " + rAMChoisie.type + "<br>" + rAMData[3].bold() + ": " + rAMChoisie.fréquence + "MHz" + "<br>" + rAMData[4].bold() + ": " + rAMChoisie.taille + "Go <br>" + rAMData[5].bold() + ": " + rAMChoisie.prix + "€";
      document.getElementById("rAMIm").src= rAMChoisie.image;
    }
  }
}

function slctGPU(){
  gpuChoisit = document.getElementById("selectGPU").value;
  for(let i = 0; i < gPU.length; i++){
    if(gpuChoisit == gPU[i].id){
      gpuChoisit = gPU[i];
      let gpuData = Object.keys(gpuChoisit);
      document.getElementById("GPUIm").src= gpuChoisit.image;
      document.getElementById("GPUBox").innerHTML = "Vous avez choisi: <br>" + gpuData[0].bold() + ": " + gpuChoisit.marque + "<br>" + gpuData[1].bold() + ": " + gpuChoisit.model + "<br>" + gpuData[4].bold() + ": " + gpuChoisit.fréquence + "MHz" + "<br>" + gpuData[5].bold() + ": " + gpuChoisit.memoire + "Go <br>" + gpuData[9].bold() + ": " + gpuChoisit.prix + "€";

    }
  }
}

function slctPSU(){
  pSUChoisit = document.getElementById("selectPSU").value;
  for(let i = 0; i < pSU.length; i++){
    if(pSUChoisit == pSU[i].id){
      pSUChoisit = pSU[i];
      let psuData = Object.keys(pSUChoisit);
      document.getElementById("PSUBox").innerHTML = "Vous avez choisi : <br>" + psuData[0].bold() + ": " + pSUChoisit.marque + "<br>" + psuData[1].bold() + ": " +pSUChoisit.model + "<br>" + psuData[2].bold() + ": " + pSUChoisit.watt + "W <br>"+ psuData[4].bold() + ": " + pSUChoisit.certification + "<br>" + psuData[3].bold() + ": " + pSUChoisit.prix + "€";
      document.getElementById("PSUIm").src= pSUChoisit.image;
    }
  }
}


function compatibilite(){
  let securite = 100;
  if(cpuChoisis == undefined || cMChoisie == undefined){
    document.getElementById("rep").setAttribute("class", "rouge");
    document.getElementById("rep").innerHTML = "Veuillez choisir un processeur et une carte mère";
  }
  else{
  if(cpuChoisis.socket == cMChoisie.socket){
    if(rAMChoisie == undefined){
      document.getElementById("rep").setAttribute("class", "rouge");
      document.getElementById("rep").innerHTML = "Veuillez choisir un modèle de RAM!";
    }
    if(rAMChoisie.type == "DDR4"){
      if(gpuChoisit == undefined){
        document.getElementById("rep").setAttribute("class", "rouge");
        document.getElementById("rep").innerHTML = "Veuillez choisir une carte graphique!";
      }
      let tdpMax = securite + Number(gpuChoisit.tdp) + Number(cpuChoisis.tdp);
      if(pSUChoisit == undefined){
        document.getElementById("rep").setAttribute("class", "rouge");
        document.getElementById("rep").innerHTML = "Veuillez choisir une alimentation!";
      }
      if(pSUChoisit.watt >= tdpMax){
        document.getElementById("rep").setAttribute("class", "vert");
        document.getElementById("rep").innerHTML = "C'est compatible !";
      }
      else{
        document.getElementById("rep").setAttribute("class", "rouge");
        document.getElementById("rep").innerHTML = "Attention Vous avez besoin d'une alimentation d'au moins " + String(tdpMax).bold() + " Watt!";
      }
    }
    else{
      document.getElementById("rep").setAttribute("class", "rouge");
      document.getElementById("rep").innerHTML = "Attention la RAM n'est pas compatible !";
    }

  }
  else{
    document.getElementById("rep").setAttribute("class", "rouge");
    document.getElementById("rep").innerHTML = "Attention le socket de la carte mère n'est pas compatible avec celui du processeur ! Choisissez une carte mère avec le socket " + cpuChoisis.socket.bold();
  }
  }
}

function evaluer(){
  let score = (cpuChoisis.points + rAMChoisie.points + gpuChoisit.points + pSUChoisit.points)/4;
  score = score.toFixed(2);
  let arrScore = [cpuChoisis.points, rAMChoisie.points, gpuChoisit.points, pSUChoisit.points];
  let config = [cpuChoisis, rAMChoisie, gpuChoisit, pSUChoisit];
  let ameliore = "";
  let min = 10;
  console.log(arrScore)
  for(let i = 0; i < arrScore.length; i++){
    if(arrScore[i] <= min){
      min = arrScore[i];
      ameliore = config[i].marque + " " + config[i].model
    }
  }
  if(score == 10){
    document.getElementById("eval").innerHTML = "Votre configuration obtient le score de " + score + "/10! Il n'y a rien à améliorer ";
  }
  else{
  document.getElementById("eval").innerHTML = "Votre configuration obtient le score de " + score + "/10! Vous pourriez améliorez : " + ameliore;
  }
}

function createOption(id, arr){
  let str='<option value="" selected disabled hidden> -- Choisissez une option -- </option>';
  for(let i = 0; i < arr.length; i++){
    str += "<option value=" + arr[i].id + ">" + arr[i].nom + "</option>";
  }
  document.getElementById(id).innerHTML = str;
}

function initialisation(){
  cPU.sort(trierMarque);
  carteMere.sort(trierMarque);
  rAM.sort(trierMarque);
  gPU.sort(trierMarque);
  pSU.sort(trierMarque);
  createOption("selectCpu", cPU);
  createOption("selectCM", carteMere);
  createOption("selectRAM", rAM);
  createOption("selectGPU", gPU);
  createOption("selectPSU", pSU);
}

function initialisationVersus(){
  gPU.sort(trierMarque);
  createOption("slctVersus1", gPU);
  createOption("slctVersus2", gPU);
}

function trierMarque(a, b){
  if(a.marque > b.marque){
    return 1;
  }
  else if(a.marque < b.marque){
    return -1;
  }
  else{
    return 0;
  }
}

function versus(){
  let gpuId = document.getElementById("slctVersus1").value
  for(let i = 0; i < gPU.length; i++){
    if(gpuId == gPU[i].id){
      gpuId = gPU[i];
      document.getElementById("vMarque").innerHTML += "<td>" + gpuId.marque + "</td>"
      document.getElementById("vModele").innerHTML += "<td>" + gpuId.model + gpuId.name + "</td>"
    }
  }
}
