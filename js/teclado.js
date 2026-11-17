// Teclado de tecnologías
const nombre = document.querySelector('.tecnologias__nombre');
const uso = document.querySelector('.tecnologias__uso');
const en = document.querySelector('.tecnologias__en strong');
const teclas = document.querySelectorAll('.tecla');

function mostrar(tecla) {
  nombre.textContent = tecla.dataset.nombre;
  uso.textContent = tecla.dataset.uso;
  en.textContent = tecla.dataset.en;
}

teclas.forEach((tecla) => {
  tecla.addEventListener('mouseenter', () => mostrar(tecla));
  tecla.addEventListener('focusin', () => mostrar(tecla));
  tecla.addEventListener('click', () => {
    teclas.forEach((otra) => otra.classList.remove('activa'));
    tecla.classList.add('activa');
    mostrar(tecla);
  });
});
