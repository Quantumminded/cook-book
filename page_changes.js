


const gingerGarlic = () => {
    document.querySelector('#recipe_page').src="ginger_garlic.html"
}

const hunanSauce = () => { 
    document.querySelector("#recipe_page").src = "hunan_sauce.html";
}

const pressureCheckpeas = () => {
    document.querySelector('#recipe_page').src="Pressure_chickpeas.html"
}
const shawarmaSpice = () => {
    document.querySelector('#recipe_page').src="Shawarma_spice.html"
}
const zaatar = () => {
    document.querySelector("#recipe_page").src = "Zaatar.html";
}

document.querySelector('#ginger-link').addEventListener('click',gingerGarlic)
document.querySelector("#hunan_sauce").addEventListener("click", hunanSauce);
document.querySelector('#chickpeas_link').addEventListener('click',pressureCheckpeas)
document.querySelector('#shawarma_link').addEventListener('click',shawarmaSpice)
document.querySelector('#zaatar_link').addEventListener('click',zaatar)



