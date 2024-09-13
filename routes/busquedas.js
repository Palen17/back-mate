const { Router } = require('express');

const { validarArchivoSubir } = require('../middlewares/validar-archivo.js');
const { cargarArchivo, crearBusqueda, cargarArchivoUUid } = require('../controllers/uploads.js');


const router = Router();


router.post( '/', validarArchivoSubir, cargarArchivo );
router.post( '/carpeta', crearBusqueda );
router.post( '/uuid', cargarArchivoUUid );



module.exports = router;