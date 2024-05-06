const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
//deberemos obtener la referencia en memeoria del button
//get the button referent
const btn = document.getElementById("btn");
//get the color referent
const color=document.querySelector(".color");
//add event listener to the button 
btn.addEventListener ("click", ()=>{
    //get random number between 0 and 3
    const randomNumber = getRamdomNumber();
    // seleccionado un elemnto del arreglo colors
    const colorPicked = colors[randomNumber];
    //cambiar el background de body
    document.body.style.backgroundColor = colorPicked;
    //cambiar el color de la etiqueta span
    color.textContent = colorPicked;
})
function getRamdomNumber(){
    return Math.floor(Math.random()*colors.length);
}