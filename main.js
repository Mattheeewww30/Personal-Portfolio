const currentLocation = window.location.href;

// Obtener todos los enlaces del menú de navegación
const menuItems = document.querySelectorAll('nav a');

// Recorrer todos los enlaces para asignar la clase "active" al que coincida con la URL actual
menuItems.forEach(item => {
    if(item.href === currentLocation){
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
});


const navToggle = document.querySelector(".menu-hamburguesa");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});


