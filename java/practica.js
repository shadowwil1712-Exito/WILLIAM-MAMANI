alert("practicando")

function ejemplo1(){

    //entrada
    let precio1= prompt(" ingrese el precio 1: "),
     precio2=prompt(" ingrese el precio 2: "), 
     precio3=prompt(" ingrese el precio 3: ");
    let cantidad1=prompt(" ingrese el cantidad 1: "), 
    cantidad2= prompt(" ingrese el cantidad 2 "),
    cantidad3=prompt(" ingrese el cantidad 3: ");
    //proceso
    let subtotal = precio1*cantidad1+precio2*cantidad2+precio3*cantidad3;

    if (subtotal>100) {
        total = subtotal*0.95;
        alert("usted tiene un descuento porque compro mas de S/. 100");
    }
    else{
        total = subtotal;

    }
    //salida
    alert(" el total a pagar sera de S/. " + total );
}

function perimetro_area(){
    let largo=10;
    let ancho=5;
    
    let perimetro = 2*ancho + 2* largo;
    let area = ancho * largo;

    alert( "el perimetro es igual a "+ perimetro +" m y el área el igual a " + area + "m²");
}

function Pnombre(){
    let nombre = prompt("Cuál es tu nombre");
    alert("hola, como estas"+ nombre);
}
function tarifa(){
    let km = prompt("ingrese los kilometros recorridos: ");
    let tarifa = 10 + (km*3);

    
    alert("la tarifa de "+ km + "km recorridos, pagará S/."+ tarifa);
}

function promedio(){
    alert(" calcular promedios");

    let notas = Number(prompt("ingrese la cantidad de notas: "));
    let total = 0;
    
    for (let i=0; i<notas; i++){
        let nota= Number(prompt("ingrese nota "+ (i+1)+": "));

        total = total + nota;
    } 
    let prom = total/notas;
    alert("el promedio de "+ notas + " notas es de "+ prom);

}