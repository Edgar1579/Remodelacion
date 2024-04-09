// Variable para controlar el estado del contraste
var contrastActivated = false;

function changeContrast() {
    var body = document.body;

    // Si el contraste está desactivado, activarlo
    if (!contrastActivated) {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        // Cambiar el estado del contraste a activado
        contrastActivated = true;
    } else {
        // Si el contraste está activado, desactivarlo y restaurar los estilos originales
        body.style.backgroundColor = '';
        body.style.color = '';
        // Cambiar el estado del contraste a desactivado
        contrastActivated = false;
    }
}

function increaseFontSize() {
    // Obtén el elemento cuyo tamaño de fuente deseas cambiar
    var body = document.body;
    // Obtén el tamaño de fuente actual y conviértelo en un número
    var currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
    // Aumenta el tamaño de fuente en 1 píxel (o ajusta el valor según tu preferencia)
    var newFontSize = currentFontSize + 1;
    // Establece el nuevo tamaño de fuente
    body.style.fontSize = newFontSize + "px";
}
function decreaseFontSize() {
    // Obtén el elemento cuyo tamaño de fuente deseas cambiar
    var body = document.body;
    // Obtén el tamaño de fuente actual y conviértelo en un número
    var currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
    // Disminuye el tamaño de fuente en 1 píxel (o ajusta el valor según tu preferencia)
    var newFontSize = currentFontSize - 1;
    // Establece el nuevo tamaño de fuente, asegurándote de que no sea menor que 0
    body.style.fontSize = Math.max(newFontSize, 0) + "px";
}
document.addEventListener("DOMContentLoaded", function() {
    var linkToTop = document.querySelector('a[href="#top"]');
    if (linkToTop) {
        linkToTop.addEventListener("click", function(event) {
            event.preventDefault();
            var topElement = document.getElementById("top");
            if (topElement) {
                topElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var linkToBottom = document.querySelector('a[href="#bottom"]');
    if (linkToBottom) {
        linkToBottom.addEventListener("click", function(event) {
            event.preventDefault();
            var bottomElement = document.getElementById("bottom");
            if (bottomElement) {
                bottomElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});




