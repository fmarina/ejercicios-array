// # Ejercicios - Array 1.
// 1. A partir del array [1, 2, 3, 4, 5] mostrar en la terminal la CANTIDAD de elementos
var array = [1,2,3,4,5];
console.log(array.length);
// 2. A partir del array [2, 4, 6, 8, 10] escribir una función que devuelve la SUMATORIA de todos los elementos
function sumarElementos(){
    var array = [2, 4, 6, 8, 10];
    var sumar = 0;
    for(var i = 0; i < array.length; i++){
        sumar += array[i];
    }
    return sumar;
}
var sumaTotal = sumarElementos();
// 3. Hacer un programa para pedirle al usuario un número de mes (número del 1 hasta el 12) y mostrar por la terminal el nombre de dicho número de mes. Los pasos serían:
// - 3- A) Usar un prompt para pedirle al usuario un número entre 1 y 12
// - 3- B) Crear un array con los nombres de los meses del año
// - 3- C) Mostrar por la terminal el nombre del mes correcto
function numeroMes(){
    var valorUsuario = prompt("Ingrese numero entre 1 y 12");
    var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto",                   "septiembre", "octubre", "noviembre", "diciembre"];
    if(valorUsuario >= 1 && valorUsuario <= 12){
        console.log(meses[valorUsuario-1]);
    }
    else{
        console.log("Error. Debe ingresar el numero equivalente a un mes");
    }    
}
// 4. El siguiente array [3, 8, 9, 4, 7] representa las notas de cada uno de los alumnos de un curso. Teniendo en cuenta que aprueba con 7 o más, mostrar por la terminal CUÁNTOS de ellos aprobaron
var notas = [3, 8, 9, 4, 7, 10];
function alumnosAprobados(arrayNotas){    
    var cant = 0;
    arrayNotas.forEach(function(nota){
        if(nota >= 7){
            cant++;
        }         
    });
    return `cantidad de alumnos aprobados: ${cant}`;
}

// 5. Repetir el ejercicio 4 pero permitiendo que el usuario pueda cargar (por medio de 5 prompts cada uno de los valores del array
function cargarNotas(){
    var notas = []
    for(var i = 0; i < 5; i++){
        var valorUsuario = prompt("Ingrese nota del alumno");
        notas.push(valorUsuario);
    }
    return alumnosAprobados(notas);
}
// 6. Repetir el ejercicio 4 pero pidiéndole al usuario que cargue cuántos elementos tiene el array antes.
function alumnosAprobados2(){
    var cantElementos = prompt("Ingrese cuantos elementos tendrá el array");
    var notas = new Array(cantElementos);
    var cant = 0;
    for(var i = 0; i < cantElementos; i++){
        var elementos = prompt("Ingrese nota del alumno");
        notas.push(elementos);
    }
    return alumnosAprobados(notas);
}