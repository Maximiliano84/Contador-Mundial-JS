const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const Mundial = `20 Nov 2022`;

function contador() {
    const diaMundial = new Date(Mundial);
    const diaActual = new Date();

    const totalSegundos = (diaMundial - diaActual)/ 1000;

    const calcularDias = Math.floor(totalSegundos / 3600 / 24);
    const calcularHoras = Math.floor(totalSegundos / 3600) % 24;
    const calcularMinutos = Math.floor(totalSegundos / 60) % 60;
    const calcularSegundos = Math.floor(totalSegundos % 60);

    dias.innerHTML = calcularDias;
    horas.innerHTML = calcularHoras;
    minutos.innerHTML = calcularMinutos;
    segundos.innerHTML = calcularSegundos;

    console.log(diaMundial)
    console.log(diaActual)
    console.log(calcularDias)

}

contador();

setInterval(contador, 1000);