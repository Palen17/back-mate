const path = require('path');
const { v4: uuidv4 } = require('uuid');

const subirArchivo = ( files, extensionesValidas = ['pdf'], carpeta = '' ) => {

    return new Promise( (resolve, reject) => {

        const { archivo } = files;
        const nombreCortado = archivo.name.split('.');
        const extension = nombreCortado[ nombreCortado.length - 1 ];
        

        console.log(nombreCortado);
        // Validar la extension
        if ( !extensionesValidas.includes( extension ) ) {
            return reject(`La extensión ${ extension } no es permitida - ${ extensionesValidas }`);
        }
        
        const nombreTemp = uuidv4() + '.' + extension;
        try {
            if (!fs.existsSync(nombreTemp)) {
              fs.mkdirSync(nombreTemp);
              res.json({
                nombreTemp
              })
              
            }
          } catch (err) {
            console.error(err);
          }
        const uploadPath = path.join( __dirname, '../busquedas/', carpeta, nombreTemp );

        archivo.mv(uploadPath, (err) => {
            if (err) {
                reject(err);
            }

            resolve( nombreTemp );
        });

    });

}



module.exports = {
    subirArchivo
}