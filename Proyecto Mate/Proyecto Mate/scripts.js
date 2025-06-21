document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DEL LIGHTBOX ---

    // 1. Seleccionar todos los elementos necesarios del DOM
    const lightboxContainer = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const galleryImages = document.querySelectorAll('.grid-item img');
    const lightboxCloseButton = document.querySelector('.lightbox-close');

    // 2. Añadir un 'click listener' a cada imagen de la galería
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            // CORRECCIÓN: AÑADE la clase 'visible' para mostrar el lightbox
            lightboxContainer.classList.add('visible');
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt; // Copia el texto alternativo también
        });
    });

    // 3. Función para cerrar el lightbox
    function closeLightbox() {
        // CORRECCIÓN: QUITA la clase 'visible' para ocultarlo
        lightboxContainer.classList.remove('visible');
    }

    // 4. Añadir 'click listener' al botón de cerrar
    lightboxCloseButton.addEventListener('click', closeLightbox);

    // 5. (Opcional pero recomendado) Cerrar el lightbox si se hace clic en el fondo oscuro
    lightboxContainer.addEventListener('click', (event) => {
        // Si el elemento clickeado es el contenedor mismo (el fondo) y no la imagen
        if (event.target === lightboxContainer) {
            closeLightbox();
        }
    });

    // 6. (Opcional) Cerrar el lightbox con la tecla "Escape"
    document.addEventListener('keydown', (event) => {
        // Si el lightbox es visible Y la tecla presionada es Escape
        if (lightboxContainer.classList.contains('visible') && event.key === 'Escape') {
            closeLightbox();
        }
    });

    // --- LÓGICA DEL FORMULARIO (Ejemplo Básico) ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previene que la página se recargue
        alert('¡Gracias por tu mensaje! (Esta es una demo, el formulario no envía emails aún).');
        contactForm.reset(); // Limpia el formulario
    });
});