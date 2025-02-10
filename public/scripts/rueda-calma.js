const rueda = document.getElementById('rueda');
const girarBtn = document.getElementById('girar-btn');
const resultado = document.getElementById('resultado');

const opciones = [
  "Hacer un ejercicio de respiración",
  "Hacer una postura de yoga",
  "Hablar con alguien",
  "Hacer un dibujo",
  "Llorar",
  "Utilizar un juguete sensorial",
  "Retirarme",
  "Contar hasta 10",
  "Parar, pensar, actuar"
];

girarBtn.addEventListener('click', () => {
  // Deshabilitar el botón mientras gira
  girarBtn.disabled = true;

  // Generar un ángulo aleatorio para la rotación
  const anguloAleatorio = Math.floor(Math.random() * 3600) + 360; // Mínimo 1 vuelta completa
  rueda.style.transition = 'transform 3s ease-out';
  rueda.style.transform = `rotate(${anguloAleatorio}deg)`;

  // Calcular la opción seleccionada
  setTimeout(() => {
    const anguloFinal = anguloAleatorio % 360;
    const indice = Math.floor(anguloFinal / 40); // 360° / 9 opciones = 40° por opción
    const opcionSeleccionada = opciones[indice];

    resultado.textContent = `¡Intenta la siguiente opción: ${opcionSeleccionada}!`;
    girarBtn.disabled = false; // Habilitar el botón nuevamente
  }, 3000); // Esperar 3 segundos (duración de la animación)
});