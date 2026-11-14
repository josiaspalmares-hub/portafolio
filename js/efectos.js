const carga = document.querySelector('.carga');
const brillo = document.querySelector('.brillo');
window.addEventListener('load', () => {
setTimeout(() => carga.classList.add('oculta'), 400);});
 window.addEventListener('mousemove', (evento) => {
brillo.style.transform = `translate(${evento.clientX}px, ${evento.clientY}px)`;
});