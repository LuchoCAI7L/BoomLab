const menuhamburguesa = document.querySelector('.menuhamburguesa');
const menu = document.getElementById('menu');
const cierre = document.querySelector('.cierre');

menuhamburguesa.addEventListener('click', () => {
  menu.classList.toggle('active');

});

cierre.addEventListener('click', () => {
  menu.classList.remove('active');

});

const servicios = document.getElementById('servicios');

servicios.addEventListener('click', () => {

});

function muestradata(data1){
  var titulo=document.getElementById('visible'+data1);
  var data=document.getElementById('data'+data1);

titulo.style.display='none';
data.style.display='block';
}