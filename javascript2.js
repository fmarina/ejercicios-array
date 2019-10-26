// # Ejercicios - Array 2.
// 1. Definir un array de números del 1 al 20. 
// - Utilizando el método forEach, imprimir en consola sólo aquellos que sean múltiplos de 7.
// - Realizar el ejercicio 1 con un for.
// - Realizar el ejercicio 1 con un while.
function arrayMultiploDeSiete(){
    var array = [];
    var x = 0;    
    while(x < 10){
        var valor = prompt("Ingrese numero para almacenar en un arreglo");
        valor = parseInt(valor);
        array.push(valor);
        x++;
    }
    multiploDeSiete(array);
}

function multiploDeSiete(array){
    array.forEach(function(element){
        if(element % 7 === 0){
            console.log("Multiplo de siete: " + element);
        }
    });
}

// 2. Utilizando el array del ejercicio 1 implementar la función map de tal forma de obtener un arrayResultado con la raíz cuadrada de c/u de los números. Utilizar la función Math.sqrt para esto. - Math.sqrt(x)
var arreglo = [2,6,8,11,7,14,29,33];
function raizCuadrada(arreglo){
    var arregloRaizCuadrada = arreglo.map(function(elemento){
        return Math.sqrt(elemento);
    });
    return arregloRaizCuadrada;
}
// 3. Un detective recibió un código anónimo cuyo mensaje quiere descifrar. Acudió a vos por ayuda; las únicas pistas que recibió fueron: filter y typeof. ¿Podrás ayudarlo?
// Recordando typeof: typeof operando || typeof (operando)
function resolverEnigma(array) {
    return array.filter(function(codigo){
        if(typeof(codigo) == "string"){ // o return typeof(codigo) == 'string'
            return codigo;
        }
    });
}

function codEnigma(){
    var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l", 3, "a", 4, "v", 5, "e", 6];
    console.log("Enigma resuelto: " + resolverEnigma(enigma));
}

function codigoEnigma(){
    var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l", 3, "a", 4, "v", 5, "e", 6];
    var enigma2 = ["r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l", 3, "a", 4, "v", 5, "e", 6];
    var enigma3 = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5];

    console.log("Enigma resuelto: " + resolverEnigma(enigma));
    console.log("enigma2 resuelto: " + resolverEnigma(enigma2));
    console.log("enigma3 resuelto: " + resolverEnigma(enigma3));
}

// 4. Definir la función generarArbolDeNavidad que renderice el siguiente dibujo. Cada cuadrado es de 50px, y la función deberá recibir cuantas filas va a tener.

var VERDE = 'V'; //color;
function generarArbolDeNavidad(filas){
    var arbol = [];
    var fila = [];
    for(var i=0; i < filas; i++){
        fila = [];
        var ultimoColor = 'R';
        if(i%2==0){
        ultimoColor = VERDE
    }
    for(var j=0; j <= i; j++){
        if(ultimoColor === 'V'){
            ultimoColor = 'R';
        } 
        else{
            ultimoColor = 'V';
        }
        fila.push(ultimoColor);
    }
    arbol.push(fila);
    }
    return arbol;
}

function mostrarArbol(arbol){
    arbol.forEach(function(fila, i){
        var espacios = '_'.repeat(arbol.length-i-1);
        var filaAImprimir = fila.join(' ');
        console.log(espacios+filaAImprimir);
    });
}

//mostrarArbol(generarArbolDeNavidad(10));