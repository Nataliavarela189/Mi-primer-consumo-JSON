/*consumo con archivo creado
import fs from 'fs'

fs.readFile('./data/data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo', err)
        return
    }
    try {
        const jsonData = JSON.parse(data)
        jsonData.usuario.forEach(user => {
            console.log(`ID: ${user.id}, Nombre: ${user.nombre}, Email: ${user.email}`)
        })
    } catch (err) {
      console.log('Error al parsear el JSON:', err)  
    }
})*/

//consumo con dependencia jsonfile

import jsonfile from 'jsonfile'
    
jsonfile.readFile('./data/data.json', (err, jsonData) => {
    if (err) {
        console.error('Error al leer el archivo:', err)
        return
    }
    jsonData.usuario.forEach(user => {
        console.log(`ID: ${user.id}, Nombre: ${user.nombre}, Email: ${user.email}`)
    });
})