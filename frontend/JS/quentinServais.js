let cpu = [
    {
  marque: "Intel",
  model: "I7 10700k",
  socket: "1200",
  fréquence: 5.1,
  prix: 550,
  points: 9,
  image: "IMG/10700k.jpg"
},
    {
    marque: "Intel",
    model: "I5 10600k",
    socket: "1200",
    fréquence: 4.8,
    prix: 330,
    points: 7,
    image: "IMG/10600k.jpg"
},
    {
      marque: "AMD",
      model: "R7 3700X",
      socket: "AM4",
      fréquence: 4.4,
      prix: 350,
      points: 8,
      image: "IMG/3700x.jpg"
},
{
  marque: "AMD",
  model: "Threadripper 3990X",
  socket: "TRX40",
  fréquence: 4.3,
  prix: 4700,
  points: 10,
  image: "IMG/3990x.jpg"
}
];
let carteMere = [
  {
  marque: "MSI",
  model: "Z490",
  socket: "1200",
  format: "ATX",
  prix: 180,
  code: 1,
  image: "IMG/z490.jpg"
},
  {
  marque: "ASRock",
  model: "B550",
  socket: "AM4",
  format: "Micro-ATX",
  prix: 170,
  code: 2,
  image: "IMG/b550.jpg"
},
  {
  marque: "Asus",
  model: "X470",
  socket: "AM4",
  format: "ATX",
  prix: 220,
  code: 2,
  image: "IMG/x470.jpg"
},
  {
  marque: "Gigabyte",
  model: "TRX40",
  socket: "TRX40",
  format: "ATX",
  prix: 480,
  code: 3,
  image: "IMG/trx40.jpg"
},
  {
  marque: "MSI",
  model: "B460",
  socket: "1200",
  format: "Micro-ATX",
  prix: 80,
  code: 1,
  image: "IMG/b460.png"
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
    image: "IMG/r1.jpg"
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
    image: "IMG/r2.jpg"
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
    image: "IMG/r3.jpg"
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
    image: "IMG/r1.jpg"
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
    image: "IMG/r5.jpg"
  }
];
let gPU = [
  {
    marque: "EVGA",
    model: "RTX 2060",
    fréquence: 1755,
    memoire: 6,
    prix: 350,
    points: 6,
    id: "gpu1",
    image: "IMG/gpu1.jpg"
  },
  {
    marque: "MSI",
    model: "RTX 2070",
    fréquence: 1620,
    memoire: 8,
    prix: 170,
    points: 8,
    id: "gpu2",
    image: "IMG/gpu2.jpg"
  },
  {
    marque: "Gigabyte",
    model: "GTX 1660Ti",
    fréquence: 1890,
    memoire: 6,
    prix: 330,
    points: 6,
    id: "gpu3",
    image: "IMG/gpu3.jpg"
  },
  {
    marque: "MSI",
    model: "RTX 2080Ti",
    fréquence: 1755,
    memoire: 11,
    prix: 1550,
    points: 10,
    id: "gpu4",
    image: "IMG/gpu4.jpg"
  },
  {
    marque: "ASRock",
    model: "RX 5700XT",
    fréquence: 2025,
    memoire: 8,
    prix: 480,
    points: 9,
    id: "gpu5",
    image: "IMG/gpu5.jpg"
  }
];
let cpuChoisis;
let cMChoisie;
let rAMChoisie;
let gpuChoisit;

function selectCpu(){
  cpuChoisis = document.getElementById("selectCpu").value;
  for(let i = 0; i < cpu.length; i++){
    if(cpuChoisis == cpu[i].model){
      document.getElementById("cpuBox").innerHTML = "Vous avez choisi : " + cpu[i].marque + " " + cpu[i].model + " " + cpu[i].prix + "€";
      cpuChoisis = cpu[i];
      document.getElementById("cpuIm").src= cpuChoisis.image;
    }
  }
}

function selectCM(){
  cMChoisie = document.getElementById("selectCM").value;
  for(let i = 0; i < carteMere.length; i++){
    if(cMChoisie == carteMere[i].model){
      document.getElementById("cMBox").innerHTML = "Vous avez choisi : " + carteMere[i].marque + " " + carteMere[i].model + " " + carteMere[i].prix + "€";
      cMChoisie = carteMere[i];
      document.getElementById("cMIm").src= cMChoisie.image;
    }
  }
}

function selectRAM(){
  rAMChoisie = document.getElementById("selectRAM").value;
  for(let i = 0; i < rAM.length; i++){
    if(rAMChoisie == rAM[i].id){
      document.getElementById("rAMBox").innerHTML = "Vous avez choisi : " + rAM[i].marque + " " + rAM[i].model + " " +  rAM[i].type + " " + rAM[i].fréquence + "MHz" + " " + rAM[i].taille + "Go " + rAM[i].prix + "€";
      rAMChoisie = rAM[i];
      document.getElementById("rAMIm").src= rAMChoisie.image;
    }
  }
}

function selectGPU(){
  gpuChoisit = document.getElementById("selectGPU").value;
  for(let i = 0; i < gPU.length; i++){
    if(gpuChoisit == gPU[i].id){
      document.getElementById("GPUBox").innerHTML = "Vous avez choisi : " + gPU[i].marque + " " + gPU[i].model + " " + gPU[i].fréquence + "MHz" + " " + gPU[i].memoire + "Go " + gPU[i].prix + "€";
      gpuChoisit = gPU[i];
      document.getElementById("GPUIm").src= gpuChoisit.image;
    }
  }
}

function compatibilite(){
  if(cpuChoisis.socket == cMChoisie.socket){
      document.getElementById("rep").innerHTML = "C'est compatible !";
  }
  else{
    document.getElementById("rep").innerHTML = "Attention Ce n'est pas compatible !";
  }
}
