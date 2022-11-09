const express = require('express')
const router = express.Router()
let responseQuery = {}
router.get('/api/unixTime/:input', (req, res) => {
    let input = req.params.input
    if(input.includes('-')){
        responseQuery['unix'] = new Date(input).getTime();
    }
    res.json(responseQuery)
})

module.exports = router