const oficios = ['paginas web', 'bots con IA', 'soporte tecnico remoto'];
const texto = document.querySelector('#oficio');
let cual = 0;
let letras = 0; 
let borrando = false;

function escribir() {
    const palabra = oficios[cual];
    if (borrando) { 
        letras = letras - 1;}
        else { letras = letras + 1;}
        texto.textContent = palabra.slice(0, letras); 

        let espera = borrando ? 45 : 90;
        if (!borrando && letras === palabra.length) {
            borrando = true;
            espera = 1600;
        } else if (borrando && letras === 0) { 
            borrando = false; 
            cual = (cual + 1) % oficios.length;
            espera = 400;
        }
setTimeout(escribir, espera);
    }
    escribir();

