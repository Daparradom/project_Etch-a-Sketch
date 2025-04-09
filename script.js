const contenedor = document.querySelector("#contenedor");
const boton = document.querySelector("#btn");

  let cantidadDivs = 16;

// funcion para limpiar la cuadricula
   function limpiarContenedor(){
    contenedor.innerHTML = ""
   }

    //funcion para crear la cudricula

    function crearCuadricula (size) {
        contenedor.style.setProperty("--size", size);

        for  (let i = 0 ; i < size * size  ; i++) {
            const newDiv = document.createElement("div");
            newDiv.classList.add ("cuadro");
        
        
            newDiv.addEventListener("mouseover", () => {
                // newDiv.style.backgroundColor = "black"; 
                newDiv.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;// podés cambiar por cualquier color
              });
        
            contenedor.appendChild(newDiv);    
          }
    }

    crearCuadricula(cantidadDivs);

  
 

 // Evento para el botón
boton.addEventListener("click", () => {
    let cuadros = parseInt(prompt("Ingrese la cantidad de cuadros por lado que desea (máximo 100):"));
  
    // Validación
    while (isNaN(cuadros) || cuadros <= 0 || cuadros > 100) {
      cuadros = parseInt(prompt("Ingrese un número válido entre 1 y 100:"));
    }
  
    limpiarContenedor();
    crearCuadricula(cuadros);
  });
