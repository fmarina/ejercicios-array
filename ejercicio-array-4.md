# Ejercicio - Array 4

## Matrices.

1. Escribir la función ‘generarMatriz’ que reciba por parámetro dos números: filas, columnas y devuelva una matriz o array de arrays de filas x columnas

> generarMatriz(4, 2) // [[0, 1], [0, 1], [0, 1], [0, 1]]

2. Escribir la función ‘estaEnMatriz’ que reciba una matriz y un elemento y devuelva si el elemento está o no en la matriz.

> var matriz = [[0, 1], [2, 3], [4, 5], [6, 7]]
> estaEnMatriz(matriz, 5) // true
> estaEnMatriz(matriz, 9) // false

3. .Escribir la función ‘indiceDeMatriz’ que funcione como indexOf pero en matrices, es decir devuelve un array con [ fila, columna ]

> var matriz = [[0, 1], [2, 3], [4, 5], [6, 7]]
> indiceMatriz(matriz, 5) // [2,1] resultado
> indiceMatriz(matriz, 9) // [-1,-1] resultado

4. Escribir la función ‘compararMatriz’ que reciba dos matrices y devuelva true si contienen los mismos valores o false si no.

> var matriz = [[0, 1], [2, 3], [4, 5], [6, 7]]
> compararMatriz(matriz, matriz) // true
> compararMatriz(matriz, [[ 0 ],[ 1 ]]) // false
> compararMatriz([[ 0 ],[ 1 ]], [[ 0 ],[ 1 ]]) // true
> compararMatriz(false, false) // false
