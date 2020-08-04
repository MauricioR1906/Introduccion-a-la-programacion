const ropa = document.querySelector("#ropa")
const collares = document.querySelector("#collares")
const pecheras = document.querySelector("#pecheras")
const correas = document.querySelector("#correas")
const camas = document.querySelector("#camas")
const juguetes = document.querySelector("#juguetes")
const descuento1 = document.querySelector("#descuento1")
const descuento2 = document.querySelector("#descuento2")
const descuento3 = document.querySelector("#descuento3")
const descuento4 = document.querySelector("#descuento4")
const descuento5 = document.querySelector("#descuento5")
const descuento6 = document.querySelector("#descuento6")


ropa.addEventListener("mouseover", (event) => {
	descuento1.style.color = "red";
})
ropa.addEventListener("mouseleave", (event) => {
	descuento1.style.color = "";
})


collares.addEventListener("mouseover", (event) => {
	descuento2.style.color = "red";
})
collares.addEventListener("mouseleave", (event) => {
	descuento2.style.color = "";
})


pecheras.addEventListener("mouseover", (event) => {
	descuento3.style.color = "red";
})
pecheras.addEventListener("mouseleave", (event) => {
	descuento3.style.color = "";
	
})

correas.addEventListener("mouseover", (event) => {
	descuento4.style.color = "red";
})
correas.addEventListener("mouseleave", (event) => {
	descuento4.style.color = "";
	
})

camas.addEventListener("mouseover", (event) => {
	descuento5.style.color = "red";
})
camas.addEventListener("mouseleave", (event) => {
	descuento5.style.color = "";
	
})

juguetes.addEventListener("mouseover", (event) => {
	descuento6.style.color = "red";
})
juguetes.addEventListener("mouseleave", (event) => {
	descuento6.style.color = "";
	
})





