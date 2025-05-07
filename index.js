const express = require('express')
const bodyParser = require("body-parser")
const fs = require('fs');

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/:num", function(req, res){
    const fileContent = fs.readFileSync(`./codes/${req.params.num}.txt`, 'utf8');
    res.send(fileContent)
})

app.listen(process.env.PORT || 8000, ()=>{console.log("----------AppStarted-----------");})