function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function enviarWhatsApp(event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let producto = document.getElementById("producto").value;

  let telefono = "593993251557";

  let mensaje = `Hola, soy ${nombre} y necesito ${producto}`;

  let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}


function abrirGaleria(categoria) {
    const modal = document.getElementById("modalGaleria");
    const titulo = document.getElementById("tituloModal");
    const contenedor = document.getElementById("contenedorImagenes");

    contenedor.innerHTML = ""; // Limpiar galería
    let fotos = [];

    // CONFIGURACIÓN DE TUS FOTOS
    if (categoria === 'etiquetas') {
        titulo.innerText = "Etiquetas";
        // --- AGREGA TUS FOTOS DE ETIQUETAS AQUÍ ---
        fotos = ["etiqueta1.jpeg", "etiqueta2.jpeg" , "etiqueta3.jpeg" , "etiqueta4.jpeg" , "etiqueta5.jpeg"]; 
    } 
    else if (categoria === 'tarjetas') {
        titulo.innerText = "Tarjetas";
        // --- AGREGA TUS FOTOS DE TARJETAS AQUÍ ---
        fotos = ["tarjeta1.1.png", "tarjeta2.2.png"];
    }
    else if (categoria === 'stickers') {
        titulo.innerText = "Stickers";
        // --- AGREGA TUS FOTOS DE STICKERS AQUÍ ---
        fotos = ["stiker1.jpeg"];
    }
    else if (categoria === 'recetarios') {
        titulo.innerText = "Recetarios";
        // --- AGREGA TUS FOTOS DE RECETARIOS AQUÍ ---
        fotos = ["recetario1.jpeg"];
    }
    else if (categoria === 'certificado') {
        titulo.innerText = "Certificado";
        // --- AGREGA TUS FOTOS DE CARNETS AQUÍ ---
        fotos = ["CERTIFICADO1.jpeg" , "certificado2.jpeg" , "certificado3.jpeg" , "certificado4.jpeg" , "certificado5.jpeg" , "certificado6.jpeg" , "certificado7.jpeg"];
    }  
    // Generar las imágenes en la pantalla
    fotos.forEach(ruta => {
        const img = document.createElement("img");
        img.src = ruta; 
        contenedor.appendChild(img);
    });

    modal.style.display = "block";
}

function cerrarGaleria() {
    document.getElementById("modalGaleria").style.display = "none";
}

// Cerrar al hacer clic fuera de la caja blanca
window.onclick = function(event) {
    const modal = document.getElementById("modalGaleria");
    if (event.target == modal) { cerrarGaleria(); }
}