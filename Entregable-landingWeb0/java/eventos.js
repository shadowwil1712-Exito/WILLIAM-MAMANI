console.log("eventos");

let boton = document.getElementById("boton");

boton.addEventListener("click",
    function(){
        alert("hiciste click");
    }
);

let botonCarita = document.getElementById("carita");

carita.addEventListener("mouseover",
    function (){
        carita.src ="https://static.vecteezy.com/system/resources/thumbnails/018/931/547/small_2x/sad-face-of-emoticons-png.png";

    });
carita.addEventListener("mouseout",
    function(){
        carita.src="https://media.istockphoto.com/id/689364180/es/vector/sonriente-icono-de-emoci%C3%B3n-de-personas-positivas-de-cara-de-dibujos-animados.jpg?s=612x612&w=0&k=20&c=WmsDAjUpqWkPR7eGixUhWjfnC1_jcyEaUiB5h1nEWVc=";
    }
);
