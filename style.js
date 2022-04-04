function iniciar() {
    document.getElementById("d").innerHTML = "";
    document.getElementById("carregando").innerHTML = "Sorteando..."
    setTimeout(sortear , 4000)
}


function sortear() {
    let np = 100;
    let ns = Math.round(Math.random() * np);
    document.getElementById("d").innerHTML = ns;
    document.getElementById("carregando").innerHTML = "Parabêns ao ganhador!"

}