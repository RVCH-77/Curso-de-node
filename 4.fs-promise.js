const fs = require('node:fs/promises')

// Leer el archivo archivo.txt y guardar su contenido en la variable text
console.log("Contenido del primer texto:")
// manera sincrona para leer archivos
fs.readFile('./archivo.txt', 'utf-8').then( text =>
     console.log( "Contenido del primer texto:",text)) 

    
    

console.log( "hacer mas cosas mientras lee el archivo....")


// Leer el segundo text archivo2.txt y guardar su contenido en la variable text2
console.log("Contenido del segundo texto:")
 fs.readFile('./archivo2.txt', 'utf-8', (err, txt2) => {
    console.log(txt2)
})
