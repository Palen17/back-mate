const { Router } = require('express');

const { validarArchivoSubir } = require('../middlewares/validar-archivo.js');
const { cargarArchivo, crearBusqueda } = require('../controllers/uploads.js');


const router = Router();


router.post( '/', validarArchivoSubir, cargarArchivo );
router.post( '/carpeta', crearBusqueda );



module.exports = router;