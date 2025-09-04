const menuhamburguesa = document.querySelector('.menuhamburguesa');
const menu = document.getElementById('menu');
const cierre = document.querySelector('.cierre');

menuhamburguesa.addEventListener('click', () => {
  menu.classList.toggle('active');
  
});

cierre.addEventListener('click', () => {
  menu.classList.remove('active');
  
});



function muestra(num){
    var elemento = document.getElementById("tarjeta"+num);
        elemento.classList.add("slide-in-top");
    var btnO = document.getElementById("btnO"+num);
    btnO.style.display = "block";
    var btnM = document.getElementById("btnM"+num);
    btnM.style.display = "none";
}
function oculta(num){
    var elemento = document.getElementById("tarjeta"+num);
        elemento.classList.remove("slide-in-top");
        var btnO = document.getElementById("btnO"+num);
        btnO.style.display = "none";
        var btnM = document.getElementById("btnM"+num);
        btnM.style.display = "block";
}