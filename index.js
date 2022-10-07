
const myButton = document.querySelector("button");

myButton.onclick = function () {alert('URL')};

const handleclickHunan = () => {
    document.querySelector('#rec-show').src='hunan_sauce.html'
}

const handleclickGinger = () => {
    document.querySelector('#rec-show').src='./recipe/ginger_garlic.html'
}

const handleclickShawarma = () => {
    document.querySelector('#rec-show').src='./recipe/Shawarma_spice.html'
}


const handleclickZaatar = () => {
    document.querySelector('#rec-show').src='./recipe/Zaatar.html'
}

const handleclickChickpeas = () => {
    document.querySelector('#rec-show').src='./recipe/Pressure_chickpeas.html'
}
document.querySelector('#hunan-button').addEventListener('click', handleclickHunan)
document.querySelector('#ginger-button').addEventListener('click', handleclickGinger)
document.querySelector('#chickpeas-button').addEventListener('click', handleclickShawarma)
document.querySelector('#shawarma-button').addEventListener('click', handleclickZaatar)
document.querySelector('#zaatar-button').addEventListener('click', handleclickChickpeas)