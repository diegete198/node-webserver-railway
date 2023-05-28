require('dotenv').config();
const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT



//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido esstatico
app.use(express.static('public'))

app.get('/',  (req, res) => {
  res.render('home',{
  nombre: 'Diego Hernandez',
  titulo: 'Curso de Node'
})
})

app.get('/generic',  (req, res) => {
    res.render('generic',{
  nombre: 'Diego Hernandez',
  titulo: 'Curso de Node'
})
})

app.get('/elements',  (req, res) => {
  res.render('elements',{
  nombre: 'Diego Hernandez',
  titulo: 'Curso de Node'
})
})

app.get('*',  (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port,()  => {
  console.log(`Example app listening ar http://localhost:${port}`)

})