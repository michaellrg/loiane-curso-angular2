var minhaVar = 'minha variável';
function minhaFunc(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.1415;
var numeros = [1, 2, 3];
//Javascript
numeros.map(function (valor) { return valor * 2; });
//ES2015
numeros.map(function (valor) { return valor * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
