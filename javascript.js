let quiensomo= "Dacrearte se enfoca en las artes visuales, es algo que me apasiona bastante y me emociona la idea de poder mostrarles lo que más me gusta hacer, y espero que lo disfruten tanto como yo! Las artes visuales es un término que engloba tantas técnicas y recursos diferentes, que incluye todo aquel arte que pueda ser percibido mediante la vista. Es decir, todo aquello que requiere de la atención del espectador para percibir a través de la mirada los detalles que componen la obra. Ya sean manualidades, cuadros, artes digitales, caligrafía y más! es a lo que nos dedicamos.";

let pago="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi reprehenderit explicabo beatae amet itaque laborum neque, impedit, illo ea, voluptate magni. Voluptatum quos placeat itaque fuga necessitatibus natus aliquid pariatur molestiae laudantium labore, tenetur doloremque recusandae. Fugit sapiente consequatur nihil reprehenderit, beatae, minus tempora excepturi error eligendi animi inventore. Eveniet repellendus quis quia dicta maiores perferendis! Praesentium hic officia recusandae quibusdam saepe itaque, error molestias doloribus, animi fugiat sequi blanditiis?";

let acty="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi libero porro iusto magnam, quod dolorum ipsa vitae minus culpa itaque? Sapiente corrupti delectus labore vel magni, doloremque incidunt, distinctio sunt id commodi nesciunt laborum similique nostrum deserunt, placeat nemo excepturi! Accusantium nostrum inventore illo praesentium ipsum magni deleniti officia, pariatur quisquam voluptatibus fugiat quod assumenda eum veniam minima dolor facere enim maiores, atque ut recusandae similique possimus vitae! Nulla dolores quos quaerat numquam vero ullam fugiat, inventore, ab corporis soluta officia omnis dicta cum molestias quibusdam reiciendis? Natus a explicabo rem exercitationem quisquam nulla necessitatibus sunt, culpa sit incidunt laudantium.";

function quienesSomos(){
    var camff=document.getElementById("textoinicio");
    camff.innerHTML="<p>"+quiensomo+ "</p>";
    console.log(camff)
}
function formapago(){
    var serer=document.getElementById("textoinicio");
    serer.innerHTML="<p>"+pago+ "</p>";
    console.log(serer)
}
function actualizar(){
    var s=document.getElementById("textoinicio");
    s.innerHTML="<p>"+acty+ "</p>";
    console.log(camff)
}

function precioCuadro(){
    cash=document.getElementById("preciocuad");
    num= prompt("Cuantos cuadros desea");
    tamaño=prompt("De que tamaño lo deseas, escoge una de las siguientes opciones: a) 594 x 841mm, b) 420 x 594 mm, c) 297 x 420 mm o d) 210 x 297 mm ");
    switch(tamaño){
        case "a":
            alert("El total a pagar serían: "+num*10+"$");
            break;
        case "b":
            alert("El total a pagar serían: "+num*15+"$");
            break;
        case "c":
            alert("El total a pagar serían: "+num*20+"$");
            break;
        case "d":
            alert("El total a pagar serían: "+num*25+"$");
            break;
        default:
            alert("Por favor, escoja bien una de las opciones (a, b, c o d).");
    }
    }
function precioTaza(){
    cash=document.getElementById("preciotaz");
    num= prompt("Cuantas tazas desea");
    
    alert("El total a pagar serían: "+num*20);
    }
function precioPersonalizados(){
    alert("Para este producto, por favor contactarnos al Instagram para mayor información.")
    
    }



function contactus(){
    ModalContactus = document.querySelector("#modal-contactanos");
    ModalContactus.className = "show_modal";
   }
   
   
   function closecontactus(){
    ModalContactus = document.querySelector("#modal-contactanos");
    ModalContactus.className = "closemodal";
   } 
