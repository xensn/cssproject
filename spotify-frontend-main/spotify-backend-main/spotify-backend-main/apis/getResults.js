const { default: axios } = require("axios")

const getResults = (req, res) => {
    try {
        let query = req.search
        axios.get('https://api.spotify.com/v1/search', {
            params: {
                q: query,
                type: 'track'
            },
            headers: {
                'Authorization': `Bearer ${req.access_token}`,
            },
        }).then(result => {
            res.status(200).send(result.data)
        })
    } catch (e) {
        res.status(403).send({ error: e })
    }
}

module.exports = getResults