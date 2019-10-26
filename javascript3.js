// # Ejercicio - Array 3
// 1. Escribir una función ‘filtrarPositivos’ que reciba por parámetro un array de números y devuelva cuántos de ellos son positivos.
var array = [-3,1,4,7,-20,-5];
function filtrarCantidadPositivos(array){
    var cant = 0;
    var numerosPositivos = array.filter(function(elemento){
        if(elemento > 0){
            cant++;
        }
    });
    return "Cantidad de numeros positivos en el array: " + cant; 
}
// 2. Escribir la función ‘estaEnArray’ que reciba un array y un elemento, y devuelve si el elemento está o no en el array.
// > var array = [1, 2, 3]
// > estaEnArray(array, 3) // true
// > estaEnArray(array, 4) // false
var numerosArray = [1,2,3,19];
function estaEnArray(array, elemento){
    for(var i = 0; i < array.length; i++){
        if(array[i] == elemento){
            return true;
        }  
    }
    return false;
}

array.includes(8);

function estaInArray(array, elemento){
    array.forEach(function(element){
        if(element == elemento){
            return true;
        }
    });
}

// 3. Escribir una función que reciba por parámetro un array de números y devuelva un array de tres posiciones, en la primer posición un array con los números positivos, en la segunda un array con los que son cero y en la tercera un array con los negativos. Resolverlo usando un for y un forEach.
// > var array = [-2, -1, 0, 1, 2]
// > miFuncion(array) // [[-2, -1], [0], [1, 2]]
var array = [-2, -1, 0, 1, 2]
function clasificadorElementos(array){
    var negativos = [];
    var ceros = [];
    var positivos = [];
    //var resultado = [];
    array.forEach(function(element){
        if(element < 0){
            negativos.push(element);
        }
        else if(element === 0){
            ceros.push(element);
        }
        else if(element > 0){
            positivos.push(element);
        }        
    });
    //resultado.push(negativos, ceros, positivos);
    return [negativos, ceros, positivos];    
}

// 4. Escribir una función ‘maximoEIndice’  que reciba un array como parámetro. El resultado de esta función debería ser un array de dos posiciones. En la primera posición, devuelve el valor máximo del array, y en la segunda, el índice de dicho valor.
// > var array = [-2, -1, 0, 1, 2]
// > maximoElIndice(array) // [2, 4]
function valorMaximoEIndice(array){
    var valorMayor = 0;
    var indice;
    array.forEach(function(element, i){
        if(element > valorMayor){
            valorMayor = element;
            indice = i;            
        }
    });
    return `Valor mayor: ${valorMayor}. Esta en el índice [${indice}]`;
}

// 5. Escribir una función ‘intercambiar’ que reciba un array y dos índices y devuelva el mismo array con los elementos de los índices intercambiados. NO MODIFICAR EL ARRAY ORIGINAL
// > var array = [-2, -1, 0, 1, 2]
// > intercambiar(array, [4, 2]) // [-2, -1, 2, 1, 0]
// > intercambiar(array, [1, 8]) // [-2, -1, 0, 1, 2]

function intercambiar(array, indice1, indice2){
    var i1 = array[indice1];
    var i2 = array[indice2];

    var resultado = array.map(function(element, indice){
        if(indice == indice1){
            return i2;    
        }
        else if(indice == indice2){            
            return i1;
        }            
        return array[indice];        
    });

    return "resultado: " + resultado + " array: " + array;
}


