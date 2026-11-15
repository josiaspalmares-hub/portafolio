// Teclado de tecnologías
const nombre = document.querySelector('.tecnologias__nombre');
const teclas = document.querySelectorAll('.tecla');

teclas.forEach((tecla) => {
  tecla.addEventListener('mouseenter', () => {
    nombre.textContent = tecla.dataset.nombre;
  });
  tecla.addEventListener('click', () => {
    teclas.forEach((otra) => otra.classList.remove('activa'));
    tecla.classList.add('activa');
    nombre.textContent = tecla.dataset.nombre;
  });
});
