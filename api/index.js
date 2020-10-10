const express = require('express')
const app = express()


app.use('/', (req,res) => {
    res.send('Welcome to Beer API!')

})



















app.listen('3000', ()=> {
    console.log('App running on port 3000!')
})

