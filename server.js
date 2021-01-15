const express = require("express")
const cors = require("cors")
const port = 8000;
const app = express();


app.use(cors())
app.use(express.json())


const menu = {
    appetizers: [
        {name: "calamari", price: 15},
        {name: "cheese bread", price: 10},
        {name: "snake bites", price: 100},
        {name: "takoyaki", price: 15},
        {name: "bang bang shrimp", price: 30}
    ],
    entrees: [
        {name: "kangaroo tacos", price: 150},
        {name: "Octopus", price: 100},
        {name: "New York Strip", price: 30},
        {name: "Filet Mignon", price: 150}
    ],
    desserts: [
        {name: "tres leches", price: 15},
        {name: "Chocolate cake shake", price: 10},
        {name: "Fried Oreos", price: 30},
        {name: "Baklava", price: 20}
    ]
}



app.get("/", (req, res) => {
    res.json({
        "greetings": "Hi there"
    })
})

app.get("/api/menu", (req, res)=>{
    res.json(menu)
})

app.get("/api/menu/appetizers", (req, res)=>{
    res.json({appetizers: menu.appetizers})
})

app.get("/api/menu/appetizers/:id", (req,res)=>{
    res.json(menu.appetizers[req.params.id-1])
})

app.post("/api/menu/appetizers", (req,res)=>{
    console.log("**********")
    console.log(req.body)
    console.log("**********")
    menu.appetizers.push(req.body)
    res.json({status: "ok, thank you for submitting new appetizer"})
})

app.put("/api/menu/appetizers/:id", (req,res)=>{
    console.log(menu.appetizers[req.params.id])
    menu.appetizers[req.params.id].name = req.body.name
    menu.appetizers[req.params.id].price = req.body.price


    res.json({status: "ok, thank you for updating!"})
})




app.listen(port, ()=> console.log(`Listening for pokemon api on port ${port}`))
