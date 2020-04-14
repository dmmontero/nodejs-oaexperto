const axios = require('axios');

const getClima = async(_lat, _lon) => {

    const latitude = encodeURI(_lat);
    const longitude = encodeURI(_lon);

    const req_args = {
        params: {
            lat: latitude,
            lon: longitude,
            appid: 'c2fd7091c9d6ef264298ab57955afc37',
            units: 'metric'
        }
    };

    const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather', req_args);

    return resp;

}

module.exports = {
    getClima
}