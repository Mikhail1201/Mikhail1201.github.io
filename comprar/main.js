function toggleRespuesta(index) {
    const respuestas = document.querySelectorAll('.respuesta');
    respuestas[index].classList.toggle('visible');
}
let rangoActual = 0;
const textosEdades = [
    "El ajedrez es un excelente juego para niños de 4 a 12 años, ya que mejora su concentración, memoria y habilidades de resolución de problemas.",
    "Para adolescentes de 13 a 18 años, el ajedrez es una excelente forma de mejorar el pensamiento crítico y la toma de decisiones estratégicas.",
    "El ajedrez también es perfecto para adultos y personas mayores. Es un ejercicio mental que ayuda a mantener la mente activa, mejorando la memoria y la concentración."
];

function cambiarTexto() {
    rangoActual = (rangoActual + 1) % textosEdades.length;
    document.getElementById('texto-edades').textContent = textosEdades[rangoActual];
}