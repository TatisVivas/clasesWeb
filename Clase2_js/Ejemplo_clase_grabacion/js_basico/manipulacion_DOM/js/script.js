console.log("Hello World");

// por id
//const canciones = document.getElementById("song-list-container");
const canciones = document.querySelector("#song-list-container");
console.log(canciones);
console.log(canciones.innerHTML);
//canciones.innerHTML = "canciones";

// por tag

//const titulos = document.getElementsByTagName("h2");
const titulos = document.querySelectorAll("h2");

console.log(titulos);

for (const titulo of titulos) {
  titulo.innerHTML = titulo.innerHTML.toUpperCase();
}

//const negrillas = document.getElementsByClassName("negrilla");
const negrillas = document.querySelectorAll(".negrilla");
for (const negrilla of negrillas) {
  negrilla.style.fontWeight = "bold"; //
}

const tituloPrincipal = document.querySelector("#playlist h2");

tituloPrincipal.style.textDecoration = "underline";

const modificarAlbum = document.querySelector("#modificar");
modificarAlbum.src = "./images/album_2.jpg";

const imagenes = document.querySelectorAll(".music-card img");
for (const imagen of imagenes) {
  imagen.classList.add("border-radius");
}

function mostrarMensaje(objeto) {
  console.log("mensaje");
  console.log(objeto.innerHTML);
}

const boton = document.querySelector("#boton_especial");
boton.addEventListener("click", imprimirMensajeJs);

function imprimirMensajeJs(evento) {
  console.log("mensaje js");
  console.log(evento.target.innerHTML);
}

const tarjetas1 = document.querySelectorAll(".music-card");

for (const tarjeta of tarjetas1) {
  tarjeta.addEventListener("mouseenter", (e) => {
    e.target.style.background = "gray";
  });

  tarjeta.addEventListener("mouseleave", (e) => {
    e.target.style.background = "beige";
  });
}

//traversing the DOM
const tarjetas = document.querySelector("#song-list-container");
console.log(tarjetas.children);
console.log(tarjetas.children[0]);
console.log(tarjetas.children[0].tagName);

const tarjeta1 = tarjetas.children[0];

tarjeta1.firstElementChild.src = "./images/album_2.jpg";

const tarjeta2 = tarjeta1.nextElementSibling;
console.log(tarjeta2);

tarjeta2.firstElementChild.src = "./images/album_3.jpg";

const padre = tarjeta1.parentElement.parentElement.firstElementChild;
console.log(padre);

tarjeta2.remove();

const elementoCancion = document.createElement("li");
const imagen = document.createElement("img");
imagen.src = "./images/boton-de-play.png";
imagen.width = "15";
imagen.style.marginRight = "5px";
elementoCancion.appendChild(imagen);
const texto = document.createElement("span");
texto.textContent = "Segunda Cancion";
texto.classList.add("bigger-text");
elementoCancion.appendChild(texto);

const lista = document.querySelector("#lista-canciones");

lista.appendChild(elementoCancion);

// Generar el mismo elemento con innerHTML

const elementoCancion2 = `<li>
  <img src="./images/boton-de-play.png" width="15" />
  <span class="bigger-text">Tercera Cancion</span>
</li>`;

lista.innerHTML += elementoCancion2;

const botonesSiguiente = document.querySelectorAll(".siguiente");

botonesSiguiente.forEach((boton) => {
  boton.addEventListener("click", () => {
    console.log(boton.dataset.id);

    const tarjeta = boton.parentElement.parentElement;
    console.log(tarjeta.firstElementChild.firstElementChild);

    const nombreCancion = tarjeta.querySelector(".cancion").textContent;
    console.log(nombreCancion);

    //agregar la cancion al html

    /*const elementoCancion = `<li>
      <img src="./images/boton-de-play.png" width="15" onclick="reproducirCancion(${
        listaActual.length + 1
      })"   />
      <span class="bigger-text">${nombreCancion}</span>
    </li>`;*/

    /*const lista = document.querySelector("#lista-canciones");
    lista.innerHTML += elementoCancion;*/

    // Agregar la cancion al array
    const cancion = {
      id: listaActual.length + 1,
      titulo: nombreCancion,
      estado: "pausa",
    };
    console.log(cancion);
    listaActual.push(cancion);
    console.log(listaActual);

    gererarListaHTML();
  });
});

function reproducirCancion(id) {
  console.log(id);
  const cancion = listaActual.find((cancion) => cancion.id === id);
  console.log(cancion);
  cancion.estado = "reproduciendo";
  gererarListaHTML();
}

const listaActual = [
  {
    id: 1,
    titulo: "Primera Cancion",
    estado: "pausa",
  },
  {
    id: 2,
    titulo: "Segunda Cancion",
    estado: "pausa",
  },
  {
    id: 3,
    titulo: "Tercera Cancion",
    estado: "pausa",
  },
];

function agregarCancionListaHtml(cancion) {
  const elementoLista = document.createElement("li");
  //Si la cancion se está reproduciendo
  if (cancion.estado === "reproduciendo") {
    const imagen = document.createElement("img");
    imagen.src = "./images/pause.png";
    imagen.width = "15";
    imagen.style.marginRight = "5px";
    elementoLista.appendChild(imagen);
    imagen.addEventListener("click", () => {
      cancion.estado = "pausa";
      gererarListaHTML();
    });
  } else {
    const imagen = document.createElement("img");
    imagen.src = "./images/boton-de-play.png";
    imagen.width = "15";
    imagen.style.marginRight = "5px";
    elementoLista.appendChild(imagen);
    imagen.addEventListener("click", () => {
      // Si alguna cancion esta reproduciendo, se debe pausar
      const cancionReproduciendo = listaActual.find(
        (cancion) => cancion.estado === "reproduciendo"
      );
      if (cancionReproduciendo) {
        cancionReproduciendo.estado = "pausa";
      }
      cancion.estado = "reproduciendo";
      gererarListaHTML();
    });
  }
  const texto = document.createElement("span");
  texto.textContent = cancion.titulo;
  texto.classList.add("bigger-text");
  elementoLista.appendChild(texto);
  lista.appendChild(elementoLista);
}

function gererarListaHTML() {
  lista.innerHTML = "";
  for (const cancion of listaActual) {
    agregarCancionListaHtml(cancion);
  }
}
