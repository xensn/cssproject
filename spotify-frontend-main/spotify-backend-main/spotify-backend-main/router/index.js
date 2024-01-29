const express = require("express")
const router = express.Router()
const getToken = require('../apis/getToken')
const getResults = require("../apis/getResults")
const getArtist = require("../apis/getArtist")

router.get("/search", getToken, getResults)
router.get("/search/artist", getToken, getArtist)

module.exports = router