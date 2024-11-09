const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://0.0.0.0/BACKEND-PRACTICE').then(() => {
    console.log('connected to tha data base')
})

module.exports = connection