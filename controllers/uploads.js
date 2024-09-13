const { response } = require('express');
const { subirArchivo } = require('../helpers/subir-archivo.js');
const path = require('path');
const fs   = require('fs');
const { v4: uuidv4 } = require('uuid');

const cargarArchivo = async(req, res = response) => {
    
    
    
    const busqueda = req.body.busqueda
    console.log(req.files);
    console.log(busqueda);

    try {
        const nombre = await subirArchivo( req.files, undefined, busqueda );
        res.json({ nombre });

    } catch (msg) {
        res.status(400).json({ msg });
    }

}

const cargarArchivoUUid = async(req, res = response) => {
    
  const busqueda = req.body.busqueda
  const nombreTemp = uuidv4() 
 
        const directorio = `./busquedas/${busqueda}/${nombreTemp}`
        try {
            if (!fs.existsSync(directorio)) {
              fs.mkdirSync(directorio); 
              res.json({
                directorio
              })
            }
          } catch (err) {
            console.error(err);
          }

}

const crearBusqueda = async(req, res = response) => {

    const nombreCarpeta = `./busquedas/${req.body.carpeta}`
    
    try {
        if (!fs.existsSync(nombreCarpeta)) {
          fs.mkdirSync(nombreCarpeta);
          res.json({
            nombreCarpeta
          })
          
        }
      } catch (err) {
        console.error(err);
      }

}

module.exports = {
    cargarArchivo,
    crearBusqueda,
    cargarArchivoUUid
}