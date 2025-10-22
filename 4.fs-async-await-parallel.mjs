
const { readFile } = require('node:fs/promises');

// implements funtion for await

// IIFE - Immediately Invoked Function Expression
(async() =>{// Leer el archivo archivo.txt y guardar su contenido en la variable text
console.log("Contenido del primer texto:")
const text = await readFile('./archivo.txt', 'utf-8') // ejecuatas este callback cuando se termine de leer el archivo
console.log(text)

console.log( "hacer mas cosas mientras lee el archivo....")
// Leer el segundo text archivo2.txt y guardar su contenido en la variable text2
console.log("Contenido del segundo texto:")
const text2 = await readFile('./archivo2.txt', 'utf-8') // ejecuatas este callback cuando se termine de leer el archivo
    console.log(text2)}
)()

