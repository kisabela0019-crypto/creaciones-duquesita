const productos = [

{
id:1,
nombre:"Mocasin Yeli Talco",
precio:85000,
categoria:"Casual",
descripcion:"Mocasín casual elegante para mujer en tono talco.",
img:"https://i.imgur.com/vTsYIJZ.png"
},

{
id:2,
nombre:"Mocasin Yeli Marmoleado",
precio:85000,
categoria:"Casual",
descripcion:"Mocasín elegante con acabado marmoleado.",
img:"https://i.imgur.com/kO1i36G.png"
},

{
id:3,
nombre:"Mocasin Yeli Charol Negro",
precio:85000,
categoria:"Casual",
descripcion:"Mocasín charol negro elegante para oficina.",
img:"https://i.imgur.com/OeVatZY.png"
},

{
id:4,
nombre:"Mocasin Yeli Beige x Nude",
precio:85000,
categoria:"Casual",
descripcion:"Diseño minimalista elegante y cómodo.",
img:"https://i.imgur.com/E4Hx6AW.png"
},

{
id:5,
nombre:"Mocasin Yeli Negro x Miel",
precio:85000,
categoria:"Casual",
descripcion:"Combinación sofisticada negro y miel.",
img:"https://i.imgur.com/dpPHq1c.png"
},

{
id:6,
nombre:"Mocasin Lola Talco",
precio:95000,
categoria:"Deportivo",
descripcion:"Mocasín deportivo cómodo y moderno.",
img:"https://i.imgur.com/PFTdFSM.png"
},

{
id:7,
nombre:"Mocasin Lola Beige",
precio:95000,
categoria:"Deportivo",
descripcion:"Ideal para caminar y uso diario.",
img:"https://i.imgur.com/aBu2ziU.png"
},

{
id:8,
nombre:"Mocasin Lola Miel",
precio:95000,
categoria:"Deportivo",
descripcion:"Plataforma cómoda y look casual chic.",
img:"https://i.imgur.com/uMJi78I.png"
},

{
id:9,
nombre:"Mocasin Lola Negro",
precio:95000,
categoria:"Deportivo",
descripcion:"Excelente amortiguación para uso diario.",
img:"https://i.imgur.com/KwgeZab.png"
},

{
id:10,
nombre:"Mocasin Lola Negro X Miel",
precio:95000,
categoria:"Deportivo",
descripcion:"Diseño deportivo elegante y cómodo.",
img:"https://i.imgur.com/I7AGAtJ.png"
},

{
id:11,
nombre:"Mocasin Lola Perla",
precio:95000,
categoria:"Deportivo",
descripcion:"Acabado brillante sofisticado y moderno.",
img:"https://i.imgur.com/n354fh8.png"
},

{
id:12,
nombre:"Mocasin Flex Nude",
precio:110000,
categoria:"Formal",
descripcion:"Mocasín ejecutivo elegante tipo gamuza.",
img:"https://i.imgur.com/P7fFw5l.png"
},

{
id:13,
nombre:"Mocasin Flex Beige X Nude",
precio:110000,
categoria:"Formal",
descripcion:"Ideal para reuniones y oficina.",
img:"https://i.imgur.com/fto0cQO.png"
},

{
id:14,
nombre:"Mocasin Flex Miel",
precio:110000,
categoria:"Formal",
descripcion:"Formal elegante y cómodo.",
img:"https://i.imgur.com/8J41bjU.png"
},

{
id:15,
nombre:"Mocasin Flex Negro X Miel",
precio:110000,
categoria:"Formal",
descripcion:"Elegante para oficina y eventos.",
img:"https://i.imgur.com/6uQTy7C.png"
},

{
id:16,
nombre:"Mocasin Flex Cafe Oscuro",
precio:110000,
categoria:"Formal",
descripcion:"Diseño sofisticado con textura tejida.",
img:"https://i.imgur.com/u0rujSq.png"
}

];

let carrito = new Map();

const contenedorProductos =
document.getElementById("productos");

const listaCarrito =
document.getElementById("lista-carrito");

const totalCarrito =
document.getElementById("total");

const cantidadCarrito =
document.getElementById("cantidad-carrito");

function formatearPrecio(valor){

return new Intl.NumberFormat("es-CO",{

style:"currency",

currency:"COP",

minimumFractionDigits:0

}).format(valor);

}

function renderProductos(lista = productos){

contenedorProductos.innerHTML = "";

lista.forEach(p => {

contenedorProductos.innerHTML += `

<div class="producto">

<img src="${p.img}" alt="${p.nombre}">

<h3>${p.nombre}</h3>

<span class="categoria-card">
${p.categoria}
</span>

<p class="descripcion-card">
${p.descripcion}
</p>

<p class="precio">
${formatearPrecio(p.precio)}
</p>

<button onclick="agregarAlCarrito(${p.id})">
Agregar al carrito
</button>

</div>

`;

});

}

function agregarAlCarrito(id){

const producto =
productos.find(p => p.id === id);

if(carrito.has(id)){

carrito.get(id).cantidad++;

}else{

carrito.set(id,{
...producto,
cantidad:1
});

}

actualizarCarrito();

}

function actualizarCarrito(){

listaCarrito.innerHTML = "";

let total = 0;
let cantidad = 0;

carrito.forEach(item => {

total += item.precio * item.cantidad;

cantidad += item.cantidad;

listaCarrito.innerHTML += `

<li>
${item.nombre} x${item.cantidad}
</li>

`;

});

totalCarrito.textContent =
formatearPrecio(total);

cantidadCarrito.textContent =
cantidad;

}

function vaciarCarrito(){

carrito.clear();

actualizarCarrito();

}

function finalizarCompra(){

if(carrito.size === 0){

alert("Tu carrito está vacío");

return;

}

document.getElementById("modalPago").style.display =
"flex";

}

function cerrarModal(){

document.getElementById("modalPago").style.display =
"none";

}

window.onclick = function(event){

const modal =
document.getElementById("modalPago");

if(event.target === modal){

cerrarModal();

}

}

function filtrarCategoria(cat, boton){

const filtrados =
cat === "todos"

? productos

: productos.filter(
p => p.categoria === cat
);

renderProductos(filtrados);

document
.querySelectorAll(".categorias-nav button")
.forEach(btn =>
btn.classList.remove("activo")
);

boton.classList.add("activo");

}

renderProductos();