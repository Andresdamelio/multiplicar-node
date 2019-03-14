
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ){
    case 'listar':
    listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then( resp => {
            console.log('Archivo creado: ', colors.green(resp));
            console.log(`Archivo  ${colors.green(resp)} creado con éxito`);
        })
        .catch( error => {
            console.log(error);
        })
        break;
    default:
        console.log("comando no reconocido");    
}