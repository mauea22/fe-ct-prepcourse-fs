/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.shift();
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   nuevoarray = [];
   for (let index = 0; index < array.length; index++) {
      nuevoarray[index] = array[index] + 1;
      
   }
   return nuevoarray;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let frase = palabras.join(' ');
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   let estaEnArray = array.includes(elemento);
   return estaEnArray;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let total = 0;
   arrayOfNums.forEach(element => {
      total = total + element;
   });
   return total;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let promedio = 0;
   for(let i of resultadosTest){
      promedio = promedio + i;
   }
   promedio = promedio / resultadosTest.length
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let max = 0;
   for( let i of arrayOfNums){
      if (max < i) {
         max = i;
      }
   }
   return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let multiplica = 1;
   if (arguments.length === 0) {
      return 0;
   } else if(arguments.length === 1){
      return arguments[0];
   }
   for(let i of arguments){
      multiplica = multiplica * i ;
   }

   return multiplica;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   mayores = array.filter(x => x>18);
   return mayores.length;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
         return "Es fin de semana";
         break;
      case 7:
         return "Es fin de semana";
         break;   
      default: return "Es dia laboral";
         break;
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if (num === 9) {
      return true;
   }
   let numeroTexto = num.toString();
   let textoFinal = numeroTexto.split('');
   if (textoFinal.shift() === "9" ){
      return true;
   } else {
      return false;
   }

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let contador = 0;
   for (let index = 0; index < array.length-1 ; index++) {
      
      if (array[index] === array[index+1]) {
         contador = contador + 1
      }
      
   }
   if (contador === array.length-1) {
      return true;
   } else {
      return false;
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   //result = array.filter(r => r === "Enero" && r==="Marzo" && r==="Noviembre");
   let nuevoArray = [];
   for(let mes of array){
      if(mes === "Enero" || mes ==="Marzo" || mes ==="Noviembre"){
         nuevoArray.push(mes)
      }
         
   }
   if (nuevoArray.length == 3) {
      return nuevoArray;
   } else {
      return "No se encontraron los meses pedidos";
   }


}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   tabla6 = [];
   for (let i = 0; i <= 10; i++) {
      tabla6.push(i*6);
   }

   return tabla6;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   mayoresACien = [];
   for(let item of array){
      if (item > 100){
         mayoresACien.push(item);
      }
   }
   return mayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   bucleAumentado = [];
   
   for (let i = 0; i < 10; i++) {
      
      if (i==0) {
         bucleAumentado[0] = num + 2;
      } else {
         bucleAumentado[i] = bucleAumentado[i-1] + 2;
      }

      if (bucleAumentado[i] == i) {
         return "Se interrumpió la ejecución";
         break;
      
      }
     
   }
   return bucleAumentado;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   bucleAumentado = [];
   let i = 0;

   while (i < 10) {
      
      if( i === 5){
         i++;
         continue;
      };
      num = num + 2;
      bucleAumentado.push(num);
      i++;
   }

   return bucleAumentado;
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
