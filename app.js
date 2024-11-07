const express = require('express');
const app = express()

app.set("view engine", 'ejs')

app.use((req, res, next) => {
    console.log("this is middleware")
    
    const a = 5
    const b = 2

    console.log(a+b)
    return next()
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/about', (req, res) => {
    res.send('this is about page')
})

app.get('/profile', (req, res) => {
    res.send('here is the profile page')
})

app.listen(3000)