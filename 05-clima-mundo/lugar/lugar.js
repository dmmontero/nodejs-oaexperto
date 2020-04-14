const axios = require('axios');

const getLugarLatLng = async(_direccion) => {

    const encodedUrl = encodeURI(_direccion);

    const req_args = {
        params: {
            location: encodedUrl
        }
    };

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php`,
        headers: {
            'x-rapidapi-key': 'c7425210a4mshc6b63237d32788cp10b2f5jsn574521804784'
        }
    });

    const resp = await instance.get('', req_args);

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la direccion ${_direccion}`);
    }

    const data = resp.data.Results[0];

    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}