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


