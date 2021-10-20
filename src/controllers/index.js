const { Router } = require("express");
const ApiRouter = require("./api")

const router = Router()

router.get("/", (req, res) => {
    res.send("welcome to Movie-Booking BACKEND!!")
})

router.use("/api", ApiRouter)

module.exports = router