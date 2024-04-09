const express = require('express')
const http = require('http')


const app = express()
const port = process.env.PORT || 5000

const myServer  = http.createServer(app)
myServer.listen(port , ()=>{    
    console.log('server connect');
})







