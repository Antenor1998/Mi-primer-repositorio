/*
5) Programa una función que invierta las palabras de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 const miFuncion = (cadena = "") => {
     let cadenainvertida = ""
     if (!cadena) return console.warn("No es una cadena");
     for(let i = cadena.length-1 ; i>=0 ;i--){
         cadenainvertida +=  cadena[i];
     }
     console.log(`La cadena invertida es ${cadenainvertida}`);
 }

 miFuncion("Hola mundo");
*/



/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 const miFuncion = (texto = "", palabra = "") => {
     let con = 0;
     if(!texto || !palabra) return console.warn("Las cadenas estan vacias");
     let arraytxt = texto.split(" ");
     for(let i = 0; i < arraytxt.length; i++) if(arraytxt[i] === palabra)con++;
     console.log(`El numero de palabras encontrada es: ${con}`);
 }
 
 miFuncion("hola mundo adios mundo", "adios");
 miFuncion("");
*/




/**
 * 7) Programa una función que valide si una palabra o frase dada,
 * es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 const miFuncion = (cadena = "") => {
     let cadenainvertida = ""
     if(!cadena) return console.warn("ingrese el texto");
     cadena = cadena.toLowerCase();
     for(let i = cadena.length-1 ; i>=0 ;i--) cadenainvertida +=  cadena[i];
     if(cadena === cadenainvertida) return true;
 }
 console.log(miFuncion("Salas"));
 */


/**
 * 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 * pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5
 */
const miFuncion = (cadena = "", expresion = "") => {
    if(!cadena || !expresion) return console.warn("ingrese el texto");
    let arryvar = cadena.replace(new RegExp(expresion,"ig"),"");
    console.log(arryvar);
}

miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
