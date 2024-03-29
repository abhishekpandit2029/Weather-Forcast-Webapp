const express = require("express")
const hbs = require("hbs")
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

//public static path
const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)
 
app.use(express.static(static_path))


//routing

app.get("/", (req,res)=>{
    res.render("index.hbs")
})

app.get("/index", (req,res)=>{
    res.render("index.hbs")
})

app.listen(port, ()=>{
    console.log(`its running ... on ${port}`)
})
