// Funcionalidad del Modal / Lightbox para agrandar imágenes
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modalImagen");
    const modalImg = document.getElementById("imgExpandida");
    const captionText = document.getElementById("lightbox-texto");
    const cerrarBtn = document.querySelector(".cerrar-lightbox");

    // Busca automáticamente TODAS las imágenes dentro de la clase .render-card
    const imagenes = document.querySelectorAll(".render-card img");

    imagenes.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "block"; // Muestra el fondo oscuro
            modalImg.src = this.src;       // Carga la misma imagen a la que se le dio clic
            captionText.innerHTML = this.alt; // Usa el atributo 'alt' de la imagen como título
        });
    });

    // Cierra el modal si le dan clic a la 'X'
    if (cerrarBtn) {
        cerrarBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Cierra el modal si le dan clic en cualquier parte del fondo oscuro (fuera de la imagen)
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});