//Usando el filesystem de nodejs

// existen cuatro tipos de require
//Aqui usaremos el normall, para usar  modulos de nodejs

const fs = require('fs');
const colors = require('colors');


listarTabla= (base, limite = 10) => {
    console.log('============================'.green);
    console.log(`Tabla de multiplicar del ${base}`.blue);
    console.log('============================'.green);
    for(let i = 0; i<= limite; i++){
        console.log(`${base}*${i} = ${base*i}`);
    }
}

crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) => {
        
        if(!Number(base)) return reject(`el valor ${base} no es un número`);
        
        let data = '';
        
        for( let i = 0; i<=limite; i++){
            data += ` ${base} * ${i} = ${base*i}\n`;
        } 

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) reject(err)
        else resolve(`tabla-${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
