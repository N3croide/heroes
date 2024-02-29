
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
heroes['DC'].array.forEach(element => {
  const fragment = document.createDocumentFragment();
  let tarjeta = document.createElement();
  tarjeta.className = 'tarjeta'
});
console.log(heroes)