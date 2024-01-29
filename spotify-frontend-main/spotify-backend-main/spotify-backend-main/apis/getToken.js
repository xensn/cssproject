const axios = require('axios');

const client_id = "1d88483aa0b74e5b8984a4e1c7329b2b"
const client_secret = "7406daf4daa24ac4970a37d2adacee94"
const url = 'https://accounts.spotify.com/api/token';

const getToken = (req, res, next) => {
    let query = req?.query?.query
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded', // Assuming the content type is form-urlencoded
    };
    const data = {
        grant_type: 'client_credentials',
        client_id,
        client_secret,
    };
    try {
        axios.post(url, data, { headers })
            .then((response) => {
                req.access_token = response?.data?.access_token
                req.search = query
                next()
            })
            .catch((error) => {
                res.status(403).send({ error: error })
                console.error('Error:', error.message);
            });
    } catch (e) {
        console.log('error', e)
        res.status(403).send({ error: e })
    }
}

module.exports = getToken