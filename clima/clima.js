const axios = require('axios')
const appid = '5ca9a8f54d124479df87bbf9b20908de'

const getClima = async (lat, lng) =>{
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=metric`)

  return resp.data.main.temp
}

module.exports = {
  getClima
}