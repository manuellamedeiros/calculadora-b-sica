var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var resultado = document.querySelector('#resultado');

function somar() {
    resultado.innerHTML = Number(n1.value) + Number(n2.value);
}
    function subtrair() {
    resultado.innerHTML = Number(n1.value) - Number(n2.value);
    }
    function multiplicar() {
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}
    function dividir() {
    resultado.innerHTML = Number(n1.value) / Number(n2.value);
}
    function areaQuadrado() {
    resultado.innerHTML = Number(n1.value) * 2;
}
    function areaTriangulo() {
    resultado.innerHTML = (Number(n1.value) + Number(n2.value)) / 2;
}
    function areaRetangulo() {
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
}