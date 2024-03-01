
async function getHeroes() {
  try {
    const response = await fetch('heroes.json');
    
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error('Error fetching the JSON file:', error);
    throw error;
  }
}

const heroes = await getHeroes();


const fragment = document.createDocumentFragment();
let doc = document.getElementById("mainContainer");

let tarjetasHeroes = (marvelOrDc) => heroes[marvelOrDc].forEach( element => {
      let tarjeta = document.createElement("div");
      let img = document.createElement("img");
      let nombreHero = document.createElement("div");
      let boton = document.createElement("input");
      let logo = document.getElementById("logo");

      tarjeta.className = "tarjetas";
      img.src = `${element["picture"]}`;
      logo.src =(marvelOrDc == "dc") ? "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/800px-DC_Comics_logo.svg.png" : "https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png";
      logo.animate([{transform: 'rotate(0deg) scale(0) '},{transform: 'rotate(3630deg) scale(1) ' }],{duration: 400});
      nombreHero.className = "hoverTarjeta"
      nombreHero.textContent = `${element["name"]}`;
      
      boton.type = "button";
      boton.value = "VER";
      boton.className = "botonTarjetas";

      tarjeta.appendChild(img);
      nombreHero.appendChild(boton);
      tarjeta.appendChild(nombreHero);
      // estructura div.tarjeta > img > div.nombreHero > input.button

      fragment.appendChild(tarjeta);
      
      doc.appendChild(fragment)
  });

let cb = document.getElementById('sliderCB')

function isChecked(){
  doc.animate([
    {opacity: 0},
    {opacity: 1}
  ],{duration: 300})
  doc.innerHTML = '';
  cb.checked ? tarjetasHeroes("dc") : tarjetasHeroes("marvel");}
isChecked();

cb.addEventListener('change',isChecked);
