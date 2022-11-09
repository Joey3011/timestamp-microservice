require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 3000

app.use(cors(corsOptions))

app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/root'))

app.use('/', require('./routes/apiUnix'))

app.use('/', require('./routes/apiDate'))


app.all('*', (req, res) => {
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }else{
        res.send({ message: '404 Not Found' })
    }
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))