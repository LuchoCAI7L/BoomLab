    const menuhamburguesa = document.querySelector('.menuhamburguesa');
    const menu = document.getElementById('menu');
    const cierre = document.querySelector('.cierre');

    menuhamburguesa.addEventListener('click', () => {
      menu.classList.toggle('active');
      
    });

    cierre.addEventListener('click', () => {
      menu.classList.remove('active');
      
    });