/*!
* Start Bootstrap - Shop Item v5.0.6 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
alert("BIENVENIDO A LA PAGINA")

function conversor(){
    let dolar = Number(prompt("Ingrese la cantidad de dólar a cambiar: "));
    let cambiolocal = dolar * 3.46;

    alert("El cambio de $"+ dolar+ " a una tasa de 3.46 a moneda local es de S/. " + cambiolocal);
}

function dimensiones(){
    let largo = prompt("Ingrese el largo del terreno (m): ");
    let ancho = prompt("Ingrese el ancho del terreno (m): ");

    let perimetro = 2*largo + 2*ancho;
    let area = largo*ancho;

    alert("El perímetro del terreno es de "+ perimetro+" metros y el área, "+ area+"m².");
}

function imagen(){
    let zapatilla = document.getElementById("zapatilla");
    zapatilla.src= "https://cdn.skatedeluxe.com/thumb/shuPZ-CnEyc2PiRpAt3-WVluIRI=/fit-in/600x700/filters:fill(white):brightness(-4)/product/172145-0-NewBalanceNumeric-600TomKnox.jpg?v=1";

    alert("Se cambio Exitosamente");

}

function contenido(){
    let nuevocontenido = document.getElementById("contenido");
    nuevocontenido.textContent = "Estilo retro de los 90, resistencia extrema y el confort diario de la tecnología FuelCell. Esta exclusiva combinación en azul marino y celeste con suela caramelo está diseñada para quienes no sacrifican diseño por comodidad. Una silueta icónica de la línea Tom Knox lista para convertirse en tu calzado favorito de uso diario. ¡Pruébate tu talla y llévatelas hoy!";
    nuevocontenido.style.color = "green";

    alert("Cambio Éxitoso");

}