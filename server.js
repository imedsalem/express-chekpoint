const express=require('express')
var path = require('path');
const timeAuth=require("./middlewares/time")
const app=express();

app.set('view engine', 'ejs');
app.use(timeAuth)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res, next) {
    res.render('home.ejs');
})

app.get("/about", (req, res) => {
    res.render('about.ejs')
})

app.get("/contact", (req, res) => {
    res.render('contact.ejs')
})

app.get("/portfolio", (req, res) => {
    res.render('portfolio.ejs')
})

app.get("/service", (req, res) => {
    res.render('service.ejs')
})

const port =process.env.PORT||5000
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running at port ${port}`)
})