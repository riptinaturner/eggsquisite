const express = require("express")
const app = express()
const { v4: uuidv4 } = require("uuid")
const cors = require("cors")
require("dotenv").config(".env")
const port = 3000
const stripe = require("stripe")(process.env.STRIPE_KEY)
const path = require("path")

app.use(express.static("../dist"))
app.use(express.json())

app.use(cors({
    origin: "http://localhost:5173"
}))

app.get("/success", (req, res) => {
    res.send("Success")
})

app.get("/cancel", (req, res) => {
    res.send("Cancelled")
})

app.get('/api/payment/:id', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: req.params.id === "good-egg" ? "price_1NEwp4AbY140Jgzed5nnsx2z" : req.params.id === "cute-fried-egg" ? "price_1NEwrvAbY140JgzejwanfXti" : req.params.id === "crecced-egg" ? "price_1NEwsbAbY140Jgzeka5ozHdr" : req.params.id === "chillin-fried-egg" ? "price_1NEwtYAbY140JgzeUOIQssQc" : req.params.id === "egg" ? "price_1NEwuBAbY140JgzeL1wstFbV" : req.params.id === "fried-egg" ? "price_1NEwuuAbY140JgzeSEsFmdpL" : req.params.id === "oh" ? "price_1NEwvfAbY140JgzeIo78GXRF" : req.params.id === "egg-stack" ? "price_1NEwwQAbY140JgzeqNpIMkFA" : req.params.id === "glitz-and-glamour" ? "price_1NEwxCAbY140JgzeWQMiLuLW" : "price_1NEwyFAbY140JgzemDNJSpS8",
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/cancel`,
    })

    res.redirect(303, session.url)
})
/* 
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("../dist/index.html"))
})
 */

app.listen(port, () => {
    console.log("Running on port", port)
})