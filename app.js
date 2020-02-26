const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
  descripcion: {
    alias: 'd',
    desc: 'Direccion de la ciudad a buscar',
    demand: true
  }
}).argv;

// lugar.getLugarLatLng(argv.descripcion)
//       .then(console.log)


// clima.getClima(40.750000,-74.000000).then(console.log).catch(console.log)

const getInfo = async (direccion) => {

  try {
    const coords = await lugar.getLugarLatLng(direccion)
    const temp = await clima.getClima(coords.lat, coords.lng)
    return `El clima de ${direccion} es de ${temp}`
  } catch (error) {
    return `No se pudo determinar el clima de ${direccion}`
  }


}

getInfo(argv.descripcion)
  .then(console.log)
  .catch(console.log)