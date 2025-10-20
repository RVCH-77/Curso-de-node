// File system

 //fs es filesystem
const fs = require('node:fs') // a apartir de Node 16 , se recomienda utilizar la forma de importacion

//
const stats = fs.statSync('./archivo.txt')

console.log( 
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink() // si es un enlace simbolico
    ,stats.size, // tamaño en bytes
)
