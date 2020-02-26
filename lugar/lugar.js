const axios = require('axios')


const getLugarLatLng = async dir => {
  // para convertir a URI entendible
  const encodedUlr = encodeURI(dir)

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
    headers: {
      'x-rapidapi-key': '5ed893c3d0mshe21ce867724cfbap144702jsn6b4175151daa',
      'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
    }
  });

  const respuesta = await instance.get()

  if (respuesta.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${dir}`)
  }

  const data = respuesta.data.Results[0]
  const direccion = data.name
  const lat = data.lat
  const lng = data.lon


  return {
    direccion,
    lat,
    lng
  }
}

module.exports = {
  getLugarLatLng
}