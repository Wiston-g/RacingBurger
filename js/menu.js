import { categoyProducts } from "./categoryProducts.js";

export const menu = document.addEventListener("DOMContentLoaded", function () {
  loadMenu();
});

// Definición de la función a ser ejecutada
async function loadMenu() {
  const menucard = document.getElementById("menu");

  Object.keys(categoyProducts).forEach(function (clave) {
    // Acceder al objeto interno usando la clave y mostrar sus propiedades
    console.log("Clave:", clave);
    console.log("Categoria:", categoyProducts[clave].category);
    console.log("Imagen:", categoyProducts[clave].image);
    menucard.innerHTML += `<a href="${categoyProducts[clave].url}" class="col">
    <div class="card bg-light card-product ">
        <img src="${categoyProducts[clave].image}" class="card-img-top" alt="...">
        <div class="card-body card-products-text text-dark bg-warning">
            <h2 class="card-products-text bg-warning">${categoyProducts[clave].category}</h2>
        </div>
    </div>
  </a>    `;
  });
}
