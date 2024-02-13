import { products } from "./products.js";

export async function eventsDom() {
  // Obtener la URL actual
  let currentUrl = window.location.href;

  const tablaPicaranch = document.getElementById("bodyTablePicaranch");

  const tablaSalchipapa = document.getElementById("bodyTableSalchipapa");

  const tablaSalchipapaCrispy = document.getElementById(
    "bodyTableSalchipapaCrispy"
  );

  const tablaHamburguesa = document.getElementById("bodyTableHamburguesa");

  const tablaperro = document.getElementById("bodyTablePerros");

  const tablaChoriqueta = document.getElementById("bodyTableChoriqueta");

  const tablaBurritos = document.getElementById("bodyTableBurritos");

  const tablaPincho = document.getElementById("bodyTablePincho");

  const tablaPromociones = document.getElementById("bodyTablePromociones");

  const tablaPostre = document.getElementById("bodyTablePostres");

  const tablaAcompañamiento = document.getElementById(
    "bodyTableAcompañamiento"
  );

  const tablaAdicionales = document.getElementById("bodyTableAdicionales");

  const tablaBebidas = document.getElementById("bodyTableBebidas");

  const bodyModal = document.getElementById("exampleModal");

  const btncarrtio = document.getElementById("btn-carrito");

  const pedido = [];

  const tarjetaPedido = [];

  let stringPedido = "";

  let valorTotalPedido = 0;

  function imprimir(arreglo, tabla) {
    arreglo.forEach((element) => {
      tabla.innerHTML += `<div class="card card-product mb-3">
        <div scope="row" class="row  d-flex justify-content-center" >
            <a data-bs-toggle="collapse" href="#${element.indice}"  role="button" aria-expanded="false" aria-controls="collapseExample" >
                <span class="row text-card-product">
                    <p class="col-1 bi bi-caret-down-fill"></p>
                    <p class="col-8">${element.name}</p>
                    <p class="col-3 ">${element.precio}</p>    
                </span>
            </a>
            <div class="collapse" id="${element.indice}">
                <div class="card card-body">${element.descripcion}</div>
            </div>
        </div>
        
        <div class="container">
            <div class="row  p-0 d-flex justify-content-center">   
                <div class=" col-1 "> 
                    <button class="btn btn-sm btn-danger btn-menos" value="${element.indice}" id="menos${element.indice}"> - 
                    </button>
                </div> 
                <div class="col-1 "> 
                    <input type="number" min="0" class="btn-cant-car bg-light" id="cantidad${element.indice}"readonly onkeydown="return false;"> 
                </div>
                <div class=" col-1 "> 
                    <button class="btn btn-sm btn-success botonmas boton-mas" value="${element.indice}" id="mas${element.indice}"> + 
                    </button>
                </div>    
                
                
            </div>
        </div>
    </div>`;
    });
    // Función que devuelve una promesa
  }

  /**
   * Todo:Lógica condicional basada en la URL
   */
  if (currentUrl.includes("lasagna.html")) {
    await imprimir(products.lasagna, tablaPicaranch);
  } else if (currentUrl.includes("panzerotti.html")) {
    await imprimir(products.panzerotti, tablaSalchipapa);
  } else if (currentUrl.includes("arepas.html")) {
    await imprimir(products.arepas, tablaSalchipapaCrispy);
  } else if (currentUrl.includes("clubHouse.html")) {
    await imprimir(products.clubHouse, tablaChoriqueta);
  } else if (currentUrl.includes("patacon.html")) {
    await imprimir(products.patacon, tablaBurritos);
  } else if (currentUrl.includes("picadaMixta.html")) {
    await imprimir(products.picadaMixta, tablaPincho);
  } else if (currentUrl.includes("platosACarta.html")) {
    await imprimir(products.platosACarta, tablaPromociones);
  } else if (currentUrl.includes("bebidas.html")) {
    await imprimir(products.bebidas, tablaBebidas);
  } else if (currentUrl.includes("hamburguesa.html")) {
    await imprimir(products.hamburguesas, tablaHamburguesa);
  } else if (currentUrl.includes("perro.html")) {
    await imprimir(products.perros, tablaperro);
  } else if (currentUrl.includes("pepitos.html")) {
    await imprimir(products.pepitos, tablaChoriqueta);
  } else if (currentUrl.includes("salchipapas.html")) {
    await imprimir(products.salchipapas, tablaBurritos);
  } else if (currentUrl.includes("mazorcada.html")) {
    await imprimir(products.mazorcada, tablaPincho);
  } else if (currentUrl.includes("pizzas.html")) {
    await imprimir(products.pizzas, tablaPromociones);
  }

  function eventosDespuesDeCarga() {
    return new Promise((resolve) => {
      document.addEventListener("DOMContentLoaded", () => {
        resolve();
      });
    });
  }

  eventosDespuesDeCarga().then(() => {
    // Aquí puedes productoCar tus eventos después de que la página haya cargado
    const botonMas = document.querySelectorAll(".botonmas");
    const botonMenos = document.querySelectorAll(".btn-menos");

    const totalKeys = localStorage.length;
    // Iterar sobre todas las claves y mostrarlas
    for (let i = 0; i < totalKeys; i++) {
      let key = localStorage.key(i);
      inputValue(key);
      let datosRecuperadosJSON = localStorage.getItem(key);
      let datosRecuperados = JSON.parse(datosRecuperadosJSON);

      let recuperarPedido = {
        indice: datosRecuperados.indice,
        cantidad: datosRecuperados.cantidad,
      };
      pedido.push(recuperarPedido);
    }

    function sumarClic() {
      let productoCar = this.value;
      let cantidad = 1;

      let sumarProducto = {
        indice: productoCar,
        cantidad: cantidad,
      };

      //console.log(pedido);

      if (pedido.length === 0) {
        pedido.push(sumarProducto);
        let datosJSON = JSON.stringify(sumarProducto);
        // Guardar los datos en localStorage bajo la clave "usuario"
        localStorage.setItem(sumarProducto.indice, datosJSON);
      } else {
        const objetoEncontrado = pedido.find(
          (objeto) => objeto.indice === sumarProducto.indice
        );
        if (objetoEncontrado) {
          objetoEncontrado.cantidad = objetoEncontrado.cantidad + 1;
          //console.log('Cantidad modificada con éxito.');
          let datosRecuperadosJSON = localStorage.getItem(sumarProducto.indice);
          let datosRecuperados = JSON.parse(datosRecuperadosJSON);
          datosRecuperados.cantidad = datosRecuperados.cantidad + 1; // Nueva cantidad
          var datosActualizadosJSON = JSON.stringify(datosRecuperados);

          localStorage.setItem(sumarProducto.indice, datosActualizadosJSON);
        } else {
          pedido.push(sumarProducto);
          let datosJSON = JSON.stringify(sumarProducto);
          localStorage.setItem(sumarProducto.indice, datosJSON);
        }
        //console.log('El array no está vacío.');
      }
      inputValue(productoCar);
      //console.log(pedido);
      //alert(`¡Hiciste clic en ${productoCar} !`);
    }

    function restarClic() {
      let productoCar = this.value;
      let cantidad = 0;

      let restarProducto = {
        indice: productoCar,
        cantidad: cantidad,
      };

      if (pedido.length === 0) {
        alert("No hay productos en el carrito");
      } else {
        const objetoEncontrado = pedido.find(
          (objeto) =>
            objeto.indice === restarProducto.indice && objeto.cantidad >= 1
        );

        if (objetoEncontrado) {
          objetoEncontrado.cantidad = objetoEncontrado.cantidad - 1;

          let datosRecuperadosJSON = localStorage.getItem(
            restarProducto.indice
          );
          //console.log(datosRecuperadosJSON);
          let datosRecuperados = JSON.parse(datosRecuperadosJSON);
          datosRecuperados.cantidad = datosRecuperados.cantidad - 1; // Nueva edad
          let datosActualizadosJSON = JSON.stringify(datosRecuperados);

          localStorage.setItem(restarProducto.indice, datosActualizadosJSON);

          const borrar = pedido.findIndex(
            (objeto) =>
              objeto.indice === restarProducto.indice && objeto.cantidad === 0
          );

          if (borrar !== -1) {
            pedido.splice(borrar, 1);
            localStorage.removeItem(restarProducto.indice);
          }
          //console.log('Cantidad restada con éxito.');
        }
      }

      inputValue(productoCar);
      //console.log(pedido);
    }

    // Itera a través de los botones y agrega un evento "click" a cada uno
    botonMas.forEach((boton) => {
      boton.addEventListener("click", sumarClic);
    });

    botonMenos.forEach((boton) => {
      boton.addEventListener("click", restarClic);
    });

    function inputValue(productoCar) {
      let idInput = "cantidad" + productoCar;
      const muestCAntidad = document.getElementById(idInput);

      if (muestCAntidad != null) {
        let datosJSON = localStorage.getItem(productoCar);
        let datos = JSON.parse(datosJSON);

        //console.log(datos);
        if (datos == null) {
          muestCAntidad.value = "";
        } else {
          let cantidad = parseInt(datos.cantidad);
          if (cantidad) {
            muestCAntidad.value = cantidad;
          } else {
            muestCAntidad.value = "";
          }
        }
      }
    }

    btncarrtio.addEventListener("click", () => {
      // Obtener el número total de elementos almacenados en el localStorage
      const totalKeys = localStorage.length;

      // Iterar sobre todas las claves y mostrarlas
      for (let i = 0; i < totalKeys; i++) {
        let key = localStorage.key(i);
        let datosJSON = localStorage.getItem(key);
        let datos = JSON.parse(datosJSON);
        let cantidad = datos.cantidad;
        //console.log("Clave " + (i+1) + ": " + key);

        modificarInfoCarrito(products.lasagna, key, cantidad);
        modificarInfoCarrito(products.panzerotti, key, cantidad);
        modificarInfoCarrito(products.arepas, key, cantidad);
        modificarInfoCarrito(products.clubHouse, key, cantidad);
        modificarInfoCarrito(products.patacon, key, cantidad);
        modificarInfoCarrito(products.picadaMixta, key, cantidad);
        modificarInfoCarrito(products.platosACarta, key, cantidad);
        modificarInfoCarrito(products.bebidas, key, cantidad);
        modificarInfoCarrito(products.hamburguesas, key, cantidad);
        modificarInfoCarrito(products.perros, key, cantidad);
        modificarInfoCarrito(products.pepitos, key, cantidad);
        modificarInfoCarrito(products.salchipapas, key, cantidad);
        modificarInfoCarrito(products.mazorcada, key, cantidad);
        modificarInfoCarrito(products.pizzas, key, cantidad);
      }

      const barraTotal = document.querySelector(".barratotal");

      function valorTotalShow() {
        let contador = 0;

        if (tarjetaPedido.length !== 0) {
          barraTotal.innerHTML = `<div class="row justify-center">
                    <div class="col-8  "><strong>Total a pagar</strong></div>
                    <div class="col-3 total">Total</div>
                </div> `;

          const showTotal = document.querySelector(".total");
          tarjetaPedido.forEach((element) => {
            contador = contador + element.total;
            valorTotalPedido = contador;
            //console.log(contador);
          });
          showTotal.innerHTML = contador;
        } else {
          barraTotal.innerHTML = ``;
          contador = 0;
          valorTotalPedido = contador;
        }
      }

      //---------inicio mensaje

      const btnEnviar = document.getElementById("enviar");
      btnEnviar.addEventListener("click", () => {
        //console.log('hola');
        stringPedido = "Hola mi pedido de hoy es: ";

        tarjetaPedido.forEach((element) => {
          let stringProducto =
            "ufat" +
            element.cantidad +
            " " +
            element.name +
            " Valor: " +
            element.total +
            " ";
          stringPedido = stringPedido + stringProducto;
        });

        let stringTotal =
          "ufat ufat ufat" + " EL VALOR DEL PEDIDO ES: " + valorTotalPedido;
        stringPedido = stringPedido + stringTotal;
        //console.log(stringPedido);

        const encriptacion = (texto) => {
          return texto
            .replace(/ufat/g, "%0A")
            .replace(/ /g, "%20")
            .replace(/:/g, "%3A");
        };
        let url = "https://wa.me/";
        let numeroCel = "+573202974075?text=";
        let encriptado = encriptacion(stringPedido);
        window.location.href = url + numeroCel + encriptado;
        console.log(encriptacion(stringPedido));
        localStorage.clear();
      });
      //---------fin    mensaje

      valorTotalShow();

      //console.log(tarjetaPedido);

      const modalBody = document.querySelector(".modal-body");
      // Establece el contenido del cuerpo del modal
      imprimirTablaCarrito(tarjetaPedido, modalBody);

      const modal = new bootstrap.Modal(bodyModal);
      // Muestra el modal
      modal.show();

      //----------inicio eliminar item del carrito
      const botonDeleteIntem = document.querySelectorAll(".delete");
      botonDeleteIntem.forEach((boton) => {
        boton.addEventListener("click", eliminarItem);
      });

      function eliminarItem() {
        let itemCar = this.value;
        const borrarItem = pedido.findIndex(
          (objeto) => objeto.indice === itemCar
        );
        const borrarItem2 = tarjetaPedido.findIndex(
          (objeto) => objeto.indice === itemCar
        );

        if (borrarItem !== -1) {
          pedido.splice(borrarItem, 1);
          localStorage.removeItem(itemCar);
        }
        if (borrarItem2 !== -1) {
          tarjetaPedido.splice(borrarItem2, 1);
          localStorage.removeItem(itemCar);
        }

        modal.hide();
        inputValue(itemCar);
        modal.show();
        //console.log(itemCar);
      }
      //----------fin eliminar item del carrito
    });
    //---------inicio cierra el modal del carrito
    const modalBodys = document.querySelector(".modal-body");

    const modals = new bootstrap.Modal(bodyModal);

    bodyModal.addEventListener("hidden.bs.modal", function (event) {
      event.preventDefault();
      modals.hide();
      modalBodys.remove();
      const contenidoModal = document.querySelector(".newModal");
      contenidoModal.innerHTML = `
        <div class="modal-body" id="body-modal">
        
        </div>
        `;

      modals.hide();
    });

    //---------fin cierra el modal del carrito

    function imprimirTablaCarrito(arreglo, tabla) {
      if (arreglo.length !== 0) {
        arreglo.forEach((element) => {
          tabla.innerHTML += `<div class="container  mt-2">
                <div class="row">
                    <div class="card">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-12">
                                    <h4>${element.name}</h3>
                                    <button type="button" value="${element.indice}" class="btn-close float-end position-absolute top-0 end-0 p-2 delete" >                        
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col">Cant</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Total</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <th scope="row">${element.cantidad}</th>
                                        <td>
                                            <a data-bs-toggle="collapse" href="#${element.indice}"  role="button" aria-expanded="false" aria-controls="collapseExample" >
                                            <h6 class="negro"><span class="desplegable"><i class="bi bi-caret-down-fill"></i></span> ${element.name}</h6>
                                            </a>
                                            <div class="collapse" id="${element.indice}">
                                                <div class="card card-body">${element.descripcion}</div>
                                            </div>
                                        <td>${element.precioNum}</td>
                                        <td>${element.total}</td>
                                      </tr>
                                      
                                    </tbody>
                                  </table>
                            </div>
                        </div>
                      </div>
                </div>
            </div>`;
        });
      } else {
        tabla.innerHTML += `<div class="container  mt-2">
                    <div class="row">
                        <div class="card">
                            <h3 class="text-center">Aun no hay productos en el carrito</h3>
                        </div>
                    </div> 
                </div>`;
      }
    }

    function modificarInfoCarrito(arrayproductos, indice, cantidad) {
      arrayproductos.forEach((productoinfo) => {
        let indicePro = productoinfo.indice;

        if (indicePro == indice) {
          //const objetoEncontrado = localStorage.getItem(indicePro);
          //console.log(objetoEncontrado);
          const objetoEncontrado = tarjetaPedido.find(
            (objeto) => objeto.indice === indicePro
          );
          if (!objetoEncontrado) {
            productoinfo.cantidad = cantidad;
            productoinfo.total = productoinfo.precioNum * cantidad;
            tarjetaPedido.push(productoinfo);
            //console.log(tarjetaPedido);
          } else {
            objetoEncontrado.cantidad = cantidad;
            objetoEncontrado.total = productoinfo.precioNum * cantidad;
            //console.log(tarjetaPedido);
          }
        }
      });
    }
  });
}
