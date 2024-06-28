const { response } = require('express');
const { subirArchivo } = require('../helpers/subir-archivo.js');
const path = require('path');
const fs   = require('fs');

const cargarArchivo = async(req, res = response) => {

    const busqueda = req.body.busqueda

    try {
        const nombre = await subirArchivo( req.files, undefined, busqueda );
        res.json({ nombre });

    } catch (msg) {
        res.status(400).json({ msg });
    }

}

const crearBusqueda = async(req, res = response) => {

    const nombreCarpeta = `./uploads/${req.body.carpeta}`
    
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
    crearBusqueda
}