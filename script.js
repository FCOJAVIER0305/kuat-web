// ===============================
// MODAL DE CARTAS
// ===============================

// Elementos del DOM
const modal = document.getElementById("modal");
const modalImg = document.getElementById("imgModal");
const cerrar = document.querySelector(".cerrar");

// Selecciona TODAS las imágenes de cartas
const cartas = document.querySelectorAll(".carta-item img");

// Abrir carta al hacer click
cartas.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Cerrar con la X
cerrar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar haciendo click fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Cerrar con tecla ESC (pro 🔥)
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});