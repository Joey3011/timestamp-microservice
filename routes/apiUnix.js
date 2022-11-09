const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/api/1668009497', (req, res) => {
    res.json({"unix":1668009497, "GMT":"Wed, November 9, 2022 11:57:04 PM GMT+08:00"});
})

module.exports = router