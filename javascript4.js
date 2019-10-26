// # Ejercicio - Array 4 // ## Matrices.
// 1. Escribir la función ‘generarMatriz’ que reciba por parámetro dos números: filas, columnas y devuelva una matriz o array de arrays de filas x columnas
// > generarMatriz(4, 2) // [[0, 1], [0, 1], [0, 1], [0, 1]]
function generarMatriz(filas, columnas){
    var matrizFila = [];
    var matrizColumna = [];
    for(var i = 0; i < columnas; i++){
        matrizColumna.push(i);
    }    
    for(var i = 0; i < filas; i++){
        matrizFila.push(matrizColumna);
    }
    return matrizFila;
}
// 2. Escribir la función ‘estaEnMatriz’ que reciba una matriz y un elemento y devuelva si el elemento está o no en la matriz.
// > var matriz = [[0, 1], [2, 3], [4, 5], [6, 7]]
// > estaEnMatriz(matriz, 5) // true
// > estaEnMatriz(matriz, 9) // false
function estaEnMatriz(matriz, elemento){
    for(var i = 0; i < matriz.length; i++){
        for(var j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] === elemento){
                return true;
            }            
        }
    }
    return false;
}

function estaEnMatrizDos(matriz, elemento){
    matriz.forEach(function(element){
        element.forEach(function(element){
            if(element === elemento){
                return true;
            }
        });
    });
}

//indexof devuelve el indice de una matriz si lo encuentra. Si no lo encuentra devuelve -1.
//retorna el primer indice encontrado.

// 3. .Escribir la función ‘indiceDeMatriz’ que funcione como indexOf pero en matrices, es decir devuelve un array con [ fila, columna ]
// > var matriz = [[0, 1], [2, 3], [4, 5], [6, 7]]
// > indiceMatriz(matriz, 5) // [2,1] resultado: fila 2 columna 1.
// > indiceMatriz(matriz, 9) // [-1,-1] resultado
function indiceDeMatriz(matriz, elemento){
    for(var i = 0; i < matriz.length; i++){
        for(var j = 0; j < matriz[i].length; j++){
            if(matriz[i][j] == elemento){
                return [i, j];
            }
        }
    }
}
//PREGUNTAR PORQUE NO FUNCIONA EL RETURN SI SE ESTA CUMPLIENDO LA CONDICION
function indexMatriz(m, e){
    m.forEach(function(element1, index1){
        element1.forEach(function(element2, index2){
            if(element2 == e){
                console.log(`[${index1}, ${index2}]`);
                return [index1, index2];
            }
        });
    });
}

// 4. Escribir la función ‘compararMatriz’ que reciba dos matrices y devuelva true si contienen los mismos valores o false si no.
// > var matriz = [[0, 1], [2, 3], [4, 5], [6, 7]]
// > compararMatriz(matriz, matriz) // true
// > compararMatriz(matriz, [[ 0 ],[ 1 ]]) // false
// > compararMatriz([[ 0 ],[ 1 ]], [[ 0 ],[ 1 ]]) // true
// > compararMatriz(false, false) // false
function compararMatriz(m1, m2){
    var matriz1 = m1.toString();
    var matriz2 = m2.toString();
    if(matriz1 == matriz2){
        return true;
    }
    else{
        return false;
    }
}

function compararMatrizDos(m1, m2){
    if(m1.length == m2.length){
        for(var i = 0; i < m1.length; i++){
            for(var j = 0; j < m1.length; j++){                
                if(m1[i][j] !== m2[i][j]){
                    return false;                    
                }
            }
        }
        return true;
    }
    else{
        return false;
    }    
}

