const express = require('express')
const router = express.Router()
let responseQuery = {}
router.get('/api/:date', (req, res) => {
    let input = req.params.date
    if(input.includes('-')){
        responseQuery['unix'] = new Date(input).getTime();
    }
    res.json(responseQuery)
})

module.exports = router