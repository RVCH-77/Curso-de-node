const os = require('node:os')
const { uptime } = require('node:process')

console.log("Informacion de sistema operativo: ")
console.log("----------------------------------")
console.log ("Nombre del sistema operativo: " + os.platform())
console.log("Version del sistema operativo: " + os.release())
console.log("Sistema operativo: " + os.type())
console.log("Arquitectura: " + os.arch())
console.log("Memoria libre: " + os.freemem() / 1024 / 1024 + " MB")
console.log("Memoria total: " + os.totalmem() / 1024 / 1024 + " MB")


console.log("CPUs: " + JSON.stringify(os.cpus()));


console.log("Uptime: " + uptime() / 60  / 60  + " horas")
