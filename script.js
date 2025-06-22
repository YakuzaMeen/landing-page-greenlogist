// Función para cambiar el idioma de la página
function changeLanguage(lang) {
    // Selecciona todos los elementos que tienen atributos data-es o data-en
    const elements = document.querySelectorAll('[data-es], [data-en]');

    elements.forEach(el => {
        // Actualiza el texto interno del elemento
        el.innerText = el.getAttribute(`data-${lang}`);

        // Si el elemento es un input o textarea y tiene un placeholder, actualízalo
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            const placeholderAttr = el.getAttribute(`data-${lang}-placeholder`);
            if (placeholderAttr) {
                el.placeholder = placeholderAttr;
            }
        }
    });

    // Guarda la preferencia de idioma en el almacenamiento local del navegador
    localStorage.setItem('preferredLanguage', lang);
}

// Escucha el evento 'DOMContentLoaded', que se dispara cuando el HTML ha sido completamente cargado y parseado.
document.addEventListener('DOMContentLoaded', () => {
    // Intenta recuperar el idioma preferido del usuario desde localStorage
    const savedLanguage = localStorage.getItem('preferredLanguage');

    if (savedLanguage) {
        // Si se encontró un idioma guardado, aplícalo
        changeLanguage(savedLanguage);
    } else {
        // Si no hay un idioma guardado, establece 'es' (español) como el idioma por defecto
        changeLanguage('es');
    }

    // ------------- Animaciones al hacer scroll (Fade-in) -------------
    const observerOptions = {
        root: null, // El viewport es el elemento raíz
        rootMargin: '0px',
        threshold: 0.1 // El 10% del elemento debe ser visible para activar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target); // Detener la observación una vez que es visible
            }
        });
    }, observerOptions);

    // Selecciona los elementos a los que se aplicará la animación 'fade-in'
    // Incluye las secciones, las tarjetas (feature, plan), los formularios y las imágenes principales.
    document.querySelectorAll('section:not(#inicio), .feature, .plan, form, .about-image, .be-greenlogist-image, .feature-img').forEach(element => {
        element.classList.add('fade-in'); // Añade la clase inicial para hacerlos invisibles
        observer.observe(element); // Empieza a observar estos elementos
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.classList.toggle('active');
    });
});

    function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}