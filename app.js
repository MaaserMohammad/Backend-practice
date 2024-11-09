const express = require('express');
const app = express()
const userModel = require('./models/user')
const dbConnection = require('./config/db')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static ("public"))

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


app.get('/register', (req,res) => {
    res.render('register')
})

app.post('/register',  async (req,res) => {

    const { username, email, password } = req.body
    const newUser = await userModel.create({
        username: username,
        email: email, 
        password: password
    })


    res.send(newUser)
})


app.post('/get-form-data', (req, res) => {
    console.log(req.body)
    res.send('data recevied')
})

app.listen(3000)