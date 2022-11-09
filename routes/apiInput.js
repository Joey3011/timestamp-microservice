const express = require('express')
const router = express.Router()
let responseQuery = {}

router.get('/api/', (req, res) => {
    res.json({
        unix: new Date().getTime(),
        utc: new Date().toUTCString()
    })
})

router.get('/api/:date?', (req, res) => {
    let timeStamp = req.params.date
    if(timeStamp.includes("-")){
        responseQuery['unix'] = new Date(timeStamp).getTime();
        responseQuery['utc'] = new Date(timeStamp).toUTCString();
    }else{
        if(!isNaN(new Date(timeStamp).getTime())){
            responseQuery['unix'] = new Date(timeStamp).getTime();
            responseQuery['utc'] = new Date(timeStamp).toUTCString();
        }else{
            timeStamp = parseInt(timeStamp)
            responseQuery['unix'] = new Date(timeStamp).getTime();
            responseQuery['utc'] = new Date(timeStamp).toUTCString();
        }
    }

    if(!responseQuery['unix'] || !responseQuery['utc']){
        res.json({ error : "Invalid Date" })
    }
    res.json(responseQuery)
})


module.exports = router