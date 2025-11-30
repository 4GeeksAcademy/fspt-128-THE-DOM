import "bootstrap";
import "./style.css";

// 1. ¿Qué es el DOM?
// El DOM (Document Object Model) es una representación en forma de árbol de objetos que crea el navegador a partir del HTML.
// Cada etiqueta → se convierte en un nodo.
// JavaScript puede leer y modificar esos nodos.
// Es la forma en que podemos interactuar con la página.
// Cómo explicarlo a principiantes:
// “Cuando escribes HTML, el navegador lo transforma en un árbol de objetos. JavaScript no modifica el HTML del archivo, sino este árbol llamado DOM.”


// 🌳 2. ¿Cómo está estructurado el DOM?
// La estructura es como un árbol con jerarquías:
// window → el navegador (ventana completa)
// document → la página actual
// Dentro del documento:
// html
// head
// body
// elementos → nodos hijos

// 3. Cómo seleccionar elementos del DOM
// Seleccionar es el primer paso para manipular.

// Métodos clásicos
// document.getElementById("id");
// document.getElementsByClassName("clase");
// document.getElementsByTagName("tag");

// Métodos modernos
// document.querySelector("selectorCSS");
// document.querySelectorAll("selectorCSS");

// 4. Cómo modificar contenido
// Opciones:
// textContent (recomendado)
// Cambia el texto tal cual (sin interpretar HTML).
// title.textContent = "Nuevo título";

// innerText
// Similar, pero respeta estilos como display:none.

// innerHTML
// Inserta HTML interpretado.
// content.innerHTML = "<strong>Hola</strong>";

// 5. Modificar atributos y clases
// ✔️ Modificar atributos
// img.setAttribute("src", "foto.jpg");
// input.getAttribute("type");

// ✔️ Modificar clases
// box.classList.add("activo");
// box.classList.remove("warning");
// box.classList.toggle("dark");

// 6. Crear y eliminar elementos
// ✔️ Crear
// const li = document.createElement("li");
// li.textContent = "Elemento nuevo";
// lista.appendChild(li);

// ✔️ Insertar al inicio
// lista.prepend(li);

// ✔️ Eliminar
// li.remove();

// 7. ¿Qué son los eventos?
// Los eventos son acciones que ocurren en la página, como:
// click
// submit
// change
// input
// keyup
// scroll
// load

// El navegador “avisa” cuando sucede algo y tu código puede reaccionar.

// 8. Cómo agregar eventos

// La forma recomendada:

// button.addEventListener("click", () => {
//   console.log("Hiciste click");
// });



window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");

  const body = document.body;
  const title = document.getElementById("title");
  const button = document.getElementById("toggleBtn");
  const subtitle = document.getElementById("subtitle");
  const easterEgg = document.getElementById("easter-egg");

  let inUpsideDown = false;

  button.addEventListener("click", () => {
    inUpsideDown = !inUpsideDown;

    if (inUpsideDown) {
      // Cambiar a Upside Down
      body.classList.remove("real");
      body.classList.add("upside-down");
      title.textContent = "Upside Down";
      subtitle.textContent = "¿Escuchaste eso? Algo se mueve…"
      button.textContent = "Volver al Mundo Real";
      easterEgg.innerHTML = "";
      subtitle.classList.add("glitch-hint");
    } else {
      // Regresar al mundo real
      body.classList.remove("upside-down");
      body.classList.add("real");
      title.textContent = "Hawkins - Mundo Real";
      subtitle.textContent = "Todo está tranquilo.";
      button.textContent = "Entrar al Upside Down";
      easterEgg.innerHTML = "";
      subtitle.classList.remove("glitch-hint");
    }
  });

  subtitle.addEventListener("click", () => {
  if (!inUpsideDown) return; // solo funciona en Upside Down

  easterEgg.innerHTML = `
    <img src="https://wallpapers.com/images/hd/demogorgon-stranger-things-enjkc4vl1rsxw2zu.jpg" alt="Demogorgon">
  `;
});
};
