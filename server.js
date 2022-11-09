require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const { request } = require('http')
const PORT = process.env.PORT || 3000

app.use(cors(corsOptions))

app.use('/', express.static("public"))

app.use('/', require('./routes/root'))

app.use('/', require('./routes/apiInput'))

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
    
 });

