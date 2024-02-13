import { categoyProducts } from "./categoryProducts.js";

export const menu = document.addEventListener("DOMContentLoaded", function () {
  loadMenu();
  btnsIniAndCar();
});

// Definición de la función a ser ejecutada
async function loadMenu() {
  const menucard = document.getElementById("menu");

  Object.keys(categoyProducts).forEach(function (clave) {
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

async function btnsIniAndCar() {
  const btnsBottom = document.getElementById("btn-home");
  btnsBottom.innerHTML = `   
      <a href="https://wiston-g.github.io/RacingBurger/">
        <button type="button" 
            class="btn btn-warning btn-main rounded-circle btn-lg" 
            id="btn-inicio">
            <i class="bi bi-house"></i>
        </button>  
      </a>`;
}
